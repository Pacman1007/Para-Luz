// ==========================================
// GOLDEN HOUR - JVKE
// Sincronización de letra
// ==========================================

var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

var lyricsData = [
  { text: "It was just two lovers", time: 14.2 },
  { text: "Sittin' in the car, listening to Blonde", time: 16.1 },
  { text: "Fallin' for each other", time: 18.9 },
  { text: "Pink and orange skies, feelin' super childish", time: 21.0 },
  { text: "No Donald Glover", time: 23.5 },
  { text: "Missed call from my mother", time: 25.0 },
  { text: 'Like, "Where you at tonight?"', time: 26.8 },
  { text: "Got no alibi", time: 28.0 },

  { text: "I was all alone with the love of my life", time: 28.8 },
  { text: "She's got glitter for skin", time: 33.9 },
  { text: "My radiant beam in the night", time: 36.0 },
  { text: "I don't need no light to see you", time: 41.0 },

  { text: "Shine", time: 46.9 },
  { text: "It's your golden hour (oh)", time: 50.0 },
  { text: "You slow down time", time: 58.8 },
  { text: "In your golden hour (oh)", time: 65.0 },

  { text: "We were just two lovers", time: 76.8 },
  { text: "Feet up on the dash, drivin' nowhere fast", time: 77.8 },
  { text: "Burnin' through the summer", time: 79.8 },
  { text: "Radio on blast, make the moment last", time: 82.3 },
  { text: "She got solar power", time: 84.5 },
  { text: "Minutes feel like hours", time: 86.1 },
  { text: "She knew she was the baddest", time: 88.5 },
  { text: "Can you even imagine fallin' like I did?", time: 89.0 },

  { text: "For the love of my life", time: 91.0 },
  { text: "She's got glow on her face", time: 95.0 },
  { text: "A glorious look in her eyes", time: 97.8 },
  { text: "My angel of light", time: 102.0 },

  { text: "I was all alone with the love of my life", time: 105.0 },
  { text: "She's got glitter for skin", time: 110.0 },
  { text: "My radiant beam in the night", time: 112.8 },
  { text: "I don't need no light to see you", time: 117.0 },

  { text: "Shine", time: 122.0 },
  { text: "It's your golden hour (oh)", time: 125.8 },
  { text: "You slow down time", time: 134.8 },
  { text: "In your golden hour (oh)", time: 141.8 }
];

var currentLineIndex = -1;

function updateLyrics() {

  if (!audio || !lyrics) {
    return;
  }

  var currentTime = audio.currentTime;
  var newIndex = -1;

  for (var i = 0; i < lyricsData.length; i++) {

    if (currentTime >= lyricsData[i].time) {
      newIndex = i;
    } else {
      break;
    }

  }

  if (newIndex !== currentLineIndex) {

    currentLineIndex = newIndex;

    if (newIndex >= 0) {

      lyrics.innerHTML = lyricsData[newIndex].text;
      lyrics.style.opacity = 1;

    } else {

      lyrics.innerHTML = "";
      lyrics.style.opacity = 0;

    }

  }

}


// ==========================================
// ACTUALIZACIÓN DE LA LETRA
// ==========================================

audio.addEventListener("timeupdate", updateLyrics);


// ==========================================
// CUANDO SE MUEVE LA CANCIÓN
// ==========================================

audio.addEventListener("seeked", function () {

  currentLineIndex = -1;
  updateLyrics();

});


// ==========================================
// OCULTAR TÍTULO
// ==========================================

function ocultarTitulo() {

  var titulo = document.querySelector(".titulo");

  if (!titulo) {
    return;
  }

  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards";

  setTimeout(function () {

    titulo.style.display = "none";

  }, 3000);

}

setTimeout(ocultarTitulo, 216000);