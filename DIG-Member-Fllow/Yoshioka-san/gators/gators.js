'use strict'
// 1行目に記載している 'use strict' は削除しないでください

//ワニの数入力するテキストボックス
// const input = document.getElementById("number");
// console.log(input);

//ワニ放出のボタン
const gator = document.getElementById("target");
console.log(gator);
gator.addEventListener("click",gators);


//ワニが表示される青色ボックス
const buleBox = document.getElementsByClassName("underbox") //DOM要素を青色ボックスに追加する
// console.log(buleBox);



// //.addEventListenerを使う
// gator.addEventListener("click", target); //追加してみた

//クリックしたらワニがでるとか数字を入れずにやってみる。
//先にワニを表示させるところから始める。



function gators(){
  // const result = {};  //青色ボックスは何だろう？　オブジェクト
  // if(typeof object === "number");  //テキストボックスの数字を見に行く
  console.log("gators")
  // return 
  // document.getElementById("gatorBox").textContent = "🐊";
  let input = document.getElementById("number");
  let number = input.value;
  
  console.log(number);

  // let result = input + number;
  // console.log(result);

let result = "";
for (let i=1; i <=number ; i++){
  result += "🐊";
}

console.log(result);
// document.getElementsByClassName("underbox").innerText = result;
document.getElementById("gatorBox").innerText = result;
}
  
//ワニの数入力するテキストボックスを取得(文字列を結合する)=================================

// ​let result = input + number;


// ​console.log(result); 


  //ワニ放出！ボタンをクリック
  //テキストボックスの数字を見に行く
  //テキストボックスの数字の数と同じ数の文字列を取る
  //青色ボックスにアクセス
  //取った文字列を青色ボックスに表示する
  
  

//   document.getElementsByTagName("target");
// // }

// const target = document.getElementById("gators");
// target.addEventListener("click", gators);