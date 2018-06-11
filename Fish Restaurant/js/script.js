$(function () {


    // NAVBAR

    // active-Click
    var btn = document.querySelectorAll(".navbar-nav .nav-link")
    for (var i = 0; i < btn.length; i++) {
        btn[i].addEventListener("click", function (e) {
            e.preventDefault();
            var current = document.getElementsByClassName("aktive");
            current[0].className = current[0].className.replace(" aktive", "");
            this.className += " aktive";

        })
    }
    //  active-click-end


    // navbar-padding

    $(window).scroll(function () {
        var scrollSize = window.scrollY;
        // console.log(scrollSize)
        if (scrollSize > 100) {
            $("nav").css({
                "paddingTop": "1%",
                "paddingBottom": "1%"
            });
            $(".navbar-brand img").css("width", "75%");
            $("#navbar").css("backgroundColor", "rgba(0,0,0,1)")
            // $(".navbar-nav").css("marginLeft","0%")
        } else {
            $("nav").css({
                "paddingTop": "2%",
                "paddingBottom": "2%"
            });
            $("nav .navbar-brand img").css("width", "100%");
            $("#navbar").css("backgroundColor", "transparent")
            // $(".navbar-nav").css("marginLeft","2%")

        }
    })
    // navbar-padding-end


    // navbar-scroll

    $('.homes').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1000);
        return false;
    });

    $('.abouts').click(function () {
        $('html, body').animate({ scrollTop: 600 }, 1000);
        return false;
    });

    $('.menus').click(function () {
        $('html, body').animate({ scrollTop: 1100 }, 1000);
        return false;
    });

    $('.gallerys').click(function () {
        $('html, body').animate({ scrollTop: 2400 }, 1000);
        return false;
    });

    $('.reservations').click(function () {
        $('html, body').animate({ scrollTop: 3100 }, 1000);
        return false;
    });

    $('.servicess').click(function () {
        $('html, body').animate({ scrollTop: 3900 }, 1000);
        return false;
    });

    $('.contacts').click(function () {
        $('html, body').animate({ scrollTop: 5427 }, 1000);
        return false;
    });

    // navbar-scroll-end

    // aktive -class animate
    $(window).scroll(function () {
        var scrollSize = window.scrollY;
        if (scrollSize > 590) {
            $(".aktive").removeClass("aktive");
            $(".abouts").addClass("aktive")
        }
        if (scrollSize > 1090) {
            $(".aktives").removeClass("aktive");
            $(".menu").addClass("aktive")
        }
        if (scrollSize > 2390) {
            $(".aktive").removeClass("aktive");
            $(".gallerys").addClass("aktive")
        }
        if (scrollSize > 3090) {
            $(".aktive").removeClass("aktive");
            $(".reservations").addClass("aktive")
        }
        if (scrollSize > 3890) {
            $(".aktive").removeClass("aktive");
            $(".servicess").addClass("aktive")
        }
        if (scrollSize > 4500) {
            $(".aktive").removeClass("aktive");
            $(".contacts").addClass("aktive")
        }
        if (scrollSize < 590) {
            $(".aktive").removeClass("aktive");
            $(".homes").addClass("aktive")
        }
        console.log(window.scrollY)
    })


    // aktive-class-animate-end

    // NAVBAR-END





    // coursel 
    $('.coursel .owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        // nav:true,
        // center:true,
        autoplayTimeout: 3000,
        autoplay: true,
        // autoplaySpeed:true,
        smartSpeed: 1500,
        // dotsEach:true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })


    var owl = $('.coursel .owl-carousel');

    owl.owlCarousel();
    $('.coursel .customNextBtn').click(function () {
        owl.trigger('next.owl.carousel');
    })
    $('.coursel .customPrevBtn').click(function () {
        owl.trigger('prev.owl.carousel');

    });

    $(document).keydown(function (event) {
        if (event.keyCode == 39) {
            owl.trigger('next.owl.carousel');
        }
        if (event.keyCode == 37) {
            owl.trigger('prev.owl.carousel');
        }
    });


    // coursel -end

    // menu

    var main = $(".menuType #main");
    var desert = $(".menuType #desert");
    var lunch = $(".menuType #lunch");
    var drink = $(".menuType #drink");


    $(".menu1").click(function (e) {
        main.fadeIn(1500);
        desert.fadeOut();
        lunch.fadeOut();
        drink.fadeOut();
        e.preventDefault();

    })

    $(".menu2").click(function (e) {
        desert.fadeIn(1500);
        main.fadeOut();
        lunch.fadeOut();
        drink.fadeOut();
        e.preventDefault();
    })

    $(".menu3").click(function (e) {
        lunch.fadeIn(1500);
        desert.fadeOut();
        main.fadeOut();
        drink.fadeOut();
        e.preventDefault();
    })

    $(".menu4").click(function (e) {
        drink.fadeIn(1500);
        desert.fadeOut();
        lunch.fadeOut();
        main.fadeOut();
        e.preventDefault();
    })


    // menu-end






    // gallery

    // zoom
    var l = $('.slide').length;
    var i = 0;
    $('.inner').css('width', l * 100 + "%")
    $('.slide').css('width', 100 / l + "%")
    $('.slid .img ').click(function () {
        $('.carusel').css("transform", "scale(1,1)")
        $('.inner').css("left", $(this).index() * (-100) + "%");
        i = $(this).index() * (-100);
        $("body").css("overflow", "hidden");
    });
    $('#close').click(function () {
        $('.carusel').css("transform", "scale(0,0)");
        $("body").css("overflow", "visible");
    });
    $('#right').click(function () {
        right();
    });
    $('#left').click(function () {
        left();
    });
    $(document).keydown(function (event) {
        if (event.keyCode == 39) {
            right();
        } else if (event.keyCode == 37) {
            left();
        } else if (event.keyCode == 27) {
            // $('.carusel').css("display", "none");
            $('.carusel').css("transform", "scale(0,0)");

        }
    });
    function right() {
        if (i > -(l - 1) * 100) {
            i -= 100;
            $('.inner').css("left", i + "%");
        } else {
            i = 0;
            $('.inner').css("left", i + "%");
        }
    }
    function left() {
        if (i < 0) {
            i += 100;
            $('.inner').css("left", i + "%");
        } else {
            i = -(l - 1) * 100;
            $('.inner').css("left", i + "%");
        }
    }
    // zoom-end

    // gallery-end



    //    SCROLL-TOP
    if ($(window).scrollTop() < 500) {
        $(".scrollToTop").hide()
    }

    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            $('.scrollToTop').fadeIn(1000);
        } else {
            $('.scrollToTop').fadeOut(1000);
        }
    });


    $('.scrollToTop').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1000);
        return false;
    });
    // SCROLL-TOP-END

    // animation -scroll div
    $(window).scroll(function () {
        console.log(sc)
        var sc = window.scrollY;
        if (sc >150) {
            $(".about .leftPart").css("animationName", "left")
            $(".about .rightPart").css("animationName", "right") 
        }
        if(sc>700){
            $("#menu .menu").css("animationName", "menu")
            
        }
        if(sc>1900){
            $("#gallery .part1").css("animationName", "part1");
            $("#gallery .part2").css("animationName", "part2");
            
            
        }
    })


})