function Rain()
{
    this.x = random(0, width);
    this.y = random(-1000, 0);
    this.size = random(10, 30);
    this.speed = 3;
    strokeWeight(random(1, 3));
    this.show = function()
    {
	stroke(120, 200, 255);
	line(this.x, this.y, this.x, this.y + this.size);
    };

    this.update = function()
    {
	this.speed += 0.2;
	this.y += this.speed;
	if (this.y > height)
	{
	    this.y = random(-1000, 0);
	    this.x = random(0, width);
	    this.speed = 3;
	}
    }
};
