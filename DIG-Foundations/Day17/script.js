'use strict'
// Please don't delete the 'use strict' line above

// test({ a: "A", b: "B" }, { b: "B", a: "A" });


//ウォーミングアップ
console.log("");
console.log("＝ここから、ウォーミングアップ＝");

function doubleArray(array){
  let result = [];
  for (const num of array){
    result.push( num * 2 );
  }
  return result;
}

test(doubleArray([2,3,4,5,6]),[4,6,8,10,12]);

function giveMeABetterName(array){
  let result = [];
  for (const num of array){
    result.push( num * num );
  }
  return result;
}

test(giveMeABetterName([2,3,4,5,6]),[4,9,16,25,36]);

function squareArray(array){
  let result = [];
  for (const num of array){
    result.push( num ** 2 );
  }
  return result;
}

test(squareArray([2,3,4,5,6]),[4,9,16,25,36]);



// =======================================================================
//基礎演習
console.log("");
console.log("＝ここから、基礎演習＝");
console.log("1");
/**
* @param {string} word
* @returns {string} 与えられた引数に挨拶文を追加した文字列
*/
// ここにコードを書きましょう
function getGreeting(word){
  return `Hello, ${word}.`
}

test(["zeno", "yanis", "xander"].map(getGreeting), [
"Hello, zeno.",
"Hello, yanis.",
"Hello, xander.",
]);

console.log("2");
/**
* @param {number} num
* @returns {number} 与えられた引数の絶対値
*/
// ここにコードを書きましょう
function abs(num){
  if (num < 0 ){
    return num * -1;
  }else{
    return num
  }
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





//ここから　中級演習
console.log("")
console.log("ここから中級演習")
/**
* @param {Array<number|string>} wordArray
* @returns {Array<number|string>} 与えられた配列の各要素が数値型なら
文字列型に、文字列型なら数値型に変換したものが入った、新しい配列
*/
// ここにコードを書きましょう
function getSwitched(wordArray){
  return wordArray.map(function(word){
    // console.log(word,typeof word);
    if (typeof word === "number"){
      return String(word);
    }else if (typeof word === "string"){
      return Number(word);
    }
  })
}


test(getSwitched([1, 2, 3]), ["1", "2", "3"]);
test(getSwitched(["1", "2", "3"]), [1, 2, 3]);
test(getSwitched(["1", 2, "3"]), [1, "2", 3]);




//ここから　応用演習
console.log("")
console.log("ここから応用演習")
console.log("応用1")
/**
* @param {Array<number>} numArray
* @returns {Array<number>} 与えられた配列の各要素とそのインデックスを掛け合わせた
数字が要素として入った、新たな配列
*/
// ここにコードを書きましょう
function multiplyByIndex(numArray){
  return numArray.map(function(num,index){
    // console.log(num,index);
    return num * index
  })
}


test(multiplyByIndex([1, 2, 3]), [0, 2, 6]);
test(multiplyByIndex([2, 3, 4]), [0, 3, 8]);
test(multiplyByIndex([-3, -4, -5]), [-0, -4, -10]);


console.log("応用2")
 /**
* @param {Array<any>} numArray
* @param {Function} func - 実行したい関数
* @param {number} rep - 関数を実行したい回数
* @returns {Array<any>} 与えられた配列の各要素に、実行したい回数だけ関数を実行した
結果が入った、新しい配列
*/
// ここにコードを書きましょう

function double(element) {
  return element * 2;
}

function feedback(numArray,func,rep){
  return numArray.map(function(num){
    let result = num;
    for (let i = 1 ; i <= rep ; i ++){
      result = func(result);
      // console.log(i,result);
    }
    return result;
  })
}

test(feedback([1, 2, 3], double, 1), [2, 4, 6]);
test(feedback([1, 2, 3], double, 2), [4, 8, 12]);
test(feedback([1, 2, 3], double, 8), [256, 512, 768]);



//ここから　ナイトメア
console.log("");
console.log("ここからナイトメア");
