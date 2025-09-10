function animatedslider_pluginAppObj_232_56() {
    var pluginAppObj_232_56Swiper,
        fullWidth = false,
        resizeTimer; // Set resizeTimer to empty so it resets on page load

    x5engine.boot.push(function(){
           
        resizeAnimatedSwiper_pluginAppObj_232_56();
        loadSwiper();
    
		var pluginAppObj_232_56_resizeTo = null,
		pluginAppObj_232_56_width = 0;
		x5engine.utils.onElementResize(document.getElementById('pluginAppObj_232_56'), function (rect, target) {
			if (pluginAppObj_232_56_width == rect.width) {
				return;
			}
			pluginAppObj_232_56_width = rect.width;
			if (!!pluginAppObj_232_56_resizeTo) {
				clearTimeout(pluginAppObj_232_56_resizeTo);
			}
			pluginAppObj_232_56_resizeTo = setTimeout(function() {
				pluginAppObj_232_56Swiper.destroy(true);
				resizeAnimatedSwiper_pluginAppObj_232_56();
				loadSwiper();
			}, 50);
		});

    
    
    });

    function resizeAnimatedSwiper_pluginAppObj_232_56(){
        
        var container_width = $("#pluginAppObj_232_56").width();
        var heightUI = 900;
        var widthUI  = 1200;
        var height = heightUI;
        var width = widthUI;
        var max_width = container_width;
        var controls_padding = 70
        var pagination_padding = 18 
        
        if (!fullWidth || false) {
            //obj in the bp ceil
            max_width = (container_width < width ? container_width : width);
            height = ((max_width - controls_padding) / width) * height;
                        
            width = max_width - controls_padding;
            $("#swiper_pluginAppObj_232_56").css({"width": max_width,"height": height + pagination_padding});
        }
        else {
            //obj fullwidth
            if (max_width > widthUI) {
                height = heightUI;
            }
            else {
                height = ((max_width - controls_padding) / widthUI) * height;
            }
            
            width = container_width - controls_padding;
            $("#swiper_pluginAppObj_232_56").css({"height": height + pagination_padding});
        }
            
        $("#pluginAppObj_232_56 .swiper-container.main").css({"width": width,"height": height});
        $("#pluginAppObj_232_56 .swiper-button-next, #pluginAppObj_232_56 .swiper-button-prev").css({"top": height/2});
    }

    function loadSwiper(){
    
        pluginAppObj_232_56Swiper = new Swiper('#pluginAppObj_232_56 .swiper-container.main', {
        freeMode:            false,
        speed:               1000,
        loop:                true,
        direction:           'horizontal',
        roundLengths:        true,
        autoplay:            10000,
            autoplayDisableOnInteraction: false,
            pagination:          '#pluginAppObj_232_56 .swiper-pagination',
            paginationClickable: true,
            nextButton:          '#pluginAppObj_232_56 .swiper-button-next',
            prevButton:          '#pluginAppObj_232_56 .swiper-button-prev',
            effect:              getBestEffect('coverflow'),
            coverflow:           {slideShadows : true, rotate: 80, stretch: 0, depth: 200, modifier: 1},
 
        });
    }

    function isIE(){
        return navigator.userAgent.indexOf('MSIE') !== -1 || navigator.appVersion.indexOf('Trident/') > 0;
    }

    function getBestEffect(effect){
        if(effect == 'none')
            return 'fade';
        

        if(isIE()){
            if (['cube', 'stack'].indexOf(effect) >= 0)
                return 'fade'
        }

        return effect;
    }

}