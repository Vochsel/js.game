js.shapes = {};

js.shapes.ray = function(origin, direction)
{
	
}

js.shapes.line = function(a, b)
{
	
}

js.shapes.rect = function(pos, width, height)
{
	this.pos = pos;
	this.width = width;
	this.height = height;

	this.draw = function()
	{
		js.draw.rect(this.pos.x, this.pos.y, this.width, this.height);
	}
}

js.shapes.aabb = function(pos, width, height)
{
	this.pos = pos;
	this.width = width;
	this.height = height;

	this.draw = function()
	{
		js.draw.rect(this.pos.x, this.pos.y, this.width, this.height);
	}
}

js.shapes.circle = function(pos, rad)
{
	this.pos = pos;
	this.rad = rad;

	this.draw = function()
	{
		js.draw.circle(this.pos.x, this.pos.y, rad);
	}
}