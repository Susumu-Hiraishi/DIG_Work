'use strict'
// 1行目に記載している 'use strict' は削除しないでください

/**
* @param {{ [key: string]: number }} objNum オブジェクト内に、値が入っている
* @returns {{ [key: string]: number }} 与えられたオブジェクトと同じ値を持つが、
数値には 1 が足されたオブジェクト
*/
function incrementNumbers(objNum){
  const result = {};

  for (const key in objNum){
    if (typeof objNum[key] === "number" ){
      result[key] = objNum[key] + 1 ;
    }else if (typeof objNum[key] !== "number"){
      result[key] = objNum[key] ;
    }
  }
  console.log(objNum,result);
  return result;
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
  
