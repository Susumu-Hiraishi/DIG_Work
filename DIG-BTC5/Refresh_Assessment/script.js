'use strict'
// Please don't delete the 'use strict' line above

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

// =======================================================================
//課題（Assessment_Refresh）
console.log("");
console.log("＝課題１＝");

// ここにコードを書きましょう
/**
 * @param {string} Animal  - 動物
 * @param {object<string>} FoodObj　- ごはん：テイスト 
 * @returns {string} resultword -気分の答えを返す 
*/
function feed(Animal, FoodObj){
  let resultword = "";
  if(Animal === "dog"){
    if(FoodObj["custom"] === "dog food" && FoodObj["taste"] === "beef" ){
      resultword = "I love it!";
    }else {
      resultword = "I don't like it!";
    }
  } 
  if(Animal === "cat"){
    if(FoodObj["custom"] === "cat food" && FoodObj["taste"] === "tuna" ){
      resultword = "I love it!";
    }else {
      resultword = "I don't like it!";
    }
  }
  return resultword;
}

test(feed("dog", { custom: "dog food", taste: "beef" }), "I love it!");
test(feed("dog", { custom: "dog food", taste: "chicken" }), "I don't like it!");
test(feed("dog", { custom: "cat food", taste: "chicken" }), "I don't like it!");

test(feed("cat", { custom: "cat food", taste: "tuna" }), "I love it!");
test(feed("cat", { custom: "cat food", taste: "chicken" }), "I don't like it!");
test(feed("cat", { custom: "dog food", taste: "beef" }), "I don't like it!");

// =======================================================================
console.log("");
console.log("＝課題２＝");

// ここにコードを書きましょう
/**
* @param {Array<number>} arrNum -読込配列
* @returns {Array<number>} resultArr -逆順の配列を返す 
*/

// ここにコードを書きましょう
function reverse(arrNum){
  let resultArr = [];
  for (const num of arrNum) {
    resultArr.unshift(num);
  }
  return resultArr;
}

test(reverse([1, 2, 3]), [3, 2, 1]);
test(reverse([{ name: "mike", isCat: true }, true, "hello!"]), [ "hello!", true, { name: "mike", isCat: true }]);

// =======================================================================
console.log("");
console.log("＝課題３＝");

// ここにコードを書きましょう
/**
* @param {object<string:number>} priceObj -Object 商品：価格
* @param {object<string:number>} cartObj -Object 商品：数量
* @returns {number} resultTaxIn -消費税込みの合計金額を出力
*/
function calculateTotalWithTax(priceObj,cartObj){
  const tax = 10;
  let resultTaxIn = 0;
  for (const productKey in priceObj){
    for (const cartKey in cartObj){
      if (productKey === cartKey){
        resultTaxIn += (priceObj[productKey] * cartObj[cartKey]) * (1 + tax/100);;
      }
    }
  }
  return parseInt(resultTaxIn);
}

const priceList = {
  apple: 150,
  banana: 190,
  grape: 2000,
  orange: 300,
};

const shoppingCart = {
  apple: 3,
  banana: 1,
  grape: 3,
  orange: 5,
};

test(calculateTotalWithTax(priceList, shoppingCart), 8954);

// =======================================================================
console.log("");
console.log("＝課題４＝");

// ここにコードを書きましょう
function totalBookSales(objArray){
  return objArray.map(function (element){
    return element["price"] * element["sales"];
  }); 
}

// function calcEarnings(element){
//   // console.log(element["price"]);
//   return element["price"] * element["sales"];
// }


test(totalBookSales([
  {
    id: 1,
    name: "JavaScript の基礎を復習する本",
    price: 2800,
    stock: 3,
    sales: 10,
  },
  { id: 2, name: "JavaScript の配列", price: 3200, stock: 2, sales: 5 },
  { id: 3, name: "DOM を極める", price: 3800, stock: 5, sales: 15 },
  { id: 4, name: "高階関数の基本", price: 4200, stock: 1, sales: 20 },
  { id: 5, name: "DIG BTC の心構え", price: 2680, stock: 4, sales: 10 },
]),[28000, 16000, 57000, 84000, 26800]);


// =======================================================================
console.log("");
console.log("＝課題５＝");

// ここにコードを書きましょう  reduceに直す
// return anyArr.map((keyW) => keyW[elm]); 

function getValuesByProperty(anyArr,elm){
  return anyArr.reduce((resultName,obj) => {
    if (obj.hasOwnProperty(elm)){
      resultName.push(obj[elm]);
    }
    return resultName;
  },[]);
}

const objects = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 35 },
];

const property = "name";

test(getValuesByProperty(objects, property), ["Alice", "Bob", "Charlie"]);


// =======================================================================
console.log("");
console.log("＝課題６＝");

// ここにコードを書きましょう
function mergeAndSumObjects(...objArray){
  let resultArr = [];

  for (const anyArr1 of objArray){
    for (const anyArr2 of anyArr1){
      resultArr.push(anyArr2);
    }
  }

  return resultArr;
}

const arr1 = [
{ id: 1, x: 1, y: 3 },
{ id: 2, x: 3, y: 5 },
];
const arr2 = [{ id: 3, x: 2, y: 2 }];

test(mergeAndSumObjects(arr1, arr2), [{ id: 1, x: 1, y: 3 },{ id: 2, x: 3, y: 5 },{ id: 3, x: 2, y: 2 }]);

const arr3 = [{ id: 2, x: 3, y: 4 }];
console.log("重複処理が出来ていない")
// test(mergeAndSumObjects(arr1, arr2, arr3), [{ id: 1, x: 1, y: 3 },{ id: 2, x: 6, y: 9 },{ id: 3, x: 2, y: 2 }]);


// =======================================================================
console.log("");
console.log("＝課題７＝");
// ここにコードを書きましょう
function doTheThing(numArry,cb1,cb2,cb3){
  return numArry.map(cb1).filter(cb2).filter(cb3);
} 

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const filterArray =
//   numbers
//   .map((n) => n * 3,)
//   .filter((n) => n % 2 === 0,)
//   .filter((n) => n > 20)

// console.log(filterArray)


test(doTheThing(
  numbers,
  (n) => n * 3,
  (n) => n % 2 === 0,
  (n) => n > 20
), [24, 30]);



// =======================================================================
console.log("");
console.log("＝課題８＝");
// ここにコードを書きましょう
function createMessages(word,anyObj){
  let resultword = ""
  let SpaceWord = " "
  if(anyObj["space"] === 2){
    SpaceWord = "  "
  }
  return function(text){
    resultword = anyObj["start"] + SpaceWord + word  + SpaceWord + text + SpaceWord + anyObj["end"];
    return resultword;
  }
}


let greeting = createMessages("Hello", { start: "😄", end: "♪", space: 1 });
test(greeting("DIG"),"😄 Hello DIG ♪");

greeting = createMessages("Domo!", { start: "🦈", end: "🦈", space: 2 });
test(greeting("Same Desu!"),"🦈  Domo!  Same Desu!  🦈");


// =======================================================================
console.log("");
console.log("＝課題９＝");

// 「xxx.js」という外部スクリプトを参照するための正しい構文はどれですか。

// 1. <script src="xxx.js">   〇
// 2. <script href="xxx.js"> 
// 3. <script name="xxx.js">

// 以下の HTML 要素の内容を変更するための正しい JavaScript 構文はどれですか。

// <p id="target">Hello World!</p>

// 1. document.getElementByName("p").innerHTML = "Good luck!";
// 2. document.getElementById("target").innerHTML = "Good luck!";　〇
// 3. #target.innerHTML = "Good luck!";
// 4. document.getElement("p").innerHTML = "Good luck!";

// クリックしたときに何か変更を加えたい場合、〇〇には何が入るでしょうか。

// const element = 変更したい要素
// element.addEventListener("〇〇", (event) => {});

// 1. mousedown
// 2. mouseover
// 3. keydown
// 4. click　　〇

test(1,1);

// =======================================================================
console.log("");
console.log("＝課題１０＝");
// ここにコードを書きましょう
function getDiffDate(date1,date2){
  let resultDay = 0;
  const d1 = new Date(date1);
  const d2 = new Date(date2);
  const diffTime = d1 - d2;
  resultDay = Math.abs(diffTime / (1000 * 60 * 60 * 24));
  return resultDay;
}


test(getDiffDate("2019/01/01", "2019/01/02"), 1);
test(getDiffDate("2019/01/01", "2019/01/01"), 0);
test(getDiffDate("2019/01/01", "2019/02/01"), 31);
test(getDiffDate("2019/01/01", "2020/01/01"), 365);


// =======================================================================
console.log("");
console.log("＝課題１１＝");
// ここにコードを書きましょう  高階関数　カリー化

function createCounter(defNum,step = 1) {
  let data = defNum;
  return function () {
    const resultNum = data;
    data += step
    return (resultNum);
  }
}
  
const countDownFromOneHundred = createCounter(100, -5);
const countUpFromTen = createCounter(10);

test(countDownFromOneHundred(), 100);
test(countUpFromTen(), 10);
test(countUpFromTen(), 11);
test(countDownFromOneHundred(), 95);


// =======================================================================
console.log("");
console.log("＝課題１２＝");
// ここにコードを書きましょう
function endsWith(){
  const str = arguments[0];
  const searchWord = arguments[1];
  const lastNum = arguments[2];
  let resultBool = true;
  const splWord  = searchWord.split('');
  const wordChk = str.split('');
  let strLen = str.length - searchWord.length;

  if (lastNum !== undefined){
    strLen = lastNum -searchWord.length;
    for (let i = 0; i < searchWord.length; i++){
      if(splWord[i] !== wordChk[i+strLen]){
        resultBool = false;
      }
    }
  }else{
    for (let i = 0; i < searchWord.length; i++){
      if(splWord[i] !== wordChk[i+strLen]){
        resultBool = false;
      }
    }
  }
  return resultBool;
}


const str1 = "Cats are the best!";

test(endsWith(str1, "best!"),true);
test(endsWith(str1, "best", 17),true);

const str2 = "Is this a question?";

test(endsWith(str2, "question"),false);


// =======================================================================
console.log("");
console.log("＝課題１３＝");

// ここにコードを書きましょう
function findExtremeValue(arrAny,word){
  let MaxN = 0;
  let MinN = 0;
  if (Array.isArray(arrAny) === true) {
    for (let i = 0; i < arrAny.length; i++ ){
      if (i === 0){
        MaxN = arrAny[i];
        MinN = arrAny[i];
      }else{
        if (MaxN < arrAny[i]){
          MaxN = arrAny[i];
        }
        if (MinN > arrAny[i]){
          MinN = arrAny[i];
        }
      }
    }
    if(word === "MAX"){
      return MaxN;
    }else{
      return MinN;
    }
  }else{
    let cnt = 0;
    for (const key in arrAny){
      cnt ++;
      if (cnt === 1){
        MaxN = arrAny[key];
        MinN = arrAny[key];
      }else{
        if (MaxN < arrAny[key]){
          MaxN = arrAny[key];
        }
        if (MinN > arrAny[key]){
          MinN = arrAny[key];
        }
      }
    }
    if(word === "MAX"){
      return MaxN;
    }else{
      return MinN;
    }
  }
}


const tarr1 = [1, 2, 3];
const tarr2 = [10, 20, 15];
const obj1 = { a: 100, b: 70, c: 50 };
const obj2 = { a: 50, b: 5, c: 500 };

test(findExtremeValue(tarr1, "MAX"), 3);
test(findExtremeValue(tarr2, "MIN"), 10);
test(findExtremeValue(obj1, "MAX"), 100);
test(findExtremeValue(obj2, "MIN"), 5);


// =======================================================================
console.log("");
console.log("＝課題１４＝");

const drinkStock = [
  { name: "cola", price: 120 },
  { name: "water", price: 100 },
  { name: "tea", price: 150 },
];

// ここにコードを書きましょう
let mTotal = 1000; 
let inMony = 0;
let outMony = 0;
let buyMony = 0;

let vendingMachine = {
  insertMoney:function(inM){
    inMony = inM;
    if ( inMony <= 0 || inMony === undefined ){
      return "お金を投入してください";
    }
  },
  money:function(){
    return inMony;
  },
  totalMoney:function(){
    mTotal += inMony
    return mTotal;
  },
  selectDrink:function(selD){
    for (const arr of drinkStock){
      if (arr["name"] === selD ){
        buyMony = arr["price"];
        if (inMony < buyMony){
          return "お金が足りません"
        }
        inMony -= buyMony;
        return selD + " が出てきました！";
      }
    }
  },
  returnChange:function(){
    outMony = inMony;
    mTotal -= outMony;
    inMony = 0
    return outMony;
  }
}


test(vendingMachine.insertMoney(500), );
test(vendingMachine.money(), 500);
test(vendingMachine.totalMoney(), 1500);
test(vendingMachine.selectDrink("water"), "water が出てきました！");
test(vendingMachine.returnChange(), 400);
test(vendingMachine.money(), 0);
test(vendingMachine.totalMoney(), 1100);

test(vendingMachine.insertMoney(100), );
test(vendingMachine.money(), 100);
test(vendingMachine.selectDrink("cola"), "お金が足りません");

test(vendingMachine.insertMoney(), "お金を投入してください");
test(vendingMachine.insertMoney(-100), "お金を投入してください");


// =======================================================================
console.log("");
console.log("＝課題１５＝");

// ここにコードを書きましょう
function compare(any1,any2){
  // console.log(typeof any1,typeof any2);

  if(typeof any1 === "number" && typeof any2 === "number"){
    return  any1 === any2
  }
  if(typeof any1 === "string" && typeof any2 === "string"){
    return  any1 === any2
  }
  if(Array.isArray(any1) === true && Array.isArray(any1) === true){
    if (any1.length !== any2.length){
      return false;
    }
    for (const arr in any1){
      if(any1[arr] !== any2[arr]){
        return false;
      }
    }
    return true;
  }else{
    for (const key in any1){
      console.log(any1[key],any2[key]);
      if(any1[key] !== any2[key]){
        return false;
      }
      // if(!compare(any1[key]),any2[key]){
      //     return false
      // }
    }
    return true;
  }
}



// test(compare(1, 1), true);
// test(compare(1, 2), false);

// test(compare("a", "a"), true);
// test(compare("a", "b"), false);

// test(compare([1, 2, 3], [1, 2, 3]), true);
// test(compare([1, 2, 3], [1, 2, 4]), false);
// test(compare([1, 2, 3], [1, 2, 3, 4]), false);

// test(compare({ a: 1, b: 2 }, { a: 1, b: 2 }), true);
// test(compare({ a: 1, b: 2 }, { b: 2, a: 1 }), true);
// test(compare({ a: 1, b: 2 }, { a: 1, b: 3 }), false);

test(compare(
  { a: 1, b: { c: { d: 2, e: { f: 3 } } } },
  { a: 1, b: { c: { d: 2, e: { f: 3 } } } }
), true);
// compare(
//   { a: 1, b: { c: { d: 2, e: { f: 3 } } } },
//   { a: 1, b: { c: { d: 2, e: { f: 4 } } } }
// ); // false
// compare(
//   { a: 1, b: { c: { d: 2, e: { f: 3 } } } },
//   { a: 1, b: { c: { d: 2, e: { f: 4, g: 5 } } } }
// ); // false

// =======================================================================
console.log("");
console.log("＝課題１６＝");









