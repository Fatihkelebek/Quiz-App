// Quiz constructor fonksiyonu
function Quiz(sorular) {
  // Mevcut soru indeksi
  this.soruIndex = 0;

  // Doğru cevaplanan soru sayısı
  this.dogruCevapSayisi = 0;

  // Soru listesi
  this.sorular = sorular || []; // Varsayılan olarak boş bir liste
}

// Mevcut soruyu getiren metot
Quiz.prototype.soruGetir = function () {
  return this.sorular[this.soruIndex];
};
