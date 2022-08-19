var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
	fabric.Image.fromURL("ball.png", function(Img) {
    ball_obj = Img;
    ball_obj.scaleToWidth(50);
    ball_obj.scaleToHeight(50);
    ball_obj.set({
        top:ball_y,
        left:ball_x
    )};
    canvas.add(ball_obj);
});

function loadImage()
{
	fabric.Image.fromURL("BirthdayImage.jpg", function(Img) {
    hole_obj = Img;
    hole_obj.scaleToWidth(50);
    hole_obj.scaleToHeight(50);
    hole_obj.set({
        top:hole_y,
        left:hole_x
    )};
    canvas.add(ball_obj);

    new_image();
});
