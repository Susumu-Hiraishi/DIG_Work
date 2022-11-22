'use strict'
// 1行目に記載している 'use strict' は削除しないでください
// ファイル全体で使用する TDD 用の変数を宣言する
//  Test-driven Development[TDD]
let expected;   //期待値
let actual;     //実際値


//ウォーミングアップ
console.log("");
console.log("＝ここから、ウォーミングアップ＝");

// ... 以下でテストする対象のコード書きましょう






// =======================================================================
//基礎演習
console.log("");
console.log("＝ここから、基礎演習＝");
//
console.log("基礎１");

/**
 * @param {string} ??? - テストの対象となる文字列
 * @param {number} ??? - 閾値
 * @returns {any} 与えられた文字列の長さが指定された閾値より長いかどうか
 */
// ここにコードを書きましょう

actual = isLongerThan("three", 3);
expected = true;

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = isLongerThan("three", 5);
expected = false;

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = isLongerThan(3, 5);
expected = "Invalid input.";

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

//２
console.log("基礎２");


//
console.log("基礎３");


//
console.log("基礎４");




//ここから　中級演習
console.log("")
console.log("ここから中級演習")





//ここから　応用演習
console.log("")
console.log("ここから応用演習")





//ここから　ナイトメア
console.log("")
console.log("ここからナイトメア")





