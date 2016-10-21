//Vec2
js.vec2 = function(x, y) {

	if(y === undefined)
	{
		this.x = x.x;
		this.y = x.y;
	} else {
		this.x = x;
		this.y = y;
	}
}

js.vec2.prototype.set = function(v, y) 
{ 
	if(y == undefined && typeof v === "object")
	{
		this.x = v.x; 
		this.y = v.y; 
	} else
	{
		this.x = v;
		this.y = y;
	}
	
	return this; 
}

js.vec2.prototype.clone = function() { return new js.vec2(this.x, this.y); }

js.vec2.prototype.length = function() { return Math.sqrt(this.x * this.x + this.y * this.y); }

js.vec2.prototype.normalize = function() { var l = this.length(); this.x /= l; this.y /= l; return this; }

js.vec2.prototype.add = function(b) 	{ var a = this; return new js.vec2(a.x + b.x, a.y + b.y); }
js.vec2.prototype.sub = function(b) 	{ var a = this; return new js.vec2(a.x - b.x, a.y - b.y); }
js.vec2.prototype.mul = function(s) 	{ var a = this; return new js.vec2(a.x * s, a.y * s); }
js.vec2.prototype.div = function(s) 	{ var a = this; return new js.vec2(a.x / s, a.y / s); }

js.vec2.prototype.addP = function(b) { this.x += b.x; this.y += b.y; }
js.vec2.prototype.subP = function(b) { this.x -= b.x; this.y -= b.y; }
js.vec2.prototype.mulP = function(s) { this.x *= s; this.y *= s; }
js.vec2.prototype.divP = function(s) { this.x /= s; this.y /= s; }

js.vec2.prototype.dot = function(a, b) { a.x * b.x + a.y * b.y; }
