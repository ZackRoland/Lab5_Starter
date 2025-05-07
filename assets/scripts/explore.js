// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const voiceSelect = document.querySelector("#voice-select"); // voice selection dropdown
  const textArea = document.querySelector("#text-to-speak"); // textarea for input
  const playButton = document.querySelector("button"); // play button
  const chrImg = document.querySelector("#explore img"); // character image
  const chrMouthOpen = "assets/images/smiling-open.png"; // mouth open image
  const chrMouthClosed = "assets/images/smiling.png"; // mouth closed image
  
  // Initially populate the voice list
  populateVoiceList(voiceSelect);

  // Event listener for the "Press to Talk" button
  playButton.addEventListener("click", function() {
    const text = textArea.value.trim();
    if (text) {
      speakText(text, voiceSelect, chrImg, chrMouthOpen, chrMouthClosed);
    } else {
      console.log("No text provided.");
    }
  });

  // Update the voice list when voices are changed (asynchronous loading of voices)
  speechSynthesis.onvoiceschanged = function() {
    populateVoiceList(voiceSelect);
  };
}

function populateVoiceList(voiceSelect) {
  const voices = speechSynthesis.getVoices(); // get available voices

  // Clear the previous options in the dropdown
  voiceSelect.innerHTML = "";

  // If voices are available, populate the dropdown
  if (voices.length > 0) {
    voices.forEach(voice => {
      const option = document.createElement("option");
      option.textContent = voice.name;
      option.setAttribute("data-lang", voice.lang);
      option.setAttribute("data-name", voice.name);
      voiceSelect.appendChild(option);
    });
  } else {
    // In case no voices are available
    console.log("No voices available.");
  }
}

function speakText(text, voiceSelect, chrImg, chrMouthOpen, chrMouthClosed) {
  const utterance = new SpeechSynthesisUtterance(text); // create speech utterance
  const selectedVoiceName = voiceSelect.selectedOptions[0]?.getAttribute("data-name"); // get selected voice

  if (selectedVoiceName) {
    const voices = speechSynthesis.getVoices();

    // Set the selected voice for the utterance
    voices.forEach(voice => {
      if (voice.name === selectedVoiceName) {
        utterance.voice = voice;
      }
    });
  }

  // Set character mouth image to closed before speech
  chrImg.src = chrMouthClosed;

  // Change image to open mouth when speaking starts
  utterance.onstart = function() {
    chrImg.src = chrMouthOpen;
  };

  // Change image back to closed mouth when speech ends
  utterance.onend = function() {
    chrImg.src = chrMouthClosed;
  };

  // Ensure speech is triggered
  speechSynthesis.speak(utterance);
}
