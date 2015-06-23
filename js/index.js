/**	
 * Main JS file for Casper behaviours
 */

/*globals jQuery, document */
(function ($) {
    "use strict";

    $(document).ready(function(){

        var pull        = $('#pull');
        var menu        = $('#main-nav ul');
        var menuHeight  = menu.height();
     
        $(pull).on('click', function(e) {
            e.preventDefault();
            menu.slideToggle();
        });

        $(window).resize(function(){
            var w = $(window).width();
            if(w > 320 && menu.is(':hidden')) {
                menu.removeAttr('style');
            }
        });

        // Instantiate MixItUp:
        $('#MixContainer').mixItUp();


    });

}(jQuery))