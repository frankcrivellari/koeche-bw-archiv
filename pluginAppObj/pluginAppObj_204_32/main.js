function animatedslider_pluginAppObj_204_32() {
    var pluginAppObj_204_32Swiper,
        fullWidth = false,
        resizeTimer; // Set resizeTimer to empty so it resets on page load

    x5engine.boot.push(function(){
           
        resizeAnimatedSwiper_pluginAppObj_204_32();
        loadSwiper();
    
		var pluginAppObj_204_32_resizeTo = null,
		pluginAppObj_204_32_width = 0;
		x5engine.utils.onElementResize(document.getElementById('pluginAppObj_204_32'), function (rect, target) {
			if (pluginAppObj_204_32_width == rect.width) {
				return;
			}
			pluginAppObj_204_32_width = rect.width;
			if (!!pluginAppObj_204_32_resizeTo) {
				clearTimeout(pluginAppObj_204_32_resizeTo);
			}
			pluginAppObj_204_32_resizeTo = setTimeout(function() {
				pluginAppObj_204_32Swiper.destroy(true);
				resizeAnimatedSwiper_pluginAppObj_204_32();
				loadSwiper();
			}, 50);
		});

    
    
    });

    function resizeAnimatedSwiper_pluginAppObj_204_32(){
        
        var container_width = $("#pluginAppObj_204_32").width();
        var heightUI = 450;
        var widthUI  = 600;
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
            $("#swiper_pluginAppObj_204_32").css({"width": max_width,"height": height + pagination_padding});
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
            $("#swiper_pluginAppObj_204_32").css({"height": height + pagination_padding});
        }
            
        $("#pluginAppObj_204_32 .swiper-container.main").css({"width": width,"height": height});
        $("#pluginAppObj_204_32 .swiper-button-next, #pluginAppObj_204_32 .swiper-button-prev").css({"top": height/2});
    }

    function loadSwiper(){
    
        pluginAppObj_204_32Swiper = new Swiper('#pluginAppObj_204_32 .swiper-container.main', {
        freeMode:            false,
        speed:               1000,
        loop:                true,
        direction:           'horizontal',
        roundLengths:        true,
                    pagination:          '#pluginAppObj_204_32 .swiper-pagination',
            paginationClickable: true,
            nextButton:          '#pluginAppObj_204_32 .swiper-button-next',
            prevButton:          '#pluginAppObj_204_32 .swiper-button-prev',
            effect:              getBestEffect('slide'),
 
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