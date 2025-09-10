function download_button_pluginAppObj_236_49() {

	x5engine.boot.push(function(){

	    

	    resizeButton();

	    if(false){
	    	setBubbleValue(16);
	    	$("#pluginAppObj_236_49 .downloadbtn").one("click", function(){
	    		newDownload(17, true);
	    	});
	    }
	    else{

			$.ajax({
		        url: 'pluginAppObj/pluginAppObj_236_49/download.php?action=total',
		        type: 'POST'
	    	})
	        .fail( function() {
	        	setBubbleValue(16)
	        })
	        .done( function(data) {
	            setBubbleValue(data);
	        });


		    $("#pluginAppObj_236_49 .downloadbtn a").on("click", function(){

		    	var countToShow = $("#pluginAppObj_236_49 .bubble").html();
		    	var animateBubble = false;
		    	if(!($.imCookie("download_count_pluginAppObj_236_49") == "counted")){
					countToShow++;
					animateBubble = true;
		    	}
				newDownload(countToShow, animateBubble);
		    });
		}

	});

	$("#imContent").on("breakpointChangedOrFluid", function (e, breakpoint) {
		resizeButton();
    });

	function setBubbleValue(value){
		$('#pluginAppObj_236_49 .bubble').html(value);$('#pluginAppObj_236_49 .bubble').fadeIn();
	}

	function newDownload(value, animateBubble){

		$("#pluginAppObj_236_49 .bubble").html(value);
		// Text after download, now not implemented
		// $("#pluginAppObj_236_49 .downloadbtn a").html("< ? wsx5 document.write(parameters.after_caption.value) ? >");
		if(animateBubble)
			$("#pluginAppObj_236_49 .bubble").addClass("newdownload");
	}

	function resizeButton(){
		var button = $("#pluginAppObj_236_49 .downloadbtn");
		var bubble = $("#pluginAppObj_236_49 .bubble");
		var containerWidth = $("#pluginAppObj_236_49").parent().width();
		var buttonBorders = 2;
		var bubbleBorders = 2;
		var buttonWidth = 75;
		var bubbleWidth = 42;

		var bubblePosition = "top";
		var spikeDim = 10;
		var wrapper = $("#download_button_wrapper_pluginAppObj_236_49");

		/*automatic behaviour for better responsive design*/
		if((bubblePosition == "left" || bubblePosition == "right") && (containerWidth < buttonWidth + bubbleWidth + spikeDim))
			bubblePosition = "top";

		bubble.attr("data-style", bubblePosition);

		if(containerWidth < buttonWidth)
			button.css("width", containerWidth - buttonBorders);
		else
			button.css("width", "");

		if(containerWidth < bubbleWidth && (bubblePosition == "top" || bubblePosition == "bottom"))
			bubble.css("width", containerWidth - bubbleBorders);
		else
			bubble.css("width", "");

		switch(bubblePosition){
			case "none":
				button.css({"top": 0, "left": 0});
				wrapper.css({"width": button.outerWidth(), "height": button.outerHeight()});
				break;
			case "top":
				button.css({"top": bubble.outerHeight() + spikeDim, "left": Math.max(0, bubble.outerWidth() - button.outerWidth())/2});
				bubble.css({"top": 0, "left": Math.max(0, button.outerWidth() - bubble.outerWidth())/2});
				wrapper.css({"width": Math.max(button.outerWidth(),bubble.outerWidth()), "height": button.outerHeight() + bubble.outerHeight() + spikeDim });
				break;
			case "bottom":
				button.css({"top": 0, "left": Math.max(0, bubble.outerWidth() - button.outerWidth())/2});
				bubble.css({"top": button.outerHeight() + spikeDim, "left": Math.max(0, button.outerWidth() - bubble.outerWidth())/2});
				wrapper.css({"width": Math.max(button.outerWidth(),bubble.outerWidth()), "height": button.outerHeight() + bubble.outerHeight() + spikeDim});
				break;
			case "right":
				button.css({"top": Math.max(0, bubble.outerHeight() - button.outerHeight())/2, "left": 0});
				bubble.css({"top": Math.max(0, button.outerHeight() - bubble.outerHeight())/2, "left": button.outerWidth() + spikeDim});
				wrapper.css({"width": button.outerWidth() + bubble.outerWidth() + spikeDim, "height": Math.max(button.outerHeight(),bubble.outerHeight())});
				break;
			case "left":
				button.css({"top": Math.max(0, bubble.outerHeight() - button.outerHeight())/2, "left": bubble.outerWidth() + spikeDim});
				bubble.css({"top": Math.max(0, button.outerHeight() - bubble.outerHeight())/2, "left": 0});
				wrapper.css({"width": button.outerWidth() + bubble.outerWidth() + spikeDim, "height": Math.max(button.outerHeight(),bubble.outerHeight())});
				break;
		}		
		var maxWidthCss = {maxWidth:'100%'};
		button.css(maxWidthCss);
		bubble.css(maxWidthCss);
		wrapper.css(maxWidthCss);
	}
}