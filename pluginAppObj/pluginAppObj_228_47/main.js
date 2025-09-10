function animatedslider_pluginAppObj_228_47() {
    var pluginAppObj_228_47Swiper,
        fullWidth = false,
        resizeTimer; // Set resizeTimer to empty so it resets on page load

    x5engine.boot.push(function(){
           
        resizeAnimatedSwiper_pluginAppObj_228_47();
        loadSwiper();
    
		var pluginAppObj_228_47_resizeTo = null,
		pluginAppObj_228_47_width = 0;
		x5engine.utils.onElementResize(document.getElementById('pluginAppObj_228_47'), function (rect, target) {
			if (pluginAppObj_228_47_width == rect.width) {
				return;
			}
			pluginAppObj_228_47_width = rect.width;
			if (!!pluginAppObj_228_47_resizeTo) {
				clearTimeout(pluginAppObj_228_47_resizeTo);
			}
			pluginAppObj_228_47_resizeTo = setTimeout(function() {
				pluginAppObj_228_47Swiper.destroy(true);
				resizeAnimatedSwiper_pluginAppObj_228_47();
				loadSwiper();
			}, 50);
		});

    
    
    });

    function resizeAnimatedSwiper_pluginAppObj_228_47(){
        
        var container_width = $("#pluginAppObj_228_47").width();
        var heightUI = 788;
        var widthUI  = 1389;
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
            $("#swiper_pluginAppObj_228_47").css({"width": max_width,"height": height + pagination_padding});
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
            $("#swiper_pluginAppObj_228_47").css({"height": height + pagination_padding});
        }
            
        $("#pluginAppObj_228_47 .swiper-container.main").css({"width": width,"height": height});
        $("#pluginAppObj_228_47 .swiper-button-next, #pluginAppObj_228_47 .swiper-button-prev").css({"top": height/2});
    }

    function loadSwiper(){
    
        pluginAppObj_228_47Swiper = new Swiper('#pluginAppObj_228_47 .swiper-container.main', {
        freeMode:            false,
        speed:               750,
        loop:                true,
        direction:           'horizontal',
        roundLengths:        true,
        autoplay:            4000,
            autoplayDisableOnInteraction: false,
            pagination:          '#pluginAppObj_228_47 .swiper-pagination',
            paginationClickable: true,
            nextButton:          '#pluginAppObj_228_47 .swiper-button-next',
            prevButton:          '#pluginAppObj_228_47 .swiper-button-prev',
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