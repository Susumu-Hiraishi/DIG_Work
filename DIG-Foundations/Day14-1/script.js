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
* @param {number} x,y
* @returns {(y: number) => number} 引数として y を取り、x を y で割った値を返す関数
*/
// ここにコードを書きましょう
function divide(x){
  function devide2(y){
    console.log(x,y,x/y);
    return x / y ;
  }
return devide2;
}

const divide2 = divide(2);

test(divide2(4), 0.5);
test(divide(2)(1), 2);



// =======================================================================
//基礎演習
console.log("");
console.log("＝ここから、基礎演習＝");

console.log("=1=");
const myMathObject = {
  sum: function (...theArgs) {
    let total = 0;
    for (const arg of theArgs){
      total += arg;
      // console.log(total);
    }
    return total;
  },
  product: function (...theArgs) {
    let total = 1;
    for (const arg of theArgs){
      total *= arg;
      // console.log(total);
    }
    return total;
  },
  isEven: function (num) {
    // console.log(num % 2 === 0);
    return num % 2 === 0;
  },
  getNumbers: function (...theArgs) {
    let resultArray = [];
    for (const arg of theArgs){
      if (typeof arg === "number"){
        resultArray.push(arg)
        // console.log(resultArray)
      }
    }
    return resultArray;
  },
};

test(myMathObject.sum(1), 1);
test(myMathObject.sum(1, 2, 3), 6);

console.log("=2=");
test(myMathObject.sum(19283, 18475, 199999), 237757);
test(myMathObject.product(19283, 18475, 199999), 71250328746575);
test(myMathObject.isEven(19), false);

console.log("=3=");

/**
* @param {...any} ...theArgs - 任意の数の引数
* @returns {Array<number>} 引数のうち、数値型のものだけを要素に持つ配列。
要素の順番は引数で与えられた順番にする。
*/

test(myMathObject.getNumbers(1, 2, 3, 4), [1, 2, 3, 4]);
test(myMathObject.getNumbers("foo", 3, "4", "hi", 1), [3, 1]);

//ここから　中級演習
console.log("")
console.log("ここから中級演習")
console.log("=1=");
/**
* @param {number} ???
* @returns {number} 与えられた数字の絶対値
*/
const myMathObject1 = {
  abs: function (num){
    let result;

    if (num < 0 ){
      return num * -1;
    }else{
      return num;
    }
  }
}

test(myMathObject1.abs(1), 1);
test(myMathObject1.abs(-1), 1);
test(myMathObject1.abs(435678.745389), 435678.745389);
test(myMathObject1.abs(-675843.753489), 675843.753489);

console.log("=2=");
/**
* @param {number} 底（てい）
* @param {number} 指数
* @returns {number} 与えられた底を与えられた指数で累乗した結果
*/
const myMathObject2 = {
  power: function (bottom,index){
    console.log(bottom,index,bottom ** index)
    return bottom ** index;
  }
}

const MIN_BASE = -5;
const MAX_BASE = 5;
const MIN_EXPONENT = -5;
const MAX_EXPONENT = 5;

// 以下のコードでは、一度にたくさんのテストしています。
// （また、浮動小数点数の比較をするためにisNearlyEqualという関数を使っています。）
for (let base = MIN_BASE; base <= MAX_BASE; ++base) {
  for (let exponent = MIN_EXPONENT; exponent <= MAX_EXPONENT; ++exponent) {
    const actual = myMathObject2.power(base, exponent);
    const expected = Math.pow(base, exponent);
    if (isNearlyEqual(actual, expected)) {
      console.log("Yay! Test PASSED.");
    } else {
      console.error("Test FAILED. Keep trying!");
      console.log("    actual: ", actual);
      console.log("  expected: ", expected);
      console.trace();
    }
  }
}

// 参照文献： https://floating-point-gui.de/errors/comparison/

function isNearlyEqual(a, b) {
  const absA = Math.abs(a);
  const absB = Math.abs(b);
  const diff = Math.abs(a - b);

  if (a == b) {
    return true;
  } else if (a == 0 || b == 0 || absA + absB < Number.MIN_VALUE) {
    return diff < Number.EPSILON * Number.MIN_VALUE;
  } else {
    return diff / Math.min(absA + absB, Number.MAX_VALUE) < Number.EPSILON;
  }
}




//ここから　応用演習
console.log("")
console.log("ここから応用演習")

console.log("=1=");



console.log("=2=");



console.log("=3=");



console.log("=4=");




//ここから　ナイトメア
console.log("")
console.log("ここからナイトメア")





