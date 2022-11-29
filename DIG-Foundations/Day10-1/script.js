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



//ウォーミングアップ
console.log("");
console.log("＝ここから、ウォーミングアップ＝");
/**
 * @param {Array<object>} objArray - オブジェクトの入った配列
 * @param {string} word キー
 * @returns {Array<any>} 各オブジェクトの中から、与えられたキーに等しいキーに対応する値
 * だけを拾って（＝ pluck して）、配列に入れたもの
 */
// ここにコードを書きましょう。
function pluck(objArray, word){
  const resultArray = [];

  for (const inObj of objArray){
    resultArray.push(inObj[word]);
  }
  console.log(resultArray);
  return resultArray;
}

const arrayOfObjects = [
  { a: 1, b: 2, c: 3 },
  { a: 4, b: 5, c: 6 },
  { a: 7, b: 8, c: 9 },
  ];
  
  test(pluck(arrayOfObjects, "a"), [1, 4, 7]);
  test(pluck(arrayOfObjects, "b"), [2, 5, 8]);
  test(pluck(arrayOfObjects, "c"), [3, 6, 9]);

console.log("=2=");
const Array = {a: 1, b: 2, c: 3}
for (const key in Array){
  const Value =  Array[key];
  console.log(key,Value);
}




// =======================================================================
//基礎演習
console.log("");
console.log("＝ここから、基礎演習＝");

const hellos = {
  English: "Hello",
  Japanese: "Konnichiwa",
  German: "Hallo",
  Spanish: "Hola",
  Arabic: "Ahlan wa sahlan",
  Chinese: "Nihao",
};

console.log("=1=");
/**
 * @returns {undefined} この関数は色々な言語で"Hello" を表示するだけで、返り値は必要ありません。
 */
// ここにコードを書きましょう
function sayHellos(){
  for (const key in hellos){
    console.log(hellos[key]);
  }
}

// console.log の表示は、返り値ではないため、テストするのは困難です。
// 今回は、コンソールの表示を確認することで、テストとしてください。

sayHellos();
// "Hello"
// "Konnichiwa"
// "Hallo"
// "Hola"
// ...


console.log("=2=");
/**
* @param {object} arrObj
* @returns {Array<string>} 与えられたオブジェクトのすべてのキーが入った配列
*/
// ここにコードを書きましょう
function getKeys(arrObj){
  let resultArray = []
  for (const key in arrObj){
    // console.log(key);
    resultArray.push(key)
  }
  return resultArray
}

const object1 = { a: 1, b: 2, c: "hello" };
const object2 = { 1: "a", 2: "b", hello: "c" };

test(getKeys(object1), ["a", "b", "c"]);
test(getKeys(object2), ["1", "2", "hello"]);


console.log("=3=");
/**
* @param {object} arrObj
* @returns {Array<any>} 与えられたオブジェクトのすべての値が入った配列
*/
// ここにコードを書きましょう
function getValues(arrObj){
  let resultArray = []
  for (const key in arrObj){
    // console.log(key);
    resultArray.push(arrObj[key])
  }
  return resultArray
}

test(getValues(object1), [1, 2, "hello"]);
test(getValues(object2), ["a", "b", "c"]);


console.log("=4=");
const myObj = { foo: 1, bar: 2, key: 3, delta: 4, lee: 5 };
function printAll(object) {
  for (const key in object) {
  console.log(object[key]);
  }
}

printAll(myObj);

console.log("=5=");
/**
* @param {object} anyArray - オブジェクト。ただし値はすべて異なるものとする。
* @returns {object} 与えられたオブジェクトのキーと値を入れ替えた、新しいオブジェクト
*/
// ここにコードを書きましょう
function swapPairs(anyArray){
  let bufKey = [];
  let bufValue = [];
  let resultArray = {};

  for (const key in anyArray){
    bufKey.push(key);
    bufValue.push(anyArray[key]);
  }
  // console.log(bufKey,bufValue);

  for (let i = 0; i < bufKey.length ; ++i ){
    resultArray[bufValue[i]] = bufKey[i];
    // console.log(resultArray);
  }

  return resultArray

}
const object3 = { a: 1, b: 2, c: 3, d: 4 };
const object4 = { 1: "a", 2: "b", 3: "c", 4: "d" };

test(swapPairs(object3), { 1: "a", 2: "b", 3: "c", 4: "d" });
test(swapPairs(object4), { a: "1", b: "2", c: "3", d: "4" });


console.log("=6=");
// 出来たが、インデックスが返ってきた。
const testArray = [1,2,3];
for (const val in testArray){
  console.log(val);
}

console.log("=7=");
// 出来ない
// const testObj = {a:1, b:2, c:3,}
// for( const key of testObj ) {
//   console.log( key + ': ' + testObj[key] );
// }

console.log("=復習１=");
/**
 * @param {Array<object>} objArr - オブジェクトを要素に持つ配列
 * @returns {Array<any>} 与えられた配列の最初のオブジェクトのすべての値が入った配列
 */
// ここにコードを書きましょう。
function getFirstObjectValues(objArr){
  let resultArray = [];

  for ( const key in objArr[0]){
    resultArray.push(objArr[0][key]);
  }
  console.log(resultArray);
  return resultArray;
}

const collection = [{ a: 1, b: 2 }, { a: 3, b: 3 }, { b: 4 }, { a: 100 }];

test(getFirstObjectValues(collection), [1, 2]);
test(getFirstObjectValues(collection.slice(1)), [3, 3]);


console.log("=復習２=");
/**
* @param {Array<object>} objArr
* @returns {Array<any>} すべてのオブジェクトのすべての値が入った配列
*/
// ここにコードを書きましょう
function getAllValues(objArr){
  let resultArray = [];

  for ( const arrNam in objArr){
    for ( const key in objArr[arrNam]){
      resultArray.push(objArr[arrNam][key]);
    }
  }
  console.log(resultArray);
  return resultArray;
}

test(getAllValues(collection), [1, 2, 3, 3, 4, 100]);
test(getAllValues(collection.slice(1)), [3, 3, 4, 100]);


console.log("=復習３=");
/**
* @param {Array<object>} objArr
* @param {string} val - 取り出したいキーの名前
* @returns {Array<any>} すべてのオブジェクトにおいて第二引数のキーに対応する値が入った配列
*/
// ここにコードを書きましょう
function selectAllValues(objArr,val){
  let resultArray = [];

  for ( const arrNam in objArr){
    if (objArr[arrNam][val] !== undefined){
      resultArray.push(objArr[arrNam][val]);
    }
  }
  console.log(resultArray);
  return resultArray;
}

test(selectAllValues(collection, "a"), [1, 3, 100]);
test(selectAllValues(collection, "b"), [2, 3, 4]);



//ここから　中級演習
console.log("")
console.log("ここから中級演習")
console.log("=中級１=");
/**
* @param {object} obj
* @returns {object} 与えられたオブジェクトのキーと値を入れ替えた新しいオブジェクト。
重複する値がある場合は、最初のキー/値のペアのみを使用し、その後のペアは無視すること。
*/
// ここにコードを書きましょう
function swapPairs2(obj){
  let resultObj = {};
  let checkObj = {};

  for (const key in obj){
    let check = false
    for (const cKey in checkObj){
      console.log(obj[key],checkObj[cKey]);
      if (obj[key] === checkObj[cKey] ){
        console.log(true)
        check = true
      }
    }
    if (check === false){
      checkObj[obj[key]] = obj[key];
      resultObj[obj[key]] = key
    }
  }
  return resultObj;
}
const object5 = { a: 1, b: 2, c: 3, d: 1 };
const object6 = { a: 1, b: 1, c: 1, d: 1 };

// 1 はすでに使われているので、d:1 は無視される
test(swapPairs2(object5), { 1: "a", 2: "b", 3: "c" });
// この場合も 1  はすでに使われているので、二回目以降、1 が値になるキー/値のペアは無視される。
test(swapPairs2(object6), { 1: "a" });



console.log("=中級２=");
/**
* @param {Array<object>} objArr
* @returns {Array<any>} 与えられた配列内のすべてのオブジェクトのすべての値が入った配列。
重複した値がある場合は 1 つだけ残す。
*/
// ここにコードを書きましょう
function getAllValues2(objArr){
  let resultArray = [];
  let checkArray = [];

  for (const arrCnt in objArr){
    console.log(checkArray);
    for (const key in objArr[arrCnt]){
      checkArray.push(objArr[arrCnt][key]);
    }
  }
  console.log(checkArray);
  for (const val of checkArray){
    let chek = false;
    for (const chk of resultArray){
      console.log(val,chk);
      if (val === chk ){
        console.log(true);
        chek = true;
      }
    }
    if (chek === false){
      resultArray.push(val);
    }
  }

  return resultArray

}

const collection2 = [{ a: 1, b: 2, c:2 }, { d: 1, e: 3 }, { f: 4, g:5 }];

test(getAllValues2(collection2), [1, 2, 3, 4, 5]);
test(getAllValues2(collection2.slice(1)), [1, 3, 4, 5]);



console.log("=中級３=");
/**
 * @returns {string} 基礎演習 1 で使った `hellos` オブジェクトの中の任意の言葉
 */
// ここにコードを書きましょう
function getRandomHello(){
  let cnt = 0;
  let catchCnt = Math.floor(Math.random() * 6 + 1);
  // console.log(hellos);

  for (const key in hellos){
    ++cnt;
    // console.log(cnt,key,catchCnt);
    if (cnt === catchCnt){
      return hellos[key];
    }
  }

}



// ランダムな出力をする関数をテストすることは困難です。
// ここでは、コンソールの表示を見て、テストとしましょう。
console.log(getRandomHello());
 // "konnichiawa"、"hola"、等、実行する度にランダムな言葉が表示されるはずです。
 




//ここから　応用演習
console.log("")
console.log("ここから応用演習")
console.log("=応用１=");




console.log("=応用２=");



//ここから　ナイトメア
console.log("")
console.log("ここからナイトメア")





