function animatedimage_pluginAppObj_31_95() {
    
    $(document).ready(function(){
        //Triggering the back side visibility
        switch("mouseover"){
            case "click":
                $('#iandt_pluginAppObj_31_95 .wrapper').click( function(){
                    $(this).toggleClass('back-visible');
                });
                break;
            case "timer":
                setInterval(function() {
                    $('#iandt_pluginAppObj_31_95 .wrapper').toggleClass('back-visible');
                },2000);
                break;
            case "mouseover":
                $('#iandt_pluginAppObj_31_95 .wrapper').hover(function(){
                    $(this).addClass('back-visible');
                }, function(){
                    $(this).removeClass('back-visible');
                });
                break;
        }
        
         $('#imContent').on('breakpointChangedOrFluid', function (e, breakpoint) {
            resizeIaT_pluginAppObj_31_95();
         });

         resizeIaT_pluginAppObj_31_95();
    });

    //Proportional resize for responsive behavior
    function resizeIaT_pluginAppObj_31_95(){
        
        var w = 420;
        var h = 336  
        var containerWidth = $('#pluginAppObj_31_95').width();
        var fact = containerWidth < w ? containerWidth / w : 1;
        
        $('#pluginAppObj_31_95 .wrapper, #pluginAppObj_31_95 .sides-container, #pluginAppObj_31_95 .text-container').css( {width: w * fact, height: h * fact} );
    }
}