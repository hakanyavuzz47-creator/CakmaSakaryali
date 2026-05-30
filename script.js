const yurumeVideo = document.getElementById("yurumeVideo");
const patlamaVideo = document.getElementById("patlamaVideo");

function goreviBaslat() {
  ekranGec("baslangic", "videoEkrani");
  yurumeVideo.muted = false;
  yurumeVideo.play();
}

yurumeVideo.onended = function () {
  yurumeVideo.pause();
  document.getElementById("videoUstuSoru").classList.remove("gizli");
};

function patlat() {
  document.getElementById("videoUstuSoru").classList.add("gizli");
  ekranGec("videoEkrani", "patlamaEkrani");

  patlamaVideo.currentTime = 0;
  patlamaVideo.play();

  patlamaVideo.onended = function () {
    ekranGec("patlamaEkrani", "kaciyorEkrani");
  };
}

function yakala() {
  ekranGec("kaciyorEkrani", "bustedEkrani");

  const bustedSes = document.getElementById("bustedSes");
  bustedSes.currentTime = 0;
  bustedSes.play();

  setTimeout(() => {
    ekranGec("bustedEkrani", "tebrikEkrani");

    setTimeout(() => {
      document.getElementById("devamBtn").classList.remove("gizli");
    }, 2000);

  }, 7000);
}

function dogumGunuAc() {
  ekranGec("tebrikEkrani", "dogumGunu");

  const muzik = document.getElementById("muzik");
  muzik.currentTime = 0;
  muzik.play();

  setInterval(emojiYagdir, 500);
}

function zarfiAc() {
  document.getElementById("mektupPopup").classList.remove("gizli");
}

function mektubuKapat() {
  document.getElementById("mektupPopup").classList.add("gizli");
}

function ekranGec(eski, yeni) {
  document.getElementById(eski).classList.add("gizli");
  document.getElementById(yeni).classList.remove("gizli");
}

function emojiYagdir() {
  const emojiler = ["❤️", "💕", "🎉", "🎊", "🥳", "😊", "✨"];

  for (let i = 0; i < 8; i++) {
    const emoji = document.createElement("div");
    emoji.className = "emoji";
    emoji.innerHTML = emojiler[Math.floor(Math.random() * emojiler.length)];

    const solMu = Math.random() > 0.5;

    if (window.innerWidth > 700) {
      emoji.style.left = solMu
        ? Math.random() * 18 + "vw"
        : Math.random() * 18 + 82 + "vw";
    } else {
      emoji.style.left = solMu
        ? Math.random() * 7 + "vw"
        : Math.random() * 7 + 93 + "vw";
    }

    emoji.style.fontSize = Math.random() * 22 + 18 + "px";
    emoji.style.animationDuration = Math.random() * 2 + 4 + "s";

    document.getElementById("emojiAlani").appendChild(emoji);

    setTimeout(() => emoji.remove(), 6500);
  }
}
