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

	this.set = function(v, y) 
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

	this.clone = function() { return new js.vec2(this.x, this.y); }

	this.length = function() { return Math.sqrt(this.x * this.x + this.y * this.y); }

	this.normalize = function() { var l = this.length(); this.x /= l; this.y /= l; return this; }

	this.add = function(b) 	{ var a = this; return new js.vec2(a.x + b.x, a.y + b.y); }
	this.sub = function(b) 	{ var a = this; return new js.vec2(a.x - b.x, a.y - b.y); }
	this.mul = function(s) 	{ var a = this; return new js.vec2(a.x * s, a.y * s); }
	this.div = function(s) 	{ var a = this; return new js.vec2(a.x / s, a.y / s); }

	this.addP = function(b) { this.x += b.x; this.y += b.y; }
	this.subP = function(b) { this.x -= b.x; this.y -= b.y; }
	this.mulP = function(s) { this.x *= s; this.y *= s; }
	this.divP = function(s) { this.x /= s; this.y /= s; }
}

js.vec2.dot = function(a, b) { a.x * b.x + a.y * b.y; }
