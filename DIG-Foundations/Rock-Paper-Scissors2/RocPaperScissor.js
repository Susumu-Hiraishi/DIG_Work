'use strict'
// 1行目に記載している 'use strict' は削除しないでください
// このコードはモダンな方法で動作します。
// ジャンけんＰｏｎ　！！　MainProgram　

//ウィンドウのサイズを決める
window.resizeTo(1000, 1000);

let userSelect;
let resultArray = [];
let winner;

let imgObj = {
  "normal": "https://user-images.githubusercontent.com/115196019/206836136-4c996eec-7530-45fc-a7e9-a89eddb39182.gif",
  "roc": "https://user-images.githubusercontent.com/115196019/206836167-28d67f1b-06e3-434f-9507-2d674dc9749a.png",
  "paper": "https://user-images.githubusercontent.com/115196019/206836205-7422cab8-4c93-4a0b-8ed5-2f444066fba0.png",
  "scissors": "https://user-images.githubusercontent.com/115196019/206836219-b6955c09-3117-4131-9988-9fb78fa39488.png",
  "draw": "https://user-images.githubusercontent.com/115196019/206836233-6bb86bad-a80b-4505-9fe2-2d1e46f6038b.png",
  "boxWin": "https://user-images.githubusercontent.com/115196019/206836253-01a4b9e6-1d71-41c6-b0f3-d730c16ee3ff.gif",
  "boxLose": "https://user-images.githubusercontent.com/115196019/206836263-57e1de43-1c4d-4f69-b5bf-4ab6bbf86e60.gif",
};


/**
 *ユーザーとコンピューターの判定を行い、イメージの変更をする
 * @param {number} usrNum - ユーザーが選択した
 * @returns {number[1-3]]} ランダムで１－３の数字を返す
 */
function mainRun(usrNum) {
  // 結果表に結果が５回は入っていたら総合評価して終了
  // コンピュータの手を決める
  winner = "";
  const cpuNum = cpuAns();

  //決めた手の画像を変更
  if (cpuNum === 1) {
    chengImage("roc");
    
  } else if (cpuNum === 2) {
    chengImage("scissors");
    
  } if (cpuNum === 3) {
    chengImage("paper");
    
  }
  
  //結果の判定
  if (usrNum === 1 && cpuNum === 2) {
    winner = "you";
  } else if (usrNum === 1 && cpuNum === 3) {
    winner = "cpu";
  } else if (usrNum === 2 && cpuNum === 1) {
    winner = "cpu";
  } else if (usrNum === 2 && cpuNum === 3) {
    winner = "you";
  } else if (usrNum === 3 && cpuNum === 1) {
    winner = "you";
  } else if (usrNum === 3 && cpuNum === 2) {
    winner = "cpu";
  } else {
    winner = "draw";
  }


  // 各回の結果保存とアクション
  console.log(usrNum, cpuNum, winner)
  arraySetAns(winner);

  //５回実施時の結果表示
  if (resultArray.length === 5) {
    resultView()
    return
  }
}

/**
 * 指定した秒数（ms）止まる関数
 * @param {number} num - 待ち時間（ms）
 * @returns ---
 */
function sleep(num) {
  const d1 = new Date();
  while (true) {
    const d2 = new Date();
    if (d2 - d1 > num) {
      break;
    }
  }
}

/**
 * ｉｍｇ部にイメージをセットする関数
 * @param {img} imgName - シュチュエーション名
 * @returns イメージのの書き換え
 */
function chengImage(imgName) {
  const imgData = imgObj[imgName];
  // window.alert(imgData)
  document.getElementById("img").src = imgData;
}


/**
 * 結果判定する関数
 * @returns アラートの表示
 */
function resultView() {
  if (resultArray.length === 5) {
    let count = 0;
    resultArray.forEach(element => {
      if (element === "○") {
        count++
      }
    });

    if (count >= 3) {
      // window.alert("あなた勝ち");
      chengImage("boxWin");
    } else {
      // window.alert("コンピューターの勝ち");
      chengImage("boxLose");
    }

    return
  }

}

/**
 * 結果表にデータをセットする関数
 * @param {number} result - 判定結果
 * @returns 表の書き換え
 */
function arraySetAns(result) {
  if (result === "draw") {    //引き分けは、もう一回！
    chengImage("draw");
    return;
  }

  let resultWord = "";
  if (result === "cpu") {
    resultWord = "✕";
  } else {
    resultWord = "○";
  }
  resultArray.push(resultWord);

  const serchword = "kekka" + resultArray.length
  document.getElementById(serchword).textContent = resultWord;

  // window.alert(resultWord)

}


/**
 * じゃんけんで、コンピューターの結果を返す関数
 * @returns {anyNmber[1-3]} ランダムで１－３の数字を返す
 */
function cpuAns() {
  // console.log(Math.floor(Math.random() * 3) + 1);
  return Math.floor(Math.random() * 3) + 1
}

//ぐーを押したときの処理
let btn1 = document.getElementById("btn1"); //Roc
btn1.addEventListener('click', function () {
  sleep(1000);
  mainRun(1);

}, false);

//ちょきを押したときの処理
let btn2 = document.getElementById("btn2"); //Scissors
btn2.addEventListener('click', function () {
  sleep(1000);
  mainRun(2);

}, false);

//ぱーを押したときの処理
let btn3 = document.getElementById("btn3"); //Paper
btn3.addEventListener('click', function () {
  sleep(1000);
  mainRun(3);

}, false);

//スタートを押したときの処理
let btnRefresh = document.getElementById("btnRefresh");
btnRefresh.addEventListener('click', function () {
  window.location.reload();
}, false);


