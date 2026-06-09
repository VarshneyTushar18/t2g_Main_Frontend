"use client";

import { useEffect, useRef } from "react";

const API = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
const DEFAULT_AGENT_ID = "agent_0901k7egwwhhejatq2wv0gf0k1ax";
const WIDGET_CALL_EVENT = "elevenlabs-convai:call";

function extractConversationId(source) {
  if (!source) return null;

  if (typeof source === "string" && source.startsWith("conv_")) {
    return source;
  }

  return (
    source.conversationId ??
    source.conversation_id ??
    source.conversation_initiation_metadata_event?.conversation_id ??
    null
  );
}

async function notifyConversationEnded(conversationId, agentId) {
  if (!conversationId) return;

  try {
    await fetch(`${API}/api/elevenlabs/fallback/notify-ended`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ conversationId, agentId }),
    });
  } catch {
    // Fail silently — no client-side logging (privacy).
  }
}

function chainCallback(existing, handler) {
  if (typeof existing !== "function") return handler;
  return (...args) => {
    handler(...args);
    existing(...args);
  };
}

function hookWidgetSessionCallbacks(widget, conversationIdRef, agentIdRef) {
  const onCall = (event) => {
    const config = event?.detail?.config;
    if (!config || typeof config !== "object") return;

    config.onConnect = chainCallback(config.onConnect, (props) => {
      const id = extractConversationId(props);
      if (id) {
        conversationIdRef.current = id;
      }
    });

    config.onConversationMetadata = chainCallback(
      config.onConversationMetadata,
      (metadata) => {
        const id = extractConversationId(metadata);
        if (id) {
          conversationIdRef.current = id;
        }
      },
    );

    config.onDisconnect = chainCallback(config.onDisconnect, () => {
      const conversationId = conversationIdRef.current;
      notifyConversationEnded(conversationId, agentIdRef.current);
      conversationIdRef.current = null;
    });
  };

  widget.addEventListener(WIDGET_CALL_EVENT, onCall);
  return () => widget.removeEventListener(WIDGET_CALL_EVENT, onCall);
}

export default function ElevenLabsTranscriptNotify() {
  const conversationIdRef = useRef(null);
  const agentIdRef = useRef(
    process.env.NEXT_PUBLIC_ELEVENLABS_AGENT_ID || DEFAULT_AGENT_ID,
  );
  const boundWidgetRef = useRef(null);

  useEffect(() => {
    const bindWidget = (widget) => {
      if (!widget || boundWidgetRef.current === widget) return;

      const agentFromDom = widget.getAttribute("agent-id");
      if (agentFromDom) {
        agentIdRef.current = agentFromDom;
      }

      const unhookCall = hookWidgetSessionCallbacks(
        widget,
        conversationIdRef,
        agentIdRef,
      );

      boundWidgetRef.current = widget;

      return () => {
        unhookCall();
        if (boundWidgetRef.current === widget) {
          boundWidgetRef.current = null;
        }
      };
    };

    const existing = document.querySelector("elevenlabs-convai");
    let cleanup = bindWidget(existing);

    const observer = new MutationObserver(() => {
      const widget = document.querySelector("elevenlabs-convai");
      if (widget && widget !== boundWidgetRef.current) {
        cleanup?.();
        cleanup = bindWidget(widget);
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      cleanup?.();
      observer.disconnect();
    };
  }, []);

  return null;
}
