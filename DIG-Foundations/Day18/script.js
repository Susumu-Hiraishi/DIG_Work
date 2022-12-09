'use strict'
// Please don't delete the 'use strict' line above

// test({ a: "A", b: "B" }, { b: "B", a: "A" });


//ウォーミングアップ
console.log("");
console.log("＝ここから、ウォーミングアップ＝");

const arrayOfObjects = [
  { name: "alice", favoriteColor: "green" },
  { name: "bob", favoriteColor: "blue" },
];

// ここにコードを書きましょう
/**
* @param {Array<number>} wordArray
* @returns {Array<number>} 与えられた配列の各要素から名前の値を返す。
*/
function getNames(wordArray) {
  return wordArray.map(function (user) {
    // console.log(user.name);
    return user.name;
  })
}

// function getNames(ansArray){
//   const ansArray = [];
//   arrayOf.forEach(obj => ansArray.push(obj["name"]));
//   return ansArray;
//   }


/**
* @param {Array<number>} wordArray
* @returns {Array<number>} 与えられた配列の各要素から好きな色の値を返す。
*/
function getFavoriteColors(wordArray) {
  return wordArray.map(function (user) {
    // console.log(user.favoriteColor);
    return user.favoriteColor;
  })
}

test(getNames(arrayOfObjects), ["alice", "bob"]);
test(getFavoriteColors(arrayOfObjects), ["green", "blue"]);

// function evenArray(array){
//   let resultArray = [];
//   for (const num of array ){
//     if (num % 2 === 0){
//       resultArray.push(num);
//     }
//   }
//     return resultArray;
// }

function threeUp(array) {
  let resultArray = [];
  for (const num of array) {
    if (num > 3) {
      resultArray.push(num);
    }
    // console.log(resultArray);
  }
  return resultArray;
}
test(threeUp([2, 3, 4, 5, 6]), [4, 5, 6]);





// =======================================================================
//基礎演習
console.log("");
console.log("＝ここから、基礎演習＝");
console.log("1");
/**
* @param {number} num
* @returns {boolean} 与えられた数値が 10 の倍数かどうか
*/
// ここにコードを書きましょう
function isMultipleOfTen(num) {
  // console.log(num % 10 === 0)
  return num % 10 === 0
}


const arrayOfNumbers = [2, 4, 6, 8, 10, 15, 20, 30, 66, 89, 100];

test(arrayOfNumbers.filter(isMultipleOfTen), [10, 20, 30, 100]);
test(arrayOfNumbers.slice(6).filter(isMultipleOfTen), [20, 30, 100]);

console.log("2");
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

console.log("3");
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


console.log("4");
/**
* @param {Array<string>} arrString
* @returns {Array<string>} 与えられた配列の中にある、大文字で始まり、
疑問符で終わる文字列のみを要素として持つ配列
*/
// ここにコードを書きましょう
function getQuestions(arrString) {
  // /^[A-Z]+$/g.test(word.charAt(0)), word.slice(-1) === "?"
  return arrString.filter(word =>
    /^[A-Z]+$/g.test(word.charAt(0)) && word.slice(-1) === "?")
}

const arrayOfStrings3 = [
  "Hi, there.",
  "What in the world?",
  "My name is JavaScript",
  "Do you want to know a secret?",
];

test(getQuestions(arrayOfStrings3), [
  "What in the world?",
  "Do you want to know a secret?",
]);
test(getQuestions(arrayOfStrings3.slice(2)), [
  "Do you want to know a secret?",
]);




//ここから　中級演習
console.log("")
console.log("ここから中級演習")
console.log("1");
/**
* @param {Array<string>} arrString
* @returns {Array<string>} 与えられた配列の中にある、長さが奇数で、
文字がすべて大文字の文字列のみを要素として持つ配列
*/
// ここにコードを書きましょう
function getOddLengthCapitalWords(arrString) {
  return arrString.filter(word =>
    word.length % 2 !== 0 && /^[A-Z]+$/g.test(word))
}


const arrayOfStrings4 = ["SNAKE", "APPLES", "Peaches", "PUMPKINPIES"];

test(getOddLengthCapitalWords(arrayOfStrings4), ["SNAKE", "PUMPKINPIES"]);
test(getOddLengthCapitalWords(arrayOfStrings4.slice(1)), ["PUMPKINPIES"]);

console.log("2");

// .includes

/**
* @param {Array<any>} arr1
* @param {Array<any>} arr2
* @returns {Array<any>} 与えられた配列の両方に存在する要素だけが入った配列
*/
// ここにコードを書きましょう
function intersection(arr1, arr2) {
  let resultArr = [];
  for (const num1 of arr1) {
    let chkF = false;
    for (const num2 of arr2) {
      if (num1 === num2) {
        chkF = true;
      }
    }
    if (chkF === true) {
      resultArr.push(num1)
    }
  }
  return resultArr;
}


test(intersection([1, 2, 3], [1, 2, 3]), [1, 2, 3]);
test(intersection([1, 2, 3], [2, 3, 4]), [2, 3]);
test(intersection([1, 2, 3], [3, 4, 5]), [3]);
test(intersection([1, 2, 3], [4, 5, 6]), []);




//ここから　応用演習
console.log("")
console.log("ここから応用演習")
console.log("1");

/**
* @param {...Array<any>} arrWord - 任意の数の配列
* @returns {Array<any>} 与えられた配列のすべてに共通する要素だけが入った配列
*/
function intersection1(...arrWord) {
  let resultArray = [];

  arrWord.forEach(element => {
    for (const num of element) {
      if (resultArray.includes(num) === false) {
        resultArray.push(num);
      }
      // console.log(resultArray, num);
    }
  })

  arrWord.forEach(element => {
    resultArray = resultArray.filter(x => element.indexOf(x) !== -1)
    // console.log(resultArray);
  })

  return resultArray;
}


test(intersection1([1, 2, 3], [1, 2, 3], [1, 2, 3]), [1, 2, 3]);
test(intersection1([1, 2, 3], [2, 3, 4], [3, 4, 5]), [3]);
test(intersection1([1, 2, 3], [3, 4, 5], [6]), []);
test(
intersection1([1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3], [4, 5, 6]),
[]
);


console.log("2");

/**
* @param {...Array<any>} arrNum
* @returns {Array<any>} 与えられた配列の 1 つにしか存在しない要素だけが
* 入った配列
*/
// ここにコードを書きましょう
function loneRangers(...arrNum){
  let resultArr = [];

  arrNum.forEach(element => {
    resultArr = resultArr.concat(element);
  });

  console.log(resultArr);
  //ユニークな値 
  //元の配列の中で2回目以降に登場した（同じ要素が既に登場済みの）要素は、
  // indexOfの結果＝先頭からその要素を探した時の位置が、index＝要素自身の位置と一致しない。
  // その要素を除外すれば、各要素が1回ずつしか出現しない配列を取り出せる
  // return resultArr.filter((elem,index,self) => self.indexOf(elem) === index);

  //１回だけ使われる // 最初に見つかった位置と最後に見つかった位置が一緒であれば
  return resultArr.filter((val, idx , arr) => arr.indexOf(val) === arr.lastIndexOf(val))

}


test(loneRangers([1, 2, 3]), [1, 2, 3]);
test(loneRangers([1, 2, 3], [1, 2, 3]), []);
test(loneRangers([1, 2, 3], [1, 2, 3], [1, 2, 3, 4]), [4]);
test(loneRangers([1, 2, 3], [1, 2, 3], [1, 2, 3, 4], [5], [6]), [4, 5, 6]);



//ここから　ナイトメア
console.log("");
console.log("ここからナイトメア");
