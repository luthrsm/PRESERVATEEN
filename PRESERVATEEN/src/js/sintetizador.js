const synth = window.speechSynthesis;
let isPlaying = false;
let currentUtterance;


//play + sintetizar a voz
function talk() {
  let t = document.getElementById('txt').innerText;
  let voices = synth.getVoices();

  if (voices.length !== 0) {
    console.log("talk");
    let msg = new SpeechSynthesisUtterance();
    msg.voice = voices[2];
    msg.rate = 1;
    msg.pitch = 1;
    msg.text = t;
    msg.lang = "pt-BR";

    synth.speak(msg);
    currentUtterance = msg;
    isPlaying = true;
    updateIcons();

    // Adiciona um evento para verificar quando a leitura for concluída
    msg.onend = function() {
      isPlaying = false;
      updateIcons();
    };
  }
}

//pausar
function stop() {
  synth.cancel();
  isPlaying = false;
  updateIcons();
}


//botao play e pause
function updateIcons() {
  const playIcon = document.getElementById("play");
  const pauseIcon = document.getElementById("pause");
  if (isPlaying) {
    playIcon.style.display = "none";
    pauseIcon.style.display = "flex";
  } else {
    playIcon.style.display = "flex";
    pauseIcon.style.display = "none";
  }
}

document.getElementById("play").onclick = talk;
document.getElementById("pause").onclick = stop;