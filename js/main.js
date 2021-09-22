/**
* Template Name: MyPortfolio - v4.3.0
* Template URL: https://bootstrapmade.com/myportfolio-bootstrap-portfolio-website-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
// based on Todd Motto functions
// https://toddmotto.com/labs/reusable-js/


  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * burgerMenu
   */
  const burgerMenu = select('.burger')
  on('click', '.burger', function(e) {
    burgerMenu.classList.toggle('active');
  })

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('#portfolio-grid');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.item',
      });

      let portfolioFilters = select('#filters a', true);

      on('click', '#filters a', function(e) {
        e.preventDefault();
        portfolioFilters.forEach(function(el) {
          el.classList.remove('active');
        });
        this.classList.add('active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        portfolioIsotope.on('arrangeComplete', function() {
          AOS.refresh()
        });
      }, true);
    }

  });

  /**
   * Testimonials slider
   */
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });


/*lazy placeholder https://css-tricks.com/the-complete-guide-to-lazy-loading-images/*/
document.addEventListener("DOMContentLoaded", function() {
  var lazyloadImages = document.querySelectorAll("img.lazy");    
  var lazyloadThrottleTimeout;
  
  function lazyload () {
    if(lazyloadThrottleTimeout) {
      clearTimeout(lazyloadThrottleTimeout);
    }    
    
    lazyloadThrottleTimeout = setTimeout(function() {
        var scrollTop = window.pageYOffset;
        lazyloadImages.forEach(function(img) {
            if(img.offsetTop < (window.innerHeight + scrollTop)) {
              img.src = img.dataset.src;
              img.classList.remove('lazy');
            }
        });
        if(lazyloadImages.length == 0) { 
          document.removeEventListener("scroll", lazyload);
          window.removeEventListener("resize", lazyload);
          window.removeEventListener("orientationChange", lazyload);
        }
    }, 20);
  }
  
  document.addEventListener("scroll", lazyload);
  window.addEventListener("resize", lazyload);
  window.addEventListener("orientationChange", lazyload);
});

/*lazy placeholder */
document.addEventListener("DOMContentLoaded", function() {
  var lazyloadImages = document.querySelectorAll("img.lazy");    
  var lazyloadThrottleTimeout;
  
  function lazyload () {
    if(lazyloadThrottleTimeout) {
      clearTimeout(lazyloadThrottleTimeout);
    }    
    
    lazyloadThrottleTimeout = setTimeout(function() {
        var scrollTop = window.pageYOffset;
        lazyloadImages.forEach(function(img) {
            if(img.offsetTop < (window.innerHeight + scrollTop)) {
              img.src = img.dataset.src;
              img.classList.remove('lazy');
            }
        });
        if(lazyloadImages.length == 0) { 
          document.removeEventListener("scroll", lazyload);
          window.removeEventListener("resize", lazyload);
          window.removeEventListener("orientationChange", lazyload);
        }
    }, 20);
  }
  
  document.addEventListener("scroll", lazyload);
  window.addEventListener("resize", lazyload);
  window.addEventListener("orientationChange", lazyload);
});
(function ($) {
  "use strict";

  // Preloader (if the #preloader div exists)
  $(window).on('load', function () {
    if ($('#preloader').length) {
      $('#preloader').delay(100).fadeOut('slow', function () {
        $(this).remove();
      });
    }
  });

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function(){
    $('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
    return false;
  });

  // Initiate the wowjs animation library
  new WOW().init();

  // Header scroll class
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
    } else {
      $('#header').removeClass('header-scrolled');
    }
  });

  if ($(window).scrollTop() > 100) {
    $('#header').addClass('header-scrolled');
  }

  // Smooth scroll for the navigation and links with .scrollto classes
  $('.main-nav a, .mobile-nav a, .scrollto').on('click', function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {
        var top_space = 0;

        if ($('#header').length) {
          top_space = $('#header').outerHeight();

          if (! $('#header').hasClass('header-scrolled')) {
            top_space = top_space - 20;
          }
        }

        $('html, body').animate({
          scrollTop: target.offset().top - top_space
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.main-nav, .mobile-nav').length) {
          $('.main-nav .active, .mobile-nav .active').removeClass('active');
          $(this).closest('li').addClass('active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('fa-times fa-bars');
          $('.mobile-nav-overly').fadeOut();
        }
        return false;
      }
    }
  });

  // Navigation active state on scroll
  var nav_sections = $('section');
  var main_nav = $('.main-nav, .mobile-nav');
  var main_nav_height = $('#header').outerHeight();

  $(window).on('scroll', function () {
    var cur_pos = $(this).scrollTop();
  
    nav_sections.each(function() {
      var top = $(this).offset().top - main_nav_height,
          bottom = top + $(this).outerHeight();
  
      if (cur_pos >= top && cur_pos <= bottom) {
        main_nav.find('li').removeClass('active');
        main_nav.find('a[href="#'+$(this).attr('id')+'"]').parent('li').addClass('active');
      }
    });
  });

  // jQuery counterUp (used in Whu Us section)
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000
  });

  // Porfolio isotope and filter
  $(window).on('load', function () {
    var portfolioIsotope = $('.portfolio-container').isotope({
      itemSelector: '.portfolio-item'
    });
    $('#portfolio-flters li').on( 'click', function() {
      $("#portfolio-flters li").removeClass('filter-active');
      $(this).addClass('filter-active');
  
      portfolioIsotope.isotope({ filter: $(this).data('filter') });
    });
  });

  // Testimonials carousel (uses the Owl Carousel library)
  $(".testimonials-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1
  });

})(jQuery);



/*https://codepen.io/ig_design/pen/omQXoQ*/

(function($) { "use strict";

	$(function() {
		var header = $(".start-style");
		$(window).scroll(function() {    
			var scroll = $(window).scrollTop();
		
			if (scroll >= 10) {
				header.removeClass('start-style').addClass("scroll-on");
			} else {
				header.removeClass("scroll-on").addClass('start-style');
			}
		});
	});		
		
	//Menu On Hover
		
	$('body').on('mouseenter mouseleave','.nav-item',function(e){
			if ($(window).width() > 750) {
				var _d=$(e.target).closest('.nav-item');_d.addClass('show');
				setTimeout(function(){
				_d[_d.is(':hover')?'addClass':'removeClass']('show');
				},1);
			}
	});	
		
  })(jQuery); 

  /*de https://codepen.io/petebarr/pen/qBOeVoz*/

  gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(SplitText);

console.clear();

select = e => document.querySelector(e);
selectAll = e => document.querySelectorAll(e);

const stage = select('.stage');
const slides = selectAll(".slide");
const links = selectAll(".slide__scroll-link");
const titles = selectAll('.col__content-title');
const introTitle = new SplitText('.intro__title', {type: "lines", linesClass: "intro-line"});
const splitTitles = new SplitText(titles, {type: "lines, chars", linesClass: "line", charsClass: "char", position: "relative" });
let slideID = 0;

function initHeader() {
    
    // animate the logo and fake burger button into place
    
    let tl = gsap.timeline({delay: 0.5});
    
    tl.from('.logo', {
        y: -40,
        opacity: 0,
        duration: 2,
        ease: 'power4'
    })
    .from('.nav-btn__svg rect', {
        scale: 0,
        transformOrigin: "center right",
        duration: 0.6,
        ease: 'power4',
        stagger: 0.1
    }, 0.6)
    .to('.nav-rect', {
        scale: 0.8,
        transformOrigin: "center left",
        duration: 0.4,
        ease: 'power2',
        stagger: 0.1
    }, "-=0.6")
    
    // create mouse animations for the faux burger button
    
    let navBtn = select('.nav-btn');
    
    navBtn.addEventListener("mouseover", (e) => {
        gsap.to('.nav-rect', {
            scaleX: 1,
            transformOrigin: "top left",
            duration: 0.4, 
            ease: "power4"
        });
    });
    
    navBtn.addEventListener("mouseout", (e) => {
        gsap.to('.nav-rect', {
            scaleX: 0.8,
            transformOrigin: "top left",
            duration: 0.6, 
            ease: "power4"
        });
    });
}

function initIntro() {
    
    // animate the intro elements into place
    
    let tl = gsap.timeline({delay: 1.2});
    
    tl.from('.intro-line', {
        // x: 100,
        y: 400,
        ease: 'power4',
        duration: 3
    })
    .from('.intro__txt', {
        x: -100,
        opacity: 0,
        ease: 'power4',
        duration: 3
    }, 0.7)
    .from('.intro__img--1', {
        // x: -50,
        y: 50,
        opacity: 0,
        ease: 'power2',
        duration: 10
    }, 1)
    .from('.intro__img--2', {
        // x: 50,
        y: -50,
        opacity: 0,
        ease: 'power2',
        duration: 10
    }, 1);
    
    // set up scrollTrigger animation for the when the intro scrolls out
    
    let stl = gsap.timeline({
        scrollTrigger: {
            trigger: '.intro',
            scrub: 1,
            start: "top bottom", // position of trigger meets the scroller position
            end: "bottom top"
        }
    });
    
    stl.to('.intro__title', {
        x: 400,
        ease: 'power4.in',
        duration: 3,
        
    })
    .to('.intro__txt', {
        y: 100,
        ease: 'power4.in',
        duration: 3,
    }, 0);
}

function initLinks() {
    
    // ScrollToPlugin links
    
    links.forEach((link, index, e) => {     
        
        let linkST = link.querySelector('.slide__scroll-line');
        
        link.addEventListener("click", (e) => {
            e.preventDefault();
            gsap.to(window, {
                duration: 2, 
                scrollTo:{
                    y: "#slide-" + (index + 2)
                },
                ease: "power2.inOut"
            });
            slideID++;
        });
        
        link.addEventListener("mouseover", (e) => {
            gsap.to(linkST, {
                y:40,
                transformOrigin: "bottom center",
                duration: 0.6, 
                ease: "power4"
            });
        });
        
        link.addEventListener("mouseout", (e) => {
            gsap.to(linkST, {
                y: 0,
                transformOrigin: "bottom center",
                duration: 0.6, 
                ease: "power4"
            });
        });
        
    });
    
    // ScrollToPlugin link back to the top
    
    let top = select('.footer__link-top');
    
    top.addEventListener("click", (e) => {
        e.preventDefault();
        scrollTop();
    });
    
    top.addEventListener("mouseover", (e) => {
        gsap.to('.footer__link-top-line', {
            scaleY: 3,
            transformOrigin: "bottom center",
            duration: 0.6, 
            ease: "power4"
        });
    });
    
    top.addEventListener("mouseout", (e) => {
        gsap.to('.footer__link-top-line', {
            scaleY: 1,
            transformOrigin: "bottom center",
            duration: 0.6, 
            ease: "power4"
        });
    });
    
    // Dummy slide links
    
    let slideLinks = selectAll('.slide-link');
    
    slideLinks.forEach((slideLink, index, e) => {
        
        let slideL = slideLink.querySelector('.slide-link__line');
        
        slideLink.addEventListener("mouseover", (e) => {
            gsap.to(slideL, {
                x: 20,
                scaleX: 0.3,
                transformOrigin: "right center",
                duration: 0.8, 
                ease: "power4"
            });
        });
        slideLink.addEventListener("mouseout", (e) => {
            gsap.to(slideL, {
                x: 0,
                scaleX: 1,
                transformOrigin: "right center",
                duration: 0.8, 
                ease: "power4"
            });
        });
    })
}

function initSlides() {
    
    // Animation of each slide scrolling into view
    
    slides.forEach((slide, i) => {   
        
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: slide,
                start: "40% 50%", // position of trigger meets the scroller position
            }
        });
 
        tl.from(slide.querySelectorAll('.col__content-title'), {
            ease: "power4",
            y: "+=5vh",
            duration: 2.5,
        })
        .from(slide.querySelectorAll('.line__inner'), {
            y: 200,
            duration: 2,
            ease: "power4",
            stagger: 0.1
        }, 0)
        .from(slide.querySelectorAll('.col__content-txt'), {
            x: 100,
            y: 50,
            opacity: 0,
            duration: 2,
            ease: "power4"
        }, 0.4)
        .from(slide.querySelectorAll('.slide-link'), {
            x: -100,
            y: 100,
            opacity: 0,
            duration: 2,
            ease: "power4"
        }, 0.3)
        .from(slide.querySelectorAll('.slide__scroll-link'), {
            y: 200,
            duration: 3,
            ease: "power4"
        }, 0.4)
        .to(slide.querySelectorAll('.slide__scroll-line'), {
            scaleY: 0.6,
            transformOrigin: "bottom left",
            duration: 2.5, 
            ease: "elastic(1,0.5)"
        }, 1.4)
	});
    
    // External footer link scroll animation
    
    gsap.from('.footer__link', {
        scrollTrigger: {
            trigger: '.footer',
            scrub: 2,
            start: "50% 100%", // position of trigger meets the scroller position
            end: "0% 0%",
        },
        y: "20vh",
        ease: 'sine'
    })
}

function initParallax() {
    
    slides.forEach((slide, i) => {
        let imageWrappers = slide.querySelectorAll('.col__image-wrap');
        
        gsap.fromTo(imageWrappers, {
            y: "-30vh"
        },{
            y: "30vh",
            scrollTrigger: {
                trigger: slide,
                scrub: true,
                start: "top bottom", // position of trigger meets the scroller position
                snap: {
                    snapTo: 0.5, // 0.5 'cause the scroll animation range is 200vh for parallax effect
                    duration: 1,
                    ease: 'power4.inOut'
                }
            },
            ease: 'none'
        })
    });
}

function scrollTop() {
    gsap.to(window, {
        duration: 2, 
        scrollTo: {
            y: "#slide-0"
        },
        ease: "power2.inOut"
    });
    gsap.to('.footer__link-top-line', {
        scaleY: 1,
        transformOrigin: "bottom center",
        duration: 0.6, 
        ease: "power4"
    });
}

function initKeys() {
    document.addEventListener('keydown', (e) => {
        e.preventDefault();
        if(event.keyCode == 40) { //down arrow to next slide
            if(slideID <= slides.length) {
                slideID++;
                gsap.to(window, {
                    duration: 2, 
                    scrollTo:{
                        y: "#slide-" + slideID 
                    },
                    ease: "power2.inOut"
                });
            }
        }
        else if(event.keyCode == 38) { // up arrow to top
            slideID = 0;
            scrollTop();
        }
    });
}

function init() {
    gsap.set(stage, { autoAlpha: 1 });
    initHeader();
    initIntro();
	initLinks();
	initSlides();
	initParallax();
    initKeys();
}

window.onload = () => {
	init();
};

/*muestra*/
gsap.registerPlugin(ScrollTrigger);

const pageContainer = document.querySelector(".container__muestra");

/* SMOOTH SCROLL */
const scroller = new LocomotiveScroll({
  el: pageContainer,
  smooth: true
});

scroller.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(pageContainer, {
  scrollTop(value) {
    return arguments.length
      ? scroller.scrollTo(value, 0, 0)
      : scroller.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      left: 0,
      top: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  },
  pinType: pageContainer.style.transform ? "transform" : "fixed"
});

////////////////////////////////////
////////////////////////////////////
window.addEventListener("load", function () {
  let pinBoxes = document.querySelectorAll(".pin-wrap > *");
  let pinWrap = document.querySelector(".pin-wrap");
  let pinWrapWidth = pinWrap.offsetWidth;
  let horizontalScrollLength = pinWrapWidth - window.innerWidth;

  // Pinning and horizontal scrolling

  gsap.to(".pin-wrap", {
    scrollTrigger: {
      scroller: pageContainer, //locomotive-scroll
      scrub: true,
      trigger: "#sectionPin",
      pin: true,
      // anticipatePin: 1,
      start: "top top",
      end: pinWrapWidth
    },
    x: -horizontalScrollLength,
    ease: "none"
  });

  ScrollTrigger.addEventListener("refresh", () => scroller.update()); //locomotive-scroll

  ScrollTrigger.refresh();
});

/*hero randomize*/
// Random Background Hero on Page Load and Refresh
// http://stackoverflow.com/questions/19369426/random-background-image-on-refresh

function randomHero() {
  var heroPics = ['../img/hero/musicante.jpg','https://s3-us-west-2.amazonaws.com/s.cdpn.io/392/pink-floyd-division-bell-228953.jpg', 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/392/northstar.jpg', 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/392/womensrights.jpg'];

  $('body').css({
      'background' : 'url('+ heroPics[Math.floor(Math.random() * heroPics.length)] + ') no-repeat',
      'background-attachment' : 'scroll',
      'background-position' : '50% 50%',
      'background-size' : 'cover'
  });
}

// Show Random Image on Page Load
randomHero();

