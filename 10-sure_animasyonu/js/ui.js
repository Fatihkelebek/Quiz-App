// Kullanıcı Arayüzü (UI) sınıfı
function UI() {
  // Quiz kutusunu seçer.
  this.quizBox = document.querySelector("#quiz-box");

  // Başlatma butonunun bulunduğu kutuyu seçer.
  this.buttonBox = document.querySelector("#button-box");

  // Skor kutusunu seçer.
  this.scoreBox = document.querySelector("#score-box");

  // Seviye seçimi kutusunu seçer.
  this.levelBox = document.querySelector("#level-box");

  // Quiz'in gövde kısmını seçer (soruların gösterildiği alan).
  this.body = document.querySelector("#quiz-box #body");

  // Doğru cevap için ikon (Bootstrap simgesi).
  this.correctIcon = '<i class="bi bi-check-circle"></i>';

  // Yanlış cevap için ikon (Bootstrap simgesi).
  this.inCorrectIcon = '<i class="bi bi-x-circle"></i>';

  // Başlatma butonunu seçer.
  this.btnStart = document.querySelector(".btn-start");

  // "Sonraki Soru" butonunu seçer.
  this.btnNext = document.querySelector(".btn-next");

  // "Yeniden Oyna" butonunu seçer.
  this.btnReplay = document.querySelector(".btn-replay");

  // "Çıkış" butonunu seçer.
  this.btnQuit = document.querySelector(".btn-quit");

  // Zamanlayıcıdaki "Kalan Süre" metnini seçer.
  this.timeText = document.querySelector(".time-text");

  // Geri sayımı gösteren elemanı seçer.
  this.timeSecond = document.querySelector(".time-second");

  // Zaman ilerleme çubuğunu seçer.
  this.timeLine = document.querySelector(".time-line");
}

// Soruyu ve şıkları gösterir.
UI.prototype.soruGoster = function (soru) {
  // Gövdeyi temizler (önceki soru silinir).
  this.body.innerHTML = "";

  // Yeni bir kart gövdesi oluşturur.
  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  // Soru başlığı için bir <h5> etiketi oluşturur.
  const title = document.createElement("h5");
  title.classList.add("question-title");
  title.textContent = soru.soruMetni; // Sorunun metnini ekler.

  // Şıklar için bir liste oluşturur.
  const optionList = document.createElement("div");
  optionList.classList.add("option-list");

  // Şıkları döngüyle oluşturur.
  for (let [key, value] of Object.entries(soru.cevapSecenekleri)) {
    // Her şık için bir <div> oluşturur.
    const option = document.createElement("div");
    option.classList.add("option");

    // Tıklama olayını ekler.
    option.addEventListener("click", optionSelected);

    // Şık metni için bir <span> oluşturur.
    const span = document.createElement("span");
    span.textContent = key + ") " + value; // Şık harfi ve metni ekler (ör. "A) Node.js").

    // Şık metnini şık kutusuna ekler.
    option.appendChild(span);

    // Şık kutusunu listeye ekler.
    optionList.appendChild(option);
  }

  // Sorunun başlığını kart gövdesine ekler.
  cardBody.appendChild(title);

  // Şıklar listesini kart gövdesine ekler.
  cardBody.appendChild(optionList);

  // Kart gövdesini quiz gövdesine ekler.
  this.body.appendChild(cardBody);
};

// Şıkları devre dışı bırakır.
UI.prototype.disableAllOption = function () {
  // Tüm şıkları seçer.
  const options = document.querySelectorAll(".option");

  // Şıkları döngüyle devre dışı bırakır.
  for (let option of options) {
    option.classList.add("disabled"); // CSS'teki "disabled" sınıfı tıklanamaz hale getirir.
  }
};

// Soru sayısını ve toplam soruları gösterir.
UI.prototype.soruSayisiniGoster = function (soruSirasi, toplamSoru) {
  // Soru numarasını ve toplam soru sayısını içeren bir etiket oluşturur.
  const etiket = `<span class="badge text-bg-danger">${soruSirasi} / ${toplamSoru}</span>`;

  // Etiketi "question-index" adlı elemanın içine ekler.
  document.querySelector(".question-index").innerHTML = etiket;
};

// Skoru kullanıcıya gösterir.
UI.prototype.skoruGoster = function (dogruCevap, toplamSoru) {
  // Kullanıcının skorunu içeren bir metin oluşturur.
  const etiket = `Toplam ${toplamSoru} soruda ${dogruCevap} doğru cevap verdiniz.`;

  // Bu metni "score-text" adlı elemanın içine ekler.
  document.querySelector(".score-text").innerHTML = etiket;
};
