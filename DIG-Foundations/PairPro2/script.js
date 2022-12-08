'use strict'
// Please don't delete the 'use strict' line above

// test({ a: "A", b: "B" }, { b: "B", a: "A" });

console.log("=1=");
/**
* @param {string} arrayString
* @returns {string} 与えられた引数に挨拶文を追加した文字列
*/
// ここにコードを書きましょう
function getGreeting(arrayString){
  console.log(arrayString);
  return `Hello, ${arrayString}.`;
}

test(["zeno", "yanis", "xander"].map(getGreeting), [
"Hello, zeno.",
"Hello, yanis.",
"Hello, xander.",
]);


console.log("=2=");
/**
* @param {number} number
* @returns {number} 与えられた引数の絶対値
*/
// ここにコードを書きましょう
function abs(number){
  return Math.abs(number);
  // if (number < 0 ){
  //   return number * -1;
  // }else{
  //   return number
  // }
}

test([1, 2, 3].map(abs), [1, 2, 3]);
test([-1, -2, -3].map(abs), [1, 2, 3]);
test([-1, 2, -3].map(abs), [1, 2, 3]);

console.log("=3=");
/**
* @param {Array<number>} arrayNumber
* @returns {Array<number>} 与えられた配列の各要素に 1 を
足した数を要素として持つ、新しい配列
*/
// ここにコードを書きましょう
function getIncrementedNumbers(arrayNumber){
  return arrayNumber.map(function(number){
    return number + 1;
  })
}

test(getIncrementedNumbers([1, 2, 3]), [2, 3, 4]);
test(getIncrementedNumbers([-1, -2, -3]), [0, -1, -2]);

const array1 = [0, 0, 0];
test(getIncrementedNumbers(array1), [1, 1, 1]);
// 元の配列が変更されていないことを確認してください
test(array1, [0, 0, 0]);


