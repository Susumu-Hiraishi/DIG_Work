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
// 
let theLoneliestNumber = 1;

let aFriend = theLoneliestNumber;

console.log(theLoneliestNumber); // 1
console.log(aFriend); // 1
console.log(theLoneliestNumber === aFriend); // true

console.log("=2=");

const kermit = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "indigo",
  "violet",
];
const missPiggy = kermit.slice();

console.log(kermit); //  ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']0: "red"1: "orange"2: "yellow"3: "green"4: "blue"5: "indigo"6: "violet"length: 7[[Prototype]]: Array(0)
console.log(missPiggy); // ['red', 'orange', 'yellow
console.log(kermit === missPiggy); // false

console.log("=3=");

let mamas = "Monday";

let papas = mamas;

papas += ", so good to me.";

console.log(mamas); // Monday
console.log(papas); // Monday, so good to me.
console.log(mamas === papas); // false

console.log("=4=");

const theFabFour = {
  bass: ["paul"],
  drums: ["ringo"],
  guitar: ["george", "john"],
  vocals: ["george", "john", "paul", "ringo"],
};

const theFifthBeatle = theFabFour;
theFifthBeatle.guitar.push("beau");

console.log(theFabFour); // {}中が返って来る

console.log(theFifthBeatle); // ???
console.log(theFabFour === theFifthBeatle); // ???

console.log(theFabFour.guitar); // ???
console.log(theFifthBeatle.guitar); // ???
console.log(theFabFour.guitar === theFifthBeatle.guitar); // ???