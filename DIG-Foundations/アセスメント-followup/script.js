'use strict'
// 1行目に記載している 'use strict' は削除しないでください

// ファイル全体で使用する TDD 用の変数して宣言する
//  Test-driven Development[TDD]
let actual;     //実際値
let expected;   //期待値

// ここから配列用テスト用関数
function test(actual, expected) {
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

// ==============================================================
//assessment-FollowUP
console.log("1");
// ここにコードを書きましょう
/**
* @param {Array<number>} arrNum
* @param {boolean} judge　- true（偶数）、False（奇数）
* @returns {Array<number>} 判定された数値の配列を返す。
*/
function evenOrOdd(arrNum, judge) {
  if (judge === true) {
    return arrNum.filter((num) => num % 2 === 0);
  } else {
    return arrNum.filter((num) => num % 2 !== 0);
  }
}

test(evenOrOdd([1, 2, 3, 4, 5], true), [2, 4]);
test(evenOrOdd([0, 4, 36], false), []);
test(evenOrOdd([-1, -2, 4, -5, -7], false), [-1, -5, -7]);

// ==============================================================
console.log("2");
// ここにコードを書きましょう
/**
* @param {object} anyObj　オブジェクト
* @param {string} word - 一致させるワード
* @returns {[Array<string>]} ワードが一致したキーを文字列の配列で返す。
*/
function findKeys(anyObj, word) {
  let resultArray = [];
  for (const key in anyObj) {
    if (anyObj[key] === word) {
      resultArray.push(String(key));
    }
  }
  // console.log(resultArray);
  return resultArray;
}

test(findKeys({ a: 1, b: 2, c: 6, d: 4, e: 2 }, 2), ["b", "e"]);
test(findKeys({ 1: "h", b: "el", c: "hello", d: "hello", e: "o" }, "hello"), ["c", "d"]);

// ==============================================================
console.log("3");
// ここにコードを書きましょう
/**
* @param {Array<any>} arrKey -keyとなる文字の配列
* @param {Array<any>} arrValue - セットするでデータの配列
* @returns {Object}  key配列とデータの配列をセットしたObjectで返す。
*/
function buildObject(arrKey, arrValue) {
  let resultObject = {}
  for (const index in arrKey) {
    // console.log(arrKey[index],arrValue[index]);
    resultObject[arrKey[index]] = arrValue[index];
  }
  // console.log(resultObject);
  return resultObject;
}

test(buildObject(["a", "b", "c"], [1, 2, 3]), { "a": 1, "b": 2, "c": 3 })
test(buildObject(["cat", "dog", "duck"], ["meow", "woof", "quack"]),
  { "cat": "meow", "dog": "woof", "duck": "quack" });
test(buildObject(["cat", "dog", "duck"], [null, 0, NaN]), { "cat": null, "dog": 0, "duck": NaN })
test(buildObject(["abc", "def", "ghi"], [[0, 1, 2], [3, 4, 5], [6, 7, 8]]),
  { "abc": [0, 1, 2], "def": [3, 4, 5], "ghi": [6, 7, 8] })

// ==============================================================
console.log("4");
// ここにコードを書きましょう
/**
 * @param {number} x　ｘの値
 * @returns {(y: number) => number} 引数 y をとり、y に x を足した値を返す関数
 */
// コードを書き始めましょう
function add(x) {
  function addCalc(y) {
    // console.log(x, y, x + y);
    return x + y;
  }
  return addCalc
}

const addTwo = add(2);
test(addTwo(3), 5);
test(addTwo(70), 72);

const addOneHundred = add(100);
test(addOneHundred(3), 103);

// ==============================================================
console.log("5");
/**
 * 引数を持たない、リターンを返さない関数
 */
function simpleHello() {
  console.log("Hello");
}
/**
 * @param {string} name 　結合する文字の値
 * @returns {string} "Hello, " を頭に付けた文字結合を返す関数
 */
function anotherGreeting(name) {
  return "Hello, " + name;
}

const foo = simpleHello();    // Act1
const bar = anotherGreeting("JavaScript");  // Act2

console.log(foo);  // Act3
console.log(bar);  // Act4

// あなたの回答と、なぜそうなるのかの説明をここに記載してください
//  Act1: simpleHello関数を呼び出し実行、コンソールログへ、Helloを表示、Returnが無いので、fooへは値を受け渡さない　=　Undefined
//　Act2: anotherGreeting関数を呼び出し、引数=JavaScriptを渡す、結果をbar変数に代入
//　Act3: コンソールログへfoo変数を表示、値が入っていないので、Undefined
//  Act4: コンソールログへbar変数を表示
//【結果】
//  Hello
//  undefined
//  Hello, JavaScript

// ==============================================================
console.log("6");
console.log("別ファイル Asessment6-script.js を参照");

// ==============================================================
console.log("7");
// ここにコードを書きましょう
/**
 * @param {[Object]or{Object}} arrAny  object
 * @returns {[number]} addone関数を実行した結果の配列を返す
 */
function map(arrAny) {
  let resultArray = [];
  if (Array.isArray(arrAny) === true) {
    for (const num of arrAny) {
      resultArray.push(addOne(num));
    }
  } else {
    for (const key in arrAny) {
      resultArray.push(addOne(arrAny[key]));
    }
  }
  // console.log(resultArray);
  return resultArray;
}
/**
 * @param {number} num  数値
 * @returns {number}  数値に１を足した数値を返す。 
 */
function addOne(num) {
  return num + 1;
}

test(map([1, 2, 3], addOne), [2, 3, 4]);
test(map({ a: 1, b: 2, c: 3 }, addOne), [2, 3, 4]);

// ==============================================================
console.log("8");
// ここにコードを書きましょう
/**
 * @param {string} words  元の文
 * @param {string} chgWord  置き換える文字
 * @returns {number}  元の文の２つ目のワードを、置き換え手返す 
 */

test(changeMiddle("I like cats", "love"),"I love cats");
test(changeMiddle("red green blue", "yellow"),"red yellow blue");