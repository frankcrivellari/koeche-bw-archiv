function animatedslider_pluginAppObj_218_29() {
    var pluginAppObj_218_29Swiper,
        fullWidth = false,
        resizeTimer; // Set resizeTimer to empty so it resets on page load

    x5engine.boot.push(function(){
           
        resizeAnimatedSwiper_pluginAppObj_218_29();
        loadSwiper();
    
		var pluginAppObj_218_29_resizeTo = null,
		pluginAppObj_218_29_width = 0;
		x5engine.utils.onElementResize(document.getElementById('pluginAppObj_218_29'), function (rect, target) {
			if (pluginAppObj_218_29_width == rect.width) {
				return;
			}
			pluginAppObj_218_29_width = rect.width;
			if (!!pluginAppObj_218_29_resizeTo) {
				clearTimeout(pluginAppObj_218_29_resizeTo);
			}
			pluginAppObj_218_29_resizeTo = setTimeout(function() {
				pluginAppObj_218_29Swiper.destroy(true);
				resizeAnimatedSwiper_pluginAppObj_218_29();
				loadSwiper();
			}, 50);
		});

    
    
    });

    function resizeAnimatedSwiper_pluginAppObj_218_29(){
        
        var container_width = $("#pluginAppObj_218_29").width();
        var heightUI = 1088;
        var widthUI  = 1750;
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
            $("#swiper_pluginAppObj_218_29").css({"width": max_width,"height": height + pagination_padding});
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
            $("#swiper_pluginAppObj_218_29").css({"height": height + pagination_padding});
        }
            
        $("#pluginAppObj_218_29 .swiper-container.main").css({"width": width,"height": height});
        $("#pluginAppObj_218_29 .swiper-button-next, #pluginAppObj_218_29 .swiper-button-prev").css({"top": height/2});
    }

    function loadSwiper(){
    
        pluginAppObj_218_29Swiper = new Swiper('#pluginAppObj_218_29 .swiper-container.main', {
        freeMode:            false,
        speed:               750,
        loop:                true,
        direction:           'horizontal',
        roundLengths:        true,
        autoplay:            4000,
            autoplayDisableOnInteraction: false,
            pagination:          '#pluginAppObj_218_29 .swiper-pagination',
            paginationClickable: true,
            nextButton:          '#pluginAppObj_218_29 .swiper-button-next',
            prevButton:          '#pluginAppObj_218_29 .swiper-button-prev',
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