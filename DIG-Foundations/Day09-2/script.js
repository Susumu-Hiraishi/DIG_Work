'use strict'
// 1行目に記載している 'use strict' は削除しないでください
// ファイル全体で使用する TDD 用の変数を宣言する
//  Test-driven Development[TDD]
let actual;     //実際値
let expected;   //期待値

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



//ウォーミングアップ
console.log("");
console.log("＝ここから、ウォーミングアップ＝");




// =======================================================================
//ペア演習
console.log("");
console.log("＝ここから、ペア演習＝");



//基礎演習
console.log("");
console.log("＝ここから、基礎演習＝");
console.log("=1=")

let greeting = "Konnichiwa";
function sayHello(name) {
  let greeting = "Hi";
  return greeting + " " + name;
}

console.log(sayHello("Rika")); // Hi Rika


console.log("=2=")


function sumArray(arrayOfNumbers) {
  let sum = 0;
  for (const number of arrayOfNumbers) {
    sum += number;
  }
  return sum;
}

// 関数は何度呼び出しても期待どおりに動作しなければいけません。
test(sumArray([1, 2, 3]), 6);
test(sumArray([10, 20, 30]), 60);
test(sumArray([100, 200, 300]), 600);


//ここから　中級演習
console.log("")
console.log("ここから中級演習")
let count = 0;

function counter(x) {
  count = count + x;
  return count;
}

test(counter(3), 3);
test(counter(4), 7);
test(counter(5), 12);





