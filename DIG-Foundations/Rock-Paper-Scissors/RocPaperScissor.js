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
  "normal": "data\\normal.gif",
  "roc": "data\\roc.png",
  "paper": "data\\paper.png",
  "scissors": "data\\scissors.png",
  "draw": "data\\draw.png",
  "boxWin": "data\\boxWin.gif",
  "boxLose": "data\\boxLose.gif",
};


/**
 *  ユーザーとコンピューターの判定を行い、イメージの変更をする
 * @param {number} usrNum - ユーザーが選択した
 * @returns {number[1-3]]} ランダムで１－３の数字を返す
 */
function mainRun(usrNum) {
  // 結果表に結果が５回は入っていたら総合評価して終了

  // じゃんけんの実施
  winner = "";
  const cpuNum = cpuAns();
  if (cpuNum === 1) {
    chengImage("roc");
  } else if (cpuNum === 2) {
    chengImage("scissors");
  } if (cpuNum === 3) {
    chengImage("paper");
  }

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


  // 結果によるアクション
  console.log(usrNum, cpuNum, winner)
  arraySetAns(winner);

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
 *  じゃんけんで、コンピューターの結果を返す関数
 * @returns {anyNmber[1-3]} ランダムで１－３の数字を返す
 */
function cpuAns() {
  // console.log(Math.floor(Math.random() * 3) + 1);
  return Math.floor(Math.random() * 3) + 1
}

let btn1 = document.getElementById("btn1"); //Roc
btn1.addEventListener('click', function () {
  sleep(1000);
  mainRun(1);
}, false);

let btn2 = document.getElementById("btn2"); //Scissors
btn2.addEventListener('click', function () {
  sleep(1000);
  mainRun(2);
}, false);

let btn3 = document.getElementById("btn3"); //Paper
btn3.addEventListener('click', function () {
  sleep(1000);
  mainRun(3);
}, false);

let btnRefresh = document.getElementById("btnRefresh");
btnRefresh.addEventListener('click', function () {
  window.location.reload();
}, false);

