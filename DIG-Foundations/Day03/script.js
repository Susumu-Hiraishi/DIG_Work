'use strict'
// 1行目に記載している 'use strict' は削除しないでください











// =========================================================================
//基礎演習
console.log("");
console.log("＝ここから、基礎演習＝");
//1
// 以下のコードの式がどういう結果を導き出すか、まず頭で考えてみましょう。
// "true" == true;
//＝＞　true
// // 基本的に == は使わず、必ず === を使うようにしましょう。
// "true" === true;
//＝＞　false
// 3 >= 3;
//＝＞　true
// 3 !== 4;
//＝＞　false
//2
console.log(1100 !== 99) // => true を表示させる。
console.log(1 > 21) // => false
console.log(62 !== 61) // => true
console.log("5" === 5) // => false
console.log("6" !== "six") // => true
//3
console.log(2 + 3 * 10);
console.log(2 + 3 * 10 < 50);
//4
function isEqual(valueOne, valueTwo) {
    return valueOne == valueTwo;
}
console.log(isEqual(50, "50"));
//5
// function isGreaterThan(valueOne, valueTwo) {
//     console.log("5の答え = ",valueOne > valueTwo);
// }
function isGreaterThan(valueOne, valueTwo) {
    console.log("5の答え = ",valueOne !== valueTwo);
}
isGreaterThan(50,40)
//6





//ここから　中級演習
console.log("")
console.log("ここから中級演習")



//ここから　ナイトメア
console.log("")
console.log("ここから中級演習")