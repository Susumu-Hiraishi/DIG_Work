'use strict'
// 1行目に記載している 'use strict' は削除しないでください
// ファイル全体で使用する TDD 用の変数を宣言する
//  Test-driven Development[TDD]
let actual;     //実際値
let expected;   //期待値

// ここから配列用テスト用関数
function test(actual,expected){
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("Test PASSED!");
  } else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd("Result:");
  }
}



//ウォーミングアップ
console.log("");
console.log("＝ここから、ウォーミングアップ＝");

//ペア演習
console.log("");
console.log("＝ここから、ペア演習＝");
// //ペア１
// // #1
// function greeting() {
//   console.log("Hello!");
// }
// //>> b）副作用を持つ

// // #2
// let triple = function(x) {
//   return 3 * x;
// };
// //>> a）返り値を持つ

// // #3
// let double = function(x) {
//   console.log(2 * x);
// };
// //>> b）副作用を持つ

// // #4
// const cache = [];

// function average(array) {
//   let result = 0;
//   for (const number of array) {
//     result = result + number;
//   }
//   result = result/array.length;

//   cache.push(result);
//   return result;
// }
// //>> c）両方持つ

// // #5
// function sayHello(friend) {
//   const languages = ["Hello", "Konnichiwa", "Hola", "Nihao"];
//   const randomIndex = Math.round(Math.random() * languages.length-1);
//   const randomGreeting = languages[randomIndex];
//   console.log(randomGreeting + " " + friend + "!");
// }
// //>>  b）副作用を持つ

//ペア２
function greeting() {
  console.log("Hello!");
}
//>>  greetingが呼ばれたら、Hello！を表示する。
// greeting()

function runSomething(func) {
  // console.log(typeof func)
  func();
}
//>>  runSomethingに関数が入ってこれば、その関数を実行する。

runSomething(greeting);
//>>  runSomethingにgreetingという関数を、引数として渡す

//ペア３
// runSomething(greeting());
//>>  runSomethingに引数greeting()を渡したとき、1回greeting()は実行される。
//>>  が、greeting()は、引数が何もないので、runSomethingの引数Finctionがない
//>>  というエラーが出る。

// =======================================================================
//基礎演習
console.log("");
console.log("＝ここから、基礎演習＝");

function returnAll(value) {
  return value;
}

// 例えば、、、
console.log(typeof returnAll(false)); // boolean

console.log(typeof returnAll(5)); // number
console.log(typeof returnAll("5")); // string
console.log(typeof returnAll([])); // object
console.log(typeof returnAll({ a: 1 })); // object

function foo() {
  return "hi";
}

console.log(typeof returnAll(foo)); // function
//関数呼び出しの中で関数呼び出しを行って、答えを元の関数に渡す
console.log(typeof returnAll(foo())); // string



//ここから　中級演習
console.log("")
console.log("ここから中級演習")
/**
* @param {Function} func
* @param {any} num - 与えられた関数に渡す引数
* @returns {any} 与えられた引数を、与えられた関数に渡したときの返り値
*/
// ここにコードを書きましょう
function doSomething(func,num){
  // console.log("dosamething=" + func(num));
  return func(num);
}

function addTen(number) {
  // console.log("addten=" + number);
  return number + 10;
  }
  
test(doSomething(addTen, 6), 16);
test(doSomething(addTen, -100), -90);

test(doSomething(function (num) {return num * 4;}, 2),8);

//1
const outer = function () {
  return function () {
    return 5;
  };
};
//2
console.log("中級２");
console.log(outer()); // 計算式が入る
console.log(typeof outer()); // function
//3
console.log("中級３");
const inner = outer();
console.log(inner); // 計算式をinnerに代入したため、計算式が入る
console.log(typeof inner);// function
//4
console.log("中級４");
console.log(inner());

//5
console.log("中級５");
const add = function (x) {
  return function (y) {
    return x + y;
  };
};

const addFive = add(5);
let foo1 = addFive(3);
console.log(foo1); // 8

//ここから　応用演習
console.log("")
console.log("ここから応用演習")





//ここから　ナイトメア
console.log("")
console.log("ここからナイトメア")





