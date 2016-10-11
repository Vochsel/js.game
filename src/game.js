var js = {};

//JS Game Foundation
js.game = {
	version: "0.0.1",
	author: "Ben Skinner"
}

js.game = function(a_states)
{
	var game = this;

	this.states = a_states;
	this.currentState = 0;

	// - Game Setup Function
	this.setup = function() 
	{ 
		//Setup internal

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
		console.log("Updated");
	}

	// - Game Render Function
	this.render = function() 
	{
		this.states[this.currentState].render_func();
	}

	// - Game Loop Function
	this.gameloop = function() 
	{
		game.update();
		game.render();
		window.requestAnimationFrame(game.gameloop);
	}

	//document.onload = this.setup();
}