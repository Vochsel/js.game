js.physics = {};

js.physics.ray = function(origin, direction)
{
	// Test for collision
	this.collision = function(other)
	{
		switch(other.constructor)
		{
			case js.physics.ray:
				console.log("ray hit ray");
				break;
			case js.physics.line:
				console.log("line hit ray");
				break;
			case js.physics.rect:
				console.log("rect hit ray");
				break;
			case js.physics.circle:
				console.log("circle hit ray");
				break;
			default:
				console.log("unknown hit ray");
				break;
		}
	}
}

js.physics.line = function(a, b)
{
	// Test for collision
	this.collision = function(other)
	{
		switch(other.constructor)
		{
			case js.physics.ray:
				console.log("ray hit line");
				break;
			case js.physics.line:
				console.log("line hit line");
				break;
			case js.physics.rect:
				console.log("rect hit line");
				break;
			case js.physics.circle:
				console.log("circle hit line");
				break;
			default:
				console.log("unknown hit line");
				break;
		}
	}
}

js.physics.rect = function(pos, width, height)
{
	this.pos = pos;
	this.width = width;
	this.height = height;

	this.draw = function()
	{
		js.draw.rect(this.pos.x, this.pos.y, this.width, this.height);
	}

	// Test for collision
	this.collision = function(other)
	{
		switch(other.constructor)
		{
			case js.physics.ray:
				console.log("ray hit rect");
				break;
			case js.physics.line:
				console.log("line hit rect");
				break;
			case js.physics.rect:
				//js.physics.collision.aabbToAabb(this, other);
				console.log("rect hit rect");
				break;
			case js.physics.circle:
				console.log("circle hit rect");
				break;
			default:
				console.log("unknown hit rect");
				break;
		}
	}
}

js.physics.aabb = function(pos, width, height)
{
	this.pos = pos;
	this.width = width;
	this.height = height;

	this.draw = function()
	{
		js.draw.rect(this.pos.x, this.pos.y, this.width, this.height);
	}

	// Test for collision
	this.collision = function(other)
	{
		switch(other.constructor)
		{
			case js.physics.ray:
				console.log("ray hit aabb");
				break;
			case js.physics.line:
				console.log("line hit aabb");
				break;
			case js.physics.aabb:
				var hit = js.physics.collision.aabbToAabb(this, other);
				if(hit)
				{
					console.log("aabb hit aabb");
				}
				break;
			case js.physics.rect:
				console.log("rect hit aabb");
				break;
			case js.physics.circle:
				console.log("circle hit aabb");
				break;
			default:
				console.log("unknown hit aabb");
				break;
		}
	}
}

js.physics.circle = function(pos, rad)
{
	this.pos = pos;
	this.rad = rad;

	this.draw = function()
	{
		js.draw.circle(this.pos.x, this.pos.y, rad);
	}

	// Test for collision
	this.collision = function(other)
	{
		switch(other.constructor)
		{
			case js.physics.ray:
				console.log("ray hit circle");
				break;
			case js.physics.line:
				console.log("line hit circle");
				break;
			case js.physics.rect:
				console.log("rect hit circle");
				break;
			case js.physics.circle:
				var hit = js.physics.collision.circleToCircle(this, other);
				if(hit)
				{
					console.log("circle hit circle");
				}
				break;
			default:
				console.log("unknown hit circle");
				break;
		}
	}
}

js.physics.collision = {};

/*js.physics.collision.pointInRect = function(point, rect)
{

}*/

js.physics.collision.aabbToAabb = function(r1, r2)
{
	if (r1.pos.x < r2.pos.x + r2.width &&
	    r1.pos.x + r1.width > r2.pos.x &&
	    r1.pos.y < r2.pos.y + r2.height &&
	    r1.height + r1.pos.y > r2.pos.y) {
	    // collision detected!r
		return true;
	}
	return false;
}

js.physics.collision.circleToCircle = function(c1, c2, details)
{
	var dist = c1.pos.sub(c2.pos).length();
	var rads = c1.rad + c2.rad;
	//console.log(dist + " : " + rads);
	if(dist < rads)
	{
		details = {};
		return true;
	}
	return false;
}

/*
js.physics.collision.aabbOnCircle = function(a, b)
{

}
*/

