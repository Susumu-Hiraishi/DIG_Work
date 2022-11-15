'use strict'
// 1行目に記載している 'use strict' は削除しないでください
console.log("Hellow world!")

//基礎演習
console.log("");
console.log("＝ここから、基礎演習＝");
const school = "DIG college";
console.log(school); // "DIG college" を表示
let week = 1;
console.log(week); // "1" を表示

// ここにあなたのコードを書いてください
let Namae="Susumu Hiraishi";
let age=49;
let isProgrammer = true;
let currentTask = 1;

console.log("名前=" + Namae); // あなたの名前を表示
console.log("年齢=" + age); // あなたの年齢を表示
console.log("プログラマー？=" + isProgrammer); // "true" を表示
console.log("現在のタスク状況=" + currentTask); // "1" を表示

currentTask = 2;
console.log("現在のタスク状況=" + currentTask); // "2" を表示

// 正方形の面積を計算して保存
const squareSideLength = 2;
// ここにあなたのコードを書いてください
let squareArea = squareSideLength ** 2;
console.log("正方形の面積=" + squareArea); // "4" を表示

// 長方形の面積を計算して保存
const rectangleBaseLength = 3;
const rectangleHeightLength = 4;
// ここにあなたのコードを書いてください
let rectangleArea = rectangleBaseLength * rectangleHeightLength;
console.log("長方形の面積=" + rectangleArea); // "12" を表示

// 三角形の面積を計算して保存
const triangleBaseLength = 4;
const triangleHeightLength = 5;
// ここにあなたのコードを書いてください
let triangleArea = ( triangleBaseLength * triangleHeightLength ) / 2;
console.log("三関係の面積=" + triangleArea); // "10" を表示

//中級演習
console.log("");
console.log("＝ここから、中級演習＝");
// 円の円周と面積を計算して保存する
const circleDiameter = 10;
// ここにあなたのコードを書いてください
let circleCircumference = circleDiameter * Math.PI;
let circleArea = (( circleDiameter / 2 ) ** 2 ) * Math.PI;
console.log("円周=" + circleCircumference); // "31.41592653589793" に近い値を表示
console.log("円の面積" + circleArea); // "78.53981633974483" に近い値を表示

//値を直接再割り当てせずに a と b の値を入れ替えて、期待通りの値が出力
let buf;
let a = "B";
let b = "A";
buf = a;
a = b;
b = buf;
console.log("aの値=" + a); // "A" を表示
console.log("bの値=" + b); // "B" を表示

//指数関数的成長 (Exponential growth) を実装してみましょう。変数 の値を変更して、2 のべき乗を求めましょう。
let value = 1;
console.log("1回目=" + value); // "1" を表示
// value に何かを行う
let value2 = value + value
value = value2
console.log("2回目=" + value); // "2" を表示
// value に何かを行う
value = Math.pow(value2,2);
console.log("3回目=" + value); // "4" を表示
// value に何かを行う
value = Math.pow(value2,3);
console.log("4回目=" + value); // "8" を表示
// value に何かを行う
value = Math.pow(value2,4);
console.log("5回目=" + value); // "16" を表示
// value に何かを行う
value = Math.pow(value2,5);
console.log("6回目=" + value); // "32" を表示
// value に何かを行う
value = Math.pow(value2,6);
console.log("7回目=" + value); // "64" を表示

//文字列結合に挑戦しましょう。いろいろな変数を連結して、期待している結果を表示してください。
const firstName = "Yan";
const lastName = "Fan";
const city = "Tokyo";

console.log("文字連結：" + "Hello, my name is " + firstName + " " + lastName + ". I live in " + city + "."); // "Hello, my name is Yan Fan. I live in Tokyo." を表示

//応用演習
console.log("");
console.log("＝ここから、応用演習＝");
//counter という関数を宣言します。これが呼び出されたら、常に前回呼び出された時よりも 1 つ大きい数値を console.log で表示しましょう。
// ヒント： ここで何かする必要があるかもしれません
let cnt = 0;
function counter() {
    // ここにあなたのコードを書いてください
    cnt = cnt + 1;
    console.log(cnt + "回目=" + cnt);
}

  counter(); // => 1
  counter(); // => 2
  counter(); // => 3
  // etc.

//isOdd という関数を宣言します。これが呼び出されたら、与えられた数値が奇数かどうかを console.log で表示しましょう。
function isOdd(givenNumber) {
    // ここにあなたのコードを書いてください
    // 与えられた数値によって、"Yes, it's odd" もしくは "No, it's even" を表示
    let judge = givenNumber % 2
    if (judge = 1 ){
        console.log("Yes, it's odd")
    }else{
        console.log("No, it's even")
    }
}

console.log("3は、奇数ですか？");
isOdd(3);// "Yes, it's odd"