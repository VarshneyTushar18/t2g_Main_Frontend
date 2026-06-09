"use client";

import { useEffect, useRef } from "react";

const API = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
const DEFAULT_AGENT_ID = "agent_0901k7egwwhhejatq2wv0gf0k1ax";

function extractConversationId(detail) {
  if (!detail) return null;
  return (
    detail.conversation_id ??
    detail.conversationId ??
    detail.conversation_initiation_metadata_event?.conversation_id ??
    null
  );
}

async function notifyConversationEnded(conversationId, agentId) {
  if (!conversationId) return;

  try {
    const res = await fetch(`${API}/api/elevenlabs/fallback/notify-ended`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ conversationId, agentId }),
    });

    if (!res.ok) {
      console.warn(
        "[elevenlabs-fallback] notify-ended failed:",
        res.status,
        await res.text(),
      );
    }
  } catch (err) {
    console.warn("[elevenlabs-fallback] notify-ended error:", err.message);
  }
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

      const onStarted = (event) => {
        const id = extractConversationId(event.detail);
        if (id) {
          conversationIdRef.current = id;
        }
      };

      const onEnded = () => {
        const conversationId = conversationIdRef.current;
        notifyConversationEnded(conversationId, agentIdRef.current);
        conversationIdRef.current = null;
      };

      widget.addEventListener("conversationStarted", onStarted);
      widget.addEventListener("conversationEnded", onEnded);
      boundWidgetRef.current = widget;

      return () => {
        widget.removeEventListener("conversationStarted", onStarted);
        widget.removeEventListener("conversationEnded", onEnded);
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
