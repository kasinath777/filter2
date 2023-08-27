var filter = "";
var noseX = 0;
var noseY = 0;

function preload() {
    dogimg = loadImage("dog.png")
    catimg = loadImage("cat.png")
    ratimg = loadImage("rat.png")
}

function setup() {
    canvas = createCanvas(450, 400)
    canvas.center()
    video = createCapture(VIDEO)
    video.size(450, 400)
    video.hide()
    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on("pose", gotPoses)
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results)
        noseX = results[0].pose.nose.x
        noseY = results[0].pose.nose.y

    }
}

function dog(){
filter= "dogimg"
}

function cat(){
filter= "catimg"
}

function rat(){
filter="ratimg"
}

function modelLoaded() {
    console.log("modelLoaded");
}

function draw() {
    image(video, 0, 0, 450, 400)
if(filter=="dogimg"){
image(dogimg,noseX-100,noseY-190,220,250)
}else if(filter=="catimg"){
image(catimg,noseX-150,noseY-180,300,250)
}else if(filter=="ratimg"){
image(ratimg,noseX-150,noseY-180,300,300)
}

}

function take_snapshot(){
save("filter.png")
}

