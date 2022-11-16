'use strict'
// 1行目に記載している 'use strict' は削除しないでください

console.log("=== ここから、script.js ===")

let upperBound = 6
function guessMyNumber(n) {
  if (n > upperBound) {
    return "Please try a number between 0 and " + upperBound + ".";
  } else if (n === randomNumber(upperBound)) {
    return "You guessed my number!";
  }
  return "違います！正しい数は: " + randomNumber(upperBound) + "でした。";
}

function randomNumber(n) {
  return Math.floor(Math.random() * (n + 1));
}

// 上限を 6 に変更するにはどのように変更すれば良いですか？
// ＝＞　最初の６までの数字判定と、6までにしてね表示の６と、ランダマイズ変数の６
// 変更は何箇所、必要ですか？
// ＝＞　上記の３か所

// 上限を入れる変数 upperBound を宣言し、5 という数字の代わりにその変数を引数として渡すように修正してください。

console.log(guessMyNumber(3));