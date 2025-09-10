function animatedslider_pluginAppObj_31_88() {
var pluginAppObj_31_88Swiper;

    x5engine.boot.push(function(){
        resizeAnimatedSwiper_pluginAppObj_31_88();
        loadSwiper();
    
        (function($) {
           var $window = $(window);

            $window
                .resize(resize);
        })(jQuery);
    });

    function resize() {    
        pluginAppObj_31_88Swiper.destroy(true);
        resizeAnimatedSwiper_pluginAppObj_31_88();
        loadSwiper();
    }

    function resizeAnimatedSwiper_pluginAppObj_31_88(){
        var height = 900;
        var width = 1200;
        var controls_padding =   0
        var pagination_padding = 0
        var container_width = $("#pluginAppObj_31_88").width();
        var max_width = (container_width < width ? container_width : width);
        height = ((max_width - controls_padding) / width) * height;
        width = max_width - controls_padding;

        $("#pluginAppObj_31_88 .swiper-container.main").css({"width": width,"height": height});
        $("#pluginAppObj_31_88 .swiper-button-next, #pluginAppObj_31_88 .swiper-button-prev").css({"top": height/2});
        $("#swiper_pluginAppObj_31_88").css({"width": max_width,"height": height + pagination_padding});
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
        var ua = window.navigator.userAgent;
        var old_ie = ua.indexOf('MSIE ');
        var new_ie = ua.indexOf('Trident/');
        return (old_ie > -1 || new_ie > -1);
    }

    function getBestEffect(effect){
        if(effect == 'none')
            return 'fade';
        

        if(isIE()){
            if (['cube', 'flip', 'stack'].indexOf(effect) >= 0)
                return 'fade'
        }

        return effect;
    }

}