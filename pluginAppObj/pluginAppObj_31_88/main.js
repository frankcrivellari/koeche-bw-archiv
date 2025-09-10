function animatedslider_pluginAppObj_31_88() {
    var pluginAppObj_31_88Swiper,
        fullWidth = false,
        resizeTimer; // Set resizeTimer to empty so it resets on page load

    x5engine.boot.push(function(){
           
        resizeAnimatedSwiper_pluginAppObj_31_88();
        loadSwiper();
    
		var pluginAppObj_31_88_resizeTo = null,
		pluginAppObj_31_88_width = 0;
		x5engine.utils.onElementResize(document.getElementById('pluginAppObj_31_88'), function (rect, target) {
			if (pluginAppObj_31_88_width == rect.width) {
				return;
			}
			pluginAppObj_31_88_width = rect.width;
			if (!!pluginAppObj_31_88_resizeTo) {
				clearTimeout(pluginAppObj_31_88_resizeTo);
			}
			pluginAppObj_31_88_resizeTo = setTimeout(function() {
				pluginAppObj_31_88Swiper.destroy(true);
				resizeAnimatedSwiper_pluginAppObj_31_88();
				loadSwiper();
			}, 50);
		});

    
    
    });

    function resizeAnimatedSwiper_pluginAppObj_31_88(){
        
        var container_width = $("#pluginAppObj_31_88").width();
        var heightUI = 900;
        var widthUI  = 1200;
        var height = heightUI;
        var width = widthUI;
        var max_width = container_width;
        var controls_padding = 0
        var pagination_padding = 0 
        
        if (!fullWidth || false) {
            //obj in the bp ceil
            max_width = (container_width < width ? container_width : width);
            height = ((max_width - controls_padding) / width) * height;
                        
            width = max_width - controls_padding;
            $("#swiper_pluginAppObj_31_88").css({"width": max_width,"height": height + pagination_padding});
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
            $("#swiper_pluginAppObj_31_88").css({"height": height + pagination_padding});
        }
            
        $("#pluginAppObj_31_88 .swiper-container.main").css({"width": width,"height": height});
        $("#pluginAppObj_31_88 .swiper-button-next, #pluginAppObj_31_88 .swiper-button-prev").css({"top": height/2});
    }

    function loadSwiper(){
    
        pluginAppObj_31_88Swiper = new Swiper('#pluginAppObj_31_88 .swiper-container.main', {
        freeMode:            false,
        speed:               1000,
        loop:                true,
        direction:           'horizontal',
        roundLengths:        true,
        autoplay:            3000,
            autoplayDisableOnInteraction: false,
            pagination:          '#pluginAppObj_31_88 .swiper-pagination',
            paginationClickable: true,
            nextButton:          '#pluginAppObj_31_88 .swiper-button-next',
            prevButton:          '#pluginAppObj_31_88 .swiper-button-prev',
            effect:              getBestEffect('cube'),
            cube:                {slideShadows: false, shadow: false},
 
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