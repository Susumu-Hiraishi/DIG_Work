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

const obj1 = { a: "A" };
const obj2 = { a: "A", b: 2 };
const obj3 = { a: "A", b: 2, c: "C", d: true };
const obj4 = { a: "A", c: "C" };

console.log("=1=");
/**
* @param {object} オブジェクト
* @returns {{ [key: string]: string }} 与えられたオブジェクトによく似たオブジェクト。
ただし、値が文字列のキー/値ペアだけを持つ。
*/
function filterObjectForStrings(object) {
// ここにコードを書きましょう。
  let resultObj = {};

  for (const key in object){
    if (typeof object[key] === "string"){
      resultObj[key] = object[key];
    }
    // console.log(`IN= ${object[key]} | OUT= ${typeof object[key]}`);
  }
  return resultObj;

}

test(filterObjectForStrings(obj1), obj1); // 変化なし
test(filterObjectForStrings(obj2), obj1); // キーが "b" のペアは含まれていない
test(filterObjectForStrings(obj3), obj4); // キーが "b" や "d" のペアは含まれていない

console.log("=2=");
/**
* @param {Array<object>} arrayOfObjects - オブジェクトの入った配列
* @returns {Array<{ [key: string]: string }>} 与えられたすべてのオブジェクトの入った配列
だが、各オブジェクトには、値が文字列であるキー/値ペアだけが含まれる。
*/
function filterArrayForStrings(arrayOfObjects) {
// ここにコードを書きましょう.
// ここの中で filterObjectForStrings(withSomething) を呼びましょう。
  const resultArray = [];
  for (const obj of arrayOfObjects){
    resultArray.push(filterObjectForStrings(obj));
  }
  // console.log(resultArray);
  return resultArray;
}

  test(filterArrayForStrings([obj1]), [obj1]); // 変化なし

  // 2 番目の要素からキー が "b" のペアは除くこと
  test(filterArrayForStrings([obj1, obj2]), [obj1, obj1]);

  test(filterArrayForStrings([obj3, obj2, obj1]), [obj4, obj1, obj1]);
// =======================================================================

//ペア演習
console.log("");
console.log("＝ここから、ペア演習＝");
console.log("=1=");
console.log("=1=");
// let index = 0;

// while (index <= 4) {
//   console.log("hello!");
//   index++;
// }

for (let index = 0 ; index <= 4 ; index++){
  console.log("hello!");
}

console.log("=2=");
const array = ["a", "b", "c", "d", "e"];
for (let i = 0; i <= array.length - 1; i++) {
  console.log("Value:" + array[i], "Index:" + i);
}

console.log("=3=");
function sayFourHellos(){
  for (let i = 1 ; i <= 4 ; i++ ){
    console.log("Hello!");
  }
}

sayFourHellos();
   // "Hello!"
   // "Hello!"
   // "Hello!"
   // "Hello!"

console.log("=4=");
function countDown(start){
  for (let i = start ; i >= 0 ; i--){
    console.log("countDown= " + i);
  }
}

countDown(5);

//基礎演習
console.log("");
console.log("＝ここから、基礎演習＝");;
console.log("=基礎１=");
function sayFourHellos(n){
  for (let i = 1 ; i <= n ; i++ ){
    console.log("Hello!");
  }
}

sayFourHellos(4);

console.log("=基礎２=");
function countToTen(){
  for (let i = 1 ; i <= 10 ; i++){
    console.log(i);
  }
}

countToTen();

console.log("=基礎３=");
// function counter(num) {
//   let i = 0;
//   while (i < num) {
//     console.log(i);
//     i++;
//   }
// }
function counter(num) {

  for (let i = 0; i < num ; i++) {
    console.log(i);
  }
}

counter(3);

console.log("=3-1=");
/**
* @param {Array} array 5つ以上の配列要素
* @returns {any} 配列要素。
*/
function printArray(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}
let arrWord1 = [1, true, 3, 4, "5", 6];
printArray(arrWord1);

console.log("=3-2=");
let arrWord2 = "Hey you!";
printArray(arrWord2);

console.log("=3-3=");
/**
* @param {Array<number>} numArr -数字の配列
* @returns {Array<number>} 与えられた配列の要素にそれぞれ 1 を加えた数字を
要素として持つ配列
*/
// ここにコードを書きましょう
function addOne(numArr){
  const resultArray = [];

  for ( let i = 0 ; i < numArr.length ; i++){
    resultArray.push(numArr[i] + 1);
  }
  return resultArray
}

const array1 = [1, 2, 3, 4];

// function が動作するかテストする
test(addOne(array1), [2, 3, 4, 5]);
// 元の配列が変更されていないことを確認する
test(array1, [1, 2, 3, 4]);



//ここから　中級演習
console.log("")
console.log("ここから中級演習")
console.log("=中級1=")
/**
* @param {number} start
* @param {number} end
* @returns {Array<number>} start 以上 end 以下のすべての整数を含む配列
*/
// ここにコードを書きましょう
function createRange(start,end){
  let resultArray = []

  for (let i = start; i <= end ; i++){
    resultArray.push(i);
  }
  return resultArray
}

test(createRange(4, 6), [4, 5, 6]);
test(createRange(10, 16), [10, 11, 12, 13, 14, 15, 16]);

console.log("=中級2=")
function printCars() {
  const cars = ["Toyota", "Mazda", "Mercedes", "BMW", "Hyundai", "Volvo"];
  
  for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
  }
}
printCars();

console.log("=中級3=")
const commands = ["Print me last", "Print me second", "Print me first"];

function decrement(list) {
  let i = list.length - 1;
  while ( i >= 0) {
    console.log(list[i]);
    i--
  }
}
decrement(commands);
// "Print me first"
// "Print me second"
// "Print me last"


console.log("=中級4=")
/**
* @param {number} start
* @param {number} end
* @param {number} step
* @returns {Array<number>} start 以上 end 以下の整数を、 step の刻みで入れた配列。
*/
// ここにコードを書きましょう
function createRangeBySteps(start,end,step) {
  let resultArray = [];

  for (let i = start; i <= end ; i += step ){
    // console.log(resultArray)
    resultArray.push(i);
  }
  return resultArray

}

test(createRangeBySteps(1, 10, 2), [1, 3, 5, 7, 9]);
test(createRangeBySteps(10, 30, 5), [10, 15, 20, 25, 30]);


console.log("=中級5=")
/**
* @param {Array<number>} numArr1
* @param {Array<number>} numArr2
* @returns {Array<number>} それぞれの配列の対応する要素の和からなる配列
*/
// ここにコードを書きましょう
function addTogether(numArr1,numArr2){
  let resultArray = [];

  for (let i = 0 ; i < numArr1.length ; i++){
    resultArray.push(numArr1[i] + numArr2[i])
  }
  return resultArray
}


test(addTogether([1, 2, 3], [4, 5, 6]), [5, 7, 9]);
test(addTogether([1, 2, 3], [7, 8, 9]), [8, 10, 12]);



console.log("=中級6=")
function addTogether1(numArr1,numArr2){
  let resultArray = [];
  let roop;
  if (numArr1.length >= numArr2.length){
    roop = numArr1.length;
  }else{
    roop = numArr2.length;
  }

  let num1, num2;
  for (let i = 0 ; i < roop ; i++){
    num1 = 0, num2 = 0
    if (numArr1[i] !== undefined){
      num1 = numArr1[i];
    }
    if (numArr2[i] !== undefined){
      num2 = numArr2[i];
    }
    // console.log(num1,num2,num1+num2)
    resultArray.push(num1 + num2)
  }
  return resultArray
}


test(addTogether1([1], [4, 5, 6]), [5, 5, 6]);


//ここから　応用演習
console.log("")
console.log("ここから応用演習")
console.log("=応用1=")
/**
* @param {Array<any>} numArr
* @returns {Array<any>} 重複していない値のみが入った配列
*/
// ここにコードを書きましょう



test(unique([1, 1, 1, 1, 1]), []);
test(unique([1, 3, 4, 5, 2, 4]), [1, 3, 5, 2]);


console.log("=応用2=")
/**
* @param {...number} ???
* @returns {number} 引数の合計値
*/
// ここにコードを書きましょう


test(sum(1), 1);
test(sum(1, 1, 1, 1, 1), 5);
test(sum(1, 2, 3, 4, 5), 15);


console.log("=応用3=")
/**
* @param {...<Array<any>} numarr
* @returns {Array<any>} 与えられた配列内のすべての値を持つ配列
*/
// ここにコードを書きましょう


test(zip([1], [2], [3], [4]), [1, 2, 3, 4]);
test(zip([1, 2, 3], [4, 5], [1], [4]), [1, 2, 3, 4, 5, 1, 4]);




//ここから　ナイトメア
console.log("")
console.log("ここからナイトメア")





