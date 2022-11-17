'use strict'
// 1行目に記載している 'use strict' は削除しないでください

let weight = 80;
let hight = 1.75
console.log(weight / (hight * hight))

function calcBMI(weight,hight){
    return weight / (hight * hight);
}
console.log("私の理想BMI= " + calcBMI(71,1.75))










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
isGreaterThan(50,40);
//6
function isOfAge(age){
    return age >= 20;
}
console.log(isOfAge(35));


//ここから　中級演習
console.log("")
console.log("ここから中級演習")
// 先ほど作成した関数 isOfAge を「ブーリアンの値を返すだけではなく、飲める年齢なのかどうかを表す文字列をコンソールに表示する関数」になるよう修正しましょう
function isOfAge1(age){
    if (age >= 20){
        return "お酒を飲んでよし！";
    }else{
        return "未成年でしょ！";
    }
}     
console.log(isOfAge1(18));

// 引数に数字 n をとる isEven という名前の関数を作成しましょう。引数が偶数であれば true を、そうでなければ false を返してください。
function isEven(num){
    let surplus = num % 2;
    return surplus === 0;
}
console.log(isEven(24));

// 2 つの引数 username と password をとる validCredentials という名前の関数を作成しましょう
function validCredentials(username,password){
    console.log("名前の文字数は=",username.length > 8);
    console.log("PWの文字数は=",password > 8 );
}
validCredentials("Susumu Hiraishi","password")

//ここから　ナイトメア
console.log("")
console.log("ここからナイトメア")

function flatten(array1){
    console.log("IN配列数=",array1.length)
    let array2 = [array1.join()]
    console.log("OUT配列数=",array2.length)
    return array2
}
console.log(flatten([[1, 2, 3],[4, 5, 6],])); // [1, 2, 3, 4, 5, 6]
console.log(flatten([1, 2, 3, [4, 5, 6]])); // [1, 2, 3, 4, 5, 6]
console.log(flatten([[1], [2], [3], [4, 5, 6]])); // [1, 2, 3, 4, 5, 6]
