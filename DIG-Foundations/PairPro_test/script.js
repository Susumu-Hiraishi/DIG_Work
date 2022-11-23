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


// ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝

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

const string = "hello";

console.log(string.length); // 5
console.log(string[0]); // h
console.log(string[3]); // l
console.log(string[string.length - 1]); // o

// ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝

