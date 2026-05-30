const yurumeVideo = document.getElementById("yurumeVideo");
const patlamaVideo = document.getElementById("patlamaVideo");

function goreviBaslat() {
  ekranGec("baslangic", "videoEkrani");
  yurumeVideo.muted = false;
  yurumeVideo.play();
}

yurumeVideo.onended = function () {
  ekranGec("videoEkrani", "durdurEkrani");
};

function patlat() {
  ekranGec("durdurEkrani", "patlamaEkrani");
  patlamaVideo.play();

  patlamaVideo.onended = function () {
    ekranGec("patlamaEkrani", "kaciyorEkrani");
  };
}

function yakala() {
  ekranGec("kaciyorEkrani", "bustedEkrani");

  const bustedSes = document.getElementById("bustedSes");
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
  document.getElementById("muzik").play();
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
