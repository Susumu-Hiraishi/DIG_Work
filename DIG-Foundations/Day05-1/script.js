'use strict'
// 1行目に記載している 'use strict' は削除しないでください
//ウォーミングアップ
console.log("");
console.log("＝ここから、ウォーミングアップ＝");

// function isHot(temperature) {
//     if temperature>30 {
//     return "It's hot!";
//     return "It's not hot.";
// }

// console.log(isHot(31)); // "It's hot!" を表示
// console.log(isHot(2)); // "It's not hot." を表示
// console.log(isHot(30)); // "It's not hot." を表示

// function getTypeOfSchool(age) {
//     if age < 6
//     return "kindergarten";
//     } if else (age < 11); {
//           return "elementary school";
//     else (age > 15) {
//   return "junior high school";
//     }
//     if (age < 18) {
//   return "high school";
//     }
//     else {
//     return "after high school";
//     }
//   }

// console.log(getTypeOfSchool(3)); // "kindergarten" を表示
// console.log(getTypeOfSchool(8)); // "elementary school" を表示
// console.log(getTypeOfSchool(13)); // "junior high school" を表示
// console.log(getTypeOfSchool(16)); // "high school" を表示
// console.log(getTypeOfSchool(30)); // "after high school" を表示



// =======================================================================
//基礎演習
console.log("");
console.log("＝ここから、基礎演習＝");

// ファイル全体で使用する TDD 用の変数を宣言する
let expected;   //期待値
let actual;     //実際値

//1
/**
 * @param {string} firstName - 下の名前
 * @param {string} lastName - 苗字
 * @returns {string} 名前と苗字を連結し、間にスペースを入れたもの
 */

 function getFullName(firstName, lastName) {
    return firstName + " " + lastName;
}
   
actual = getFullName("Ken", "Watanabe");
expected = "Ken Watanabe";
   
if (actual === expected) {
    console.log("Test PASSED!");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}




//ここから　中級演習
console.log("")
console.log("ここから中級演習")





//ここから　応用演習
console.log("")
console.log("ここから応用演習")





//ここから　ナイトメア
console.log("")
console.log("ここからナイトメア")





