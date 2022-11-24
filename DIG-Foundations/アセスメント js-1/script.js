'use strict'
// 1行目に記載している 'use strict' は削除しないでください
// ファイル全体で使用する TDD 用の変数を宣言する
//  Test-driven Development[TDD]
let actual;     //実際値
let expected;   //期待値


//1.
console.log("");
console.log("１問目");
//JSDoc
/**
 * @param {string} name - 名前
 * @returns {string} 挨拶文を返す
*/
function greeting(name){
  return `Hello, ${name}!`;
}

 // テスト
 console.log(greeting("Kana")); // => "Hello, Kana!"
 console.log(greeting("Kimiko")); // => "Hello, Kimiko!"

// ここからテスト
actual = greeting("Kana");
expected = "Hello, Kana!";

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd("Result:");
}

//2.
console.log("");
console.log("2問目");

//JSDoc
/**
 * @param {number} num1 - １つ目の数字
 * @param {number} num2 - ２つ目の数字
 * @returns {number} ２つの平均値を返す
*/
function average(num1,num2){
  return "平均値は=" + (num1 + num2) / 2;
}

 // テスト
 console.log(average(1,2)); // => 1.5

// ここからテスト
actual = average(1,2);
expected = "平均値は=1.5";

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd("Result:");
}


//3.
console.log("");
console.log("3問目");

/**
  * @param {"Spring"|"Summer"|"Fall"|"Winter"} season - 現在の季節
  * @param {"warm"|"hot"|"cool"|"cold"} temperature - 現在の気温
  * @returns {"The temperature is normal for the season."|"The temperature is unusual for the season."} 季節や気温に応じて変わる、気候に関する説明
  */
function describeTheWeather(season,temperature) {
  const arry1 = ["Spring","Summer","Fall","Winter"];
  const arry2 = ["warm","hot","cool","cold"];

  for ( let i = 0 ; i < arry1.length ; ++i){
    if (season === arry1[i] ){
      // console.log(arry1[i] , i);
      if ( temperature === arry2[i] ){
        // console.log(arry2[i]);
        return "The temperature is normal for the season.";
      }else{
        return "The temperature is unusual for the season.";
      }
    }
  }
}

actual = describeTheWeather("Spring", "warm");
expected = "The temperature is normal for the season.";

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = describeTheWeather("Spring", "cold");
expected = "The temperature is unusual for the season.";

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

  // さらにテストを書いて、コードが正しいことを確認してください

  actual = describeTheWeather("Winter", "cold");
  expected = "The temperature is normal for the season.";
  
  if (actual === expected) {
    console.log("Yay! Test PASSED.");
  } else {
    console.error("Test FAILED. Keep trying!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
  }
