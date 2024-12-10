// Soru constructor fonksiyonu
function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
  // Sorunun metni (ör. "FIFA Dünya Kupası ilk kez hangi yıl düzenlendi?")
  this.soruMetni = soruMetni;

  // Sorunun şıkları (ör. { a: "1920", b: "1930", c: "1940", d: "1950" })
  this.cevapSecenekleri = cevapSecenekleri;

  // Sorunun doğru cevabı (ör. "b")
  this.dogruCevap = dogruCevap;
}

// Kullanıcının verdiği cevabı kontrol eden metot
Soru.prototype.cevabiKontrolEt = function (cevap) {
  // Kullanıcının verdiği cevap, doğru cevap ile karşılaştırılır
  return cevap === this.dogruCevap;
};
