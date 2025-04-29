const textarea = document.querySelector("textarea"); // Fixed selector
const button = document.querySelector("button");

const textToSpeech = () => {
    const synth = window.speechSynthesis;
    const text = textarea.value;

    if (text.trim() === "") {
        alert("Please enter some text to convert to speech.");
        return;
    }

    const utterance = new SpeechSynthesisUtterance(text); // Corrected object creation
    synth.speak(utterance); // Fixed method call
};

button.addEventListener("click", textToSpeech);
