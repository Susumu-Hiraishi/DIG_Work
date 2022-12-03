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

// ================================================================
console.log("=1=");
/**
 * @param {Array<string>} nameArray - 友達の名前が入った配列
 * @returns {Array<string>} 友達の名前それぞれに `"Hello"` の挨拶が付け加わった文字列を要素に持つ配列
 */
 // ここにコードを書きましょう
function sayHelloToFriends(nameArray){
  const resultWords = [];

  for (const name of nameArray){
    resultWords.push(`Hello, ${name}!`);
    // console.log(resultWords);
  }
  return resultWords;
}

const friends = ["Mario", "Luigi"];
test(sayHelloToFriends(friends), ["Hello, Mario!", "Hello, Luigi!"]);

//===== テスト用　変数====

const obj1 = { a: "A" };
const obj2 = { a: "A", b: 2 };
const obj3 = { a: "A", b: 2, c: "C", d: true };
const obj4 = { a: "A", c: "C" };

console.log("=2=");
/**
* @param {object} object オブジェクト
* @returns {{ [key: string]: string }} 与えられたオブジェクトによく似たオブジェクト。
ただし値が文字列である場合のみ、そのキー・値のペアを持つ。
*/
function filterObjectForStrings(object) {
// ここにコードを書きましょう
  const resultObj = {};

  for (let key in object){
    if (typeof object[key] === "string"){
      resultObj[key] = object[key];
      // console.log(key,object[key]);
    }
  }
    return resultObj;
}

test(filterObjectForStrings(obj1), obj1); // 変化なし
test(filterObjectForStrings(obj2), obj1); // キーが "b" のペアは含まれていない
test(filterObjectForStrings(obj3), obj4); // キーが "b" または "d" のペアは含まれていない

console.log("=3=");
/**
 * @param {Array<object>} arrayOfObjects - オブジェクトを要素に持つ配列
 * @returns {Array<{ [key: string]: string }>} 与えられたオブジェクトを要素に持つ配列。
 * ただし値が文字列である場合のみ、各オブジェクトはそのキー・値のペアを持つ。
 */
function filterArrayForStrings(arrayOfObjects) {
  // ここにコードを書きましょう.
  // どこかで filterObjectForStrings(withSomething) を呼びましょう
  const resultArray = [];

  for (const obj of arrayOfObjects){
    // console.log(obj);
    resultArray.push(filterObjectForStrings(obj));
  }
  // console.log(resultArray);
  return resultArray;

}

test(filterArrayForStrings([obj1]), [obj1]); // 変化なし

// 2 番目の要素からキー が "b" のペアは除くこと
test(filterArrayForStrings([obj1, obj2]), [obj1, obj1]);

test(filterArrayForStrings([obj3, obj2, obj1]), [obj4, obj1, obj1]);

console.log("=4=");
// i=要素毎の処理
// j=文字数分繰り返すが、何も出力処理をしない。
// k=2回、配列の要素を表示する。

// 結論：namesの中の文字が２回づつ繰り返されて表示される

const names = ["ichi", "ni", "san", "yon"];

for (let i = 0; i < 4; i++) {                 //nameの配列内を繰り返す
  for (let j = 0; j < names.length; j++) {    //読み込んだ配列内の文字を1文字づつ繰り返す（無駄な処理）
    for (let k = 1; k < 3; k++) {             //２回繰り返す
      console.log(names[j]);                  //配列内の文字を表示する
    }
  }
}

console.log("=5=");
//　１回目のa:が表示される
//    １回目のb:が表示される
//      １回目のc:が表示される
//      ２回目のc:が表示される
//     ２回目のb:が表示される
//　    １回目のc:が表示される
//      ２回目のc:が表示される
//  ２回目のa:が表示される
//    １回目のb:が表示される
//      １回目のc:が表示される
//      ２回目のc:が表示される
//     ２回目のb:が表示される
//　    １回目のc:が表示される
//      ２回目のc:が表示される

// 結論："a,b,c,c,b,c,c"が２回繰り返される。

for (let i = 0; i < 2; i++) {         //０，１の二回繰り返す
  console.log("a: " + i);             //"a: "+回数iを表示
  for (let i = 0; i < 2; i++) {       //０，１の二回繰り返す
    console.log("b: " + i);           //"b: "+回数iを表示
    for (let i = 0; i < 2; i++) {     //０，１の二回繰り返す
      console.log("c: " + i);         //"c: "+回数iを表示
    }
  }
}