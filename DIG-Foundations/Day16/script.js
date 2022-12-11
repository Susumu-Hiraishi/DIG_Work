'use strict'
// Please don't delete the 'use strict' line above

// test({ a: "A", b: "B" }, { b: "B", a: "A" });

//ウォーミングアップ
console.log("");
console.log("＝ここから、ウォーミングアップ＝");







// =======================================================================
//基礎演習
console.log("");
console.log("＝ここから、基礎演習＝");





//ここから　中級演習
console.log("");
console.log("ここから中級演習")

console.log("1");

/**
* @param {{ [key: string]: number }} numObj
* @returns {{ [key: string]: number }} 与えられたオブジェクトと同じ値を持つが、
数値には 1 が足されたオブジェクト
*/
function incrementNumbers(numObj){
  const resultObj = {};

  for (const key in numObj){
    if (typeof numObj[key] === "number"){
      resultObj[key] = numObj[key] + 1;
    }else{
      resultObj[key] = numObj[key];
    }
    console.log(key, numObj[key], resultObj);
  }
  return resultObj;
}


test(incrementNumbers({ a: 1, b: 2, 1: 3, d: "hello" }), {
  a: 2,
  b: 3,
  1: 4,
  d: "hello",
});
test(incrementNumbers({ a: 2, b: 3, 1: 4, d: "hello" }), {
  b: 4,
  a: 3,
  d: "hello",
  1: 5,
});





//ここから　ナイトメア
console.log("");
console.log("ここから応用演習");

