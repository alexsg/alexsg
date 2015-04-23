/**	
 * Main JS file for Casper behaviours
 */

/*globals jQuery, document */
(function ($) {
    "use strict";

    $(document).ready(function(){

        // On the home page, move the blog icon inside the header 
        // for better relative/absolute positioning.

        //$("#blog-logo").prependTo("#site-head-content");

        var mq = window.matchMedia('@media all and (max-width: 767px)'); // mobile
        mq.addListener(function(changed) {
		    if(changed.matches) {
		        // the width of browser is more then 767px
		        $('.navbar-right').removeAttr("style");
		    } else {
		        // the width of browser is less then 767px
		    }
		});

        $('.mobile-nav').click(function() {
        	$('.navbar-mobile').slideToggle();
        }); 


        // Instantiate MixItUp:
        $('#MixContainer').mixItUp();


    });

}(jQuery))