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


// =======================================================================
//研究問題
console.log("");
console.log("＝ここから、研究問題＝");

console.log("1");


console.log("2");



console.log("3");



//基礎演習
console.log("");
console.log("＝ここから、ペア演習＝");




//基礎演習
console.log("");
console.log("＝ここから、基礎演習＝");



//ここから　中級演習
console.log("")
console.log("ここから中級演習")





//ここから　応用演習
console.log("")
console.log("ここから応用演習")





//ここから　ナイトメア
console.log("")
console.log("ここからナイトメア")





