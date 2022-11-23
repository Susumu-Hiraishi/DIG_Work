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
    * @param {number} age - 年齢
    * @returns {boolean} 与えられた年齢がティーンエイジャー（13 歳から 19 歳までの間：「thirTEEN」から「nineTEEN」）かどうか
    */
  function isTeenager(age) {
    // ここにコードを書きましょう.
    if (typeof age === "number"){
      return  13 < age && age < 19 ;
    }else{
      return "無効です！与えられた年齢は数字ではありません！"
    }
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
 * @param {string} name - 人の名前
 * @param {boolean} polite - 丁寧な挨拶にするかどうかを表すブーリアン
 * @param {boolean} state - "Hello" なら true を、"Goodbye" なら false
 * @returns {string} 与えられた引数に応じた適切な挨拶の文章
 */
 
// ここにコードを書きましょう.
function anotherGreeting(name,polite,state){
  if (typeof name !== "string" || typeof polite !== "boolean" || typeof state !== "boolean"){
    console.log("nametype=",typeof name ,"politetype=", typeof polite ,"statetype=", typeof state);
    return "無効なインプットです！";
  }

  if (state === true){
    if (polite === true){
      return `Hello, ${name}-san.`;
    }else{
      return `Hello, ${name}!`;
    }
  }else{
    if (polite === true){
      return `Goodbye, ${name}-san.`;
    }else{
      return `Goodbye, ${name}!`;
    }
  }
}

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
actual = anotherGreeting("junny", false, false);
expected = "Goodbye, junny!";

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}



//ここから　中級演習
console.log("")
console.log("ここから中級演習")
//1
console.log("中級１")

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
/**
 * @param {number} points - 0 以上 100 以下の点数
 * @returns {"A"|"B"|"C"|"D"|"F"} 点数に応じた成績
 */
function getLetterGrade(points){
  if (points < 0 || 100 < points){
    return "無効な点数です。";
  }

  if (90 <= points && points <= 100){
    return "A";
  }else if (80 <= points){
    return "B";
  }else if (70 <= points){
    return "C";
  }else if (60 <= points){
    return "D";
  }else if (points < 60){
    return "F";
  }
}

 actual = getLetterGrade(95);
 expected = "A";

 if (actual === expected) {
   console.log("Yay! Test PASSED.");
 } else {
   console.error("Test FAILED. Keep trying!");
   console.log("    actual: ", actual);
   console.log("  expected: ", expected);
 }

 // さらにテストを書いて、コードが正しいことを確認してください
 actual = getLetterGrade(70);
 expected = "C";

 if (actual === expected) {
   console.log("Yay! Test PASSED.");
 } else {
   console.error("Test FAILED. Keep trying!");
   console.log("    actual: ", actual);
   console.log("  expected: ", expected);
 }

 actual = getLetterGrade(60);
 expected = "D";

 if (actual === expected) {
   console.log("Yay! Test PASSED.");
 } else {
   console.error("Test FAILED. Keep trying!");
   console.log("    actual: ", actual);
   console.log("  expected: ", expected);
 }
 actual = getLetterGrade(59.5);
 expected = "F";

 if (actual === expected) {
   console.log("Yay! Test PASSED.");
 } else {
   console.error("Test FAILED. Keep trying!");
   console.log("    actual: ", actual);
   console.log("  expected: ", expected);
 }


//3
console.log("中級３")

actual = getLetterGrade(101);
expected = "無効な点数です。";

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

// さらにテストを書いて、コードが正しいことを確認してください
actual = getLetterGrade(-0.1);
expected = "無効な点数です。";

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}


//4
console.log("中級４")
/**
 * @param {"A"|"B"|"C"|"D"|"F"} grades - 成績
 * @returns {number} 各成績における最高点
 */
function getBestNumericalGrade(grades){

  const arry = ["A","B","C","D","F"]
  let buf = false
  for (let i =0 ; i < arry.length ; ++i){
    // console.log(arry[i])
    if (grades === arry[i]){
      buf = true
    }
  }
  if (buf !== true){
    return "無効な点数です。";
  }


  if (grades === "A"){
    return 100;
  }else if (grades === "B"){
    return 89;
  }else if (grades === "C"){
    return 79;
  }else if (grades === "D"){
    return 69;
  }else{
    return 59;
  }
}


 actual = getBestNumericalGrade("A");
 expected = 100;

 if (actual === expected) {
   console.log("Yay! Test PASSED.");
 } else {
   console.error("Test FAILED. Keep trying!");
   console.log("    actual: ", actual);
   console.log("  expected: ", expected);
 }

 actual = getBestNumericalGrade("B");
 expected = 89;

 if (actual === expected) {
   console.log("Yay! Test PASSED.");
 } else {
   console.error("Test FAILED. Keep trying!");
   console.log("    actual: ", actual);
   console.log("  expected: ", expected);
 }

 // さらにテストを書いて、コードが正しいことを確認してください
 actual = getBestNumericalGrade("F");
 expected = 59;

 if (actual === expected) {
   console.log("Yay! Test PASSED.");
 } else {
   console.error("Test FAILED. Keep trying!");
   console.log("    actual: ", actual);
   console.log("  expected: ", expected);
 }


//5
console.log("中級５")
actual = getBestNumericalGrade("恐竜ってすばらしい");
expected = "無効な点数です。";

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = getBestNumericalGrade(100);
expected = "無効な点数です。";

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

// さらにテストを書いて、コードが正しいことを確認してください
actual = getBestNumericalGrade("E");
expected = "無効な点数です。";

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}


//ここから　応用演習
console.log("")
console.log("ここから応用演習")
console.log("応用１")
/**  （ド・モルガンの法則）operand=被演算子
 *    !(P || Q) == !P && !Q  ,   !(P && Q) == !P || !Q
 * @param {any} ope1 - １つめの被演算子
 * @param {any} ope2 - ２つめの被演算子
 * @returns {any} ２つの被演算子を与えられた順番のまま || で評価したときと同じ結果
 */
// ここにコードを書きましょう
// function demorgan(ope1,ope2){
//   let left = !(ope1 || ope2);
//   let right = !ope1 && !ope2;
//   console.log("左辺=",!(ope1 || ope2),"右辺=",!ope1 && !ope2)

//   if (left === right ){
//     return true;
//   }else{
//     return false;
//   }

// }

function or(ope1,ope2){

  console.log("ope1type=",typeof ope1,"ope2type=",typeof ope2)

  if (typeof ope1 !== "boolean" && ope1 !== ""){
    return ope1;
  }else if(typeof ope2 !== "boolean"){
    return ope2;
  }

  if (ope1 === false && ope2 === false){
    return !(ope1 && ope2)
  } else{
    return !(!ope1 && !ope2)
  }

}

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
actual = or(false, false);
expected = true;

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = or("bananas", false);
expected = "bananas";

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = or("", "bananas");
expected = "bananas";

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

console.log("応用２")
/**
 *     !(P || Q) == !P && !Q  ,   !(P && Q) == !P || !Q
 * @param {any} ope1 - １つめの被演算子
 * @param {any} ope2 - ２つめの被演算子
 * @returns {any} ２つの被演算子を与えられた順番のまま && で評価したときと同じ結果
 */
// ここにコードを書きましょう

function and(ope1,ope2){

  // console.log("ope1=",ope1,"ope2=",ope2)
  // console.log("ope1type=",typeof ope1,"ope2type=",typeof ope2)

  if (ope1  === ""){
    return ope1;
  }else if(typeof ope1 !== "boolean"){
    return ope2;
  }

  if (ope1 === true && ope2 === true){
    return !(!ope1 || !ope2)
  } else{
    return !(ope1 || ope2)
  }

}

actual = and(true, true);
expected = true;

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = and(true, false);
expected = false;

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

// さらにテストを書いて、コードが正しいことを確認してください

actual = and("bananas", false);
expected = false;

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = and("", "bananas");
expected = "";

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}



//ここから　ナイトメア
console.log("")
console.log("ここからナイトメア")





