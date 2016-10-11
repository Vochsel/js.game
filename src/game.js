var js = {};

//JS Game Foundation
js.game = {
	version: "0.0.1",
	author: "Ben Skinner"
}

js.game = function(a_states, a_id)
{
	var game = this;

	this.states = a_states;
	this.currentState = 0;

	// - Game Setup Function
	this.setup = function() 
	{
		//Setup internal
		js.draw.setup(a_id);
		js.input.setup();

		console.log(js.draw.canvas.width)

		//Setup scenes
		for(var i = 0; i < this.states.length; ++i)
		{
			this.states[i].setup_func();
		}

		//Start the gameloop
		game.gameloop();
	}

	// - Game Update Function
	this.update = function() 
	{
		this.states[this.currentState].update_func();
	}

	// - Game Render Function
	this.render = function() 
	{
		js.draw.clear();

		this.states[this.currentState].render_func();
	}

	// - Game Loop Function
	this.gameloop = function(t) 
	{
		js.draw.preUpdate();

		js.time.preUpdate(t);
		
		game.update();
		game.render();

		js.time.postUpdate();

		js.input.postUpdate();

		window.requestAnimationFrame(game.gameloop);
	}

	document.body.onload = this.setup();
}