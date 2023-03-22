export function letterChanges(str) {
  let newStr = "";

  for (let i = 0; i < str.length; i++) {
    let currentChar = str.charAt(i);
    let nextChar = String.fromCharCode(currentChar.charCodeAt(0) + 1);

    if (/[aeiou]/.test(nextChar)) {
      nextChar = nextChar.toUpperCase();
    }

    if (!/[a-z]/i.test(currentChar)) {
      newStr += currentChar;
    } else {
      newStr += nextChar;
    }
  }

  return newStr;
}

/*Coderbyte sitesindeki "Letter Changes" sorusu, bir karakter dizisi içindeki her harfi bir sonraki 
harfe dönüştürmek ve ardından tüm sesli harfleri büyük harflere dönüştürmek için bir algoritma 
yazmanızı istiyor.

Yukarıdaki kodda, letterChanges fonksiyonu, verilen str stringi üzerinde bir döngü kullanarak 
her karakteri değiştirir. Döngü, karakter dizisinin uzunluğu kadar devam eder ve her bir karakterin 
yerine geçici değişkenler kullanır.

String.fromCharCode metodu, bir Unicode değerini kullanarak, 
ona karşılık gelen karakteri döndürür. 
Yukarıdaki örnekte, currentChar.charCodeAt(0) + 1 ifadesi, her karakterin Unicode değerini bir artırarak, 
bir sonraki karakterin Unicode değerini bulur. Ardından, /[aeiou]/.test(nextChar) kullanarak, 
karakterin sesli harf olup olmadığını kontrol eder. Eğer sesli harf ise, büyük harfe dönüştürmek 
için toUpperCase methodu kullanılır.

Karakter dizisi içindeki harf olmayan herhangi bir karakter (noktalama işaretleri, sayılar, boşluklar vb.)
direkt olarak newStr değişkenine eklenir, ancak harf ise, önce bir sonraki karakter bulunur ve 
sonra newStr değişkenine eklenir. Son olarak, newStr değişkeni, fonksiyon tarafından döndürülür.

Özetle, yukarıdaki algoritma, her karakteri tek tek dolaşarak, her harfi bir sonraki harfe dönüştürerek 
ve sonra tüm sesli harfleri büyük harflere dönüştürerek yeni bir karakter dizisi oluşturur.*/
