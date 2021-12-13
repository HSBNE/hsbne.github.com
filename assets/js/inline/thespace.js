function main() {

    (function() {
        'use strict';


        $(document).ready(function() {
            $("a[rel^='prettyPhoto']").prettyPhoto({
                social_tools: false,
                overlay_gallery: true
            });
            /* For now we're only using references on the "thespace" page. If we want to broaden the scope
               of this functionality, this code might be better suited in main.js - JD 12/2021
            */
            $('.reference').click(function(e) {
                if ($(this).closest('.references').length == 0) {
                    e.stopPropagation();
                }
            });
        });
    }());

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
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

}
main();
