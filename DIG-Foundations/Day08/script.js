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
 * @param {Array<any>} arrayToReverse
 * @returns {Array<any>} 与えられた配列の要素が逆の順番に入っている配列
 */
function reverse(arrayToReverse) {
// ここにコードを書きましょう。
  let result = [];
  for (const value of arrayToReverse){
    result.unshift(value);
    // console.log(value,result);
  }
  return result;

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
test(reverse(arrayToReverse),["moe", "miny", "meeny", "eeny"]);


console.log("")
console.log("中級４")
 /**
  * @param {Array<number>} numArray
  * @param {"+"|"-"|"*"|"/"|"**"|"%"} opeArray - 使用したい算術演算子を表す文字配列
  * @param {"+"|"-"|"*"|"/"|"**"|"%"} ope - 使用したい算術演算子を表す文字列
  * @param {number} num - 使用したい被演算子
  * @returns {Array<any>} 与えられた配列の各要素に、引数の算術演算子と被演算子を適用した結果が入った新たな配列
  */
function getOperatedArray(numArray,ope,num) {
  // ここにコードを書きましょう。
  let result = [];
  let calAns;
  
  for (const calNum of numArray){
    if (ope === "+"){
      calAns = calNum + num;
    }else if (ope === "-"){
      calAns = calNum - num;
    }else if (ope === "*"){
      calAns = calNum * num;
    }else if (ope === "/"){
      calAns = calNum / num;
    }else if (ope === "**"){
      calAns = calNum ** num;
    }else if (ope === "%"){
      calAns = calNum % num;
    }    
    // console.log(calAns);
    result.push(calAns);
  }
  return result
  
}
  
actual = getOperatedArray([1, 2, 3], "+", 5);
expected = [6, 7, 8];

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

actual = getOperatedArray([9, 6, 3], "/", 3);
expected = [3, 2, 1];

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
test(getOperatedArray([11, 10, 9], "%", 3),[2,1,0])


//ここから　応用演習
console.log("")
console.log("ここから応用演習")
console.log("")
console.log("応用１")

 /**
  * @param {Array<string>} hurtsArray - 「痛む場所」が入った配列
  * @returns {string} お医者さんに診てもらうときに言うセリフ
  */
function callADoctor(hurtsArray) {
  // ここにコードを書きましょう。
  let multiCheck = false;
  let threeWordCheck = false;
  let wordCount = 0;
  let outWord;
  let result;
  
  for (const value of hurtsArray){
    //単数、複数チェック
    // console.log(value.charAt(value.length -1 ))
    if (value.charAt(value.length -1 ) === "s"){
      multiCheck = true;
    }
    wordCount += 1;
    if (wordCount === 1){
      outWord = value;
    }else if (wordCount <= 3){
      outWord += ", " + value;
    }else{
      outWord += ", and " + value;
    }
  }
  //１ワード以上の時は最後に","を追加
  // if (hurtsArray.length > 1){
  //   outWord += ",";
  // }
  //出力文字処理
  if (multiCheck === false ){
    outWord += " hurts!" ;
  }else{
    outWord += " hurt!";
  }
  
  // console.log(outWord);
  return `Doctor, doctor! My ${outWord}`
  

}

actual = callADoctor(["head"]);
expected = "Doctor, doctor! My head hurts!";

if (actual === expected) {
  console.log("Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

actual = callADoctor(["shoulders"]);
expected = "Doctor, doctor! My shoulders hurt!";

if (actual === expected) {
  console.log("Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

actual = callADoctor(["head", "shoulders", "knees", "toes"]);
expected = "Doctor, doctor! My head, shoulders, knees, and toes hurt!";

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
test(callADoctor(["head", "shoulders", "knees"]),"Doctor, doctor! My head, shoulders, knees hurt!");

console.log("")
console.log("応用２")
/**
  * @param {Array<any>} numArray
  * @returns {number} 与えられた配列の「要素」の数。このとき、入れ子になった配列がある場合は、配列内の各要素も一つ一つカウントすること。
  */
function deepCount(numArray) {
  // ここにコードを書きましょう。
  let arrayCount = 0;
  let subCount = 0;
  
  for (const value of numArray){
    subCount += 1;
    // console.log("roop=" + subCount)
    // console.log(subCount,value,singleCount(value))
    if (singleCount(value) === undefined){
      arrayCount += 1;
      // console.log("roop1=" + arrayCount)
    }else{
      for (const value1 of value){
        if (singleCount(value1) === undefined){
          arrayCount += 1;
          // console.log("roop2=" + arrayCount)
        }else{
          for (const value2 of value1){
            if (singleCount(value2) === undefined){
              arrayCount += 1;
              // console.log("roop3=" + arrayCount)
            }else{
              for (const value3 of value2){
                if (singleCount(value3) === undefined){
                  arrayCount += 1;
                  // console.log("roop4=" + arrayCount)
                }
              }  
            }
          } 
        }
      }
    }
  }

  return arrayCount

}

function singleCount(value){
  let result = "";
  if (typeof value === "string" && value.length === 1){
    result = undefined
  }else{
    result = value.length
  }
  // console.log("single=",result);
  return result;
}



actual = deepCount([1]);
expected = 1;

if (actual === expected) {
  console.log("Test1 PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

// console.log("");

actual = deepCount([1, 3]);
expected = 2;

if (actual === expected) {
  console.log("Test2 PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

// console.log("");

actual = deepCount([1, 3, [2, 4]]);
expected = 4;

if (actual === expected) {
  console.log("Test3 PASSED.");
} else {
  console.error("Test3 FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

// console.log("");

actual = deepCount(["a", "b", ["c", ["d", "e", ["f"]]]]);
expected = 6;

if (actual === expected) {
  console.log("Test4 PASSED.");
} else {
  console.error("Test4 FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

// さらにテストを書きましょう。
test(deepCount([1, "b", [3, ["d", "e", ["f"]]]]),6);

//ここから　ナイトメア
console.log("")
console.log("ここからナイトメア")



