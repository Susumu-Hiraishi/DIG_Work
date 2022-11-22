// 'use strict'
// // 1行目に記載している 'use strict' は削除しないでください

// ファイル全体で使用する TDD 用の変数を宣言する
let expected;
let actual;

//JSDoc
// /**
//  * @param {number} num1 - 1 番目の数字
//  * @param {number} num2 - 2 番目の数字
//  * @returns {"X は Y と等しい" | "X は Y より小さい" | "X は Y より大きい"} 与えられた 2 つの数字の比較結果
//  */

// ここからテスト
// actual = ();
// expected = ;

// if (actual === expected) {
//   console.log("Yay! Test PASSED.");
// } else {
//   console.error("Test FAILED. Keep trying!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }

// function weather(temp){
//   if (temp > 20 && temp < 26){
//     return "It's comfortable!";
//   }
//   if (temp < 20 || temp > 26){
//     return "It's too hot or cold!";
//   }
// }
// console.log(weather(22));


/**
 * @param {number} ??? - 年齢
 * @returns {boolean} 与えられた年齢がティーンエイジャー（13 歳から 19 歳までの間：「thirTEEN」から「nineTEEN」）かどうか
 */
function isTeenager(age) {
  // ここにコードを書きましょう.
  return age >= 13 && age <= 19;

}
actual = isTeenager(3);
expected = false;

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = isTeenager(14);
expected = true;

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}


    // さらにテストを書いて、コードが正しいことを確認してください。