function download_button_pluginAppObj_186_20() {

	x5engine.boot.push(function(){

	    

	    resizeButton();

	    if(false){
	    	setBubbleValue(23);
	    	$("#pluginAppObj_186_20 .downloadbtn").one("click", function(){
	    		newDownload(24, true);
	    	});
	    }
	    else{

			$.ajax({
		        url: 'pluginAppObj/pluginAppObj_186_20/download.php?action=total',
		        type: 'POST'
	    	})
	        .fail( function() {
	        	setBubbleValue(23)
	        })
	        .done( function(data) {
	            setBubbleValue(data);
	        });


		    $("#pluginAppObj_186_20 .downloadbtn a").on("click", function(){

		    	var countToShow = $("#pluginAppObj_186_20 .bubble").html();
		    	var animateBubble = false;
		    	if(!($.imCookie("download_count_pluginAppObj_186_20") == "counted")){
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
		
	}

	function newDownload(value, animateBubble){

		$("#pluginAppObj_186_20 .bubble").html(value);
		// Text after download, now not implemented
		// $("#pluginAppObj_186_20 .downloadbtn a").html("< ? wsx5 document.write(parameters.after_caption.value) ? >");
		if(animateBubble)
			$("#pluginAppObj_186_20 .bubble").addClass("newdownload");
	}

	function resizeButton(){
		var button = $("#pluginAppObj_186_20 .downloadbtn");
		var bubble = $("#pluginAppObj_186_20 .bubble");
		var containerWidth = $("#pluginAppObj_186_20").parent().width();
		var buttonBorders = 4;
		var bubbleBorders = 2;
		var buttonWidth = 154;
		var bubbleWidth = 102;

		var bubblePosition = "none";
		var spikeDim = 10;
		var wrapper = $("#download_button_wrapper_pluginAppObj_186_20");

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