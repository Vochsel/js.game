js.draw = {}

js.draw.setup = function(id)
{
	this.canvas = document.getElementById(id);
	this.ctx = this.canvas.getContext("2d");
}

js.draw.preUpdate = function()
{
	js.game.w = js.draw.canvas.width;
	js.game.h = js.draw.canvas.height;
	js.game.hw = js.game.w / 2;
	js.game.hh = js.game.h / 2;
}

// -- Utils

js.draw.clear = function()
{
	this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
}

// -- Shapes

js.draw.rect = function(x, y, w, h, rad, fillStyle)
{
	var ctx = js.draw.ctx;
	ctx.save();
		ctx.translate(x, y);
		ctx.rotate(rad);
		ctx.fillStyle = fillStyle;
		ctx.fillRect(-w/2, -h/2, w, h);
	ctx.restore();
}

js.draw.circle = function(x, y, rad, fillStyle)
{
	var ctx = js.draw.ctx;
	ctx.save();
		ctx.beginPath();
		ctx.translate(x, y);
		ctx.arc(0, 0, rad, 0, Math.PI * 2, false);
		ctx.fillStyle = fillStyle;
		ctx.fill();
	ctx.restore();
}