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



//ウォーミングアップ
console.log("");
console.log("＝ここから、ウォーミングアップ＝");

// <img> 要素の width プロパティを 500 に変更する。
// document.getElementsByTagName("img")[0].width = 500;

// // 1 つ目の <h1> 要素の innerText を "I am the first h1 element" に変更する
// document.getElementsByTagName("h1")[0].innerText = "I am the first h1 element"

// function reText( tag, num, moji){
//   document.getElementsByTagName(tag)[num].innerText = moji;
// }

// // 1 つ目の <h2> 要素の innerText を "I am the first h2 element" に変更する。
// document.getElementsByTagName("h2")[0].innerText = "I am the first h2 element"
// reText("h2",0,"I am the first h2 element");
// // 2 つ目の <h2> 要素の innerText を "I am the second h2 element" に変更する。
// document.getElementsByTagName("h2")[1].innerText = "I am the second h2 element"
// reText("h2",0,"I am the second h2 element");
// // 1 つ目の <h3> 要素の innerHTML を "I am a <i>fancy</i> h3 element" に変更する。
// document.getElementsByTagName("h3")[0].innerHTML = "I am a <i>fancy</i> h3 element"




// =======================================================================
//基礎演習
console.log("");
console.log("＝ここから、基礎演習＝");

document.getElementsByClassName("title").style.fodocument.getElementsByClassName("title")[0].style.fontSize = "50px"

const arr = document.getElementsByClassName("title");

function colorCheng(num){
  document.getElementsByClassName("title")[num].style.backgroundColor = "blue";
}

for (const num in arr){
  colorCheng(num);
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




