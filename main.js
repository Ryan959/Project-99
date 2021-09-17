var SpeechRecognition = window.webkitSpeechRecognition

var recognition = new SpeechRecognition();

function start(){
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function run (event){
    console.log(event)

    var Content = event.result[0][0].transcript;

        document.getElementById("textbox").innerHTML = Content;
        console.log(Content);

        if(Content == "take my selfie"){
            console.log("taking selfie");
            speak();
        }
}

function speak(){
    var synth = window.speachSynthesis;

    speak_data = "Smile and say chesse";

    var utterThis = new speachSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    Webcam.attach(camera);

    setTimeout(funtion(){
        take_snapshot();
        save();
    }, 5000);
}