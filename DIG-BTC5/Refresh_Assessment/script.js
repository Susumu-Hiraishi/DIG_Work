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
      // console.log(productKey, cartKey);
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

// ここにコードを書きましょう
// function getValuesByProperty(objArray,target){
//   objArray.reduce(function(previousValue){
//     console.log(previousValue);
//     // currentValue === target
//   });
// }

// const objects = [
//   { name: "Alice", age: 30 },
//   { name: "Bob", age: 25 },
//   { name: "Charlie", age: 35 },
// ];

// const property = "name";

// getValuesByProperty(objects, property); // ["Alice", "Bob", "Charlie"]


// =======================================================================
console.log("");
console.log("＝課題６＝");

// ここにコードを書きましょう
// function mergeAndSumObjects(...objArray){
//   let resultArr = [];
//   let sumObj = {};
//   let sumX = 0;
//   let sumY = 0;
//   let cnt = 0;
//   for (const arrobj of objArray){
//     cnt += 1;
//     if (cnt === 1){
//       resultArr.push(arrobj);
//     }else{
//       console.log(cnt);
//       for(const obj2 of arrobj ){
//         // console.log(obj2["id"]);
//         for (const chkArry of resultArr){
//           for (const arrIn of chkArry){
//             if (arrIn["id"] === obj2["id"]){
//               console.log(arrIn["id"],arrIn["x"],arrIn["y"]);
//               console.log(obj2["id"],obj2["x"],obj2["y"]);
//             }else{

//             }

//             // sumX = arrIn["x"];
//             // sumY = arrIn["y"]; 
//             // if (arrIn["id"] === obj2["id"]){
//             //   sumX += obj2["x"];
//             //   sumY += obj2["y"];
//             // }
//             // sumObj.id = arrIn["id"];
//             // sumObj.x = sumX;
//             // sumObj.y = sumY;
//             // console.log(sumObj);
//           }
//           // resultArr.push(sumObj);
//         }
//       }
//     }
//   } 
//   console.log(resultArr);
// }


// const arr1 = [
// { id: 1, x: 1, y: 3 },
// { id: 2, x: 3, y: 5 },
// ];
// const arr2 = [{ id: 3, x: 2, y: 2 }];

// mergeAndSumObjects(arr1, arr2); // [{ id: 1, x: 1, y: 3 },{ id: 2, x: 3, y: 5 },{ id: 3, x: 2, y: 2 }]

// const arr3 = [{ id: 2, x: 3, y: 4 }];

// mergeAndSumObjects(arr1, arr2, arr3); // [{ id: 1, x: 1, y: 3 },{ id: 2, x: 6, y: 9 },{ id: 3, x: 2, y: 2 }]


// =======================================================================
console.log("");
console.log("＝課題７＝");
// ここにコードを書きましょう
function doTheThing(numArry,cb1,cb2,cb3){
  // console.log(numArry.map(cb1).filter(cb2).filter(cb3))
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
    // console.log(resultword)
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
  // console.log(resultDay);
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
function createCounter(defNum,stepNum){
  let data = defNum;
  let step = stepNum;



  function nextSum(){

  }
  return nextSum()
}

const countDownFromOneHundred = createCounter(100, -5);
const countUpFromTen = createCounter(10);

countDownFromOneHundred(); // 100
countUpFromTen(); // 10
countUpFromTen(); // 11
countDownFromOneHundred(); // 95


// =======================================================================
console.log("");
console.log("＝課題１２＝");




// =======================================================================
console.log("");
console.log("＝課題１３＝");



// =======================================================================
console.log("");
console.log("＝課題１４＝");




// =======================================================================
console.log("");
console.log("＝課題１５＝");



// =======================================================================
console.log("");
console.log("＝課題１６＝");









