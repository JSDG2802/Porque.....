
var objects = [];
var objectDetector = "";
var img = "";
var estatus = "";
var video = "";
function preload() 
{
  video = createVideo("video.mp4");
  video.hide();
}
function setup() 
{
  canvas = createCanvas(640, 420);
  canvas.position(523,270)
}
function draw() 
{
  background("gray");
  image(video,0,0,640,420);
}
function modelLoaded()
{
   console.log("modelo cargado espero... ._. ");
   estatus = true;
   video.loop();
   video.speed(1);
   //objectDetector.detect(img1, gotResults);
}
function gotResults(error,results)
{
   if(error)
   {
     console.log(error);
   }
   else
   {
     console.log(results);
     objects = results;
   }
}
function start()
{
  objectDetector = ml5.objectDetector('cocossd', modelLoaded);
  document.getElementById("cosa1").innerHTML = "Esta cargando el modelo";
}