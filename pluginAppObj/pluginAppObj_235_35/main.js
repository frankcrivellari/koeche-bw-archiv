/*minified*/
function swiperslider_pluginAppObj_235_35() {
var pluginAppObj_235_35Swiper,
    fullWidth = false,
    resizeTimer; // Set resizeTimer to empty so it resets on page load

    x5engine.boot.push(function(){
        
        resized_swiper_pluginAppObj_235_35();
    
		var pluginAppObj_235_35_resizeTo = null,
		pluginAppObj_235_35_firstTime = true,
		pluginAppObj_235_35_width = 0;
		x5engine.utils.onElementResize(document.getElementById('pluginAppObj_235_35'), function (rect, target) {
			if (pluginAppObj_235_35_width == rect.width) {
				return;
			}
			pluginAppObj_235_35_width = rect.width;
			if (!!pluginAppObj_235_35_resizeTo) {
				clearTimeout(pluginAppObj_235_35_resizeTo);
			}
			pluginAppObj_235_35_resizeTo = setTimeout(function() {
			if (!pluginAppObj_235_35_firstTime) {
				$('#pluginAppObj_235_35').css('overflow-x', 'hidden');
				resized_swiper_pluginAppObj_235_35();
				pluginAppObj_235_35Swiper.update();
				pluginAppObj_235_35Swiper.slideTo(0, 1, null);
			}
		pluginAppObj_235_35_firstTime = false;
			}, 50);
		});


        pluginAppObj_235_35Swiper = new Swiper3('#pluginAppObj_235_35 .swiper-container.main', {
            slidesPerView:    1,
            slidesPerColumn:  1,
            spaceBetween:     5,
            freeMode:         true,
            speed:            1000,
            roundLengths: true,
            a11y: true,
                    autoplay: 3500,
        autoplayDisableOnInteraction: false,
        scrollbar: '#pluginAppObj_235_35 .swiper-scrollbar',
        nextButton: '#pluginAppObj_235_35 .swiper-button-next',
        prevButton: '#pluginAppObj_235_35 .swiper-button-prev',

            controlBy: 'container'
        });

        if(true){
            pluginAppObj_235_35ThumbsSwiper = new Swiper3('#pluginAppObj_235_35 .swiper-container.thumbs', {
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
            pluginAppObj_235_35Swiper.params.control = pluginAppObj_235_35ThumbsSwiper;
            pluginAppObj_235_35ThumbsSwiper.params.control = pluginAppObj_235_35Swiper;
            
            pluginAppObj_235_35ThumbsSwiper.on('sliderMove', pluginAppObj_235_35Swiper.pauseAutoplay);
pluginAppObj_235_35ThumbsSwiper.on('click', pluginAppObj_235_35Swiper.pauseAutoplay);

        }
    });

    function resized_swiper_pluginAppObj_235_35(){
        
        var heightUI = 633;
        var widthUI  = 750;
        var height = heightUI;
        var width = widthUI;
        var controls_padding = 70
        var pagination_padding = 0
        var thumbs_height = 90; 

        var container_width = $("#pluginAppObj_235_35").width();
        
        if (!fullWidth || false) {
            var max_width = (container_width < width ? container_width : width);
            height = ((max_width - controls_padding) / width) * height;
            width = max_width - controls_padding;

            $("#swiper_pluginAppObj_235_35").css({"width": max_width,"height": height + pagination_padding + thumbs_height});
        }
        else {
            if (container_width > widthUI) {
                height = heightUI;
            }
            else {
                height = (container_width - controls_padding) * height / width;    
            }
            
            width = container_width - controls_padding;

            $("#swiper_pluginAppObj_235_35").css({"width": width + controls_padding, "height": height + pagination_padding + thumbs_height});
        }
        $("#pluginAppObj_235_35 .swiper-container.main").css({"width": width,"height": height });
        $("#pluginAppObj_235_35 .swiper-container.thumbs").css({"width": width});
        $("#pluginAppObj_235_35 .swiper-button-next, #pluginAppObj_235_35 .swiper-button-prev").css({"top": height/2});
            
        if (1 > 1){
            var customHeight =  (height - 0)/1; 
            $("#swiper_pluginAppObj_235_35 .swiper-container.main .swiper-slide").css("height", customHeight);
        }
        else {
            $("#swiper_pluginAppObj_235_35 .swiper-container.main .slide-content").css("height", height);
        }
        
    } 
}