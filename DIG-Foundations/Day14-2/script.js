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
//研究問題
console.log("");
console.log("＝ここから、研究問題＝");

console.log("1");
for (const word of document.getElementsByTagName("p")){
  console.log(word);
}

console.log("2");
console.log(document.getElementById("main-header"));

console.log("3");
for (const word of document.getElementsByClassName("inner-paragraph")){
  console.log(word);
}


//ペア演習
console.log("");
console.log("＝ここから、ペア演習＝");




//基礎演習
console.log("");
console.log("＝ここから、基礎演習＝");
console.log("1");
/**
* @param {string} word -読込キーワード
* @returns {string} 読み込んだキーワードを大文字で返す
*/
function textLarge(word){
  return word.toUpperCase()
}

console.log("2");
// Document.querySelector()
// Document の querySelector() メソッドは、指定されたセレクターまたは
// セレクター群に一致する、文書内の最初の Element を返します。
// 一致するものが見つからない場合は null を返します。
console.log("3");
/**
* @param {string} keyWord -読込キーワード
* @returns {string} 読み込んだキーワードの要素を大文字で返す
*/
function anyLarge(keyWord){
  let elements = document.querySelectorAll(keyWord);

  for (let element of elements) {
    console.log(element)
    element.innerText = textLarge(element.innerText); 
  }
}

// anyLarge('p');

console.log("4");
function allLarge(){
  let elements = document.querySelectorAll("body");

  for (let element of elements) {
    // console.log(element)
    element.innerText = textLarge(element.innerText); 
  }
}

// allLarge()



//ここから　中級演習
console.log("")
console.log("ここから中級演習")
console.log("1");
//html内のHead部に追加

console.log("2");
let element = document.getElementById('main-header');
element.style.color = '#00ffff';
element.style.height = '100px';

//ここから　応用演習
console.log("")
console.log("ここから応用演習")

let btn = document.getElementById('btn');
btn.addEventListener('click', function() {
  window.alert('Hello!');
}, false);

let btn1 = document.getElementsByClassName("outer")[0];
btn1.addEventListener('click', function() {
  window.alert('Hello!');
}, false);
  



//ここから　ナイトメア
console.log("")
console.log("ここからナイトメア")





