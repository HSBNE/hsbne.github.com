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

            var token = 'FN5RRHYSMEODBAWWPCGR';
            //user id
            var userid = '64082425769';
            //id to target
            var $events = $("#eventslist");

            $events.html("<i>Loading events, please stand by...</i>");
            $.get('https://www.eventbriteapi.com/v3/events/search/?sort_by=date&token=' + token + '&user.id=' + userid + '&include_all_series_instances=on&include_unavailable_events=on', function(res) {
                if (res.events.length) {
                    var s = "";
                    for (var i = 0; i < 4; i++) {
                        var event = res.events[i];
                        var eventTime = moment(event.start.local).format('DD/MM');
                        var eventDay = moment(event.start.local).format('DD');
                        var eventMonth = moment(event.start.local).format('MMM'); 
                    s += "<div class='media'>";
                    s += "<div class='media-left'><h2 class='media-heading'>" + eventDay + "</h2>"+ eventMonth + "</div>";
                    s += "<div class='media-body'>";
                    s += "<h3 class='media-heading inverted'><a class=' pull-left inverted text-justify' href='" + event.url + "'> " + event.name.text + "</a></h3>";
                    s += "</div></div>";
                    }
                    $events.html(s);
                } else {
                    $events.html("<p>Sorry, there are no upcoming events.</p>");
                }
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

        // Pretty Photo
        $("a[rel^='prettyPhoto']").prettyPhoto({
            social_tools: false
        });

    }());


}
main();
