'use strict'
// 1行目に記載している 'use strict' は削除しないでください


console.log("=1=")
// ファイル全体で使用する TDD 用の変数を宣言する
//  Test-driven Development[TDD]
let actual;     //実際値
let expected;   //期待値

// ここから配列用テスト用関数
function test(actual, expected) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("Yes! Test PASSED!");
  } else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd("Result:");
  }
}

// ここにコードを書きましょう
/**
* @param {Array<number>} arrNum
* @returns {Array<number>} 5以下の数字の２条を配列で返す
*/
// function doTheThing(arrNum) {
//   let result = [];
//   for (const num of arrNum) {
//     if (num <= 5) {
//       result.push(num ** 2);
//     }
//   }
//   return result;
// }

function doTheThing(arrNum){

  const  resultArray = arrNum
  .filter((num) => num <= 5 )
  .map((num) => num ** 2);

  return resultArray;
}

test(doTheThing([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [1, 4, 9, 16, 25]);
test(doTheThing([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), [25, 16, 9, 4, 1]);

console.log("=2=")

// ここにコードを書きましょう
//冷蔵庫の配列
let refrigerator = [];

// 冷蔵庫の中入れた物取り出したものを表示する
/**
 * @param {string} ingredients　- 食材 
 * @returns {Array<number>} 食材を追加して、冷蔵庫の中身に追加する。
*/
function putItemInRefrigerator(ingredients) {
  // console.log("冷蔵庫に入れるもの=", ingredients, refrigerator)
  refrigerator.push(ingredients);
}

/**
* @returns {Array<number>} 冷蔵庫の中身を配列で返す。
*/
function getItemsInRefrigerator() {
  // console.log("冷蔵庫の中身＝", refrigerator)
  return refrigerator;
}

/**
 * @param {string} ingredients　- 食材 
 * @returns {Array<number>} 冷蔵庫の中から、食材を取り除く。
*/
function removeItemFromRefrigerator(ingredients) {
  // console.log("冷蔵庫で入れ替える物=", ingredients, refrigerator);

  const result = refrigerator.filter(word => word !== ingredients);
  refrigerator  = result;
}

test(getItemsInRefrigerator(), []);

putItemInRefrigerator("milk");
test(getItemsInRefrigerator(), ["milk"]);

putItemInRefrigerator("juice");
test(getItemsInRefrigerator(), ["milk", "juice"]);

removeItemFromRefrigerator("milk");
test(getItemsInRefrigerator(), ["juice"]);

removeItemFromRefrigerator("milk");
test(getItemsInRefrigerator(), ["juice"]);

