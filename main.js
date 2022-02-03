
var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();
var textbox = document.getElementById("textbox");
function start()
{
    console.log("start");
    textbox.innerHTML = "";
    recognition.start();

}

recognition.onresult = function (event) {

    console.log(event);

    var Content = event.results[0][0].transcript;
    console.log(Content);
        if(Content =="Take My Selfie")
        {
            console.log("Taking Selfie ---");
            speak();
        }

    textbox.innerHTML = Content;
}


function speak(){
    var synth = window.speechSynthesis;

    speak_data = "Taking your Selfie in 5 Seconds (prepare yourself for the best selfie:D)"
    console.log(speak_data);
    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);
    Webcam.attach(camera);

    setTimeout(function()
    {
        take_snapshot();
        save();
    },5000);
};

Webcam.set({
    width:360,
    height:250,
    image_format : 'png',
    png_quality:90
});
camera = document.getElementById("camera");

function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'">';
    });
}

function save(){
    link = document.getElementById("link");
    image = document.getElementById("selfie_image").scroll;
    link.href = image;
    link.click();
}
