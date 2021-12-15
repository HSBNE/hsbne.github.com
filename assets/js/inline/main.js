function main() {

  (function() {
    'use strict';

    $(window).load(function() {
      // will first fade out the loading animation 
      $("#status").fadeOut("slow");
      // will fade out the whole DIV that covers the website. 
      $("#preloader").delay(500).fadeOut("slow").remove();
    });

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
    });

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

    /* This got in the way when the "What can I find at HSBNE" moved into the main menu - JD 12-2021
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
    */

    /* I can't see anything that is currently using this feature, but it might be nice once we get some goot background images. JD 12-2021
    function initParallax() {
      $('#intro').parallax("100%", 0.3);
      $('#services').parallax("100%", 0.3);
      $('#aboutimg').parallax("100%", 0.3);
      $('#testimonials').parallax("100%", 0.1);
    }
    initParallax();
    */

    /* The HTML DOM elements that this would have acted on has been gone since March 2020. I'm just commenting out this code that doesn't seem to be having any effect. JD 12-2021
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
    */

    var acc = document.getElementsByClassName("accordion");
    var i;
    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        /* Toggle between adding and removing the "active" class, to highlight the button that controls the panel */
        this.classList.toggle("active");
        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
          panel.style.display = "none";
        } else {
          panel.style.display = "block";
        }
      });
    }
    $(document).ready(function() {
        $("a[rel^='prettyPhoto']").prettyPhoto({
            social_tools: false,
            overlay_gallery: true
        });
    });

  }());

}
main();