// Browser bizim için OS gibidir. Browser tarafından bize sunulan en önemli yapı Window nesnesidir ve hiyerarşinin en üstünde yeralır.

// Bizim global ya da local tanımladığımız tüm değişkenler ve fonksiyonlar aslında window nesnesine ait birer property ve metod gibidir.
var foo = "Selamun Aleykum";
//window.alert(window.foo); // Yani alert(foo) ile aynı şey. Derleyici bizim yerimize window nesnesini otomatik ekliyordu.

// Lokal bir alanda ezilmiş bir değişkenin Global değerine ulaşmak istediğimizde window.foo diyebiliriz.

var bar = function() {
    var foo = "Hi";
    console.log(window.foo); // Sadece foo desem Hi diyecek!
}
bar();

/*
KESİNLİKLE VE KESİNLİKLE GLOBAL DEĞİŞKEN KULLANMA! Bunun yerine kendi değişkenlerini local function lar içinde tanımla.
Eğer 3. parti bir yazılım kullanıyorsan ya sen onun kodlarını ya da o senin kodlarını bozabilir (include sırasına göre) Bu engellemek için LOCAL kullan!

Local değişken tanımlamak için tüm kodlarımızı anonim bir fonksiyon içerisine alabiliriz.
*/

// Anoymouse function yazarak kodları koruma altına alabiliriz. Anonim fonksiyonu hemen çalıştırmak için } dan sonra () eklenmelidir.
// Fakat buy syntax js engine tarafından yanlış algılanabilir. Bunu engellemek için bu tanımı () ile wrap etmek gerekir.

(function() {
    var bar = function() {
        var foo = "Hi";
        console.log(window.foo); // Artık bu kod undefined verir. Yukarıdaki tanımlamayı saymazsak artık bizim Global bir değişkenimiz kalmadı.
    }
    bar();

}());

var href = location.href; // window.location property si. Ayrıca location.href ile location aynı şeyi yani URL bilgisini verir.
console.log(href);
// Window nesnesine ait pencereler 1-alert() 2-confirm() Kullanıcıya Evet Hayır penceresi çıkarır
if (confirm("Do you want to go to Google.com?")) {
    location = 'http://www.google.com'
} else {
    console.log("You'll stay here!");
}

