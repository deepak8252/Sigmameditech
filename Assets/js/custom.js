(function($) {

	"use strict";

     
    // Header Fixed
    window.onscroll = function() {myFunction()};
        var header = document.getElementById("myHeader");
        var sticky = header.offsetTop;
        function myFunction() {
          if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
          } 
          else {
            header.classList.remove("sticky");
          }
    }





    // Youtube BG video
    $('.yt-bg-video').mb_YTPlayer();


     

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top - 72,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#mainNav",
        offset: 100,
    });

    // Collapse Navbar
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);






    // Pogo Slider
    if($('#pogo-slider').length > 0){
            $('#pogo-slider').pogoSlider({
            autoplay: true,
            autoplayTimeout: 5000,
            displayProgess: true,
            targetWidth: 1920,
            // targetHeight: 500,
            responsive: true,
            pauseOnHover: false,
        }).data('plugin_pogoSlider');
    }

    if($('#pogo-slider-2').length > 0){
            $('#pogo-slider-2').pogoSlider({
            autoplay: true,
            autoplayTimeout: 6000,
            displayProgess: true,
            targetWidth: 1920,
            // targetHeight: 500,
            responsive: true,
            pauseOnHover: false,
        }).data('plugin_pogoSlider');
    }


    

   

    // team-carousel
    if($('.team-carousel').length){
        $('.team-carousel').owlCarousel({
            loop: true,
            margin: 0,
            dots: false,
            nav: true,
            autoplayHoverPause: true,
            autoplay: true,
            autoplayTimeout: 4000,
            smartSpeed: 800,
            center: false,
            navText: [
              '<i class="icofont-swoosh-left"></i>',
              '<i class="icofont-swoosh-right"></i>'
            ],
            responsive: {
                0: {
                    items: 1,
                    center: false
                },
                480:{
                    items:1,
                    center: false
                },
                600: {
                    items: 1,
                    center: false
                },
                768: {
                    items: 1
                },
                992: {
                    items: 1
                },
                1200: {
                    items: 1
                }
            }
        })
    }

     // team-carousel
     if($('.BannerCarousal01').length){
        $('.BannerCarousal01').owlCarousel({
            loop: true,
            margin: 0,
            dots: true,
            // nav: true,
            autoplayHoverPause: false,
            autoplay: true,
            autoplayTimeout: 4000,
            smartSpeed: 800,
            center: false,
            // navText: [
            //   '<i class="icofont-swoosh-left"></i>',
            //   '<i class="icofont-swoosh-right"></i>'
            // ],
            responsive: {
                0: {
                    items: 1,
                    center: false
                },
                480:{
                    items:1,
                    center: false
                },
                600: {
                    items: 1,
                    center: false
                },
                768: {
                    items: 1
                },
                992: {
                    items: 1
                },
                1200: {
                    items: 1
                }
            }
        })
    }
       // Product Carousal
     if($('.OtherProductCarousal').length){
        $('.OtherProductCarousal').owlCarousel({
            loop: true,
            margin: 0,
            dots: false,
            autoplayHoverPause: false,
            autoplay: true,
            autoplayTimeout: 4000,
            smartSpeed: 800,
            autoplayHoverPause:true,
            center: false,
            responsive: {
                0: {
                    items: 1,
                    center: false
                },
                480:{
                    items:1,
                    center: false
                },
                600: {
                    items: 1,
                    center: false
                },
                768: {
                    items: 2,
                },
                992: {
                    items: 3,
                },
                1200: {
                    items: 4,
                    margin:7,
                }
            }
        })
    }



    // Our Services
    // Product Carousal
    if($('.OtherServicesCarousal').length){
        $('.OtherServicesCarousal').owlCarousel({
            loop: true,
            margin: 0,
            dots: false,
            autoplay: true,
            autoplayTimeout: 3000,
            smartSpeed: 800,
            center: false,
            autoplayHoverPause:true,
            responsive: {
                0: {
                    items: 1,
                    center: false,
                
                },
                480:{
                    items:1,
                    center: false,
                  
                },
                600: {
                    items: 2,
                    center: false
                },
                768: {
                    items: 2,
                    margin:7,
                },
                992: {
                    items: 3,
                    margin:7,
                },
                1200: {
                    items: 3,
                    margin:7,
                }
            }
        })
    }
// Our Services End
//For Logo

    // $(window).scroll(function(){
    //     var WhiteLogo = $('#LogoWhite');
    //     var ColorLogo=$('#LogoColor');
    //         scroll = $(window).scrollTop();
      
    //     if (scroll >= 25){
    //         WhiteLogo.addClass('dispalyNone');
    //         ColorLogo.addClass('dispalyBlock');
    //     }

    //     else{
    //         WhiteLogo.removeClass('dispalyNone');
    //         ColorLogo.removeClass('dispalyBlock');
    //     }
    //   });
             

    // team Two carousel
    if($('.team-two-carousel').length){
        $('.team-two-carousel').owlCarousel({
            loop: true,
            margin: 30,
            dots: false,
            nav: true,
            autoplayHoverPause: false,
            autoplay: true,
            autoplayTimeout: 4000,
            smartSpeed: 800,
            center: false,
            navText: [
              '<i class="icofont-swoosh-left"></i>',
              '<i class="icofont-swoosh-right"></i>'
            ],
            responsive: {
                0: {
                    items: 1,
                    center: false
                },
                480:{
                    items:1,
                    center: false
                },
                600: {
                    items: 1,
                    center: false
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 3
                }
            }
        })
    }



    // Testimonial-carousel
    if($('.testimonial-carousel').length){
        $('.testimonial-carousel').owlCarousel({
            loop: true,
            margin: 0,
            dots: true,
            nav: false,
            autoplayHoverPause: false,
            autoplay: true,
            autoplayTimeout: 4000,
            smartSpeed: 800,
            center: false,
            navText: [
              '<i class="icofont-swoosh-left"></i>',
              '<i class="icofont-swoosh-right"></i>'
            ],
            responsive: {
                0: {
                    items: 1,
                    center: false
                },
                480:{
                    items:1,
                    center: false
                },
                600: {
                    items: 1,
                    center: false
                },
                768: {
                    items: 1
                },
                992: {
                    items: 2
                },
                1200: {
                    items: 2
                }
            }
        })
    }

    // Testimonial-carousel Two
    if($('.testimonial-carousel-two').length){
        $('.testimonial-carousel-two').owlCarousel({
            loop: true,
            margin: 0,
            dots: true,
            nav: false,
            autoplayHoverPause: false,
            autoplay: true,
            autoplayTimeout: 4000,
            smartSpeed: 800,
            center: false,
            navText: [
              '<i class="icofont-swoosh-left"></i>',
              '<i class="icofont-swoosh-right"></i>'
            ],
            responsive: {
                0: {
                    items: 1,
                    center: false
                },
                480:{
                    items:1,
                    center: false
                },
                600: {
                    items: 1,
                    center: false
                },
                768: {
                    items: 1
                },
                992: {
                    items: 1
                },
                1200: {
                    items: 1
                }
            }
        })
    }

    // Testimonial-carousel
    if($('.testimonial-carousel-Clients').length){
        $('.testimonial-carousel-Clients').owlCarousel({
            loop: true,
            margin: 0,
            dots: false,
            nav: false,
            autoplayHoverPause: false,
            autoplay: true,
            slideTransition: 'linear',
            autoplayTimeout: 1000,
            autoplaySpeed: 1000,
            autoplayHoverPause:true,
            center: false,
        
            responsive: {
                0: {
                    items: 1,
                    center: false
                },
                480:{
                    items:1,
                    center: false
                },
                600: {
                    items: 2,
                    center: false
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 6
                }
            }
        })
    }
    // Testimonial-carousel Three
    if($('.testimonial-carousel-three').length){
        $('.testimonial-carousel-three').owlCarousel({
            loop: true,
            margin: 30,
            dots: true,
            nav: false,
            autoplayHoverPause: false,
            autoplay: true,
            autoplayTimeout: 4000,
            smartSpeed: 800,
            center: true,
            navText: [
              '<i class="icofont-swoosh-left"></i>',
              '<i class="icofont-swoosh-right"></i>'
            ],
            responsive: {
                0: {
                    items: 1,
                    center: false
                },
                480:{
                    items:1,
                    center: false
                },
                600: {
                    items: 1,
                    center: false
                },
                768: {
                    items: 2
                },
                992: {
                    items: 2
                },
                1200: {
                    items: 2
                }
            }
        })
    }


    // blog-carousel
    if($('.vertical-blog-carousel').length){
        $('.vertical-blog-carousel').owlCarousel({
            loop: true,
            margin: 0,
            dots: false,
            nav: true,
            autoplayHoverPause: true,
            autoplay: false,
            autoplayTimeout: 4000,
            smartSpeed: 800,
            center: false,
            // animateOut: 'slideOutDown',
            // animateIn: 'slideInDown',
            navText: [
              '<i class="icofont-swoosh-left"></i>',
              '<i class="icofont-swoosh-right"></i>'
            ],
            responsive: {
                0: {
                    items: 1,
                    center: false
                },
                480:{
                    items:1,
                    center: false
                },
                600: {
                    items: 1,
                    center: false
                },
                768: {
                    items: 1
                },
                992: {
                    items: 1
                },
                1200: {
                    items: 1
                }
            }
        })
    }


    // partners-carousel
    if($('.partners-carousel').length){
        $('.partners-carousel').owlCarousel({
            loop: true,
            margin: 80,
            dots: false,
            nav: false,
            autoplayHoverPause: true,
            autoplay: true,
            autoplayTimeout: 3000,
            smartSpeed: 800,
            center: false,
            // animateOut: 'slideOutDown',
            // animateIn: 'slideInDown',
            navText: [
              '<i class="icofont-swoosh-left"></i>',
              '<i class="icofont-swoosh-right"></i>'
            ],
            responsive: {
                0: {
                    items: 2,
                    margin: 30
                },
                480:{
                    items:3,
                    margin: 30
                },
                600: {
                    items: 3,
                    center: false,
                    margin: 30
                },
                768: {
                    items: 4,
                    margin: 30
                },
                992: {
                    items: 4,
                    margin: 50
                },
                1200: {
                    items: 5
                }
            }
        })
    }


     // CV Service
    if($('.cv-service-carousel').length){
        $('.cv-service-carousel').owlCarousel({
            loop: true,
            margin: 30,
            dots: false,
            nav: true,
            autoplayHoverPause: false,
            autoplay: true,
            autoplayTimeout: 4000,
            smartSpeed: 800,
            center: false,
            navText: [
              '<i class="icofont-long-arrow-left"></i>',
              '<i class="icofont-long-arrow-right"></i>'
            ],
            responsive: {
                0: {
                    items: 1,
                    center: false
                },
                480:{
                    items:1,
                    center: false
                },
                600: {
                    items: 2,
                    center: false
                },
                768: {
                    items: 2
                },
                992: {
                    items: 2
                },
                1200: {
                    items: 3
                }
            }
        })
    }

    // gallery owl-carousel
    $('.gallery-slider').owlCarousel({
        center: true,
        loop:true,
        nav:true,
        dots:false,
        margin: 30,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:false,
        autoplaySpeed:1000,
        navText: [
          '<i class="fas fa-long-arrow-alt-left"></i>',
          '<i class="fas fa-long-arrow-alt-right"></i>'
        ],
        responsive: {
                0: {
                    items: 1,
                    center: false
                },
                480:{
                    items:1,
                    center: false
                },
                600: {
                    items: 2,
                    center: false
                },
                768: {
                    items: 2,
                    center: true
                },
                992: {
                    items: 2
                },
                1200: {
                    items: 2
                }
        }
    });



    // gallery owl-carousel For Gym
    $('.gym-gallery-slider').owlCarousel({
        center: true,
        loop:true,
        nav:true,
        dots:false,
        margin: 30,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:false,
        autoplaySpeed:1000,
        navText: [
          '<i class="fas fa-long-arrow-alt-left"></i>',
          '<i class="fas fa-long-arrow-alt-right"></i>'
        ],
        responsive: {
                0: {
                    items: 1,
                    center: false
                },
                480:{
                    items:1,
                    center: false
                },
                600: {
                    items: 1,
                    center: false
                },
                768: {
                    items: 2,
                    center: true
                },
                992: {
                    items: 2
                },
                1200: {
                    items: 2
                }
        }
    });


    // owl-carousel For Yoga Class
    $('.class-slider').owlCarousel({
        center: true,
        loop:true,
        nav:true,
        dots:false,
        margin: 30,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:false,
        autoplaySpeed:1000,
        navText: [
          '<i class="fas fa-long-arrow-alt-left"></i>',
          '<i class="fas fa-long-arrow-alt-right"></i>'
        ],
        responsive: {
                0: {
                    items: 1,
                    center: false
                },
                480:{
                    items:1,
                    center: false
                },
                600: {
                    items: 1,
                    center: false
                },
                768: {
                    items: 2,
                    center: true
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 3
                }
        }
    });



    // gallery Two owl-carousel
    $('.gallery-slider-two').owlCarousel({
        center: false,
        loop:true,
        nav:false,
        dots:false,
        margin: 0,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:false,
        autoplaySpeed:1000,
        navText: [
          '<i class="fas fa-long-arrow-alt-left"></i>',
          '<i class="fas fa-long-arrow-alt-right"></i>'
        ],
        responsive: {
                0: {
                    items: 1,
                    center: false
                },
                480:{
                    items:1,
                    center: false
                },
                600: {
                    items: 2,
                    center: false
                },
                768: {
                    items: 3,
                    center: false
                },
                992: {
                    items: 4
                },
                1200: {
                    items: 4
                }
        }
    });


    // owl-carousel For Service
    $('.service-slider').owlCarousel({
        center: false,
        loop:true,
        nav:true,
        dots:false,
        margin: 30,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:false,
        autoplaySpeed:1000,
        navText: [
          '<i class="fas fa-long-arrow-alt-left"></i>',
          '<i class="fas fa-long-arrow-alt-right"></i>'
        ],
        responsive: {
                0: {
                    items: 1,
                    center: false
                },
                480:{
                    items:1,
                    center: false
                },
                600: {
                    items: 1,
                    center: false
                },
                768: {
                    items: 2,
                    center: false
                },
                992: {
                    items: 2
                },
                1200: {
                    items: 2
                }
        }
    });


    // restaurant-popular-item-carousel
    $('.restaurant-popular-item-carousel').owlCarousel({
        center: false,
        loop:true,
        nav:true,
        dots:false,
        margin: 30,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:false,
        autoplaySpeed:1000,
        navText: [
          '<i class="fas fa-long-arrow-alt-left"></i>',
          '<i class="fas fa-long-arrow-alt-right"></i>'
        ],
        responsive: {
                0: {
                    items: 1,
                    center: false
                },
                480:{
                    items:1,
                    center: false
                },
                575: {
                    items: 2,
                    center: false
                },
                768: {
                    items: 2,
                    center: false
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 4
                },
                1600: {
                    items: 5
                }
        }
    });


    // gallery Two owl-carousel
    $('.screenshot-slider').owlCarousel({
        center: false,
        loop:true,
        nav:false,
        dots:false,
        margin: 30,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:false,
        autoplaySpeed:1000,
        navText: [
          '<i class="fas fa-long-arrow-alt-left"></i>',
          '<i class="fas fa-long-arrow-alt-right"></i>'
        ],
        responsive: {
                0: {
                    items: 2,
                    center: false
                },
                480:{
                    items:2,
                    center: false
                },
                600: {
                    items: 3,
                    center: false
                },
                768: {
                    items: 4,
                    center: false
                },
                992: {
                    items: 5
                },
                1200: {
                    items: 5
                }
        }
    });






        // isotope Active for portfolio
    $(window).on('load', function() {
    
        function sortingGallery() {
            if ($(".sortable-gallery .gallery-filters").length) {
                var $container = $('.gallery-container');
                $container.isotope({
                    filter:'*',
                    animationOptions: {
                        duration: 750,
                        easing: 'linear',
                        queue: false,
                    }
                });
    
                $(".gallery-filters li a").on("click", function() {
                    $('.gallery-filters li .active').removeClass('active');
                    $(this).addClass('active');
                    var selector = $(this).attr('data-filter');
                    $container.isotope({
                        filter:selector,
                        animationOptions: {
                            duration: 750,
                            easing: 'linear',
                            queue: false,
                        }
                    });
                    return false;
                });
            }
        }
        sortingGallery();
    
    });


    // Isotope Script for portfolio two
    $(window).on('load', function() {
        function sortingGallery() {
            if ($(".my-gallery").length) {
                var $container = $('.gallery-container');
                $container.isotope({
                    filter:'*',
                    animationOptions: {
                        duration: 750,
                        easing: 'linear',
                        queue: false,
                    }
                });

                $(".gallery-nav li a").on("click", function() {
                    $('.gallery-nav li .active').removeClass('active');
                    $(this).addClass('active');
                    var selector = $(this).attr('data-filter');
                    $container.isotope({
                        filter:selector,
                        animationOptions: {
                            duration: 750,
                            easing: 'linear',
                            queue: false,
                        }
                    });
                    return false;
                });
            }
        }
        sortingGallery();
    }); 
    $('.gallery-container-two').isotope({
      itemSelector: '.item',
      masonry: {
        gutter: 0
      }
    });





    // Background Image Call Script
    if ($('.background-image').length > 0) {
        $('.background-image').each(function () {
            var src = $(this).attr('data-src');
            $(this).css({
                'background-image': 'url(' + src + ')'
            });
        });
    }


    // CounterUp
    $('.counter').countUp();


    // Parallax background
    $('.jarallax').jarallax({
        speed: 0.5
    });


    // 3D Hover
    $('.3dhover').plate({

      // inverse animation
      inverse: false,

      // transformation perspective in pixels
      perspective: 500,

      // maximum rotation in degrees
      maxRotation: 10,

      // duration in milliseconds
      animationDuration: 200
      
    });


    // Tab Jquery
    $("#skltbsResponsive").skeletabs({
        equalHeights: true,
        animation: "fade-scale",
        autoplay: false,
        autoplayInterval: 4500,
        responsive: {
        breakpoint: 800,
        headingTagName: "h4"
    }
    });



    // masonry
    $('.portfolio-grids').masonry({
      // options
        itemSelector: '.grid-item',
        percentPosition: true
    });



    // AOS animation
    AOS.init();




    // Back To Top
    if ($('#back-to-top').length) {
        var scrollTrigger = 100, // px
            backToTop = function () {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    $('#back-to-top').addClass('show');
                } else {
                    $('#back-to-top').removeClass('show');
                }
            };
        backToTop();
        $(window).on('scroll', function () {
            backToTop();
        });
        $('#back-to-top').on('click', function (e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 1000);
        });
    }





})(window.jQuery);

$('.moreless-button').click(function () {
    $('.moretext').slideToggle();
    if ($('.moreless-button').text() == "Read more") {
        $(this).text("Read less")
    } else {
        $(this).text("Read more")
    }
});
