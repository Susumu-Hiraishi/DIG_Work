// 'use strict'
// // 1行目に記載している 'use strict' は削除しないでください

// ファイル全体で使用する TDD 用の変数を宣言する
let expected;
let actual;

// ここから配列用テスト用関数
function test(actual,expected){
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("Yay! Test PASSED!");
  } else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd("Result:");
  }
}

// ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
// const place = "Zoom";
// const lesson = {
//   instructors: ["Eriko", "Misa", "Tamaroh"],
//   coding: true,
//   place: "Zoom",
// };
// console.log(lesson["place"]); // Zoom
// console.log(lesson.place); // Zoom
// console.log(lesson[place]); // Undefined
// console.log(lesson["cod" + "ing"]); // true
// console.log(lesson[2]); //  Undefined
// console.log(lesson.instructors[2]); // Tamatoh
// console.log(lesson.length); // 22 Undefined
// console.log(lesson.instructors.length); // undefined 3
// console.log(typeof lesson.instructors); // object

let greeting = "Konnichiwa";

function sayHello(name) {
  let greeting = "Hi";
  return greeting + " " + name;
}

console.log(sayHello("Rika"));



