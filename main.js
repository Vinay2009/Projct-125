difference = 0;

function setup () {
    video = createCapture(VIDEO);
    video.size(550, 500);
    

    canvas = createCanvas(550, 500);
    canvas.position(560, 120);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    background('grey');
    textSize(difference);
    document.getElementById("text_side").innerHTML = "Width and Height of a Square will be = " + difference + "px";
    fill('blue');
    stroke('#F90093');
    text("Vinay", 30, 300);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized!');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX + "noseY = " + noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log("leftWristX = " + leftWristX + "rightWristX = " + rightWristX + "difference = " + difference);
    }
}