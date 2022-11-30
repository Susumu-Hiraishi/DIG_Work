// 'use strict'
// // 1行目に記載している 'use strict' は削除しないでください

// ファイル全体で使用する TDD 用の変数を宣言する
let expected;
let actual;

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

// ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝

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