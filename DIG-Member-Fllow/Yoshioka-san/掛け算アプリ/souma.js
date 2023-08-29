'use strict'
// 1行目に記載している 'use strict' は削除しないでください

// //ワニの数入力するテキストボックスを取得(文字列を結合する)=================================
// let input = document.getElementById("number");
// let number = input.value;
// console.log(typeof number);
// console.log(typeof parseInt(input.value));
// let num = parseInt(input.value);
// console.log(typeof num);

// let element = document.getElementById("number");  //テキストの値ちゃっととれるか確認する
// console.log(element.value); 

// function gators(){
//   let result = "";
//   console.log(result);
//   // let blueBoxGators = document.getElementsByClassName("underbox").innerText; //青色ボックス
//   for(let i = 1; i <= input.value; i++){
//     result += "🐳";
//   }
// document.getElementById("gator").innerText = result;  
// }

// const gator = document.getElementById("target");
// gator.addEventListener("click", gators);
// //====================================================================================================
let input = document.getElementById("number");
let number = input.value;
console.log(typeof number);
console.log(typeof parseInt(input.value));
let num = parseInt(input.value);
console.log(typeof num);

let element = document.getElementById("number");  //テキストの値ちゃっととれるか確認する
console.log(element.value); 

// function GetRandomNumber1() {
//   const randnum1 = Math.floor( Math.random() * 10 );
//   document.getElementById("sample1").innerHTML = randnum1;
//   console.log(randnum1);
// }

// function GetRandomNumber2() {
//   const randnum2 = Math.floor( Math.random() * 10 );
//   document.getElementById("sample2").innerHTML = randnum2;
//   console.log(randnum2);
// }

function GetRandomNumber() {
  const randnum1 = Math.floor( Math.random() * 10 );
  const randnum2 = Math.floor( Math.random() * 10 );
  document.getElementById("sample1").innerHTML = randnum1;
  console.log(randnum1);
  document.getElementById("sample2").innerHTML = randnum2;
  console.log(randnum2);
  const a = randnum1 * randnum2;
  console.log(a);
  document.getElementById("sample3").innerHTML = a;
}

// function answer(){
//   let result = "";
//   console.log(result);
//   for(let i = 1; i <= input.value; i++){
//     result += "🐳";

//   }

  function answer(){
    let result = "";
    console.log(result);
    if(document.getElementById("sample3").innerHTML === input.value) {
      result = "　👍ナイス～！！";
    } else {
      result = "　💩どんまい！！";
    // }
    }


document.getElementById("ans").innerText = result;  
}

const ans = document.getElementById("target");
ans.addEventListener("click", answer);


// const answer =  randnum2
// document.getElementById("ans").innerText = answer;




// function answer() {
//   const ans1 =  
//   // console.log(randnum1 * randnum2);
// document.getElementById("ans").innerText = ans1;

// }

// const ans = document.getElementById("target");
// ans.addEventListener("click", answer);


// const rand = Math.floor(Math.random() * 11);
// console.log( rand );