js.time = {}

js.time.current = 0;
js.time.last 	= 0;
js.time.delta 	= 0;

js.time.preUpdate = function(time)
{
	js.time.current = time / 1000;

	js.time.delta = js.time.current - js.time.last;
}

js.time.postUpdate = function()
{
	js.time.last = js.time.current;
}