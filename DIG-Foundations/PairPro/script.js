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
//   console.group("Result:");
//   console.log("  actual:", actual);
//   console.log("expected:", expected);
//   console.groupEnd("Result:");
// }


// ここから配列用テスト
// actual = ();
// expected = ;
//  if (JSON.stringify(actual) === JSON.stringify(expected)) {
//   console.log("Test PASSED!");
// } else {
//   console.error("Test FAILED. Keep trying!");
//   console.group("Result:");
//   console.log("  actual:", actual);
//   console.log("expected:", expected);
//   console.groupEnd("Result:");
// }

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


// ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝

/**
* @param {Array<number>} numArray - 数値型の要素を持つ配列
* @returns {number} 与えられた配列のすべての数字の合計
*/

function sumArray(numArray) {
  let result = 0;
  // ここにコードを書きましょう。
  for (const sum of numArray){
    console.log(result,sum)
    result +=  sum;
  }
  return result;
}

actual = sumArray([1, 2, 3, 4]);
expected = 10;

if (actual === expected) {
  console.log("Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

// さらにテストを書きましょう。
test(sumArray([1, 2, 3, 4]),10)



