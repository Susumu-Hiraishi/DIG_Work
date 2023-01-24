'use strict';
// please do not delete the 'use strict' line above

document.getElementById('color-button').addEventListener('click', changeColor)

//bodyのバックグランドカラーを変えるための初期設定
let rColor = 0, gColor = 0, bColor = 0;
let rgbColor = 'rgb(255,255,255)';
document.body.style.backgroundColor = rgbColor;

let gudeF = false;
let timerId = "";



/**
 * Changcolor を押された時の処理
*/
function changeColor() {
  console.log('Button clicked!'); // feel free to change/delete this line

  if (gudeF === false) {
    gudeF = true;
    console.log("==colorChg now ==");
    buttonElement.innerText = "Change Now";
    buttonElement.style.backgroundColor = "yellow";
    timerId = setInterval(() => { colorRun() }, 1000);
  } else {
    gudeF = false;
    setTimeout(() => clearInterval(timerId), 1000);
    console.log("==colorChg Stop ==");
    buttonElement.innerText = "Change Stop";
    buttonElement.style.backgroundColor = "white";
  }
}

/**
 * Changcolor の　実行処理
*/
function colorRun() {
  colorChg();
  document.body.style.backgroundColor = rgbColor;
}

/**
 * @returns {string<rgb(number,number,number)>} 　RGBカラーのランダム結果を返す関数
*/
function colorChg() {
  rColor = Math.floor(Math.random() * (255 + 1 - 0));
  gColor = Math.floor(Math.random() * (255 + 1 - 0));
  bColor = Math.floor(Math.random() * (255 + 1 - 0));

  console.log(`R= ${rColor} : G= ${gColor} : B= ${bColor} : `);
  rgbColor = `rgb(${rColor}, ${gColor}, ${bColor})`;
}

//追加処理
//<div>タグの追加
let bodyElement1 = document.getElementsByTagName('body');
let newElement1 = document.createElement('div');
let buttonElement = document.getElementById('color-button');
bodyElement1[0].insertBefore(newElement1, buttonElement);

//ボタンをdivタグの中に移動
let divElement = document.getElementsByTagName('div');
divElement[0].appendChild(buttonElement);

//<div>タグの中に<p>タグを追加
let child1 = document.createElement('p');
child1.append(document.createTextNode('FND-12 Yay!'));
divElement[0].appendChild(child1);
child1.style.backgroundColor = 'green';
child1.style.color = 'yellow';
child1.style.textAlign = 'center';
child1.style.fontSize = '50px';

//イメージを追加
const ewElement2 = document.createElement('img');
ewElement2.append(document.cre);
bodyElement1[0].appendChild(ewElement2);
ewElement2.id = 'img'
ewElement2.src = 'https://user-images.githubusercontent.com/115196019/209415862-27b92d88-43c7-4267-8d24-a36363e14cf1.gif'
