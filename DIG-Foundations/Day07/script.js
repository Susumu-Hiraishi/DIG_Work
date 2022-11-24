'use strict'
// 1行目に記載している 'use strict' は削除しないでください
// ファイル全体で使用する TDD 用の変数を宣言する
//  Test-driven Development[TDD]
let actual;     //実際値
let expected;   //期待値


//ウォーミングアップ
console.log("");
console.log("＝ここから、ウォーミングアップ＝");

// const numbers = [1, 2, 3];

// console.log(numbers[2]); // 配列[0,1,2] →　３が帰ってくる　
// console.log(numbers[0]); // 配列[0,1,2] →　１が帰ってくる
// console.log(numbers[numbers.length - 1]); // 配列の長さ -1 →　numbers[3-1] →　最後の文字３が返ってくる

// // 次で使用しているメソッドやプロパティについて、分からないときはドキュメント（MDN）で調べてみましょう！

// console.log(numbers.pop());  //最後の文字を取り除く　＋　その文字の表示
// console.log(numbers.pop() + numbers.pop()); // numbers[1] + numbers[0]　を足す　→　３
// console.log(numbers); // 配列内巣出ての要素が取り除かれた　→　[]

// numbers.unshift(4, 5, 6); //配列の先頭に「４，５，６」を追加
// console.log(numbers); // [4,5,6]

// console.log(numbers.shift()); // popの反対、先頭から1文字取り除く　＋　その文字の表示
// console.log(numbers.length); // 配列の長さ２

// numbers.push(5);  //配列の最後に追加　
// numbers.push(6);   //配列の最後に追加　

// console.log(numbers)  //[5,6,5,6]

// console.log(numbers.pop() * numbers.pop()); // 6*5=30
// console.log(numbers[0]); // 最初の値　５

// const numbers = [
//   [0, 1, 2, 3],                         //A
//   ["zero", "one", "two", "three"],      //B
//   ["rei", "ichi", "ni", "san"],         //C
// //   1  ,   2   ,    3,    4
// ];
// //  numbers[A-C][1-4]
// console.log(numbers[2]); // 1次配列、[0,1,2] の最後の2次配列をとってきた　(4) ['rei', 'ichi', 'ni', 'san']
// console.log(numbers[0][1]); // 1次配列2番目、[["zero", "one", "two", "three"] の1つ目の2次配列をとってきた　"one"
// console.log(numbers[0][2]); // 1次配列１番目、[0，1，2，3] の１つ目の2次配列をとってきた　"one"
// console.log(numbers[numbers.length - 1][0]); // １次配列 [3-1][0]を表示
// console.log(numbers[2].length); // 1次配列、[0,1,2] の最後の2次配列をとってきた　(4) ['rei', 'ichi', 'ni', 'san']
// console.log(numbers.length); // 1次配列の数
// console.log(numbers.pop()); // 1次配列の最後の配列をとってきた。

// console.log(numbers[0].push(4)); // 1次配列、1つ目の最後に、要素を追加　→　戻り値返している：配列の長さ
// console.log(numbers[0]); // 1次配列の１つ目を表示
// console.log(numbers.length); // 1次配列の数

// const string = "hello";

// console.log(string.length); // 5
// console.log(string[0]); // h
// console.log(string[3]); // l
// console.log(string[string.length - 1]); // o




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
  console.log(arrayOfPeople);
  return arrayOfPeople.length
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
const students = ["Alex", "Beau", "Carlos", "Dustin","Sam"];

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
students.push("Killy","June","Megu");

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
  return array.pop();
}

// ここにテストを書いてください
actual = last(["Alex", "Beau", "Carlos", "Dustin","Sam"]);
expected = "Sam";

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
console.log("基礎５");

/**
 * @param {Array<any>} array - 配列
 * @param {any} add - 配列の最後に追加する値
 * @returns {number} 処理後の配列の長さを返す。与えられた配列の末尾に、第 2 引数で渡された要素を追加してください。
 */
// ここにコードを書きましょう
function push(array,add){
  let cnt = array.length;
  array[cnt] = add;
  console.log(array);
  return array.length
}

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
  console.log(actual,expected)
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
 * @param {Array<any>} array1 - 配列
 * @returns {Array<any>} 配列の真ん中が "hi" に置き換えらえた配列、もしくは同じ配列を返す
 */
 // ここにコードを書きましょう
function hiInTheMiddle(array1){
  if (array1.length % 2 === 0){
    return array1;
  }else{
    const cnt = Math.floor(array1.length / 2); //インデクスNoなので、１足す必要なし
    console.log(cnt);
    array1[cnt] = "hi";
    console.log(array1);
    return array1;
  }
}

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
  * @param {Array<any>} array2 - 配列
  * @returns {any} 与えられた配列の最後の要素を返す。
  */
 // ここにコードを書きましょう
  function pop(array2){
    const cnt = array2.length - 1;
    const word = array2[cnt];
    array2.splice(cnt,1);
    return word;
  }


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
 * @param {Array<any>} array3 - 配列
 * @param {any} value - 配列の先頭に追加する値
 * @returns {number} 処理後の配列の長さを返す。
 */
 // ここにコードを書きましょう
function unshift(array3,value){
  array3.splice(0,0,value);
  console.log(array3);
  return array3.length
}

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
 * @param {Array<any>} array4 - 配列
 * @returns {any} 与えられた配列の先頭の要素を返す。
 */
// ここにコードを書きましょう
function shift(array4){
  const word = array4[0];
  array4.splice(0,1);
  return word;
}

array = [1, 2, 3, 4];

actual = shift(array);
expected = 1;

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
expected = [2, 3, 4];

if (JSON.stringify(actual) === JSON.stringify(expected)) {
  console.log("Test PASSED!");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd("Result:");
}



// //ここから　応用演習
// console.log("")
// console.log("ここから応用演習")

// console.log("");
// console.log("応用１");

// /**
//  * @param {Array<string>} arrayOfPeople - 人の名前の配列
//  * @returns {number} 与えられた配列の長さ
//  */

//  function numberOfPeople(arrayOfPeople) {
//   // ここにコードを書きましょう
// }

// actual = numberOfPeople(["Alex", "Beau", "Carlos", "Dustin"]);
// expected = 4;

// if (actual === expected) {
//   console.log("Test PASSED!");
// } else {
//   console.error("Test FAILED. Keep trying!");
//   console.group("Result:");
//   console.log("  actual:", actual);
//   console.log("expected:", expected);
//   console.groupEnd("Result:");
// }


// console.log("");
// console.log("応用２");
// /**
//  * @param {Array<any>} ??? - 1 番目の配列
//  * @param {Array<any>} ??? - 2 番目の配列
//  * @returns {boolean} 2 つの配列が互いに逆順かどうか
//  */
//  // ここにコードを書きましょう
  
// let array1 = [1, 2, 3, 4];
// let array2 = [4, 3, 2, 1];

// actual = areReverses(array1, array2);
// expected = true;

// if (actual === expected) {
//   console.log("Test PASSED!");
// } else {
//   console.error("Test FAILED. Keep trying!");
//   console.group("Result:");
//   console.log("  actual:", actual);
//   console.log("expected:", expected);
//   console.groupEnd("Result:");
// }

// actual = array1;
// expected = [1, 2, 3, 4];

// // 元の配列が変更されていないことを確認する
// if (JSON.stringify(actual) === JSON.stringify(expected)) {
//   console.log("Test PASSED!");
// } else {
//   console.error("Test FAILED. Keep trying!");
//   console.group("Result:");
//   console.log("  actual:", actual);
//   console.log("expected:", expected);
//   console.groupEnd("Result:");
// }




// console.log("");
// console.log("応用３");

// /**
//  * @param {Array<any>} ??? - 1 番目の配列
//  * @param {Array<any>} ??? - 2 番目の配列
//  * @returns {Array<any>} 与えられた 2 つの配列を連結した新しい 1 つの配列を返す
//  */
// // ここにコードを書きましょう
 
// array1 = [1, 2, 3, 4];
// array2 = [4, 3, 2, 1];

// actual = concat(array1, array2);
// expected = [1, 2, 3, 4, 4, 3, 2, 1];

// if (JSON.stringify(actual) === JSON.stringify(expected)) {
//   console.log("Test PASSED!");
// } else {
//   console.error("Test FAILED. Keep trying!");
//   console.group("Result:");
//   console.log("  actual:", actual);
//   console.log("expected:", expected);
//   console.groupEnd("Result:");
// }

// // 元の配列が変更されていないことを確認する
// actual = array1;
// expected = [1, 2, 3, 4];

// if (JSON.stringify(actual) === JSON.stringify(expected)) {
//   console.log("Test PASSED!");
// } else {
//   console.error("Test FAILED. Keep trying!");
//   console.group("Result:");
//   console.log("  actual:", actual);
//   console.log("expected:", expected);
//   console.groupEnd("Result:");
// }

// actual = array2;
// expected = [4, 3, 2, 1];

// if (JSON.stringify(actual) === JSON.stringify(expected)) {
//   console.log("Test PASSED!");
// } else {
//   console.error("Test FAILED. Keep trying!");
//   console.group("Result:");
//   console.log("  actual:", actual);
//   console.log("expected:", expected);
//   console.groupEnd("Result:");
// }



// //ここから　ナイトメア
// console.log("")
// console.log("ここからナイトメア")

// /**
//  * @param {Array<number>} ??? - 数字の配列
//  * @returns {Array<number>} 与えられた配列の要素を昇順に並べた新しい配列
//  */
// function sort() {
//   // ここにコードを書きましょう.
// }

// let arrayToSort = [5, 4, 3, 2, 1];

// actual = sort(arrayToSort);
// expected = [1, 2, 3, 4, 5];

// // 正しい結果を返すことを確認する
// if (JSON.stringify(actual) === JSON.stringify(expected)) {
//   console.log("Test PASSED!");
// } else {
//   console.error("Test FAILED. Keep trying!");
//   console.group("Result:");
//   console.log("  actual:", actual);
//   console.log("expected:", expected);
//   console.groupEnd("Result:");
// }

// // 元の配列が変更されていないことを確認する
// if (JSON.stringify(arrayToSort) === JSON.stringify([5, 4, 3, 2, 1])) {
//   console.log("Test PASSED!");
// } else {
//   console.error("Test FAILED. Keep trying!");
//   console.group("Result:");
//   console.log("  actual:", actual);
//   console.log("expected:", expected);
//   console.groupEnd("Result:");
// }

// // ここにテストを書いてください



