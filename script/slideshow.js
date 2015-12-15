$(document).ready(function(){

    $.fn.slideshow = function(settings){
        
        // settings
        var config = {
            'delay': 2000,
            'fadeSpeed': 500
        };

        if ( settings )
    	{
			$.extend(config, settings);
		}
 
        // variables
        var obj = this;
        var img = obj.find("#images img");
        var count = img.length;
        var counter = 0;

        // append next and previous buttons
        obj.prepend("<div id='menu'></div>");
        var menu = obj.find("#menu");
        menu.append('<i id="prev" class="glyphicon glyphicon-chevron-left grow"></i> ');
        menu.append('<i id="next" class="glyphicon glyphicon-chevron-right grow"></i> ');        
 
        function nextImage() {
            counter = ( counter+1 == count ) ? 0 : counter+1;
        }

        function prevImage() {
            counter = ( counter-1 < 0 ) ? count-1 : counter-1;
        }

        // show first image
        img.eq(0).show();

        // run slideshow
        var intervalID;
        resetTime();


        function fadeout() {
           img.eq(counter).fadeOut(config.fadeSpeed);
        }

        function fadein() {
           img.eq(counter).fadeIn(config.fadeSpeed);
        }

        function next() {
           fadeout();
           nextImage();
           fadein();
        }

        function prev() {
           fadeout();
           prevImage();
           fadein();
        }

        $('#next').click(function(e) {
            next();
            clearInterval(intervalID);
            resetTime();
        });

        $('#prev').click(function(e) {
            prev();
            clearInterval(intervalID);
            resetTime();

        });

        function resetTime() {
            intervalID = setInterval(function()
            {
                next();
            }, config.delay);
        }

        return this;
    };





});
