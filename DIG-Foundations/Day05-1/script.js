'use strict'
// 1行目に記載している 'use strict' は削除しないでください
// ファイル全体で使用する TDD 用の変数を宣言する
//  Test-driven Development[TDD]
let expected;   //期待値
let actual;     //実際値

//ウォーミングアップ
console.log("");
console.log("＝ここから、ウォーミングアップ＝");

function isHot(temperature) {
    if (temperature > 30) {
        return "It's hot!";
    }else{
        return "It's not hot.";
    }
}

console.log(isHot(31)); // "It's hot!" を表示
console.log(isHot(2)); // "It's not hot." を表示
console.log(isHot(30)); // "It's not hot." を表示

function getTypeOfSchool(age) {
    if (age < 6){
        return "kindergarten";
    }else if(age < 11){
        return "elementary school";
    }else if (age < 15){
        return "junior high school";
    }else if (age < 18){
        return "high school";
    }
    return "after high school";
}

console.log(getTypeOfSchool(3)); // "kindergarten" を表示
console.log(getTypeOfSchool(8)); // "elementary school" を表示
console.log(getTypeOfSchool(13)); // "junior high school" を表示
console.log(getTypeOfSchool(16)); // "high school" を表示
console.log(getTypeOfSchool(30)); // "after high school" を表示



// =======================================================================
//基礎演習
console.log("");
console.log("＝ここから、基礎演習＝");

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

//2.
console.log("基礎２")
/**
 * @param {string} name - 人の名前
 * @param {boolean} isFormal - 敬称をつけるべきかどうか（敬称ありならtrue、なしならfalse）
 * @returns {string} 与えられた人の名前と敬称が入った挨拶文
 */

function simpleGreeting(name, isFormal) {
    // ここにコードを書きましょう
    if (isFormal === true){
        return `Hello, ${name}-san.`;
    }
    return `Hello, ${name}.`;
}

actual = simpleGreeting("Amy", true);
expected = "Hello, Amy-san.";

if (actual === expected) {
    console.log("Test PASSED!");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}

actual = simpleGreeting("Matt", false);
expected = "Hello, Matt.";

if (actual === expected) {
console.log("Test PASSED!");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}

//3.
console.log("基礎３")
/**
 * @param {number} num1 - 1 番目の数字
 * @param {number} num2 - 2 番目の数字
 * @returns {boolean} 与えられた 1 番目の数字が 2 番目の数より大きいかどうか
 */
// 関数を宣言しましょう
function isGreaterThan(num1,num2){
    if (num1 > num2){
        return true;
    }else if (num1 < num2){
        return false;
    }else if (num1 === num2){
        return true;
    }
}

actual = isGreaterThan(5, 4);
expected = true;

if (actual === expected) {
    console.log("Test PASSED!");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}

actual = isGreaterThan(3, 4);
expected = false;

if (actual === expected) {
    console.log("Test PASSED!");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}

actual = isGreaterThan(3, 3);
expected = true;

if (actual === expected) {
    console.log("Test PASSED!");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}

//4.
console.log("基礎4")
//4-1
//4-2
//4-3
//4-4
//4-5

//5.
console.log("基礎５")
/**
 * @param {"+"|"-"|"*"|"/"|"**"|"%"} Word - 使用する算術演算子を表す文字列
 * @param {number} num1 - 1 番目の被演算子
 * @param {number} num2 - 2 番目の被演算子
 * @returns {number} 与えられた演算子を被演算子と組み合わせて実行した結果
 */
// 関数を定義しましょう
function  operate(Word,num1,num2){
    if (Word === "+"){
        return num1 + num2;
    }else if (Word === "-"){
        return num1 - num2;
    }else if (Word === "*"){
        return num1 * num2;
    }else if (Word === "/"){
        return num1 / num2;
    }else if (Word === "**"){
        return num1 ** num2;
    }else if (Word === "%"){
        return num1 % num2;
    }
}

actual = operate("+", 1, 2);
expected = 3;

if (actual === expected) {
    console.log("Test PASSED!");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}

actual = operate("-", 100, 33);
expected = 67;

if (actual === expected) {
    console.log("Test PASSED!");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}

   // *, /, **, % を使ってもっとテストを書いてみましょう
actual = operate("*", 100, 33);
expected = 3300;

if (actual === expected) {
    console.log("Test PASSED!");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}
actual = operate("/", 100, 25);
expected = 4;

if (actual === expected) {
    console.log("Test PASSED!");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}

actual = operate("**", 2, 3);
expected = 8;

if (actual === expected) {
    console.log("Test PASSED!");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}

//6.
console.log("基礎６")
/**
 * @param {string} checkColor - チェックしたい色の名前
 * @returns {boolean} 与えられた色が虹色に含まれているかどうか
 * RainbowColorとは(red,orange,yellow,green,blue,indigo,violet)の７色
 */
// 関数を定義しましょう
function isRainbowColor(checkColor){
    if (checkColor === "red"){
        return true;
    }else if (checkColor === "orange"){
        return true;
    }else if (checkColor === "yellow"){
        return true;
    }else if (checkColor === "green"){
        return true;
    }else if (checkColor === "blue"){
        return true;
    }else if (checkColor === "indigo"){
        return true;
    }else if (checkColor === "violet"){
        return true;
    }
    return false;
}

actual = isRainbowColor("red");
expected = true;

console.log("Test PASSED!");
if (actual === expected) {
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}
    
actual = isRainbowColor("rEd");
expected = false;
    
if (actual === expected) {
    console.log("Test PASSED!");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}

actual = isRainbowColor("Brown");
expected = false;

if (actual === expected) {
    console.log("Test PASSED!");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}
    
   // 他の虹色をチェックするテストを書きましょう
actual = isRainbowColor("indego");
expected = false;

if (actual === expected) {
    console.log("Test PASSED!");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}

actual = isRainbowColor("ao");
expected = false;

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

/**
   * @param {any} checkData - チェックする値
   * @returns {string} 与えられた引数のデータ型を表すわかりやすいメッセージ
   */
  // 関数を定義しましょう
  function typeOfFriendly(checkData){
    if (typeof checkData === "number" ){
        return "与えられた引数は number (数値) です。";
    }else if (typeof checkData === "string" ){
        return "与えられた引数は string (文字列) です。";
    }else if (typeof checkData === "boolean" ){
        return "与えられた引数は boolean (真偽値) です。"
    }
  }

actual = typeOfFriendly("Hello");
expected = "与えられた引数は string (文字列) です。";

if (actual === expected) {
    console.log("Test PASSED!");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}

actual = typeOfFriendly(5);
expected = "与えられた引数は number (数値) です。";

if (actual === expected) {
    console.log("Test PASSED!");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}

   // 他の型をチェックするテストも書きましょう

actual = typeOfFriendly(true);
expected = "与えられた引数は boolean (真偽値) です。";

if (actual === expected) {
    console.log("Test PASSED!");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}

//2.
console.log("中級２")

/**
 * @param {"=="|"==="|"<"|"<="|">"|">="} operator - 使用したい比較演算子
 * @param {number} num1 - 1 番目の被演算子
 * @param {number} num2 - 2 番目の被演算子
 * @returns {number} 与えられた演算子を被演算子と組み合わせて比較した結果
 */
// 関数を定義しましょう
function compare(operator,num1,num2){
    if (operator === "=="){
        return num1 == num2;
    }else if (operator === "==="){
        return num1 === num2;
    }else if (operator === "<"){
        return num1 < num2;
    }else if (operator === "<="){
        return num1 <= num2;
    }else if (operator === ">"){
        return num1 > num2;
    }else if (operator === ">="){
        return num1 >= num2;
    }
}

actual = compare("===", 1, 1);
expected = true;

if (actual === expected) {
    console.log("Test PASSED!");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("expected:", expected);
    console.log("  actual:", actual);
    console.groupEnd();
}

actual = compare("===", 1, "1");
expected = false;

if (actual === expected) {
    console.log("Test PASSED!");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}

actual = compare("==", 1, "1");
expected = true;

if (actual === expected) {
console.log("Test PASSED!");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}
    
   // 他の演算子を使ったテストも書いてみましょう。

actual = compare(">", 2, "1");
expected = true;

if (actual === expected) {
console.log("Test PASSED!");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}

actual = compare(">=", 2, "2");
expected = true;

if (actual === expected) {
console.log("Test PASSED!");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}

actual = compare("<", 2, 1);
expected = false;

if (actual === expected) {
console.log("Test PASSED!");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}


//ここから　応用演習
console.log("")
console.log("ここから応用演習")

/**
 * @param {number} num1 - 1 番目の数値
 * @param {number} [num2] - 2 番目の数値 (任意)
 * @param {number} [num3] - 3 番目の数値 (任意)
 * @returns {string} 与えられた数字を 1 つの文字列に結合したもの
 */
 // ここにコードを書きましょう
function concatenateNumbers(){
    let catWord = "";
    for(let i = 0; i < arguments.length; ++i){
        catWord += arguments[i];
        console.log(catWord);
    }
    return catWord;
}

actual = concatenateNumbers(7);
expected = "7";

if (actual === expected) {
    console.log("Test PASSED!");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}
    
actual = concatenateNumbers(7, 9);
expected = "79";

if (actual === expected) {
    console.log("Test PASSED!");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}

   // 必要に応じてテストを書きましょう。
actual = concatenateNumbers(8, 9, 3);
expected = "893";

if (actual === expected) {
    console.log("Test PASSED!");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}
    
//2
console.log("応用２")
/**
 * @param {number} firstQuantity - 初めの数量
 * @param {number} halfLife - 半減期（数量が半分になるまでの時間）
 * @param {number} elapsedTime - 経過時間
 * @returns {number} 与えられた時間が経過したあとに残っている数量
 * 半減期の計算式　N=N0*(1/2)**(t/T) 時間:t　残存量:N　半減期:T　最初の量:N0　
 */
 // ここにコードを書きましょう
function halfLife(firstQuantity,halfLife,elapsedTime){
    let remainingAmount = firstQuantity * (1/2) ** (elapsedTime/halfLife);
    console.log(remainingAmount)
    return remainingAmount
}

actual = halfLife(1, 1, 1);
expected = 1 / 2;

if (actual === expected) {
console.log("Test PASSED!");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}
    
actual = halfLife(8, 4, 2);
expected = 4 * Math.SQRT2;

if (actual === expected) {
    console.log("Test PASSED!");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}

actual = halfLife(2, 2, 4);
expected = 1 / 2;

if (actual === expected) {
    console.log("Test PASSED!");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}
    
   // 必要に応じてテストを書きましょう。

//3.
console.log("応用３")
/**
 * @param {string} textString - 文字列
 * @returns {string} 与えられた文字列の小文字と大文字を逆にした文字列。アルファベット以外は変更しない。
 */
// ここにコードを書きましょう
function invertCase(textString){
    let ConvWord = "";
    for(let i = 0; i < textString.length; ++i){
        if (textString.charAt(i).match(/^[A-Z]+$/)){
            ConvWord += textString.charAt(i).toLowerCase();
        }else{
            ConvWord += textString.charAt(i).toUpperCase();
        }
        console.log(ConvWord);
    }
    return ConvWord;
}

actual = invertCase("I hope you are having a nice day");
expected = "i HOPE YOU ARE HAVING A NICE DAY";

if (actual === expected) {
    console.log("Test PASSED!");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}

actual = invertCase("My daughter is 5 years old");
expected = "mY DAUGHTER IS 5 YEARS OLD";

if (actual === expected) {
console.log("Test PASSED!");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}

   // 必要に応じてテストを書きましょう。


//ここから　ナイトメア
console.log("")
console.log("ここからナイトメア")

/**
 * @param {number} num - チェックしたい数字
 * @returns {boolean} 与えられた数字が素数かどうか
 */
// ここにコードを書きましょう
function isPrime(num){
    //1 は素数でないので false を返す
    if(num == 1) {
        return false;
        //2 は素数なので true を返す
    } else if(num == 2) {
        return true;
    } else {
        for(let i = 2; i < num ; i++ ) {
            //割り切れたら合成数なのでfalse
            if(num % i == 0) {
                return false;
            }
            //割り切れないとき素数なのでtrue
            if(i + 1 == num) {
                return true;
            }
        }
    }
}


actual = isPrime(1);
expected = false;

if (actual === expected) {
    console.log("Test PASSED!");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}

actual = isPrime(2);
expected = true;

if (actual === expected) {
    console.log("Test PASSED!");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}

actual = isPrime(3);
expected = true;

if (actual === expected) {
    console.log("Test PASSED!");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}

actual = isPrime(4);
expected = false;

if (actual === expected) {
    console.log("Test PASSED!");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}

actual = isPrime(5);
expected = true;

if (actual === expected) {
    console.log("Test PASSED!");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}

actual = isPrime(104728);
expected = false;

if (actual === expected) {
    console.log("Test PASSED!");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}

actual = isPrime(104729);
expected = true;

if (actual === expected) {
    console.log("Test PASSED!");
} else {
    console.group("Result:");
    console.error("Test FAILED. Keep trying!");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}

   // 必要に応じてテストを書きましょう。



