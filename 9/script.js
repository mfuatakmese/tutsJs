var foo = 6==6; // true
    foo = "6" == 6; // true JS iki farklı tipi karşılaştırırken oto casting yapıyor. Tipi için de kontrol === Php gibi..
    foo = "hello" == "Hello"; // false case Sensitive 3. = tipe bakar.

// Aşağıdaki if yapısında her satır için kod çalışacak ve her seferinde bir karşılaştırma işi yapacak
foo = "hello";

if (foo==="Hello") {
    console.log("Hello");
}

if (foo==="hello") {
    console.log("hello");
}

if (foo==="HellO") {
    console.log("HellO");
}

// Aşağıdaki yapıda ise 1. else if ten sonra diğer koşullara dahi bakmadan bloktan çıkılır. Bu sayede daha az kod yazılır.
// IF yazarken olması muhtemel olanı tepeye yazmak lazım Bu sayede else if lere bakmadan daha az karşılaştırma yapar
if (foo==="Hello") {
    console.log("Hello");
} else if (foo==="hello") {
    console.log("hello");
} else if (foo==="HellO") {
    console.log("HellO");
}

var foo; // Tip verilmediği için undefined tipinde bir değişken oluyor
if (0) { // false Herhangi bir rakam True yada "" False "herhangi bir şey" True yada [] Array {} Object True döndürür

}
// null bir null objectir False verir
console.log(typeof null); // object