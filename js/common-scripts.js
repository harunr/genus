(function ($) {
    $(function () {

        // Phone nav click function
        $('.hamburger-wrap').click(function (e) {
            e.preventDefault();
            $("body").toggleClass("navShown");
            $('body').removeClass('searchShown');
        });

        $('.search').click(function (e) {
            e.preventDefault();
            $('body').toggleClass('searchShown');
            $('body').removeClass('navShown');
        })

        if ($('.support-card-slider-wrap').length) {
            $('.support-card-slider-wrap').slick({
                arrows: false,
                infinite: false,
                autoplay: false,
                autoplaySpeed: 200,
                autoplaySpeed: 1500,
                navigation: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
                centerMode: false,
                focusOnSelect: true,
                responsive: [
                    {
                        breakpoint: 767,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            dots: true,
                        }
                    }
                ]
            });
            $(window).on('resize', function () {
                $('.support-card-slider-wrap').slick('resize');

            });
        }

        $('.dragSlider').mouseenter(function () {
            $('body').addClass('mouseDrage')
            $('.cursor-dot-outline em').fadeIn(400)
        })

        $('.dragSlider').mouseleave(function () {
            $('body').removeClass('mouseDrage')
            $('.cursor-dot-outline em').hide(0)
        })

        var header = new Headroom(document.querySelector("header"), {
            tolerance: 0,
            offset: 80,
            classes: {
                initial: "headroom",
                pinned: "slideDown",
                unpinned: "slideUp"
            }
        });
        header.init();


        var $animation_elements = $('.animate');
        var $window = $(window);

        function check_if_in_view() {
            var window_height = $window.height();
            var window_top_position = $window.scrollTop();
            var window_bottom_position = (window_top_position + window_height);

            $.each($animation_elements, function () {
                var $element = $(this);
                var element_height = $element.outerHeight();
                var element_top_position = $element.offset().top;
                var element_bottom_position = (element_top_position + element_height);

                //check to see if this current container is within viewport
                if (element_top_position <= window_bottom_position) {
                    $element.addClass('in-view');
                } else {
                    $element.removeClass('in-view');
                }
            });
        }

        $window.on('scroll resize', check_if_in_view);
        $window.trigger('scroll');


        if ($(window).width() > 1025) {

            $('.swiper-button-next').mouseenter(function () {
                $('body').addClass('slick-arrow-next')
            })
            $('.swiper-button-next').mouseleave(function () {
                $('body').removeClass('slick-arrow-next')
            })
            $('.swiper-button-prev').mouseenter(function () {
                $('body').addClass('slick-arrow-prev')
            })
            $('.swiper-button-prev').mouseleave(function () {
                $('body').removeClass('slick-arrow-prev')
            })

        }





        if ($('.newsletter-wrap').length) {
            $('.newsletter-input input[type="email"]').on("keyup", function () {
                var $$this = $(this);
                var email = $(this).val();
                var expression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                var regex = new RegExp(expression);
                if (email != "") {
                    if (email.match(regex)) {
                        $$this.parents('.newsletter-content-inner').addClass('form-active');
                        $$this.parents('.newsletter-content-inner').removeClass('form-error');
                    } else {
                        $$this.parents('.newsletter-content-inner').addClass('form-error');
                    }
                }
            });

            function validateEmail(email) {
                const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(email);
            }

            function validate() {
                var $$this = $(this);
                const $result = $(".success-msg");
                const email = $(".newsletter-input input[type='email']").val();
                if (validateEmail(email)) {
                    $('.newsletter-content-inner').addClass('form-success');
                    $$this.parents('.newsletter-content-inner').removeClass('form-error')
                } else {
                    $$this.parents('.newsletter-content-inner').addClass('form-error')
                    $$this.parents('.newsletter-content-inner').removeClass('form-active')
                }
                return false;
            }
            $(".newsletter-input.newsletter-submit input").on("click", validate);

        }


        if ($('.main-footer-section').length) {

            $('.social-item-from-row input[type="email"]').on("keyup", function () {
                var $$this = $(this);
                var email = $(this).val();
                var expression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                var regex = new RegExp(expression);
                if (email != "") {
                    if (email.match(regex)) {
                        $$this.parents('.social-item-from-row-wrap').addClass('newsletter-success');
                        $$this.parents('.social-item-from-row-wrap').removeClass('newsletter-error');
                    } else {
                        $$this.parents('.social-item-from-row-wrap').addClass('newsletter-error');
                    }
                }
            });

            function validateEmail(email) {
                const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(email);
            }

            function validate() {
                var $$this = $(this);
                const $result = $(".newsletter-submited");
                const email = $(".social-item-from-row input[type='email']").val();
                if (validateEmail(email)) {
                    $('.social-item-from-row-wrap').addClass('newsletter-submited');
                }
                return false;
            }
            $(".social-item-input-submit input").on("click", validate);
        }









        // Overview js

        if ($('.overview-card-wrap').length) {
            $('.overview-card-wrap').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                mobileFirst: true,
                dots: false,
                arrows: false,
                responsive: [

                    {

                        breakpoint: 768,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                            autoplay: false,
                            speed: 1500,
                            swipe: true,
                        }

                    },

                    {
                        breakpoint: 991,
                        settings: 'unslick'
                    }
                ]
            })

            $(window).on('resize', function () {
                $('.overview-card-wrap').slick('resize');
            });
        }

        if ($('.teach-item-wrap').length) {
            $('.teach-item-wrap').slick({
                arrows: false,
                infinite: false,
                autoplay: false,
                navigation: false,
                dots: false,
                centerMode: false,
                focusOnSelect: true,
                slidesToShow: 2,
                slidesToScroll: 1,
                variableWidth: true,
                responsive: [
                    {
                        breakpoint: 9999,
                        settings: 'unslick'
                    },
                    {
                        breakpoint: 769,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                            autoplay: false,
                            speed: 1500,
                            swipe: true,
                        }

                    },

                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            autoplay: false,
                            speed: 1500,
                            swipe: true,
                            infinite: true,
                            variableWidth: false,
                        }
                    },
                ]
            });
            $(window).on('resize', function () {
                $('.teach-item-wrap').slick('resize');
            });
        }

        $(".research-projects-item-content").each(function () {
            var $this = $(this);
            $this.find(" > h6").on("click touch", function () {
                $(".research-projects-item-content").removeClass("accordion-active")
                $(".research-projects-item-accordion-content").slideUp();
                if ($this.find(".research-projects-item-accordion-content:visible").length) {
                    $(".research-projects-item-content").removeClass("accordion-active")
                    $(".research-projects-item-accordion-content").slideUp();
                } else {
                    $this.addClass("accordion-active")
                    $(".research-projects-item-accordion-content").slideUp();
                    $this.find(" > .research-projects-item-accordion-content").slideDown();
                }
            })
        })
        if ($('.research-projects-item-wrap').length) {
            $('.research-projects-item-wrap').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                mobileFirst: true,
                arrows: false,
                responsive: [

                    {

                        breakpoint: 557,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                            autoplay: false,
                            speed: 1500,
                            swipe: true,
                        }

                    },
                    {
                        breakpoint: 768,
                        settings: 'unslick'
                    }
                ]
            })

            $(window).on('resize', function () {
                $('.research-projects-item-wrap').slick('resize');
            });
        }




        // Support js

        if ($('.statistic-item-wrap').length) {
            $('.statistic-item-wrap').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                mobileFirst: true,
                dots: true,
                arrows: false,
                responsive: [

                    {
                        breakpoint: 768,
                        settings: 'unslick'
                    }
                ]
            })

            $(window).on('resize', function () {
                $('.statistic-item-wrap').slick('resize');
            });
        }
        if ($('.appreciate-item-wrap').length) {
            $('.appreciate-item-wrap').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                mobileFirst: true,
                dots: false,
                arrows: false,
                responsive: [

                    {
                        breakpoint: 768,
                        settings: 'unslick'
                    }
                ]
            })

            $(window).on('resize', function () {
                $('.appreciate-item-wrap').slick('resize');
            });
        }
        if ($('.our-sponsors-item-wrap').length) {
            $('.our-sponsors-item-wrap').slick({
                arrows: false,
                infinite: false,
                navigation: false,
                dots: true,
                slidesToShow: 2,
                slidesToScroll: 1,
                autoplay: true,
                responsive: [
                    {
                        breakpoint: 991,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            swipe: true,
                            adaptiveHeight: true,
                        }
                    },


                ]
            });
            $(window).on('resize', function () {
                $('.our-sponsors-item-wrap').slick('resize');
            });
        }








        $('.grantees-tab-triger ul li, .mobile-triger ul li').click(function () {
            $('.grantees-tab-triger ul li, .mobile-triger ul li').removeClass('grantees-active');
            $(this).addClass('grantees-active');
            $('.grantees-tab-item-wrap .grantees-tab-item').hide();

            var activeTab = $(this).find('a').attr('href');
            $(activeTab).fadeIn();
            return false;
        });


        if ($("select.styled-select").length) {
            $("select.styled-select").selectric({

            });
        }


        if ($(window).width() < 769) {
            $(".faq-accordion-item").each(function () {
                var $this = $(this);
                $this.find(" > h4").on("click touch", function () {
                    $(".faq-accordion-item").removeClass("faq-accordion-active")
                    $(".faq-accordion-item-content").slideUp();
                    if ($this.find(".faq-accordion-item-content:visible").length) {
                        $(".faq-accordion-item").removeClass("faq-accordion-active")
                        $(".faq-accordion-item-content").slideUp();
                    } else {
                        $this.addClass("faq-accordion-active")
                        $(".faq-accordion-item-content").slideUp();
                        $this.find(" > .faq-accordion-item-content").slideDown();
                    }
                })
            })

        }



        //Learn Overview page
        $('.learn-tab-item-wrap').eq(0).addClass('learn-tab-item-show');
        $('.learn-tab-trigar ul li ').click(function () {
            $('.learn-tab-trigar ul li ').removeClass('active-btn');
            $(this).addClass('active-btn');
            $('.learn-tab-item-wrap').removeClass('learn-tab-item-show');

            var activeTab = $(this).find('a').attr('href');
            $(activeTab).addClass('learn-tab-item-show');
            return false;
        });
        //Learn Overview page

        //Learn Overview page

        $('.dig-deeper-tab').eq(0).show();
        $('.fossil-tab-trigar ul li ').click(function () {
            $('.fossil-tab-trigar ul li ').removeClass('active-btn');
            $(this).addClass('active-btn');
            $('.dig-deeper-tab').hide();

            var activeTab = $(this).find('a').attr('href');
            $(activeTab).fadeIn();
            return false;
        });
        //Learn Overview page

        if ($('.events-item-wrap').length) {
            $('.events-item-wrap').slick({
                arrows: false,
                infinite: false,
                autoplay: false,
                autoplaySpeed: 1500,
                navigation: false,
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: false,
                centerMode: false,
                focusOnSelect: true,
                variableWidth: true,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                            autoplay: false,
                            speed: 1500,
                            swipe: true,
                            variableWidth: false,

                        }
                },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            autoplay: false,
                            speed: 1500,
                            swipe: true,
                            variableWidth: false,

                        }
                },


                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            autoplay: false,
                            speed: 1500,
                            swipe: true,
                            variableWidth: false,
                        }
                },

            ]
            });
        }


        if ($(".input-row-select").length) {
            $(".input-row-select").selectric({

            });
        }


        if ($('.update-card-wrap').length) {
            $('.update-card-wrap').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
                arrows: false,
                infinite: true,
                mobileFirst: true,
                responsive: [

                    {

                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            autoplay: false,
                            speed: 1500,
                            swipe: true,
                        }

                },
                    {

                        breakpoint: 481,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                            autoplay: false,
                            speed: 1500,
                            swipe: true,
                        }

                },
                    {
                        breakpoint: 991,
                        settings: 'unslick'
                }
            ]
            })

            $(window).on('resize', function () {
                $('.update-card-wrap').slick('resize');
            });
        }


        if ($('.selectric-wrap').length) {

            var showVal = $('.newsletter-field');

            showVal.click(function () {
                $('.newsletter-dropdown').slideDown();
            })

            $('.dropdown-item').click(function () {
                var hiddenVal = $(this).text();
                showVal.text(hiddenVal)
                $('.newsletter-dropdown').slideUp();
                $('.dropdown-item').removeClass('dropdown-active');
                $(this).addClass('dropdown-active');

            })

        }





        if ($('.grantees-tab-triger-selectric').length) {

            var showVal = $('.grantees-tab-triger-selectric span em');

            $('.grantees-tab-triger-selectric span').click(function () {
                $('.grantees-tab-triger-selectric ul').slideDown();
            })

            $('.grantees-tab-triger-selectric ul li').click(function () {
                var hiddenVal = $(this).text();
                showVal.text(hiddenVal)
                $('.grantees-tab-triger-selectric ul').slideUp();
            })

        }

        if ($(window).width() < 768) {
            console.log('test')
            $('.welcome-tab-trigar ul li').removeClass('active-btn')
        }

        if ($('.welcome-tab-trigar').length) {
            var $this = $(this).find('.welcome-text-shower em');
            $this.click(function () {
                console.log('hf')
                $('.welcome-tab-trigar ul').slideToggle();
            })
        }


        if ($(window).width() < 769) {
            if ($('.learn-filter-wrap').length) {

                var showVal = $('.learn-mobi-tab em'),
                    itemLength = $('.learn-tab-trigar li').length,
                    itemHeight = $('.learn-tab-trigar li').outerHeight(),
                    itemTotal = itemHeight * itemLength + 30;


                showVal.click(function () {
                    $('.learn-tab-trigar ul').animate({
                        'borderWidth': '1px',
                        'max-height': itemTotal,
                        'padding': 15,

                    });
                })

                $('.learn-tab-trigar li a').click(function () {
                    var hiddenVal = $(this).text();
                    showVal.text(hiddenVal)
                    $('.learn-tab-trigar ul').animate({
                        'max-height': 0,
                        'padding': 0,
                        'borderWidth': '0',
                    });
                })

            }
        }

        if ($(window).width() < 769) {
            if ($('.funding-select-mobi-btn').length) {

                var showVal = $('.funding-select-show em'),
                    itemLength = $('.funding-select-mobi-btn li').length,
                    itemHeight = $('.funding-select-mobi-btn li').outerHeight(),
                    itemTotal = itemHeight * itemLength + 30;


                showVal.click(function () {
                    $('.funding-select-mobi-btn ul').animate({
                        'borderWidth': '1px',
                        'max-height': itemTotal,
                        'padding': 15,

                    });
                })

                $('.funding-select-mobi-btn li a').click(function () {
                    var hiddenVal = $(this).text();
                    showVal.text(hiddenVal)
                    $('.funding-select-mobi-btn ul').animate({
                        'max-height': 0,
                        'padding': 0,
                        'borderWidth': '0',
                    });
                })

            }
        }

        if ($(window).width() < 769) {
            if ($('.fossil-tab-trigar').length) {

                var showVal = $('.learn-mobi-tab em'),
                    itemLength = $('.fossil-tab-trigar li').length,
                    itemHeight = $('.fossil-tab-trigar li').outerHeight(),
                    itemTotal = itemHeight * itemLength + 30;


                showVal.click(function () {
                    $('.fossil-tab-trigar ul').animate({
                        'borderWidth': '1px',
                        'max-height': itemTotal,
                        'padding': 15,

                    });
                })

                $('.fossil-tab-trigar ul li a').click(function () {
                    var hiddenVal = $(this).text();
                    showVal.text(hiddenVal)
                    $('.fossil-tab-trigar ul').animate({
                        'max-height': 0,
                        'padding': 0,
                        'borderWidth': '0',
                    });
                })

            }
        }
        
        if($('.curious-wrap').length){
            var vaL = $('.curious-content h5 dfn');
            $('.learn-tab-trigar li').not('.learn-tab-trigar li:first').click(function(){
                var ValUe = $(this).find('a').text();
                
                vaL.text('| '+ '' + ValUe)
                
            })
                
                
        }


    }) // End ready function.


    if ($(window).width() > 1025) {

        const cursor = document.querySelector('#cursor');
        const mouse = {
            x: -100,
            y: -100
        };
        const pos = {
            x: 0,
            y: 0
        };
        const speed = 1;

        const updateCoordinates = e => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        }

        window.addEventListener('mousemove', updateCoordinates);


        function getAngle(diffX, diffY) {
            return Math.atan2(diffY, diffX) * 180 / Math.PI;
        }

        function getSqueeze(diffX, diffY) {
            const distance = Math.sqrt(
                Math.pow(diffX, 2) + Math.pow(diffY, 2)
            );
            const maxSqueeze = 0;
            const accelerator = 1500;
            return Math.min(distance / accelerator, maxSqueeze);
        }


        const updateCursor = () => {
            const diffX = Math.round(mouse.x - pos.x);
            const diffY = Math.round(mouse.y - pos.y);

            pos.x += diffX * speed;
            pos.y += diffY * speed;

            const angle = getAngle(diffX, diffY);
            const squeeze = getSqueeze(diffX, diffY);

            const scale = 'scale(' + (1 + squeeze) + ', ' + (1 - squeeze) + ')';
            const rotate = 'rotate(' + angle + 'deg)';
            const translate = 'translate3d(' + pos.x + 'px ,' + pos.y + 'px, 0)';
            cursor.style.transform = translate;
        };

        function loop() {
            updateCursor();
            requestAnimationFrame(loop);
        }

        requestAnimationFrame(loop);



        const cursorModifiers = document.querySelectorAll('[cursor-class]');

        cursorModifiers.forEach(curosrModifier => {
            curosrModifier.addEventListener('mouseenter', function () {
                const className = this.getAttribute('cursor-class');
                cursor.classList.add(className);
            });

            curosrModifier.addEventListener('mouseleave', function () {
                const className = this.getAttribute('cursor-class');
                cursor.classList.remove(className);
            });
        });

    }

    if ($('.support-ways, .ways-template, .funding-opportunities-content, .researchers-content, .dig-deeper-content ').length) {
        $('header').addClass('white-cursor-bg')
        $('header .hamburger-wrap').removeClass('white-cursor-bg')
    }

    $('a, button, input').mouseenter(function () {
        $('body').addClass('hoverCursor');
    });
    $('a, button, input').mouseleave(function () {
        $('body').removeClass('hoverCursor');
    });

    var $body = $('body')
    $('.white-cursor-bg').mouseenter(() => {
        $body.addClass('blue-cursor');
    })
    $('.white-cursor-bg').mouseleave(() => {
        $body.removeClass('blue-cursor');
    })
    $('.blue-cursor-bg').mouseenter(() => {
        $body.addClass('white-cursor');
    })
    $('.blue-cursor-bg').mouseleave(() => {
        $body.removeClass('white-cursor');
    })

    $(window).on('scroll', () => {

        if ($(window).scrollTop() >= 100) {
            $('header').addClass('header-blue')
        } else {
            $('header').removeClass('header-blue')
        }

        if ($(window).scrollTop() >= 100) {
            $('.header-blue').mouseenter(() => {
                $body.addClass('header-blue-cursor')
            })
            $('.header-blue').mouseleave(() => {
                $body.removeClass('header-blue-cursor');
            })
        } else {

            $('header').mouseenter(() => {
                $body.removeClass('header-blue-cursor')
            })



        }
    })




    $('body.navShown .header-blue').mouseenter(() => {
        $body.removeClass('header-blue-cursor')
    })



    $('header.white-cursor-bg').mouseenter(function () {
        $('body').addClass('blue-cursor')
    })


    $('.cookies-wrap').hide();
    $('.cookies-wrap').css({
        'transition': '1.2s ease',
        'transition-delay': '0.2s'
    })
    $('.cookies-btn a.btn.ex-medium.bg-paste').click(function (e) {
        e.preventDefault();
        $('.cookies-wrap').css({
            'transform': 'translateY(200%)'
        })
    })


    if ($('.facilities-item-wrap').length) {

        $('.facilities-item-wrap').slick({
            dots: false,
            infinite: false,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 3800,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 1,
                        dots: false
                    }
                },
                {
                    breakpoint: 1921,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        dots: false
                    }
                },
                {
                    breakpoint: 1025,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        dots: false
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                    }
                }
            ]
        });

        $(window).on('resize', function () {
            $('.facilities-item-wrap').slick('resize');

        });

    }
    if ($('.update-item-wrap').length) {

        $('.update-item-wrap').slick({
            dots: false,
            infinite: false,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 3800,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 1,
                        dots: false
                    }
                },
                {
                    breakpoint: 1921,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        dots: false
                    }
                },
                {
                    breakpoint: 1025,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        dots: false
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                    }
                }
            ]
        });

        $(window).on('resize', function () {
            $('.update-item-wrap').slick('resize');

        });
    }


    $('.slick-arrow').mouseenter(() => {
        $body.addClass('blue-cursor');
    })
    $('.slick-arrow').mouseleave(() => {
        $body.removeClass('blue-cursor');
    })




    if ($('.ways-template').length) {
        $('.main-wrap').addClass('event-template');
    }

    if ($('.funding-opportunities-content').length) {
        $('.main-wrap').addClass('opportunities');
    }

    if ($('.researchers-content').length) {
        $('.main-wrap').addClass('researchers');
    }
    if ($('.dig-deeper-content').length) {
        $('.main-wrap').addClass('dig-deeper');
    }

    if ($('.explore-overview-content').length) {
        $('.main-wrap').addClass('explore-overview');
    }



})(jQuery)