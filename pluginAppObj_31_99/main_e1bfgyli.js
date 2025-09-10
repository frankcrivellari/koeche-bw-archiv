function animatedimage_pluginAppObj_31_99() {
    
    $(document).ready(function(){
        //Triggering the back side visibility
        switch("mouseover"){
            case "click":
                $('#iandt_pluginAppObj_31_99 .wrapper').click( function(){
                    $(this).toggleClass('back-visible');
                });
                break;
            case "timer":
                setInterval(function() {
                    $('#iandt_pluginAppObj_31_99 .wrapper').toggleClass('back-visible');
                },2000);
                break;
            case "mouseover":
                $('#iandt_pluginAppObj_31_99 .wrapper').hover(function(){
                    $(this).addClass('back-visible');
                }, function(){
                    $(this).removeClass('back-visible');
                });
                break;
        }
        
         $('#imContent').on('breakpointChangedOrFluid', function (e, breakpoint) {
            resizeIaT_pluginAppObj_31_99();
         });

         resizeIaT_pluginAppObj_31_99();
    });

    //Proportional resize for responsive behavior
    function resizeIaT_pluginAppObj_31_99(){
        
        var w = 658;
        var h = 323  
        var containerWidth = $('#pluginAppObj_31_99').width();
        var fact = containerWidth < w ? containerWidth / w : 1;
        
        $('#pluginAppObj_31_99 .wrapper, #pluginAppObj_31_99 .sides-container, #pluginAppObj_31_99 .text-container').css( {width: w * fact, height: h * fact} );
    }
}