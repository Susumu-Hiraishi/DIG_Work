'use strict'
// 1行目に記載している 'use strict' は削除しないでください
//ウォーミングアップ
console.log("");
console.log("＝ここから、ウォーミングアップ＝");

function isMultipleOfThree(num) {
    // let  buf = num % 3
    // if (buf === 0 ){
    //     return true
    // }else{
    //     return false
    // }
    return num % 3 === 0;
}

  // テスト
  console.log(isMultipleOfThree(6)); // => true
  console.log(isMultipleOfThree(10)); // => false

function isMultipleOf(num1,num2) {
    // let  buf = num1 % num2
    // if (buf === 0 ){
    //     return true
    // }else{
    //     return false
    // }
    return num1 % num2 === 0;
}

  // テスト
  console.log(isMultipleOf(6, 3)); // => true
  console.log(isMultipleOf(10, 4)); // => false



// =======================================================================
//基礎演習
console.log("");
console.log("＝ここから、基礎演習＝");
//1
function simplePasswordLock(password) {
    if (password === "password") {
      return "Correct! Welcome.";
    }else{
      return "Incorrect password, please try again.";
    }
}
console.log(simplePasswordLock("qwerty")); // => "Incorrect password, please try again."
console.log(simplePasswordLock("password")); // => "Correct! Welcome."

//2
console.log("Hello".length);
console.log("The length of this string is 31".length);
console.log(" spaces! ".length);

//3
function isItTooLong(num){
  console.log("文字数= " + num.length)
  return num.length > 10;
}
console.log(isItTooLong("This is a pen."));

//4
function biggerNumber(numOne, numTwo) {
  if(numOne > numTwo){
      return numOne;
  }else if(numOne < numTwo){
      return numTwo;
  }else{
      return "等しい";
  }
}

console.log(biggerNumber(4, 3)); // 'The first argument is bigger.' を表示
console.log(biggerNumber(3, 4)); // => 'The second argument is bigger.'
//ボーナス
console.log(biggerNumber(4, 4)); // => 'The second argument is bigger.'

//5
function printDataType(data) {
  if (typeof data === "number") {
      console.log("This is a number.");
  }else if(typeof data === "boolean"){
      console.log("This is a boolean.");
  }else if(typeof data === "string"){
      console.log("This is a string.");
  }else{
      console.log("This is not a string, boolean, or number.");
  }
  // More code here.

}

printDataType(42); // => "This is a number."
printDataType("Hello!"); // "This is a string." が表示されるようにする。
printDataType(true); // => "This is a boolean."
printDataType(undefined); // => "This is not a string, boolean, or number."

//6
function greeting(name,lang){
  if (lang === "Japanese"){
    return "Konnichiwa, " + name + "!"
  }else if (lang === "English"){
    return "Hello, " + name + "!"
  }else if (lang === "German"){
    return "Gutentag, " + name + "!"
  }else if (lang === "Spanish"){
    return "Hola, " + name + "!"
  }
}

console.log(greeting("Harry Potter", "Japanese")); // "Konnichiwa, Harry Potter!" が表示されるようにする。
console.log(greeting("Harry Potter", "English")); // => "Hello, Harry Potter!"
console.log(greeting("Harry Potter", "German")); // => "Gutentag, Harry Potter!"
console.log(greeting("Harry Potter", "Spanish")); // => "Hola, Harry Potter!"

//7
function isEven(num){
  if (typeof num === "number" ){
    return num % 2 === 0
  }else{
    return "This is not a number."
  }
}
console.log(isEven(4)); // true が表示されるようにする。
console.log(isEven(7)); // => false

//ボーナス
console.log(isEven("7")); // => false

//ここから　中級演習
console.log("")
console.log("ここから中級演習")

//1
function isOdd(num){
  return num !== num % 2; //true
}
console.log(isOdd(5));

//2
function isPositive(num){
  if(num > 0 ){
    return true;
  }else if(num<0){
    return false;
  }
}
console.log(isPositive(1)); //false

//3
function isPositive(num){
  if(num < 0 ){
    return true;
  }else if(num > 0){
    return false;
  }
}
console.log(isPositive(-1)); //true

//4
function isZero(num){
  if(num === 0 ){
    return true;
  }else{
    return false;
  }
}
console.log(isZero(0)); //true

// ビルトイン（JavaScript にあらかじめ組み込まれている、という意味）の Math オブジェクト
//1
function randomNumber(number){
  return Math.random() * (number - 0) + 0;
}
console.log(randomNumber(5+1));
//2
function guessMyNumber(number){
  let value = Math.floor(Math.random() * ((5+1) - 0) + 0);// 小数点以下が切り捨てられるので、１０を出したいときは１１までのランダムにする必要がある
  console.log("ランダムな数字は、 ", value);
  if ( number === value){
    return "YES!";
  }else{
    return "NO!";
  }
}
console.log(guessMyNumber(2));



//ここから　応用演習
console.log("")
console.log("ここから応用演習")

// let black   = '\u001b[30m';
// let red     = '\u001b[31m';
// let green   = '\u001b[32m';
// let yellow  = '\u001b[33m';
// let blue    = '\u001b[34m';
// let magenta = '\u001b[35m';
// let cyan    = '\u001b[36m';
// let white   = '\u001b[37m';

// let reset   = '\u001b[0m';

function randomStopLight(){
  let value = Math.floor(Math.random() * 11); // 小数点以下が切り捨てられるので、１０を出したいときは１１までのランダムにする必要がある
  console.log("ランダムな数字は、 ", value);
  if (value < 3){
      // return red + "●Red";
      return "🔴Red";
  }else if (value <= 6){
      // return yellow + "●Yellow";
      return "🟡Yellow";
  }else{
      // return green + "●Green";
      return "🟢Green";
  }
}
console.log(randomStopLight());


