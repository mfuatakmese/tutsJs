var names = ["Mustafa", "Melek", "Melek Fatma"];
// for 1. kısım sadece 1 kez başta çalışır. i=0 dediğim yerde her seferinde length hesaplamasın diye 1 defaya mahsus ilk kısımda yapmak lazım
for (var i= 0, len = names.length; i<len; i++) { // i yerine ii de kullanılabilir. Arama vb.. yaparken
    console.log(names[i]);
}

while (names.length>0) {
    console.log(names.pop()); // sondan başlayarak diziyi siliyor. Önce Melek Fatma gider Değişkeni döndürüp siliyor stack mantığı
}

do {
    console.log("En az 1 kez çalışacak");
} while (names.length>0)

// for in de var ama sonra bakacağız