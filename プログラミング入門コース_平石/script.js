'use strict'
// 1行目に記載している 'use strict' は削除しないでください
const color = "red";
console.log(color); // "red" が表示される
let week = 1;
console.log(week); // 1 が表示される


// 適切な名前で変数を定義し、コメントの内容に合うようにコードを書いてください
let myName = "Susumu Hiraishi";
let day = new Date();
let isProgrammer = true;
let currentTask = 1;

currentTask = 2;

console.log("名前は" + myName); // あなたの名前が表示される
console.log("今日は" + day); // 今日の日付が表示される
console.log("プログラマー？" + isProgrammer); // true が表示される
console.log("カレントタスク？" + currentTask); // 1 が表示される

// 正方形の面積を計算して保存
const squareSideLength = 2;
// ここにあなたのコードを書いてください
let squareArea = squareSideLength ** 2;

console.log("正方形の面積＝" + squareArea); // 4 を表示

// 長方形の面積を計算して保存
const rectangleBaseLength = 3;
const rectangleHeightLength = 4;
// ここにあなたのコードを書いてください
let rectangleArea = rectangleBaseLength * rectangleHeightLength

console.log("長方形の面積＝" + rectangleArea); // 12 を表示

// 三角形の面積を計算して保存
const triangleBaseLength = 4;
const triangleHeightLength = 5;
// ここにあなたのコードを書いてください
let triangleArea = triangleBaseLength * triangleHeightLength / 2

console.log("三角形の面積＝" + triangleArea); // 10 を表示

// 円の円周と面積を計算して保存する
const circleDiameter = 10;
// ここにあなたのコードを書いてください
let circleCircumference = circleDiameter * 3.141592;
let circleArea = (( circleDiameter / 2 ) ** 2) * 3.141592;

console.log("円周＝" + circleCircumference); // "31.41592653589793" に近い値を表示
console.log("円の面積＝" + circleArea); // "78.53981633974483" に近い値を表示

function addten(number){
    console.log('引数は',number);
    let Ans = number + 10
    return Ans;
}
console.log("１０を足す=" + addten(5));
