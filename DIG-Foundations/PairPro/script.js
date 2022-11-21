// 'use strict'
// // 1行目に記載している 'use strict' は削除しないでください

// ファイル全体で使用する TDD 用の変数を宣言する
let expected;
let actual;

// テストする対象のコード
function add(a, b) {
  return a + b;
}

expected = 5; // EXPRESSION（式）の期待値
actual = add(3, 2); // テストを行う EXPRESSION（式）

if (actual === expected) {
  console.log("Test PASSED!");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}


function SayHello(name){
    if (name.length > 0){
        return `Hello, ${name}!`
    }
}
    
const Person = "Beau";
const greeting = SayHello(Person);

