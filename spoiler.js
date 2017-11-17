/*

 Spoiler Alert JQuery Plugin

 Usage:  $( ".spoiler" ).spoiler({
 blur:4,
 color:#000000
 });

 */

(function ( $ ) {

    $.fn.spoiler = function( options ) {
        // Extendable options
        var settings = $.extend({
            // These are the defaults.
            text: "The following content contains spoilers, click to reveal",
            blur:4
        }, options );

        $(this).css({"color":settings.color,
                     "cursor":"pointer",
                     "filter":"blur("+settings.blur+"px)",
                     "-webkit-filter": "blur("+settings.blur+"px)",
                     "-moz-filter": "blur("+settings.blur+"px)",
                     "-o-filter":"blur("+settings.blur+"px)",
                     "-ms-filter": "blur("+settings.blur+")",
                     "filter":"progid:DXImageTransform.Microsoft.Blur(PixelRadius='"+settings.blur+"')",
                     "filter": "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'><filter id='blur'><feGaussianBlur stdDeviation='" + settings.blur + "' /></filter></svg>#blur\")"
                     }).on("click", function(){
            $(this).removeAttr('style');
        });

        //The returned
        return this;
    };

}( jQuery ));