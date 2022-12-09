'use strict'
// 1行目に記載している 'use strict' は削除しないでください

console.log("=1=");

/**
* @param {number} number
* @returns {boolean} 与えられた数値が 10 の倍数かどうか
*/
// ここにコードを書きましょう
function isMultipleOfTen(number) {
  return number % 10 === 0;
}
// console.log(arrayOfNumbers.slice(6));
const arrayOfNumbers = [2, 4, 6, 8, 10, 15, 20, 30, 66, 89, 100];

test(arrayOfNumbers.filter(isMultipleOfTen), [10, 20, 30, 100]);
test(arrayOfNumbers.slice(6).filter(isMultipleOfTen), [20, 30, 100]);

console.log("=2=");
/**
* @param {string} text
* @returns {boolean} 与えられた文字列に母音 (a, e, i, o, u) が1つ以上含まれているか
*/
// ここにコードを書きましょう
function hasAVowel(text) {
  for (const word of text) {
    // console.log(word);
    if (word === "a" || word === "e" || word === "i"
      || word === "o" || word === "u") {
      return true
    }
  }
}


const arrayOfStrings1 = ["bat", "ball", "tree", "cow", "bnm"];
const arrayOfStrings2 = ["bhg", "waa", "cvb"];

test(arrayOfStrings1.filter(hasAVowel), ["bat", "ball", "tree", "cow"]);
test(arrayOfStrings2.filter(hasAVowel), ["waa"]);

console.log("=3=");
/**
* @param {Array<number>} arrNum
* @returns {Array<number>} 与えられた配列の中にある正の数のみを要素として
持つ配列
*/
// ここにコードを書きましょう
function getPositiveNumbers(arrNum) {
  return arrNum.filter(num => num > 0)
}


test(getPositiveNumbers([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]);
test(getPositiveNumbers([0, 1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]);
test(getPositiveNumbers([1, -2, 3, -4, 5]), [1, 3, 5]);
test(getPositiveNumbers([-2, -4]), []);

console.log("=4=");

