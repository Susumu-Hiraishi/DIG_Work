'use strict'
// 1行目に記載している 'use strict' は削除しないでください
// ファイル全体で使用する TDD 用の変数を宣言する
//  Test-driven Development[TDD]
let expected;   //期待値
let actual;     //実際値


//ウォーミングアップ
console.log("");
console.log("＝ここから、ウォーミングアップ＝");

/**
 * @param {number} num1 - 1 番目の数字
 * @param {number} num2 - 2 番目の数字
 * @returns {"X は Y と等しい" | "X は Y より小さい" | "X は Y より大きい"} 与えられた 2 つの数字の比較結果
 */
 // ここに関数を定義しましょう

function compareTwoNumbers(num1,num2){
  if (num1 === num2){
    return `${num1} は ${num2} と等しい`;   //テンプレートリテラル
  }else if (num1 < num2){
    return `${num1} は ${num2} より小さい`;
  }else if (num1 > num2){
    return `${num1} は ${num2} より大きい`;
  }
}

actual = compareTwoNumbers(1, 1);
expected = "1 は 1 と等しい";

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = compareTwoNumbers(3, 4);
expected = "3 は 4 より小さい";

if (actual === expected) {
console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

// "X は Y より大きい" というテストを書いてみましょう

actual = compareTwoNumbers(5, 4);
expected = "5 は 4 より大きい";

if (actual === expected) {
console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}




// =======================================================================
//基礎演習
console.log("");
console.log("＝ここから、基礎演習＝");
//1.
console.log("基礎１");
 /**
    * @param {number} ??? - 年齢
    * @returns {boolean} 与えられた年齢がティーンエイジャー（13 歳から 19 歳までの間：「thirTEEN」から「nineTEEN」）かどうか
    */
  function isTeenager(age) {
    // ここにコードを書きましょう.
  }

  actual = isTeenager(3);
  expected = false;

  if (actual === expected) {
    console.log("Yay! Test PASSED.");
  } else {
    console.error("Test FAILED. Keep trying!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
  }

  actual = isTeenager(14);
  expected = true;

  if (actual === expected) {
    console.log("Yay! Test PASSED.");
  } else {
    console.error("Test FAILED. Keep trying!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
  }

  // さらにテストを書いて、コードが正しいことを確認してください。

//2.
console.log("基礎２");
actual = isTeenager("Hello!");
expected = "無効です！与えられた年齢は数字ではありません！";

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = isTeenager(true);
expected = "無効です！与えられた年齢は数字ではありません！";

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = isTeenager();
expected = "無効です！与えられた年齢は数字ではありません！";

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

//3.
console.log("基礎３");

/**
    * @param {string} ??? - 人の名前
    * @param {boolean} ??? - 丁寧な挨拶にするかどうかを表すブーリアン
    * @param {boolean} ??? - "Hello" なら true を、"Goodbye" なら false
    * @returns {string} 与えられた引数に応じた適切な挨拶の文章

    */
   // ここにコードを書きましょう.

   actual = anotherGreeting("Mary", true, true);
   expected = "Hello, Mary-san.";

   if (actual === expected) {
     console.log("Yay! Test PASSED.");
   } else {
     console.error("Test FAILED. Keep trying!");
     console.log("    actual: ", actual);
     console.log("  expected: ", expected);
   }

   actual = anotherGreeting("Mary", false, true);
   expected = "Hello, Mary!";

   if (actual === expected) {
     console.log("Yay! Test PASSED.");
   } else {
     console.error("Test FAILED. Keep trying!");
     console.log("    actual: ", actual);
     console.log("  expected: ", expected);
   }

   actual = anotherGreeting("Felix", true, false);
   expected = "Goodbye, Felix-san.";

   if (actual === expected) {
     console.log("Yay! Test PASSED.");
   } else {
     console.error("Test FAILED. Keep trying!");
     console.log("    actual: ", actual);
     console.log("  expected: ", expected);
   }
   // さらにテストを書いて、コードが正しいことを確認してください。




//ここから　中級演習
console.log("")
console.log("ここから中級演習")
//1
console.log("中級")
actual = anotherGreeting(true, false, true);
   expected = "無効なインプットです！";

   if (actual === expected) {
     console.log("Yay! Test PASSED.");
   } else {
     console.error("Test FAILED. Keep trying!");
     console.log("    actual: ", actual);
     console.log("  expected: ", expected);
   }

   actual = anotherGreeting("Sam", true, 0);
   expected = "無効なインプットです！";

   if (actual === expected) {
     console.log("Yay! Test PASSED.");
   } else {
     console.error("Test FAILED. Keep trying!");
     console.log("    actual: ", actual);
     console.log("  expected: ", expected);
   }


//2
console.log("中級２")


//3
console.log("中級３")


//4
console.log("中級４")


//5
console.log("中級５")




//ここから　応用演習
console.log("")
console.log("ここから応用演習")

 /**
    * @param {any} ??? - １つめの被演算子
    * @param {any} ??? - ２つめの被演算子
    * @returns {any} ２つの被演算子を与えられた順番のまま || で評価したときと同じ結果
    */
   // ここにコードを書きましょう

   actual = or(true, true);
   expected = true;

   if (actual === expected) {
     console.log("Yay! Test PASSED.");
   } else {
     console.error("Test FAILED. Keep trying!");
     console.log("    actual: ", actual);
     console.log("  expected: ", expected);
   }

   actual = or(true, false);
   expected = true;

   if (actual === expected) {
     console.log("Yay! Test PASSED.");
   } else {
     console.error("Test FAILED. Keep trying!");
     console.log("    actual: ", actual);
     console.log("  expected: ", expected);
   }

   // さらにテストを書いて、コードが正しいことを確認してください




//ここから　ナイトメア
console.log("")
console.log("ここからナイトメア")





