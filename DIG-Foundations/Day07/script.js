'use strict'
// 1行目に記載している 'use strict' は削除しないでください
// ファイル全体で使用する TDD 用の変数を宣言する
//  Test-driven Development[TDD]
let actual;     //実際値
let expected;   //期待値


//ウォーミングアップ
console.log("");
console.log("＝ここから、ウォーミングアップ＝");







// =======================================================================
//基礎演習
console.log("");
console.log("＝ここから、基礎演習＝");
console.log("");
console.log("基礎１");

/**
 * @param {Array<string>} arrayOfPeople - 人の名前の配列
 * @returns {number} 与えられた配列の長さ
 */

function numberOfPeople(arrayOfPeople) {
  // ここにコードを書きましょう
}

actual = numberOfPeople(["Alex", "Beau", "Carlos", "Dustin"]);
expected = 4;

if (actual === expected) {
  console.log("Test PASSED!");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd("Result:");
}


console.log("");
console.log("基礎２");

// ここにコードを書きましょう.


actual = numberOfPeople(students);
expected = 5;

if (actual === expected) {
  console.log("Test PASSED!");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd("Result:");
}

console.log("");
console.log("基礎３");
// ここにコードを書きましょう.

actual = numberOfPeople(students);
expected = 8;

if (actual === expected) {
  console.log("Test PASSED!");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd("Result:");
}


console.log("");
console.log("基礎４");

/**
    * @param {Array<any>} array - 配列
    * @returns {any} 与えられた配列の最後の要素を返す
    */
 function last(array) {
  // ここにコードを書きましょう
}

// ここにテストを書いてください



console.log("");
console.log("基礎５");

/**
 * @param {Array<any>} ??? - 配列
 * @param {any} ??? - 配列の最後に追加する値
 * @returns {number} 処理後の配列の長さを返す。与えられた配列の末尾に、第 2 引数で渡された要素を追加してください。
 */
// ここにコードを書きましょう
 
let array = [1, 2, 3, 4];

// 関数が正しい結果を返すことを確認する
actual = push(array, 5);
expected = 5;

if (actual === expected) {
  console.log("Test PASSED!");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd("Result:");
}

// 配列が正しく変更されていることを確認する
actual = array;
expected = [1, 2, 3, 4, 5];

// 上にも書きましたが、配列はそのまま比較することができません。まず、JSON.stringify を使う必要があります。
if (JSON.stringify(actual) === JSON.stringify(expected)) {
  console.log("Test PASSED!");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd("Result:");
}

// さらにテストを追加してみましょう。


//ここから　中級演習
console.log("")
console.log("ここから中級演習")

console.log("");
console.log("中級１");

/**
 * @param {Array<any>} ??? - 配列
 * @returns {Array<any>} 配列の真ん中が "hi" に置き換えらえた配列、もしくは同じ配列を返す
 */
 // ここにコードを書きましょう
 
actual = hiInTheMiddle([1, 2, 3, 4, 5]);
expected = [1, 2, "hi", 4, 5];
 
if (JSON.stringify(actual) === JSON.stringify(expected)) {
  console.log("Test PASSED!");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd("Result:");
}

actual = hiInTheMiddle([1, 2, 3, 4]);
expected = [1, 2, 3, 4];

if (JSON.stringify(actual) === JSON.stringify(expected)) {
  console.log("Test PASSED!");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd("Result:");
}

console.log("");
console.log("中級２");

 /**
  * @param {Array<any>} ??? - 配列
  * @returns {any} 与えられた配列の最後の要素を返す。
  */
 // ここにコードを書きましょう
  


array = [1, 2, 3, 4];

actual = pop(array);
expected = 4;

if (actual === expected) {
  console.log("Test PASSED!");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd("Result:");
}

actual = array;
expected = [1, 2, 3];

if (JSON.stringify(actual) === JSON.stringify(expected)) {
  console.log("Test PASSED!");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd("Result:");
}


console.log("");
console.log("中級３");

/**
 * @param {Array<any>} ??? - 配列
 * @param {any} ??? - 配列の先頭に追加する値
 * @returns {number} 処理後の配列の長さを返す。
 */
 // ここにコードを書きましょう

array = [1, 2, 3, 4];

actual = unshift(array, 5);
expected = 5;

if (actual === expected) {
  console.log("Test PASSED!");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd("Result:");
}

actual = array;
expected = [5, 1, 2, 3, 4];

if (JSON.stringify(actual) === JSON.stringify(expected)) {
  console.log("Test PASSED!");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd("Result:");
}

console.log("");
console.log("中級４");

/**
 * @param {Array<any>} ??? - 配列
 * @param {any} ??? - 配列の先頭に追加する値
 * @returns {number} 処理後の配列の長さを返す。
 */
// ここにコードを書きましょう
 
array = [1, 2, 3, 4];

actual = unshift(array, 5);
expected = 5;

if (actual === expected) {
  console.log("Test PASSED!");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd("Result:");
}

actual = array;
expected = [5, 1, 2, 3, 4];

if (JSON.stringify(actual) === JSON.stringify(expected)) {
  console.log("Test PASSED!");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd("Result:");
}




//ここから　応用演習
console.log("")
console.log("ここから応用演習")

console.log("");
console.log("応用１");

/**
 * @param {Array<string>} arrayOfPeople - 人の名前の配列
 * @returns {number} 与えられた配列の長さ
 */

 function numberOfPeople(arrayOfPeople) {
  // ここにコードを書きましょう
}

actual = numberOfPeople(["Alex", "Beau", "Carlos", "Dustin"]);
expected = 4;

if (actual === expected) {
  console.log("Test PASSED!");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd("Result:");
}


console.log("");
console.log("応用２");
/**
 * @param {Array<any>} ??? - 1 番目の配列
 * @param {Array<any>} ??? - 2 番目の配列
 * @returns {boolean} 2 つの配列が互いに逆順かどうか
 */
 // ここにコードを書きましょう
  
let array1 = [1, 2, 3, 4];
let array2 = [4, 3, 2, 1];

actual = areReverses(array1, array2);
expected = true;

if (actual === expected) {
  console.log("Test PASSED!");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd("Result:");
}

actual = array1;
expected = [1, 2, 3, 4];

// 元の配列が変更されていないことを確認する
if (JSON.stringify(actual) === JSON.stringify(expected)) {
  console.log("Test PASSED!");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd("Result:");
}




console.log("");
console.log("応用３");

/**
 * @param {Array<any>} ??? - 1 番目の配列
 * @param {Array<any>} ??? - 2 番目の配列
 * @returns {Array<any>} 与えられた 2 つの配列を連結した新しい 1 つの配列を返す
 */
// ここにコードを書きましょう
 
array1 = [1, 2, 3, 4];
array2 = [4, 3, 2, 1];

actual = concat(array1, array2);
expected = [1, 2, 3, 4, 4, 3, 2, 1];

if (JSON.stringify(actual) === JSON.stringify(expected)) {
  console.log("Test PASSED!");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd("Result:");
}

// 元の配列が変更されていないことを確認する
actual = array1;
expected = [1, 2, 3, 4];

if (JSON.stringify(actual) === JSON.stringify(expected)) {
  console.log("Test PASSED!");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd("Result:");
}

actual = array2;
expected = [4, 3, 2, 1];

if (JSON.stringify(actual) === JSON.stringify(expected)) {
  console.log("Test PASSED!");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd("Result:");
}



//ここから　ナイトメア
console.log("")
console.log("ここからナイトメア")

/**
 * @param {Array<number>} ??? - 数字の配列
 * @returns {Array<number>} 与えられた配列の要素を昇順に並べた新しい配列
 */
function sort() {
  // ここにコードを書きましょう.
}

let arrayToSort = [5, 4, 3, 2, 1];

actual = sort(arrayToSort);
expected = [1, 2, 3, 4, 5];

// 正しい結果を返すことを確認する
if (JSON.stringify(actual) === JSON.stringify(expected)) {
  console.log("Test PASSED!");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd("Result:");
}

// 元の配列が変更されていないことを確認する
if (JSON.stringify(arrayToSort) === JSON.stringify([5, 4, 3, 2, 1])) {
  console.log("Test PASSED!");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd("Result:");
}

// ここにテストを書いてください



