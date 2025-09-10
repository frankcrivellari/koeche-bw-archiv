function animatedslider_pluginAppObj_231_38() {
    var pluginAppObj_231_38Swiper,
        fullWidth = false,
        resizeTimer; // Set resizeTimer to empty so it resets on page load

    x5engine.boot.push(function(){
           
        resizeAnimatedSwiper_pluginAppObj_231_38();
        loadSwiper();
    
		var pluginAppObj_231_38_resizeTo = null,
		pluginAppObj_231_38_width = 0;
		x5engine.utils.onElementResize(document.getElementById('pluginAppObj_231_38'), function (rect, target) {
			if (pluginAppObj_231_38_width == rect.width) {
				return;
			}
			pluginAppObj_231_38_width = rect.width;
			if (!!pluginAppObj_231_38_resizeTo) {
				clearTimeout(pluginAppObj_231_38_resizeTo);
			}
			pluginAppObj_231_38_resizeTo = setTimeout(function() {
				pluginAppObj_231_38Swiper.destroy(true);
				resizeAnimatedSwiper_pluginAppObj_231_38();
				loadSwiper();
			}, 50);
		});

    
    
    });

    function resizeAnimatedSwiper_pluginAppObj_231_38(){
        
        var container_width = $("#pluginAppObj_231_38").width();
        var heightUI = 666;
        var widthUI  = 1016;
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
            $("#swiper_pluginAppObj_231_38").css({"width": max_width,"height": height + pagination_padding});
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
            $("#swiper_pluginAppObj_231_38").css({"height": height + pagination_padding});
        }
            
        $("#pluginAppObj_231_38 .swiper-container.main").css({"width": width,"height": height});
        $("#pluginAppObj_231_38 .swiper-button-next, #pluginAppObj_231_38 .swiper-button-prev").css({"top": height/2});
    }

    function loadSwiper(){
    
        pluginAppObj_231_38Swiper = new Swiper('#pluginAppObj_231_38 .swiper-container.main', {
        freeMode:            false,
        speed:               1000,
        loop:                true,
        direction:           'horizontal',
        roundLengths:        true,
        autoplay:            5000,
            autoplayDisableOnInteraction: false,
            pagination:          '#pluginAppObj_231_38 .swiper-pagination',
            paginationClickable: true,
            nextButton:          '#pluginAppObj_231_38 .swiper-button-next',
            prevButton:          '#pluginAppObj_231_38 .swiper-button-prev',
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