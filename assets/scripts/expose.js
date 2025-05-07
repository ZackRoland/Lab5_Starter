// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // on select of horn, display image and load sound
    // on click of play sound, plays sound associated with horn
  const hornSelect = document.querySelector("#horn-select");
  const audioElement = document.querySelector("audio");
  const hornImage = document.querySelector("#expose img");
  const slider = document.querySelector("#volume");
  const volumeIcon = document.querySelector("#volume-controls img");
  const playButton = document.querySelector("button");

  hornSelect.addEventListener("change", function() {
    updateHorn(hornSelect, hornImage, audioElement);
  });

  slider.addEventListener("input", function() {
    updateVolume(slider,volumeIcon,audioElement);
  });

  playButton.addEventListener("click", function() {
    playSound(audioElement, hornSelect.value);
  });
  // adjusting volume slider
}
function updateHorn(hornSelect,hornImage, audioElement){
  const horn = hornSelect.value;
  let hornAudio;
  let hornImg;
  if (horn === "air-horn"){
    hornAudio = "assets/audio/air-horn.mp3";
    hornImg = "assets/images/air-horn.svg";
  } else if (horn === "car-horn"){
    hornAudio = "assets/audio/car-horn.mp3";
    hornImg = "assets/images/car-horn.svg";
  } else if (horn === "party-horn"){
    hornAudio = "assets/audio/party-horn.mp3";
    hornImg = "assets/images/party-horn.svg";
  }
  audioElement.src = hornAudio;
  hornImage.src = hornImg;
}

function updateVolume(slider,volumeIcon,audioElement){
  const volume = slider.value;
  audioElement.volume = volume/100;

  if (volume == 0) {
    volumeIcon.src = "assets/icons/volume-level-0.svg";
  } else if (volume > 0 && volume <= 33) { // Fixed the range condition
    volumeIcon.src = "assets/icons/volume-level-1.svg";
  } else if (volume > 33 && volume <= 66) { // Fixed the range condition
    volumeIcon.src = "assets/icons/volume-level-2.svg";
  } else {
    volumeIcon.src = "assets/icons/volume-level-3.svg";
  }
}
function playSound(audioElement, horn) {
  audioElement.play();

  if (horn === "party-horn") {
      // Trigger confetti when Party Horn is selected
      const jsConfetti = new JSConfetti();
      jsConfetti.addConfetti();
  }
}