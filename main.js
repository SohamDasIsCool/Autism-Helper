var x=["You can do it!","Nothing can stop you!","If you are slow doesn't mean you will lose","Slow and steady wins the race!","You are not a loser until the war is over!"];
var i=Math.floor(Math.random()*5);
var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();
function tr(){
    recognition.start();
    document.getElementById("img").src="mic.gif";
}
recognition.onresult=
function run(event){
    console.log(event);
    var Content=event.results[0][0].transcript;
    console.log(Content);
    function capitalizeFirstLetter(Content) {
        return Content.charAt(0).toUpperCase() + Content.slice(1);
      }
      Content=capitalizeFirstLetter(Content);
    document.getElementById("trhe").innerHTML=Content;
    console.log(Content);
    document.getElementById("img").src="emp.png";
}
function speak(){
    var synth=window.speechSynthesis;
    speak_data=document.getElementById("input").value;
    var utterThis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
}
function src(){
    window.alert("This link will take you to wiki.")
    window.open("https://en.wikipedia.org/wiki/Autism");
}
    console.log(i);
    val=x[i];
    document.getElementById("Insp").innerHTML=val;
function start() {
    recognition.start();
}
