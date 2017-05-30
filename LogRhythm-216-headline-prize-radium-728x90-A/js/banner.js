(function(window)
{
	//Banner.inheritsFrom( window.Banner_Base );

	function Banner()
	{
		this.init();
	};

	Banner.prototype.init = function()
	{
		this.__allowHoverEffect = false;
		this.__loopCount = 0;
		this.__width = 728;
		this.__height = 90;
		this.start();
	};

	Banner.prototype.render = function()
	{
		this.defineElements();
		this.positionElements();
		this.defineInteraction();
		this.run();
	};

	Banner.prototype.defineElements = function()
	{
		this.__container = $("#container");
		this.__border = $("#border");
		this.__banner = $("#banner");
		this.__content = $("#content");
		this.__backgroundHover = $("#background-hover");

		this.__bgExit = $("#bg-exit");
	};

	Banner.prototype.positionElements = function()
	{
		var w = this.__width
		var h = this.__height;
		var stroke = 1;

		this.__container.css({width:w, height:h, opacity:1});
		this.__banner.css({top:stroke, left:stroke, width:w-stroke*2, height:h-stroke*2});
		this.__border.css({top:0, left:0, width:w-stroke*2, height:h-stroke*2, opacity:1});
		this.__content.css({top:-stroke, left:-stroke, width:w, height:h});
		this.__bgExit.css({top:0, left:0, width:w, height:h, opacity:0});
	};

	//-------------------------------------------------------------------------

	Banner.prototype.run = function()
	{
		var banner = this;
		setTimeout(function(){banner.showScene();}, 100);
	};

	//-------------------------------------------------------------------------

	Banner.prototype.showScene = function()
	{
    let scene1     = anime.timeline();
		let copy1Scene = anime.timeline();
		let copy2Scene = anime.timeline();
		let copy3Scene = anime.timeline();
		let finalScene = anime.timeline();
		let banner = this;

    scene1
      .add({
				targets: '.cls-3',
				easing: 'easeOutExpo',
				scale: [0, 1],
				opacity: 1,
				offset: 0
      })
      .add({
				targets: '.cls-4',
				easing: 'easeOutExpo',
				scale: [0, 1],
				opacity: 1,
				offset: 50
      })
      .add({
				targets: '.cls-5',
				easing: 'easeOutExpo',
				scale: [0, 1],
				opacity: 1,
				offset: 100
      })
      .add({
				targets: '.cls-6',
				easing: 'easeOutExpo',
				scale: [0, 1],
				opacity: 1,
				offset: 150
      })
      .add({
				targets: '.cls-7',
				easing: 'easeOutExpo',
				scale: [0, 1],
				opacity: 1,
				offset: 200
      })
      .add({
				targets: '.cls-8',
				easing: 'easeOutExpo',
				scale: [0, 1],
				opacity: 1,
				offset: 250
      })
      .add({
				targets: '.cls-9',
				easing: 'easeOutExpo',
				scale: [0, 1],
				opacity: 1,
				offset: 300
      });

			copy1Scene
			.add({
				targets: '#copy01',
				translateY: -68,
				easing: 'easeInOutCubic',
				opacity: 1,
				elasticity: 100,
				offset: 600
			})
			.add({
				targets: '#copy01',
				translateY: -1000,
				easing: 'easeInOutCubic',
				elasticity: 100,
				offset: 3000
			})

		copy2Scene
			.add({
				targets: '#background-color',
				background: '#FFFFFF',
				offset: 3800,
				duration: 1000
			})
			.add({
				targets: '#copy02',
				translateY: -109,
				easing: 'easeInOutCubic',
				opacity: 1,
				elasticity: 100,
				offset: 4400
			})
			.add({
				targets: '#copy03',
				translateY: -56,
				easing: 'easeInOutCubic',
				opacity: 1,
				elasticity: 100,
				offset: 4600
			})
			.add({
				targets: '#copy02',
				translateY: -1000,
				easing: 'easeInOutCubic',
				elasticity: 100,
				offset: 7100
			})
			.add({
				targets: '#copy03',
				translateY: -1000,
				easing: 'easeInOutCubic',
				elasticity: 100,
				offset: 7200
			});

		finalScene
		.add({
			targets: '.cls-3',
			easing: 'easeOutExpo',
			scale: [1, 0],
			opacity: 0,
			offset: 7700
		})
		.add({
			targets: '.cls-4',
			easing: 'easeOutExpo',
			scale: [1, 0],
			opacity: 0,
			offset: 7750
		})
		.add({
			targets: '.cls-5',
			easing: 'easeOutExpo',
			scale: [1, 0],
			opacity: 0,
			offset: 7800
		})
		.add({
			targets: '.cls-6',
			easing: 'easeOutExpo',
			scale: [1, 0],
			opacity: 0,
			offset: 7850
		})
		.add({
			targets: '.cls-7',
			easing: 'easeOutExpo',
			scale: [1, 0],
			opacity: 0,
			offset: 7900
		})
		.add({
			targets: '.cls-8',
			easing: 'easeOutExpo',
			scale: [1, 0],
			opacity: 0,
			offset: 7950
		})
		.add({
			targets: '.cls-9',
			easing: 'easeOutExpo',
			scale: [1, 0],
			opacity: 0,
			offset: 8000
		})
		.add({
			targets: '#logo-log',
			opacity: 1,
			easing: 'easeInOutCubic',
			offset: 8050
		})
		.add({
			targets: '#black-hat',
			easing: 'easeInOutCubic',
			opacity: 1,
			offset: 8700
		})
		.add({
			targets: '#cta',
			easing: 'easeInOutCubic',
			opacity: 1,
			offset: 9500
		});

		setTimeout(function(){banner.end();}, 9500);

	};

	//-------------------------------------------------------------------------

	Banner.prototype.start = function()
	{
		this.__start = new Date();
	};

	Banner.prototype.end = function()
	{
		this.__loopCount++;
		this.__allowHoverEffect = true;
		var now = new Date();
		var time = now.getTime() - this.__start.getTime();
		trace("total run time = " + time/1000 + " seconds");
	};

	//-------------------------------------------------------------------------

	Banner.prototype.defineInteraction = function()
	{
		var banner = this;
		var offset = 4;
		this.__bgExit.click(function()
		{
			banner.clickThrough();
		});
		this.__bgExit.mouseover(function()
		{
			if(banner.__allowHoverEffect == false)
			{
				return;
			}
			banner.onMouseOver();
		});
		this.__bgExit.mouseout(function()
		{
			if(banner.__allowHoverEffect == false)
			{
				return;
			}
			banner.onMouseOut();
		});
	};

	Banner.prototype.onMouseOver = function()
	{
		this.__backgroundHover.animate({ opacity: 1 }, 300);
	};

	Banner.prototype.onMouseOut = function()
	{
			this.__backgroundHover.animate({ opacity: 0 }, 200);
	};

	Banner.prototype.clickThrough = function()
	{
		trace("click through: " + window.clickTag);
		window.open(window.clickTag)

		//var ID = "Background Exit";
		//trace("exit with ID: '" + ID + "'");
		//Enabler.exit(ID);
	};

	window.Banner = Banner;

}(window));

// Global functions
//-------------------------------------------------------------------------

function trace(s)
{
	console.log(s);
}

function animate(_delay, _$o, _attr, _speed, _easing)
{
	_easing = _easing || 'easeInOutCubic';
	var to = setTimeout(function(){
		 _$o.transition(_attr, _speed, _easing);
		//_$o.transition(_attr, {duration: _speed, easing: _easing, queue: false}, null);
	}, _delay);
	return to;
};

function timeout( _delay, _func )
{
	var to = setTimeout(function(){_func();}, _delay);
	return to;
};

Function.prototype.inheritsFrom = function( superClass )
{
	this.prototype = new superClass;
	this.prototype.constructor = this;
	this.prototype.sooper = superClass.prototype;
	return this;
};
