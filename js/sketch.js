var rain = [];

function setup()
{
    createCanvas(window.innerWidth, window.innerHeight);
    for (var z = 0; z <= 500; z++)
	rain.push(new Rain());
}

function draw()
{
    background(51);
    for (var i = 0; i < rain.length; i++)
    {
	rain[i].show();
	rain[i].update();
    }	
    
}
