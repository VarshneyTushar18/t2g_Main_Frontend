
//navbar toggle icon
function navbar_toggler() {
    $('.navbar-toggler[data-toggle=collapse]').click(function () {
        if ($(".navbar-toggler[data-bs-toggle=collapse] i").hasClass('fa-bars')) {
        } else {
            $(".navbar-toggler[data-bs-toggle=collapse] i").removeClass("fa-times");
        }
    });
}
navbar_toggler();

// navbar clone in mobile device
function navClone() {
    $('.js-clone-nav').each(function () {
        var $this = $(this);
        $this.clone().attr('class', 'navbar-nav ml-auto').appendTo('.d2c_mobile_view_body');
    });

    $('.d2c_mobile_view .nav-link').click(function () {
        $(".nav-link").removeClass("active");
        $('.d2c_mobile_view').removeClass('show');
        $(this).toggleClass('active');
    });
}
navClone();


$(window).on("scroll", function() {
    if ($(this).scrollTop() > 50) {
        $("header").addClass("scrolled");
    } else {
        $("header").removeClass("scrolled");
    }
});

// partner silder js
$('.d2c_partner_slider').slick({
    dots: false,
    arrows: false,
    infinite: true,
    autoplay:true,
    speed: 2000,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
});

// team silder js
$('.d2c_team_slider').slick({
  centerMode: true,
  centerPadding: '0px',
  dots: true,
  arrows: false,
  infinite: true,
  autoplay:true,
  speed: 2000,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 3,
        centerPadding: '24px',
      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 667,
      settings: {
        slidesToShow: 1,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        centerPadding: '0px',
      }
    }
  ]
});

// js for fancybox slide & button

function fancybox() {
  $('[data-fancybox]').fancybox({
      protect: true,
      buttons: [
          "fullScreen",
          "thumbs",
          "share",
          "slideShow",
          "close"
      ],
      image: {
          preload: false
      },
  });
}
fancybox();

// form validation js
(function () {
  'use strict'

  var forms = document.querySelectorAll('.needs-validation')

  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})();

// testimonial silder js
$('.testimonial_slider').slick({
  centerMode: true,
  centerPadding: '0px',
  dots: true,
  arrows: false,
  infinite: true,
  autoplay:true,
  speed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 1,
      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 1,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
});

// Preloader JS
window.addEventListener('load', function() {
  var preloader = document.querySelector('.preloader');
  preloader.classList.add('hide');
});

// ScrollBtn JS
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
  var scrollBtn = document.getElementById("scrollBtn");
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      scrollBtn.classList.add("show");
  } else {
      scrollBtn.classList.remove("show");
  }
}



  const tabs = document.querySelectorAll(".tab");
  const panes = document.querySelectorAll(".tab-pane");

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      panes.forEach(p => p.classList.remove("active"));

      tab.classList.add("active");
      panes[index].classList.add("active");
    });
  });

document.querySelectorAll('.profile-avatar').forEach((el, i) => {
    const name = el.getAttribute('data-name').trim().split(' ');
    
    let initials = name[0].charAt(0);
    if (name.length > 1) {
        initials += name[name.length - 1].charAt(0);
    }

    el.innerText = initials.toUpperCase();

    const colors = ['#ff6b6b','#4dabf7','#51cf66','#f59f00','#845ef7'];
    el.style.background = colors[i % colors.length];
});

// Template Name: {{Tech Start Pro}}
// Template URL: {{https://www.designtocodes.com/product/techstart-pro-responsive-bootstrap-landing-page/}}
// Description: {{TechStart Pro landing page is the definitive solution for businesses and individuals seeking a top-tier online presence. This responsive Bootstrap landing page is not just good-looking, it's also simple.}}
// Author: DesignToCodes
// Author URL: https://www.designtocodes.com
// Text Domain: {{ Tech Start Pro }}