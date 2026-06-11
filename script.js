console.log("--- GÖREV 1: Fonksiyon Tanımlama ---");

function kareAl(rakam) {
    let kareSonuc = rakam * rakam;
    return kareSonuc;
}
console.log(`5'in karesi: ${kareAl(5)}`);

function faktoriyel(n) {
    if (n === 0 || n === 1) return 1;
    let total = 1;
    let index = 1;
    while (index <= n) {
        total *= index;
        index++;
    }
    return total;
}
console.log(`5! = ${faktoriyel(5)}`);

function ciftMisayi(deger) {
    const durum = (deger % 2 === 0);
    return `${deger} çift sayıdır: ${durum}`;
}
console.log(ciftMisayi(4));

console.log("\n--- GÖREV 2: Ok Fonksiyonları ---");

const toplama = (x, y) => {
    return x + y;
};
console.log(`toplama(8, 12) → ${toplama(8, 12)}`);

const carpma = (sayiA, sayiB) => sayiA * sayiB;
console.log(`carpma(6, 7) → ${carpma(6, 7)}`);

const buyuklukKontrol = (val1, val2) => {
    if (val1 > val2) return val1;
    return val2;
};
console.log(`buyuklukKontrol(15, 8) → ${buyuklukKontrol(15, 8)}`);

console.log("\n--- GÖREV 3: map() ve filter() ---");

const sayilar = [3, 7, 12, 5, 8, 21, 4, 9, 15, 6];

const katlar3 = sayilar.map((num) => num * 3);
console.log("3 Katı Dizisi:", katlar3);

const limitOn = sayilar.filter((element) => element > 10);
console.log("10'dan Büyük Olanlar:", limitOn);

const tekler = sayilar.filter((item) => item % 2 !== 0);
console.log("Tek Sayılar Dizisi:", tekler);

console.log("\n--- GÖREV 4: reduce ile Hesaplamalar ---");

const diziToplami = sayilar.reduce((total, current) => total + current, 0);
console.log("Tüm sayıların toplamı:", diziToplami);

const zirveSayi = sayilar.reduce((max, current) => Math.max(max, current), sayilar[0]);
console.log("En büyük sayı:", zirveSayi);

const dipSayi = sayilar.reduce((min, current) => Math.min(min, current), sayilar[0]);
console.log("En küçük sayı:", dipSayi);

console.log("\n--- GÖREV 5: Nesne ve JSON Kullanımı ---");

const kitap = {
    baslik: "Sefiller",
    yazar: "Victor Hugo",
    yil: 1862,
    sayfaSayisi: 1248
};

for (let anahtar in kitap) {
    console.log(`Özellik [${anahtar}]: ${kitap[anahtar]}`);
}

const ogrenci = {
    ad: "Ayşe",
    soyad: "Demir",
    numara: 2021001234,
    dersler: ["Matematik", "Fizik", "Programlama"]
};

const jsonData = JSON.stringify(ogrenci);
console.log("JSON Çıktısı:", jsonData);

const parsedObj = JSON.parse(jsonData);
console.log("Okunan Öğrenci Adı:", parsedObj["ad"]);

console.log("\n--- GÖREV 6: Sınıf Tanımlama ve İşlemler ---");

class Kitap {
    constructor(bookTitle, bookAuthor, bookYear, bookPrice) {
        this.baslik = bookTitle;
        this.yazar = bookAuthor;
        this.yil = bookYear;
        this.fiyat = bookPrice;
    }

    bilgiVer() {
        return `Başlık: ${this.baslik}, Yazar: ${this.yazar}, Yıl: ${this.yil}`;
    }

    fiyatGuncelle(yeniFiyat) {
        this.fiyat = yeniFiyat;
    }

    indirimUygula(oran) {
        let kesinti = this.fiyat * (oran / 100);
        this.fiyat -= kesinti;
    }
}

const eser1 = new Kitap("Suç ve Ceza", "Dostoyevski", 1866, 120);
const eser2 = new Kitap("Yüzüklerin Efendisi", "JRR Tolkien", 1954, 180);
const eser3 = new Kitap("Hayvan Çiftliği", "George Orwell", 1945, 90);

console.log(eser1.bilgiVer());
console.log(eser2.bilgiVer());
console.log(eser3.bilgiVer());

const tumKitaplar = [eser1, eser2, eser3];

console.log("\n%10 İndirim Uygulandı:");
for (let tekKitap of tumKitaplar) {
    tekKitap.indirimUygula(10);
    console.log(`${tekKitap.baslik} -> İndirimli Fiyatı: ${tekKitap.fiyat} TL`);
}

console.log("\n--- GÖREV 7: Döngüler ile Alıştırmalar ---");

console.log("Yıldız Deseni:");
for (let satirNo = 1; satirNo <= 5; satirNo++) {
    console.log("* ".repeat(satirNo).trim());
}

const numbers = [5, 12, 8, 23, 7, 31, 4, 19];
let i = 0;
let hedefSayi = undefined;

while (i < numbers.length) {
    if (numbers[i] > 20) {
        hedefSayi = numbers[i];
        break; 
    }
    i++;
}
console.log("20'den büyük ilk sayı:", hedefSayi);