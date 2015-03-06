// var foo=new Array(11,"hello",true); // Eski düzen
var foo = [11,"hello",true]; // Yeni nesil tanımlama. Dizi türü yok int, string, boolean aynı anda. Ama doğrusu her tip için 1 dizi olmalı.
console.log(foo); // Ekrana , li çıktı veriyor (Alert dersen) console ise var_dump yapıyor
console.log(foo.length);

var dz = [];
dz[0] = 35; // eleman ekleme
dz[dz.length] = 40; // en sonra eleman ekle
dz.push(3); // en sona en temiz şekilde eleman ekleme
console.log(dz);

// concat 2 diziyi birleştirip yeni diziyi döndürür
var names = ["Mustafa"],
    names2 = ["Melek Fatma"];
var allNames = names.concat(names2);
console.log(allNames); // 2 dizi birleşti

// join birleştirip bize String dönüyor
console.log(allNames.join());

// sort diziyi sıralamak için Galiba ters çevirip döndürmek yerine diziyi kalıcı olarak ters çeviriyor
var sorted = allNames.sort();
console.log(sorted);

// reverse diziyi ters çevirir
var reversed = allNames.reverse();
console.log(reversed);

