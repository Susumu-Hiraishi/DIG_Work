'use strict'
// 1行目に記載している 'use strict' は削除しないでください
// ファイル全体で使用する TDD 用の変数を宣言する
//  Test-driven Development[TDD]
let actual;     //実際値
let expected;   //期待値

// ここから配列用テスト用関数
function test(actual,expected){
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("Test PASSED!");
  } else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd("Result:");
  }
}

//ウォーミングアップ
console.log("");
console.log("＝ここから、ウォーミングアップ＝");

// 型=文字列型、数値型、ブーリアン型、undetected型がある。
// 配列＝モノを入れる箱
// 変数＝移り替わる要素
// expressions＝式　関数の中で、判定を行う　
// HTML＝DOCTYPE、HEAD,BODYで構成され、システム情報はHEADに、本文はBODYの中に書かれる
// テスト駆動開発＝ソフトウェア開発のプロセス、コードを書く前にコードの設計について考える助けになる
// コードスタイル＝自分や、他の人が見て、分かり易いコードの書き方

// TDD,HTML、配列、（）、インポスターシンドローム





// =======================================================================
//基礎演習
console.log("");
console.log("＝ここから、基礎演習＝");

console.log("");
console.log("基礎１");
/**
* @param {Array<number>} numArray - 数値型の要素を持つ配列
* @returns {number} 与えられた配列のすべての数字の合計
*/

function sumArray(numArray) {
  let result = 0;
  // ここにコードを書きましょう。
  for (const sum of numArray){
    // console.log(result,sum);
    result +=  sum;
  }
  return result;
}

actual = sumArray([1, 2, 3, 4]);
expected = 10;

if (actual === expected) {
  console.log("Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

// さらにテストを書きましょう。
test(sumArray([1, 2, 3, 4]),10);

console.log("");
console.log("基礎２");
/**
 * @param {Array<number>} numArray - 数値型の要素を持つ配列
 * @returns {number} 与えられた配列のすべての数字をかけあわせた答え
 */
function productArray(numArray) {
  // ここにコードを書きましょう。
  let result = 0;
  let cnt = 0;
  // ここにコードを書きましょう。
  for (const sum of numArray){
    cnt += 1
    if (cnt === 1 ){
      result = sum;
    }else{
      result =  result * sum;
      // console.log(result,sum);
    }
  }
  return result;

}

actual = productArray([1, 2, 3, 4]);
expected = 24;

if (actual === expected) {
  console.log("Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

// さらにテストを書きましょう。
test(productArray([2, 3, 5, 7]),210);

console.log("");
console.log("基礎３");
 /**
  * @param {Array<any>} valueArray 
  * @returns {boolean} 与えられた配列に "fun" という文字列が入っているかどうかを表すブーリアン
  */
function hasFun(valueArray) {
  // ここにコードを書きましょう。
  let result = false;

  for (const checkWord of valueArray){
    if (checkWord === "fun"){
      result = true;
    }
  }
  return result


}
  
actual = hasFun(["whatever", 2, false, "fun", "hello"]);
expected = true;

if (actual === expected) {
  console.log("Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

actual = hasFun(["whatever", 2, false, "run", "hello"]);
expected = false;

if (actual === expected) {
  console.log("Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

// さらにテストを書きましょう。
test(hasFun(["fun", 2, false, "run", "fun"]),true);


console.log("");
console.log("基礎４");
/**
 * @param {Array<any>} wordArray
 * @returns {boolean} 与えられた配列の要素がすべてブーリアンかどうかを表すブーリアン
 */
function containsOnlyBooleans(wordArray) {
// ここにコードを書きましょう。
  let result = false;
  let cnt = 0;

  for (const checkWord of wordArray){
    if (typeof checkWord === "boolean"){
      cnt += 1;
      // console.log(typeof checkWord,cnt);
    }
  }

  if ( cnt === wordArray.length){
    return true;
  }
  return false;

}

actual = containsOnlyBooleans([true, false, true, false, false]);
expected = true;

if (actual === expected) {
  console.log("Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

actual = containsOnlyBooleans([true, true, true, "not a boolean"]);
expected = false;

if (actual === expected) {
  console.log("Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

// さらにテストを書きましょう。
test(containsOnlyBooleans(["Boolean", 3, "45", "not a boolean"]),false);

console.log("");
console.log("基礎５");
/**
 * @param {Array<any>} valueArray1 - 1番目の配列
 * @param {Array<any>} valueArray2 - 2番目の配列
 * @returns {Array<any>} 与えられた2つの配列を連結させた配列
 */
function concatenate(valueArray1,valueArray2) {
// ここにコードを書きましょう。
  let result = [];

  for (const addWord of valueArray1){
    result.push(addWord);
    // console.log(result);
  }
  for (const addWord of valueArray2){
    result.push(addWord);
    // console.log(result);
  }
  return result
}

actual = concatenate(["eeny", "meeny"], ["miny", "moe"]);
expected = ["eeny", "meeny", "miny", "moe"];

// 現時点では、配列を比較するには JSON.stringify を使う必要があると覚えておいてください。
if (JSON.stringify(actual) === JSON.stringify(expected)) {
  console.log("Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

// さらにテストを書きましょう。
test(concatenate(["eeny"], ["miny", "moe", "meeny"]),["eeny", "miny", "moe", "meeny"]);

console.log("");
console.log("基礎６");
/**
 * @param {Array<number>} numArray - 数値型の要素を持つ配列
 * @returns {Array<number>} 与えられた配列の中の偶数だけを入れた配列
 */
function getEvenNumbers(numArray) {
  // ここにコードを書きましょう。
  let result = [];

  for (const evenNo of numArray){
    if (evenNo % 2 === 0){
      result.push(evenNo);
      // console.log(evenNo,result);
    }
  }
  return result
}

actual = getEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8]);
expected = [2, 4, 6, 8];

// 現時点では、配列を比較するには JSON.stringify を使う必要があると覚えておいてください。
if (JSON.stringify(actual) === JSON.stringify(expected)) {
  console.log("Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

// さらにテストを書きましょう。
test(getEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),[2, 4, 6, 8, 10]);


console.log("");
console.log("基礎７");
/**
 * @param {Array<number>} numArray - 数値型の要素を持つ配列
 * @param {number} num - 配列の中の数字にかける数字
 * @returns {Array<number>} 配列の中の数字に第2引数をかけた結果が入った新しい配列
 */
function getMultipliedArray(numArray,num) {
// ここにコードを書きましょう。
  let result = [];

  for (const value of numArray){
    result.push(value * num);
    // console.log(result);
  }
  return result;
}

actual = getMultipliedArray([1, 2, 3], 6);
expected = [6, 12, 18];

// 現時点では、配列を比較するには JSON.stringify を使う必要があると覚えておいてください。
if (JSON.stringify(actual) === JSON.stringify(expected)) {
  console.log("Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

// さらにテストを書きましょう。
test(getMultipliedArray([1, 2, 3], -1),[-1,-2,-3] );

//ここから　中級演習
console.log("")
console.log("ここから中級演習")
console.log("")
console.log("中級１")
/**
 * @param {Array<number>} numArray - 数値型の要素を持つ配列
 * @returns {boolean} 与えられた配列が昇順になっているかを表すブーリアン
 */
function isSorted(numArray) {
  // ここにコードを書きましょう。
  let result = 0;
  let buf ;
  let cnt = 0;
  for (const num of numArray){
    cnt += 1;
    if (cnt === 1){
      buf = num ;
    }else{
      if (buf > num){
        buf = num ;
        result += 1;
      }else{
        buf = num ;
      }
    }
    // console.log(cnt,buf,result)
  }
  return result === 0

}

actual = isSorted([1, 2, 3]);
expected = true;

if (actual === expected) {
  console.log("Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

actual = isSorted([3, 2, 3]);
expected = false;

if (actual === expected) {
  console.log("Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

// さらにテストを書きましょう。
test(isSorted([-1, 0, 1]),true)
test(isSorted([-2, -1, 0]),true)


console.log("")
console.log("中級２")
/**
 * @param {Array<any>} numArray - 配列
 * @param {string|number|boolean} occurrences - 出現回数をカウントしたい値（値のデータ型は `string`、`number`、`boolean` のいずれかとする。）
 * @returns {number} その値が配列内で出てきた回数
 */
function countOccurrences(numArray,occurrences) {
// ここにコードを書きましょう。
  let cnt = 0;

  for (const value of numArray){
    if (typeof value === "string" || typeof value === "number" || typeof "boolean" ){
      // console.log(value,typeof value,cnt);
      if (value === occurrences ){
        cnt += 1
      }
    }
  }
  // console.log(cnt);
  return cnt
  
}

actual = countOccurrences([1, 2, 3], 2);
expected = 1;

if (actual === expected) {
  console.log("Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

actual = countOccurrences([1, 2, 2], 2);
expected = 2;

if (actual === expected) {
  console.log("Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

actual = countOccurrences([1, 2, "elephant"], "elephant");
expected = 1;

if (actual === expected) {
  console.log("Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

// さらにテストを書きましょう
test(countOccurrences([1, true, true], true ) , 2)


console.log("")
console.log("中級３")
/**
 * @param {Array<any>} ???
 * @returns {Array<any>} 与えられた配列の要素が逆の順番に入っている配列
 */
function reverse() {
// ここにコードを書きましょう。
}

const arrayToReverse = ["eeny", "meeny", "miny", "moe"];

actual = reverse(arrayToReverse);
expected = ["moe", "miny", "meeny", "eeny"];

// 現時点では、配列を比較するには JSON.stringify を使う必要があると覚えておいてください。
if (JSON.stringify(actual) === JSON.stringify(expected)) {
  console.log("Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

// 元の配列が変更されていないことを確認してください。
// 現時点では、配列を比較するには JSON.stringify を使う必要があると覚えておいてください。

actual = arrayToReverse;
expected = ["eeny", "meeny", "miny", "moe"];

if (JSON.stringify(actual) === JSON.stringify(expected)) {
  console.log("Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

// さらにテストを書きましょう。



console.log("")
console.log("中級４")




//ここから　応用演習
console.log("")
console.log("ここから応用演習")





//ここから　ナイトメア
console.log("")
console.log("ここからナイトメア")





