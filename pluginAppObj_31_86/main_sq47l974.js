function animatedimage_pluginAppObj_31_86() {
    
    $(document).ready(function(){
        //Triggering the back side visibility
        switch("mouseover"){
            case "click":
                $('#iandt_pluginAppObj_31_86 .wrapper').click( function(){
                    $(this).toggleClass('back-visible');
                });
                break;
            case "timer":
                setInterval(function() {
                    $('#iandt_pluginAppObj_31_86 .wrapper').toggleClass('back-visible');
                },2000);
                break;
            case "mouseover":
                $('#iandt_pluginAppObj_31_86 .wrapper').hover(function(){
                    $(this).addClass('back-visible');
                }, function(){
                    $(this).removeClass('back-visible');
                });
                break;
        }
        
         $('#imContent').on('breakpointChangedOrFluid', function (e, breakpoint) {
            resizeIaT_pluginAppObj_31_86();
         });

         resizeIaT_pluginAppObj_31_86();
    });

    //Proportional resize for responsive behavior
    function resizeIaT_pluginAppObj_31_86(){
        
        var w = 818;
        var h = 313  
        var containerWidth = $('#pluginAppObj_31_86').width();
        var fact = containerWidth < w ? containerWidth / w : 1;
        
        $('#pluginAppObj_31_86 .wrapper, #pluginAppObj_31_86 .sides-container, #pluginAppObj_31_86 .text-container').css( {width: w * fact, height: h * fact} );
    }
}