function animatedslider_pluginAppObj_44_95() {
    var pluginAppObj_44_95Swiper,
        fullWidth = false,
        resizeTimer; // Set resizeTimer to empty so it resets on page load

    x5engine.boot.push(function(){
           
        resizeAnimatedSwiper_pluginAppObj_44_95();
        loadSwiper();
    
		var pluginAppObj_44_95_resizeTo = null,
		pluginAppObj_44_95_width = 0;
		x5engine.utils.onElementResize(document.getElementById('pluginAppObj_44_95'), function (rect, target) {
			if (pluginAppObj_44_95_width == rect.width) {
				return;
			}
			pluginAppObj_44_95_width = rect.width;
			if (!!pluginAppObj_44_95_resizeTo) {
				clearTimeout(pluginAppObj_44_95_resizeTo);
			}
			pluginAppObj_44_95_resizeTo = setTimeout(function() {
				pluginAppObj_44_95Swiper.destroy(true);
				resizeAnimatedSwiper_pluginAppObj_44_95();
				loadSwiper();
			}, 50);
		});

    
    
    });

    function resizeAnimatedSwiper_pluginAppObj_44_95(){
        
        var container_width = $("#pluginAppObj_44_95").width();
        var heightUI = 1161;
        var widthUI  = 1500;
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
            $("#swiper_pluginAppObj_44_95").css({"width": max_width,"height": height + pagination_padding});
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
            $("#swiper_pluginAppObj_44_95").css({"height": height + pagination_padding});
        }
            
        $("#pluginAppObj_44_95 .swiper-container.main").css({"width": width,"height": height});
        $("#pluginAppObj_44_95 .swiper-button-next, #pluginAppObj_44_95 .swiper-button-prev").css({"top": height/2});
    }

    function loadSwiper(){
    
        pluginAppObj_44_95Swiper = new Swiper('#pluginAppObj_44_95 .swiper-container.main', {
        freeMode:            false,
        speed:               750,
        loop:                true,
        direction:           'horizontal',
        roundLengths:        true,
                    pagination:          '#pluginAppObj_44_95 .swiper-pagination',
            paginationClickable: true,
            nextButton:          '#pluginAppObj_44_95 .swiper-button-next',
            prevButton:          '#pluginAppObj_44_95 .swiper-button-prev',
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