function preload(){
    canvas = createCanvas(600, 550);
    canvas.center;
    video = createCapture(VIDEO)

}

poseNet = poseNet.[0].results;

function modelLoaded(){
    console.log("Model is loaded!")
}
function gotPoses(results){
    leftWristX = results[0].pose.leftWrist.x;
}   rightWristX = results[0].pose.rightWrist.x;
function draw(){
    background("#6C91C2");
    textSize(10);
    fill('#FFE767');
    text('Peter', 50, 400);

}