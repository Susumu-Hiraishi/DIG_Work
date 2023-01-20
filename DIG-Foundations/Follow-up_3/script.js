'use strict'
// Please don't delete the 'use strict' line above

// test({ a: "A", b: "B" }, { b: "B", a: "A" });

console.log("=1=");

// promptとalertを利用して、ログインを要求するコードを書いてください。
// **promptとalertについてはグループでMDNを調べながら進めてもらっています。

// 1.もし訪問者が サイトを訪問するとパスワードを要求されます。
// 2.訪問者がパスワード(Tamaroh) を入力すると"welcome"と表示されます。
// 3.訪問者がパスワードを間違えると、もう一度パスワードを要求します。
// 4.訪問者がキャンセルをすると、"cancelled"と表示し、もう一度パスワードを要求します。


// passwordを自由に決めたい！
function setPW() {
  let myPW= prompt("パスワードを入力してください。")
  let cnt = 0;

  function inputPassword() {
    if (cnt < 3) {
      console.log(cnt);
      return;
    }
    
    let sign = prompt("What's your password?");
    // let password = "Tamaroh"
    // 2.訪問者がパスワードを入力すると"welcome"と表示されます。
    if (sign === myPW) {
      alert("welcome");
    }
    // 3.訪問者がパスワードを間違えると、もう一度パスワードを要求します。
    else {
      cnt += 1;
      alert("３回間違えました")
      inputPassword();
      }
    }
    return inputPassword();
  }

setPW();

