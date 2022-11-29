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



// =======================================================================
//基礎演習
console.log("");
console.log("＝ここから、基礎演習＝");

console.log("=基礎１=");
let theLoneliestNumber = 1;

let aFriend = theLoneliestNumber;

console.log(theLoneliestNumber); // 1
console.log(aFriend); // 1
console.log(theLoneliestNumber === aFriend); // true



console.log("=基礎２=");
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

console.log(kermit); // objectの中身
console.log(missPiggy); // objectの中身
console.log(kermit === missPiggy); // False コピーされたメモリ番地


console.log("=基礎３=");
let mamas = "Monday";

let papas = mamas;

papas += ", so good to me.";

console.log(mamas); // Monday
console.log(papas); // Monday, so good to me.
console.log(mamas === papas); // false



console.log("=基礎４=");
const theFabFour = {
  bass: ["paul"],
  drums: ["ringo"],
  guitar: ["george", "john"],
  vocals: ["george", "john", "paul", "ringo"],
};

const theFifthBeatle = theFabFour;
theFifthBeatle.guitar.push("beau");

console.log(theFabFour); // objectの中身
console.log(theFifthBeatle); // objectの中身
console.log(theFabFour === theFifthBeatle); // true

console.log(theFabFour.guitar); // 'george', 'john', 'beau'
console.log(theFifthBeatle.guitar); // 'george', 'john', 'beau'
console.log(theFabFour.guitar === theFifthBeatle.guitar); // true



console.log("=基礎５=");
let isHot = true;
let isCold = !isHot;

isHot = !isHot;

console.log(isHot); // false
console.log(isCold); // false
console.log(isHot === isCold); // true



console.log("=基礎６=");
const easyAs = [
  ["a", "b", "c"],
  [1, 2, 3],
  ["do", "re"],
];
const simpleAs = easyAs.slice();
simpleAs[2].push("mi");

console.log(easyAs); // 配列の中の配列
console.log(simpleAs); // 配列の中の配列
console.log(easyAs === simpleAs); // false

console.log(easyAs[2]); // 'do', 're', 'mi']
console.log(simpleAs[2]); // 'do', 're', 'mi']
console.log(easyAs[2] === simpleAs[2]); // true



