document.querySelector(".button").addEventListener("click",()=>{
    let text = document.querySelector(".textarea").value;
    let speech = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(speech);
});
