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

js.physics.rect = function(pos, width)
{
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

js.physics.aabb = function(pos, width)
{
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
				console.log("aabb hit aabb");
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
				console.log("circle hit circle");
				break;
			default:
				console.log("unknown hit circle");
				break;
		}
	}
}



/*js.physics.collision.circleOnCircle = function(a, b)
{

}

js.physics.collision.aabbOnCircle = function(a, b)
{

}
*/

