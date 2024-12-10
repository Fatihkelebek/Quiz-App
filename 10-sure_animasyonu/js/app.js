// Kolay, Orta ve Zor seviyeler için soru listeleri
const sorularKolay = [
  new Soru(
    "1-FIFA Dünya Kupası hangi yılda düzenlenmeye başlanmıştır?",
    { a: "1920", b: "1930", c: "1940", d: "1950" },
    "b"
  ),
  new Soru(
    "2-UEFA Şampiyonlar Ligi'ni en çok kazanan takım hangisidir?",
    { a: "FC Barcelona", b: "Real Madrid", c: "Bayern Münih", d: "AC Milan" },
    "b"
  ),
  new Soru(
    "3-Lionel Messi hangi milli takımda forma giymektedir?",
    { a: "Brezilya", b: "Arjantin", c: "İspanya", d: "Portekiz" },
    "b"
  ),
  new Soru(
    "4-Cristiano Ronaldo'nun lakabı nedir?",
    { a: "CR7", b: "The Goat", c: "King Ronaldo", d: "The Magician" },
    "a"
  ),
  new Soru(
    "5-Türkiye Süper Ligi hangi yıl başlamıştır?",
    { a: "1945", b: "1959", c: "1975", d: "1983" },
    "b"
  ),
];

const sorularOrta = [
  new Soru(
    "1-Ballon d'Or ödülünü en çok kazanan futbolcu kimdir?",
    {
      a: "Cristiano Ronaldo",
      b: "Lionel Messi",
      c: "Johan Cruyff",
      d: "Zinedine Zidane",
    },
    "b"
  ),
  new Soru(
    "2-Diego Maradona'nın profesyonel olarak oynadığı ilk kulüp hangisidir?",
    { a: "Napoli", b: "Barcelona", c: "Argentinos Juniors", d: "Boca Juniors" },
    "c"
  ),
  new Soru(
    "3-UEFA Avrupa Ligi'ni en çok kazanan takım hangisidir?",
    { a: "Sevilla", b: "Liverpool", c: "Inter", d: "Chelsea" },
    "a"
  ),
  new Soru(
    "4-Galatasaray, UEFA Kupası'nı hangi yıl kazanmıştır?",
    { a: "1998", b: "2000", c: "2002", d: "2004" },
    "b"
  ),
  new Soru(
    "5-Premier Lig'de Arsenal'ın yenilgisiz şampiyonluk yaşadığı sezon hangisidir?",
    { a: "1999-2000", b: "2000-2001", c: "2003-2004", d: "2005-2006" },
    "c"
  ),
];

const sorularZor = [
  new Soru(
    "1-Real Madrid'in efsanevi forvet üçlüsü olan 'BBC' hangi oyunculardan oluşur?",
    {
      a: "Benzema, Bale, Cristiano",
      b: "Benzema, Beckham, Cristiano",
      c: "Bale, Beckham, Cristiano",
      d: "Benzema, Bale, Cassano",
    },
    "a"
  ),
  new Soru(
    "2-Maradona, Napoli ile Serie A şampiyonluğunu hangi yıllarda kazandı?",
    {
      a: "1986 ve 1987",
      b: "1987 ve 1990",
      c: "1988 ve 1991",
      d: "1989 ve 1991",
    },
    "b"
  ),
  new Soru(
    "3-Johan Cruyff'un Ajax'taki forma numarası neydi?",
    { a: "7", b: "9", c: "10", d: "14" },
    "d"
  ),
  new Soru(
    "4-Brezilya'nın efsane futbolcusu Pele, Dünya Kupası'nı kaç kez kazandı?",
    { a: "2", b: "3", c: "4", d: "5" },
    "b"
  ),
  new Soru(
    "5-Manchester United, 1999 yılında Şampiyonlar Ligi finalinde hangi takımı yenmiştir?",
    { a: "Juventus", b: "Real Madrid", c: "Bayern Münih", d: "Barcelona" },
    "c"
  ),
];

// Seviye seçim kutusunu ve butonları seçiyoruz
const levelBox = document.querySelector("#level-box");
const btnLevels = document.querySelectorAll(".btn-level");

// Kullanıcı zorluk seviyesini seçtiğinde çalışacak
btnLevels.forEach((button) => {
  button.addEventListener("click", function () {
    const level = this.dataset.level; // Tıklanan seviyeyi al
    let selectedQuestions;

    // Seviyeye göre soru listesi belirleniyor
    if (level === "kolay") selectedQuestions = sorularKolay;
    else if (level === "orta") selectedQuestions = sorularOrta;
    else if (level === "zor") selectedQuestions = sorularZor;

    quiz.sorular = selectedQuestions; // Quiz'e seçilen sorular atanıyor
    levelBox.classList.remove("active"); // Seviye kutusu gizleniyor
    ui.buttonBox.classList.add("active"); // Başlatma kutusu gösteriliyor
  });
});

// Quiz nesnesi oluşturuluyor (başlangıçta boş)
const quiz = new Quiz([]);
const ui = new UI();

// Quiz başlatma
ui.btnStart.addEventListener("click", function () {
  if (quiz.sorular.length === 0) {
    alert("Lütfen bir seviye seçin!"); // Uyarı mesajı
    return; // İşlemi durdur
  }

  startTimer(10); // Zamanlayıcı başlatılıyor
  startTimerLine(); // İlerleme çubuğu başlatılıyor
  ui.quizBox.classList.add("active"); // Quiz kutusu görünür yapılıyor
  ui.buttonBox.classList.remove("active"); // Başlatma kutusu gizleniyor
  ui.soruGoster(quiz.soruGetir()); // İlk soru gösteriliyor
  ui.soruSayisiniGoster(quiz.soruIndex + 1, quiz.sorular.length); // Soru sayısı gösteriliyor
  ui.btnNext.classList.remove("show"); // "Sonraki" butonu gizleniyor
});

// Sonraki soruya geçiş
ui.btnNext.addEventListener("click", function () {
  if (quiz.sorular.length != quiz.soruIndex) {
    startTimer(10); // Zamanlayıcı sıfırla ve başlat
    startTimerLine(); // İlerleme çubuğu sıfırla ve başlat
    ui.soruGoster(quiz.soruGetir()); // Sonraki soru gösteriliyor
    ui.soruSayisiniGoster(quiz.soruIndex + 1, quiz.sorular.length); // Güncel soru numarası gösteriliyor
    ui.btnNext.classList.remove("show"); // "Sonraki" butonu gizleniyor
  } else {
    ui.scoreBox.classList.add("active"); // Skor kutusu görünür yapılıyor
    ui.quizBox.classList.remove("active"); // Quiz kutusu gizleniyor
    ui.skoruGoster(quiz.dogruCevapSayisi, quiz.sorular.length); // Kullanıcının skoru gösteriliyor
  }
});

// Şık seçimi ve cevap kontrolü
function optionSelected(e) {
  clearInterval(counter); // Zamanlayıcı durduruluyor
  clearInterval(counterLine); // İlerleme çubuğu durduruluyor

  let selectedElement = e.target; // Tıklanan öğe alınıyor
  if (selectedElement.nodeName == "SPAN") {
    selectedElement = selectedElement.parentElement; // Eğer SPAN içindeyse üst öğe seçiliyor
  }
  const cevap = e.target.textContent[0]; // Tıklanan şıkkın harfi alınıyor
  const soru = quiz.soruGetir(); // Mevcut soru alınıyor

  if (soru.cevabiKontrolEt(cevap)) {
    quiz.dogruCevapSayisi += 1; // Doğru cevap sayısı artırılıyor
    selectedElement.classList.add("correct"); // Seçilen şık doğru olarak işaretleniyor
    selectedElement.insertAdjacentHTML("beforeend", ui.correctIcon); // Doğru simgesi ekleniyor
  } else {
    selectedElement.classList.add("incorrect"); // Seçilen şık yanlış olarak işaretleniyor
    selectedElement.insertAdjacentHTML("beforeend", ui.inCorrectIcon); // Yanlış simgesi ekleniyor
  }

  quiz.soruIndex += 1; // Bir sonraki soruya geçmek için soru indeksi artırılıyor
  ui.disableAllOption(); // Diğer şıklar devre dışı bırakılıyor
  ui.btnNext.classList.add("show"); // "Sonraki" butonu görünür yapılıyor
}

// Quiz yeniden başlatma ve çıkış
ui.btnQuit.addEventListener("click", function () {
  window.location.reload(); // Sayfa yeniden yükleniyor (quiz sıfırlanıyor)
});

ui.btnReplay.addEventListener("click", function () {
  quiz.soruIndex = 0; // Soru indeksi sıfırlanıyor
  quiz.dogruCevapSayisi = 0; // Doğru cevap sayısı sıfırlanıyor
  ui.btnStart.click(); // Quiz yeniden başlatılıyor
  ui.scoreBox.classList.remove("active"); // Skor kutusu gizleniyor
});

// Zamanlayıcı fonksiyonları
let counter;
function startTimer(time) {
  counter = setInterval(timer, 1000); // Her 1 saniyede bir çalışır

  function timer() {
    ui.timeSecond.textContent = time; // Kalan süre gösteriliyor
    time--;

    if (time < 0) {
      clearInterval(counter); // Zamanlayıcı durduruluyor
      ui.timeText.textContent = "Süre Bitti"; // "Süre bitti" mesajı gösteriliyor
      ui.disableAllOption(); // Şıklar devre dışı bırakılıyor
      quiz.soruIndex += 1; // Sıradaki soruya geçiş için indeks artırılıyor
      ui.btnNext.classList.add("show"); // "Sonraki" butonu görünür yapılıyor
    }
  }
}

// İlerleme çubuğu zamanlayıcı
let counterLine;
function startTimerLine() {
  let line_width = 0; // Çubuğun başlangıç genişliği

  counterLine = setInterval(timer, 20); // Her 20 milisaniyede bir çalışır

  function timer() {
    line_width += 1; // Çubuğun genişliği artırılıyor
    ui.timeLine.style.width = line_width + "px"; // Çubuk genişliği güncelleniyor

    if (line_width > 549) {
      clearInterval(counterLine); // Zamanlayıcı durduruluyor
    }
  }
}
