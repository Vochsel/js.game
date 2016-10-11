js.input = {};

js.input.mouse = 
{
	x: 0,
	y: 0,
	dx: 0,
	dy: 0,
	lx: 0,
	ly: 0,
	leftClick: false,
	rightClick: false
};

js.input.keyboard = 
{
	keys: [],
	isKeyDown: function(key)
	{
		if(isNaN(key))
		{
			//param is char/string
			var kc = key.toUpperCase().charCodeAt(0);
			return js.input.keyboard.keys[kc];
		} else
			return js.input.keyboard.keys[key];
	}
};

js.input.setup = function()
{
	//Mouse move
	js.draw.canvas.addEventListener("mousemove", function(e) {
		js.input.mouse.x = e.offsetX;
		js.input.mouse.y = e.offsetY;
		//console.log(js.input.mouse.x + " : " + js.input.mouse.y);
	});

	//Mouse click
	window.addEventListener("mousedown", function(e) {
		switch(e.button)
		{
			case 0:
				js.input.mouse.leftClick = true;
				break;
			case 2:
				js.input.mouse.rightClick = true;
				break;
		}

		//console.log(e.button);
	});

	window.addEventListener("mouseup", function(e) {
		switch(e.button)
		{
			case 0:
				js.input.mouse.leftClick = false;
				break;
			case 2:
				js.input.mouse.rightClick = false;
				break;
		}
	});

	//Keyboard
	document.addEventListener("keydown", function(e) {
		if(e.repeat)
			return;

		var kc = e.keyCode;
		js.input.keyboard.keys[kc] = true;

		//console.log(kc);
	});

	document.addEventListener("keyup", function(e) {
		if(e.repeat)
			return;

		var kc = e.keyCode;
		js.input.keyboard.keys[kc] = false;

		//console.log(kc);
	});
}

js.input.postUpdate = function()
{
	this.mouse.dx = this.mouse.x - this.mouse.lx;
	this.mouse.dy = this.mouse.y - this.mouse.ly;

	//console.log(this.mouse.dx);
	//console.log(js.input.keyboard.keys);
	
	this.mouse.lx = this.mouse.x;
	this.mouse.ly = this.mouse.y;
}