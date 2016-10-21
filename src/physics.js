js.physics = {};

js.physics.world = function()
{
	this.bodies = [];
}

js.physics.world.prototype.addBody = function(body)
{
	this.bodies.push(body);
}

js.physics.world.prototype.preUpdate = function()
{

}

js.physics.world.prototype.update = function()
{
	for(var i = 0; i < this.bodies.length; ++i)
	{
		this.bodies[i].update();
	}

	for(var a = 0; a < this.bodies.length; ++a)
	{
		var bodyA = this.bodies[a];

		for(var b = 0; b < this.bodies.length; ++b)
		{
			var details = {};

			var bodyB = this.bodies[b];

			//if(a > 0)
				if(bodyA === bodyB)
					continue;

			var hit = bodyA.collision(bodyB, details);
			//console.log(details.normal);
			if(hit)
			{
				if(!bodyA.kinematic)
					bodyA.shape.pos.set(bodyA.shape.pos.add(details.normal.mul(details.overlap)));
				if(!bodyB.kinematic)
					bodyB.shape.pos.set(bodyB.shape.pos.add(details.normal.mul(-details.overlap)));

	

				bodyA.vel.addP(details.normal.mul(details.overlap));
				bodyB.vel.addP(details.normal.mul(-details.overlap));
				//bodyA.vel.addP(details.normal.mul(0.1));
				//bodyB.vel.addP(details.normal.mul(-0.1));
			}
			//bodyB.shape.pos.set(bodyB.shape.pos.add(details.normal.mul(details.overlap)));
			//bodyB.shape.pos.set(details.normal.mul(-details.overlap / 2));
			//bodyB.shape.pos.addP(details.normal.mul(-details.overlap / 2));

			//bodyB.vel.addP(details.normal.mul(0.1));
			//bodyB.vel.addP(details.normal);
		}
	}
}

js.physics.world.prototype.postUpdate = function()
{

}

js.physics.rigidBody = function(shape)
{
	this.shape = shape;

	this.vel = new js.vec2(0,0);
	this.acc = new js.vec2(0,0);

	this.kinematic = false;
}

js.physics.rigidBody.prototype.update = function()
{

	this.vel.addP(this.acc);
	this.vel.mulP(0.9999);

	if(this.kinematic)
		this.vel.set(0, 0);

	this.shape.pos.addP(this.vel);
}

js.physics.rigidBody.prototype.collision = function(a_other, a_details)
{
	var hasHit = false;

	switch(this.shape.constructor)
	{
		case js.shapes.ray:
			{
				switch(a_other.shape.constructor)
				{
					case js.shapes.ray:
						//console.log("ray hit ray");
						break;
					case js.shapes.line:
						//console.log("line hit ray");
						break;
					case js.shapes.rect:
						//console.log("rect hit ray");
						break;
					case js.shapes.circle:
						//console.log("circle hit ray");
						break;
					default:
						//console.log("unknown hit ray");
						break;
				}
			}
			break;
		case js.shapes.line:
			{
				switch(a_other.shape.constructor)
				{
					case js.shapes.ray:
						//console.log("ray hit line");
						break;
					case js.shapes.line:
						//console.log("line hit line");
						break;
					case js.shapes.rect:
						//console.log("rect hit line");
						break;
					case js.shapes.circle:
						//console.log("circle hit line");
						break;
					default:
						//console.log("unknown hit line");
						break;
				}
			}
			break;
		case js.shapes.rect:
			{
				switch(a_other.shape.constructor)
				{
					case js.shapes.ray:
						//console.log("ray hit rect");
						break;
					case js.shapes.line:
						//console.log("line hit rect");
						break;
					case js.shapes.rect:
						var hit = js.physics.collision.aabbToAabb(this.shape, a_other.shape, a_details);
						if(hit)
						{
							//console.log("rect hit rect");
							hasHit = true;
						}
						break;
					case js.shapes.circle:
						//console.log("circle hit rect");
						break;
					default:
						//console.log("unknown hit rect");
						break;
				}
			}
			break;
		case js.shapes.circle:
			{
				switch(a_other.shape.constructor)
				{
					case js.shapes.ray:
						//console.log("ray hit circle");
						break;
					case js.shapes.line:
						//console.log("line hit circle");
						break;
					case js.shapes.rect:
						//console.log("rect hit circle");
						break;
					case js.shapes.circle:
						var hit = js.physics.collision.circleToCircle(this.shape, a_other.shape, a_details);
						if(hit)
						{
							//console.log("circle hit circle");
							hasHit = true;
						}
						
						break;
					default:
						//console.log("unknown hit circle");
						break;
				}
			}
			break;
		default:
			{

			}
			break;
	}

	return hasHit;
}

js.physics.collision = {};

/*js.physics.collision.pointInRect = function(point, rect)
{

}*/

js.physics.collision.aabbToAabb = function(r1, r2, details)
{
	details.normal = r1.pos.sub(r2.pos).normalize();
	details.overlap = 0.1;

	if (r1.pos.x - r1.width / 2 < r2.pos.x + r2.width / 2 &&
	    r1.pos.x + r1.width / 2 > r2.pos.x - r2.width / 2 &&
	    r1.pos.y - r1.height / 2 < r2.pos.y + r2.height / 2 &&
	    r1.pos.y + r1.height / 2 > r2.pos.y - r2.height / 2) {
	    // collision detected!r
		return true;
	}
	return false;
}

js.physics.collision.circleToCircle = function(c1, c2, details)
{
	/*var s = c1.pos.sub(c2.pos);

	var dist = s.length();
	var rads = c1.rad + c2.rad;

	//details = {};
	details.normal = s.normalize();
	details.overlap = rads - dist;
	//console.log(details.normal)
	if(dist < rads)
	{
		return true;
	}
	return false;*/

	var a = c1.rad + c2.rad;
    var dx = c1.pos.x - c2.pos.x;
    var dy = c1.pos.y - c2.pos.y;

	details.normal = new js.vec2(dx,dy).normalize();

	var asq = a * a;
	var lsq = (dx * dx + dy * dy);

	details.overlap = Math.sqrt(asq - lsq);

    return asq > lsq;
}

/*
js.physics.collision.aabbOnCircle = function(a, b)
{

}
*/

