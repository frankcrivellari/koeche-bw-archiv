function masonry_pluginAppObj_227_31() {
    
	var $grid,
    grid = "",
    loaders = [],
    loadingTimeout,
	effect = "Osiris",
    resizeTimer;
    
    x5engine.boot.push(function(){resize_masonry();
        
        grid = $("#masonry_pluginAppObj_227_31 .grid");
        $grid = $('#masonry_pluginAppObj_227_31 .grid').masonry({
		  itemSelector: '#masonry_pluginAppObj_227_31 .grid-item',
		  percentPosition: true,
		  columnWidth: $('#masonry_pluginAppObj_227_31 .grid-item')[0],
          transitionDuration: 0
		});
    
        $('#masonry_pluginAppObj_227_31 .grid-item .item-wrapper img').each(function(){
            $(this).attr("src", x5engine.settings.currentPath + $(this).attr("src"));
        });
    
        if("online" !== 'uipreview'){    
            x5engine.utils.onElementInViewPort($("#masonry_pluginAppObj_227_31")[0],loadImage,$("#masonry_pluginAppObj_227_31 .grid-item:lt(1)").height() /3);
        }
        else{
            loadImage();
        }
    
				var pluginAppObj_227_31_resizeTo = null,
		pluginAppObj_227_31_width = 0;
		x5engine.utils.onElementResize(document.getElementById('pluginAppObj_227_31'), function (rect, target) {
			if (pluginAppObj_227_31_width == rect.width) {
				return;
			}
			pluginAppObj_227_31_width = rect.width;
			if (!!pluginAppObj_227_31_resizeTo) {
				clearTimeout(pluginAppObj_227_31_resizeTo);
			}
			pluginAppObj_227_31_resizeTo = setTimeout(function() {
				init_resize();
			}, 50);
		});
create_showbox();
	});
    
    function loadImage(){ 
        $grid.imagesLoaded().progress(function (imgLoad, image) {
            $grid.masonry('layout');
            if (effect === "none") {
                $(image.img).delay(500).animate({
                    opacity: 1
                });
            }
        }).done(function (instance) {
            if (effect !== "none") {
                loaders.push(new GridLoaderFx($grid));
                applyFx();
            }
            resized_pluginAppObj_227_31 ();
        }); 
    }
    
    function init_resize(){
        resize_masonry();
		$grid.masonry('layout');   
    }

	function resize_masonry(){
		var columns = 3;
		var mode = 'resize';
		var wsx5Mode = 'online';
		var width;
		var max_width;
        var container_width = $("#pluginAppObj_227_31").width();
        
        if (mode == 'resize' || (false && x5engine.responsive.isDesktopMode()) ) {
            if (wsx5Mode == 'uipreview' || container_width > (columns * 64)) {
                width = (100/columns) + "%";
            }
            else {
				width = "100%";
			}
        }
		else {
			var item_width = 282;
			width = 100 / (Math.ceil(container_width / item_width)) + "%";
		}
		$("#masonry_pluginAppObj_227_31 .grid-item").css("width", width);
		resized_pluginAppObj_227_31();
	}

    function resized_pluginAppObj_227_31(){
        $('#masonry_pluginAppObj_227_31 .grid-item .item-wrapper').each(function(){
            $(this).find('.overlay-content').css({width: $(this).width(), height: $(this).height()});
        });
    }
    
    function create_showbox(){
        $("#masonry_pluginAppObj_227_31 .grid-item.showbox").off("click");
        $("#masonry_pluginAppObj_227_31 .grid-item.showbox").on("click", function(e) { 
            var starting_index = parseInt($(this).attr("data-index"),10);
            var images = ['pluginAppObj/pluginAppObj_227_31/IMG_8987.JPG','pluginAppObj/pluginAppObj_227_31/IMG_8988.JPG','pluginAppObj/pluginAppObj_227_31/IMG_8989.JPG','pluginAppObj/pluginAppObj_227_31/IMG_8990.JPG','pluginAppObj/pluginAppObj_227_31/IMG_8991.jpg','pluginAppObj/pluginAppObj_227_31/IMG_8992.jpg','pluginAppObj/pluginAppObj_227_31/IMG_8993.JPG','pluginAppObj/pluginAppObj_227_31/IMG_8995.jpg','pluginAppObj/pluginAppObj_227_31/IMG_9002.JPG','pluginAppObj/pluginAppObj_227_31/IMG_9003.JPG','pluginAppObj/pluginAppObj_227_31/IMG_9004.JPG','pluginAppObj/pluginAppObj_227_31/IMG_9005.JPG','pluginAppObj/pluginAppObj_227_31/IMG_9006.JPG','pluginAppObj/pluginAppObj_227_31/IMG_9007.JPG','pluginAppObj/pluginAppObj_227_31/IMG_9008.JPG','pluginAppObj/pluginAppObj_227_31/IMG_9009.JPG','pluginAppObj/pluginAppObj_227_31/IMG_9010.JPG','pluginAppObj/pluginAppObj_227_31/IMG_9011.jpg','pluginAppObj/pluginAppObj_227_31/IMG_9012.JPG','pluginAppObj/pluginAppObj_227_31/IMG_9014.JPG','pluginAppObj/pluginAppObj_227_31/IMG_9016.JPG','pluginAppObj/pluginAppObj_227_31/IMG_9018.JPG','pluginAppObj/pluginAppObj_227_31/IMG_9062.jpg','pluginAppObj/pluginAppObj_227_31/IMG_9063.jpg','pluginAppObj/pluginAppObj_227_31/IMG_9064.jpg','pluginAppObj/pluginAppObj_227_31/IMG_9065.JPG','pluginAppObj/pluginAppObj_227_31/IMG_9066.JPG','pluginAppObj/pluginAppObj_227_31/IMG_9067.jpg','pluginAppObj/pluginAppObj_227_31/IMG_9068.jpg','pluginAppObj/pluginAppObj_227_31/IMG_9069.JPG','pluginAppObj/pluginAppObj_227_31/IMG_9084.JPG','pluginAppObj/pluginAppObj_227_31/IMG_9094.JPG','pluginAppObj/pluginAppObj_227_31/IMG_9096.JPG','pluginAppObj/pluginAppObj_227_31/IMG_9115.JPG','pluginAppObj/pluginAppObj_227_31/IMG_9122.JPG','pluginAppObj/pluginAppObj_227_31/IMG_9125.JPG','pluginAppObj/pluginAppObj_227_31/IMG_9126.JPG','pluginAppObj/pluginAppObj_227_31/IMG_9127.JPG','pluginAppObj/pluginAppObj_227_31/IMG_9130.JPG','pluginAppObj/pluginAppObj_227_31/IMG_9131.JPG','pluginAppObj/pluginAppObj_227_31/IMG_9132.JPG','pluginAppObj/pluginAppObj_227_31/IMG_9133.JPG','pluginAppObj/pluginAppObj_227_31/IMG_9134.JPG','pluginAppObj/pluginAppObj_227_31/IMG_9135.JPG','pluginAppObj/pluginAppObj_227_31/IMG_9136.JPG','pluginAppObj/pluginAppObj_227_31/IMG_9137.JPG','pluginAppObj/pluginAppObj_227_31/Merkel.JPG'];
            var medias = [];
            for(var i = 0; i < images.length; i++) {
                medias[i] = {url: x5engine.settings.currentPath + images[i], type: "image"};
            } 
            x5engine.imShowBox({
                media: medias,
                }, starting_index , $(this));
            return false; 
        });
    }
    
    function applyFx() {
        loadingTimeout = setTimeout(function () {
            // Apply effect.
            loaders[0]._render();
        }, 500);
    }
    
    function GridLoaderFx(el, options) {
        this.el = el;
        this.items = $(el).find('.grid-item .item-img');
    }

    GridLoaderFx.prototype._render = function () {
        // Reset styles.
        this._resetStyles();

        var self = this,
            effectSettings = this.effects[effect],
            animeOpts = effectSettings.animeOpts

        if (effectSettings.perspective != undefined) {
        [].slice.call(this.items).forEach(function (item) {
                item.parentNode.style.WebkitPerspective = item.parentNode.style.perspective = effectSettings.perspective + 'px';
            });
        }

        if (effectSettings.origin != undefined) {
        [].slice.call(this.items).forEach(function (item) {
                item.style.WebkitTransformOrigin = item.style.transformOrigin = effectSettings.origin;
            });
        }

        if (effectSettings.lineDrawing != undefined) {
        [].slice.call(this.items).forEach(function (item) {
                // Create SVG.
                var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg'),
                    path = document.createElementNS('http://www.w3.org/2000/svg', 'path'),
                    itemW = item.offsetWidth-0.1,
                    itemH = item.offsetHeight;

                svg.setAttribute('width', itemW + 'px');
                svg.setAttribute('height', itemH + 'px');
                svg.setAttribute('viewBox', '0 0 ' + itemW + ' ' + itemH);
                svg.setAttribute('class', 'grid__deco');
                path.setAttribute('d', 'M0,0 l' + itemW + ',0 0,' + itemH + ' -' + itemW + ',0 0,-' + itemH);
                path.setAttribute('stroke-dashoffset', anime.setDashoffset(path));
                svg.appendChild(path);
                item.parentNode.appendChild(svg);
            });

            var animeLineDrawingOpts = effectSettings.animeLineDrawingOpts;
            animeLineDrawingOpts.targets = document.querySelectorAll('#masonry_pluginAppObj_227_31 .grid__deco > path');
            anime.remove(animeLineDrawingOpts.targets);
            anime(animeLineDrawingOpts);
        }

        if (effectSettings.revealer != undefined) {
        [].slice.call(this.items).forEach(function (item) {
                var revealer = document.createElement('div');
                revealer.className = 'grid__reveal';
                if (effectSettings.revealerOrigin != undefined) {
                    revealer.style.transformOrigin = effectSettings.revealerOrigin;
                }
                if (effectSettings.revealerColor != undefined) {
					revealer.style.backgroundColor = 'rgba(159, 171, 176, 1)';
                }
                item.parentNode.appendChild(revealer);
            });

            var animeRevealerOpts = effectSettings.animeRevealerOpts;
            animeRevealerOpts.targets = document.querySelectorAll('#masonry_pluginAppObj_227_31 .grid__reveal');
            animeRevealerOpts.begin = function (obj) {
                for (var i = 0, len = obj.animatables.length; i < len; ++i) {
                    obj.animatables[i].target.style.opacity = 1;
                }
            };
            anime.remove(animeRevealerOpts.targets);
            anime(animeRevealerOpts);
        }

        if (effectSettings.itemOverflowHidden) {
        [].slice.call(this.items).forEach(function (item) {
                item.parentNode.style.overflow = 'hidden';
            });
        }

        animeOpts.targets = effectSettings.sortTargetsFn && typeof effectSettings.sortTargetsFn === 'function' ? [].slice.call(this.items).sort(effectSettings.sortTargetsFn) : document.querySelectorAll("#masonry_pluginAppObj_227_31 .item-img");
        animeOpts.complete = function(anim) {
            // Reset some CSS defaults useful for hover effects
            for (var i = 0; i < loaders[0].items.length; i++) {
                loaders[0].items[i].style = '';
                loaders[0].items[i].style.opacity = '1';
                loaders[0].items[i].style.transition = 'all 300ms ease';
            }
        };
        anime.remove(animeOpts.targets);
        anime(animeOpts);
    };

    GridLoaderFx.prototype._resetStyles = function () {
        this.el.style = "";
        this.el.style.perspective = "";
        this.el.style.WebkitPerspective = this.el.style.perspective = 'none';
    [].slice.call(this.items).forEach(function (item) {
            var gItem = item.parentNode;
            item.style.opacity = 0;
            item.style.WebkitTransformOrigin = item.style.transformOrigin = '50% 50%';
            item.style.transform = 'none';

            var svg = item.parentNode.querySelector('svg.grid__deco');
            if (svg) {
                gItem.removeChild(svg);
            }

            var revealer = item.parentNode.querySelector('.grid__reveal');
            if (revealer) {
                gItem.removeChild(revealer);
            }

            gItem.style.overflow = '';
        });
    };

	/**
	 * Effects.
	 */
	GridLoaderFx.prototype.effects = {
		'Hapi': {
			animeOpts: {
				duration: function(t,i) {
					return 600 + i*75;
				},
				easing: 'easeOutExpo',
				delay: function(t,i) {
					return i*50;
				},
				opacity: {
					value: [0,1],
					easing: 'linear'
				},
				scale: [0,1]	
			}
		},
		'Amun': {
			// Sort target elements function.
			sortTargetsFn: function(a,b) {
				var aBounds = a.getBoundingClientRect(),
					bBounds = b.getBoundingClientRect();

				return (aBounds.left - bBounds.left) || (aBounds.top - bBounds.top);
			},
			animeOpts: {
				duration: function(t,i) {
					return 500 + i*50;
				},
				easing: 'easeOutExpo',
				delay: function(t,i) {
					return i * 20;
				},
				opacity: {
					value: [0,1],
					duration: function(t,i) {
						return 250 + i*50;
					},
					easing: 'linear'
				},
				translateY: [400,0]
			}
		},
		'Kek': {
			sortTargetsFn: function(a,b) {
				return b.getBoundingClientRect().left - a.getBoundingClientRect().left;
			},
			animeOpts: {
				duration: 800,
				easing: [0.1,1,0.3,1],
				delay: function(t,i) {
					return i * 20;
				},
				opacity: {
					value: [0,1],
					duration: 600,
					easing: 'linear'
				},
				translateX: [-500,0],
				rotateZ: [15,0]
			}
		},
		'Isis': {
			animeOpts: {
				duration: 900,
				elasticity: 500,
				delay: function(t,i) {
					return i*15;
				},
				opacity: {
					value: [0,1],
					duration: 300,
					easing: 'linear'
				},
				translateX: function() {
					return [anime.random(0,1) === 0 ? 100 : -100,0];
				},
				translateY: function() {
					return [anime.random(0,1) === 0 ? 100 : -100,0];
				}
			}
		},
		'Montu': {
			perspective: 800,
			origin: '50% 0%',
			animeOpts: {
				duration: 1500,
				elasticity: 400,
				delay: function(t,i) {
					return i*75;
				},
				opacity: {
					value: [0,1],
					duration: 1000,
					easing: 'linear'
				},
				rotateX: [-90,0]
			}
		},
		'Osiris': {
			perspective: 3000,
			animeOpts: {
				duration: function() {
					return anime.random(500,1000)
				},
				easing: [0.2,1,0.3,1],
				delay: function(t,i) {
					return i*50;
				},
				opacity: {
					value: [0,1],
					duration: 700,
					easing: 'linear'
				},
				translateZ: {
					value: [-3000,0],
					duration: 1000
				},
				rotateY: ['-1turns',0]
			}
		},
		'Satet': {
			animeOpts: {
				duration: 800,
				elasticity: 600,
				delay: function(t,i) {
					return i*100;
				},
				opacity: {
					value: [0,1],
					duration: 600,
					easing: 'linear'
				},
				scaleX: {
					value: [0.4,1]
				},
				scaleY: {
					value: [0.6,1],
					duration: 1000
				}
			}
		},
		'Atum': {
			sortTargetsFn: function(a,b) {
				var docScrolls = {top : document.body.scrollTop + document.documentElement.scrollTop},
					y1 = window.innerHeight + docScrolls.top,
					aBounds = a.getBoundingClientRect(),
					ay1 = aBounds.top + docScrolls.top + aBounds.height/2,
					bBounds = b.getBoundingClientRect(),
					by1 = bBounds.top + docScrolls.top + bBounds.height/2;

				return Math.abs(y1-ay1) - Math.abs(y1-by1);
			},
			perspective: 1000,
			origin: '50% 0%',
			animeOpts: {
				duration: 800,
				easing: [0.1,1,0.3,1],
				delay: function(t,i) {
					return i*35;
				},
				opacity: {
					value: [0,1],
					duration: 600,
					easing: 'linear'
				},
				translateX: [100,0],
				translateY: [-100,0],
				translateZ: [400,0],
				rotateZ: [10,0],
				rotateX: [75,0]
			}
		},
		'Ra': {
			origin: '50% 0%',
			animeOpts: {
				duration: 500,
				easing: 'easeOutBack',
				delay: function(t,i) {
					return i * 100;
				},
				opacity: {
					value: [0,1],
					easing: 'linear'
				},
				translateY: [400,0],
				scaleY: [
					{value: [3,0.6], delay: function(t,i) {return i * 100 + 120;}, duration: 300, easing: 'easeOutExpo'},
					{value: [0.6,1], duration: 1400, easing: 'easeOutElastic'}
				],
				scaleX: [
					{value: [0.9,1.05], delay: function(t,i) {return i * 100 + 120;}, duration: 300, easing: 'easeOutExpo'},
					{value: [1.05,1], duration: 1400, easing: 'easeOutElastic'}
				]
			}
		},
		'Sobek': {
			animeOpts: {
				duration: 600,
				easing: 'easeOutExpo',
				delay: function(t,i) {
					return i*100;
				},
				opacity: {
					value: [0,1],
					duration: 100,
					easing: 'linear'
				},
				translateX: function(t,i) {
					var docScrolls = {left : document.body.scrollLeft + document.documentElement.scrollLeft},
						x1 = window.innerWidth/2 + docScrolls.left,
						tBounds = t.getBoundingClientRect(),
						x2 = tBounds.left +docScrolls.left + tBounds.width/2;

					return [x1-x2,0];
				},
				translateY: function(t,i) {
					var docScrolls = {top : document.body.scrollTop + document.documentElement.scrollTop},
						y1 = window.innerHeight + docScrolls.top,
						tBounds = t.getBoundingClientRect(),
						y2 = tBounds.top + docScrolls.top + tBounds.height/2;

					return [y1-y2,0];
				},
				rotate: function(t,i) {
					var x1 = window.innerWidth/2,
						tBounds = t.getBoundingClientRect(),
						x2 = tBounds.left + tBounds.width/2;

					return [x2 < x1 ? 90 : -90,0];
				},
				scale: [0,1]
			}
		},
		'Ptah': {
			itemOverflowHidden: true,
			sortTargetsFn: function(a,b) {
				return b.getBoundingClientRect().left - a.getBoundingClientRect().left;
			},
			origin: '100% 0%',
			animeOpts: {
				duration: 500,
				easing: 'easeOutExpo',
				delay: function(t,i) {
					return i * 20;
				},
				opacity: {
					value: [0,1],
					duration: 400,
					easing: 'linear'
				},
				rotateZ: [45,0]
			}
		},
		'Bes': {
			revealer: true,
			revealerOrigin: '100% 50%',
			animeRevealerOpts: {
				duration: 800,
				delay: function(t,i) {
					return i*75;
				},
				easing: 'easeInOutQuart',
				scaleX: [1,0]
			},
			animeOpts: {
				duration: 800,
				easing: 'easeInOutQuart',
				delay: function(t,i) {
					return i*75;
				},
				opacity: {
					value: [0,1],
					easing: 'linear'
				},
				scale: [0.8,1]
			}
		},
		'Seker': {
			revealer: true,
			revealerOrigin: '50% 100%',
			animeRevealerOpts: {
				duration: 500,
				delay: function(t,i) {
					return i*50;
				},
				easing: [0.7,0,0.3,1],
				translateY: [100,0],
				scaleY: [1,0]
			},
			animeOpts: {
				duration: 500,
				easing: [0.7,0,0.3,1],
				delay: function(t,i) {
					return i*50;
				},
				opacity: {
					value: [0,1],
					duration: 400,
					easing: 'linear'
				},
				translateY: [100,0],
				scale: [0.8,1]
			}
		},
		'Nut': {
			revealer: true,
			revealerColor: '#1d1d1d',
			itemOverflowHidden: true,
			animeRevealerOpts: {
				easing: 'easeOutCubic',
				delay: function(t,i) {
					return i*100;
				},
				translateX: [
					{value: ['101%','0%'], duration: 400 },
					{value: ['0%','-101%'], duration: 400}
				]
			},
			animeOpts: {
				duration: 900,
				easing: 'easeOutCubic',
				delay: function(t,i) {
					return 400+i*100;
				},
				opacity: {
					value: 1,
					duration: 1,
					easing: 'linear'
				},
				scale: [0.8,1]
			}
		},
		'Shu': {
			lineDrawing: true,
			animeLineDrawingOpts: {
				duration: 800,
				delay: function(t,i) {
					return i*150;
				},
				easing: 'easeInOutSine',
				strokeDashoffset: [anime.setDashoffset, 0],
				opacity: [
					{value: [0,1]},
					{value: [1,0], duration: 200, easing: 'linear', delay:500}
				]
			},
			animeOpts: {
				duration: 800,
				easing: [0.2,1,0.3,1],
				delay: function(t,i) {
					return i*150 + 800;
				},
				opacity: {
					value: [0,1],
					easing: 'linear'
				},
				scale: [0.5,1]
			}
		}
	}; 
}