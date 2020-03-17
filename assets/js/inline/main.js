function main() {

    (function() {
        'use strict';

        // Preloader */
        $(window).load(function() {

            // will first fade out the loading animation 
            $("#status").fadeOut("slow");

            // will fade out the whole DIV that covers the website. 
            $("#preloader").delay(500).fadeOut("slow").remove();

        })

        // Page scroll
        $('a.page-scroll').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top - 40
                    }, 900);
                    return false;
                }
            }
        });

        // Show Menu on Book
        $(window).bind('scroll', function() {
            var navHeight = $(window).height() - 100;
            if ($(window).scrollTop() > navHeight) {
                $('.navbar-default').addClass('on');
            } else {
                $('.navbar-default').removeClass('on');
            }
        });

        $('body').scrollspy({
            target: '.navbar-default',
            offset: 80
        })

        $(document).ready(function() {
            $('.slider').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2000,
                arrows: false,
                adaptiveHeight: true,
                infinite: true,
            });

        });

        // Portfolio Isotope Filter
        $(window).load(function() {
            var $container = $('.portfolio-items');
            $container.isotope({
                filter: '*',
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            $('.cat a').click(function() {
                $('.cat .active').removeClass('active');
                $(this).addClass('active');
                var selector = $(this).attr('data-filter');
                $container.isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 750,
                        easing: 'linear',
                        queue: false
                    }
                });
                return false;
            });

        });



        // jQuery Parallax
        function initParallax() {
            $('#intro').parallax("100%", 0.3);
            $('#services').parallax("100%", 0.3);
            $('#aboutimg').parallax("100%", 0.3);
            $('#testimonials').parallax("100%", 0.1);

        }
        initParallax();


        const RSS_URL = `https://rss.app/feeds/z49rzoRvcddNzi1x.xml`;

        fetch(RSS_URL)
            .then(response => response.text())
            .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
            .then(data => {
                const items = data.querySelectorAll("item");
                let html = ``;
                items.forEach(el => {
                    var description = el.querySelector("description").innerHTML;
                    var results = description.match(/<img [^>]*src="[^"]*"[^>]*>/gm);
                    var title =
                        html += `<div class="col "><a href="${el.querySelector("link").innerHTML}" target="_blank" rel="noopener">
                        ${results}
                        </div>`;
                });
                document.getElementById('happeningstream').insertAdjacentHTML("beforeend", html);
            });
        // Pretty Photo
        $("a[rel^='prettyPhoto']").prettyPhoto({
            social_tools: false
        });
    }());


}
main();