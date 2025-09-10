/*minified*/
function swiperslider_pluginAppObj_227_39() {
var pluginAppObj_227_39Swiper,
    fullWidth = false,
    resizeTimer; // Set resizeTimer to empty so it resets on page load

    x5engine.boot.push(function(){
        
        resized_swiper_pluginAppObj_227_39();
    
		var pluginAppObj_227_39_resizeTo = null,
		pluginAppObj_227_39_firstTime = true,
		pluginAppObj_227_39_width = 0;
		x5engine.utils.onElementResize(document.getElementById('pluginAppObj_227_39'), function (rect, target) {
			if (pluginAppObj_227_39_width == rect.width) {
				return;
			}
			pluginAppObj_227_39_width = rect.width;
			if (!!pluginAppObj_227_39_resizeTo) {
				clearTimeout(pluginAppObj_227_39_resizeTo);
			}
			pluginAppObj_227_39_resizeTo = setTimeout(function() {
			if (!pluginAppObj_227_39_firstTime) {
				$('#pluginAppObj_227_39').css('overflow-x', 'hidden');
				resized_swiper_pluginAppObj_227_39();
				pluginAppObj_227_39Swiper.update();
				pluginAppObj_227_39Swiper.slideTo(0, 1, null);
			}
		pluginAppObj_227_39_firstTime = false;
			}, 50);
		});


        pluginAppObj_227_39Swiper = new Swiper3('#pluginAppObj_227_39 .swiper-container.main', {
            slidesPerView:    1,
            slidesPerColumn:  1,
            spaceBetween:     5,
            freeMode:         true,
            speed:            1000,
            roundLengths: true,
            a11y: true,
                    autoplay: 3500,
        autoplayDisableOnInteraction: false,
        scrollbar: '#pluginAppObj_227_39 .swiper-scrollbar',
        nextButton: '#pluginAppObj_227_39 .swiper-button-next',
        prevButton: '#pluginAppObj_227_39 .swiper-button-prev',

            controlBy: 'container'
        });

        if(true){
            pluginAppObj_227_39ThumbsSwiper = new Swiper3('#pluginAppObj_227_39 .swiper-container.thumbs', {
                spaceBetween: 10,
                centeredSlides: false,
                slidesPerView: "auto",
                touchRatio: 0.2,
                loop: false,
                slideToClickedSlide: false,
                freemode: true,
                //controlBy: 'container'
                //1
            });
            pluginAppObj_227_39Swiper.params.control = pluginAppObj_227_39ThumbsSwiper;
            pluginAppObj_227_39ThumbsSwiper.params.control = pluginAppObj_227_39Swiper;
            
            pluginAppObj_227_39ThumbsSwiper.on('sliderMove', pluginAppObj_227_39Swiper.pauseAutoplay);
pluginAppObj_227_39ThumbsSwiper.on('click', pluginAppObj_227_39Swiper.pauseAutoplay);

        }
    });

    function resized_swiper_pluginAppObj_227_39(){
        
        var heightUI = 592;
        var widthUI  = 600;
        var height = heightUI;
        var width = widthUI;
        var controls_padding = 70
        var pagination_padding = 0
        var thumbs_height = 90; 

        var container_width = $("#pluginAppObj_227_39").width();
        
        if (!fullWidth || false) {
            var max_width = (container_width < width ? container_width : width);
            height = ((max_width - controls_padding) / width) * height;
            width = max_width - controls_padding;

            $("#swiper_pluginAppObj_227_39").css({"width": max_width,"height": height + pagination_padding + thumbs_height});
        }
        else {
            if (container_width > widthUI) {
                height = heightUI;
            }
            else {
                height = (container_width - controls_padding) * height / width;    
            }
            
            width = container_width - controls_padding;

            $("#swiper_pluginAppObj_227_39").css({"width": width + controls_padding, "height": height + pagination_padding + thumbs_height});
        }
        $("#pluginAppObj_227_39 .swiper-container.main").css({"width": width,"height": height });
        $("#pluginAppObj_227_39 .swiper-container.thumbs").css({"width": width});
        $("#pluginAppObj_227_39 .swiper-button-next, #pluginAppObj_227_39 .swiper-button-prev").css({"top": height/2});
            
        if (1 > 1){
            var customHeight =  (height - 0)/1; 
            $("#swiper_pluginAppObj_227_39 .swiper-container.main .swiper-slide").css("height", customHeight);
        }
        else {
            $("#swiper_pluginAppObj_227_39 .swiper-container.main .slide-content").css("height", height);
        }
        
    } 
}