'use strict'
// 1行目に記載している 'use strict' は削除しないでください
// ファイル全体で使用する TDD 用の変数を宣言する
//  Test-driven Development[TDD]
let actual;     //実際値
let expected;   //期待値

// ここから配列用テスト用関数
function test(actual,expected){
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("Test PASSED!");
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

//ペア練習
//1
console.log("");
console.log("＝ここから、ペア練習＝");
function addOne(num) {
  return num + 1;
}

test(addOne(5), 6);
test(addOne(50), 51);

//2
console.log("2");
function doSomething(value, action) {
  return action(value);
}

function greeting(name) {
  return `Hello ${name}`;
}

// test(doSomething("Alex", greeting()), "Hello Alex"); // A 
//引数２のgreeting()が先に実行され、引数がないのでエラーになする
test(doSomething("Alex", greeting), "Hello Alex"); // B
//　doSomething実行時、actionで引き継いだgreeting関数に、引数１を入れて実行した結果が返る。

//3
let x = "Outside x";
function bar() {
  let x = "Inside x"; //ここで　クローズドでｘが宣言されているが使われない
  return "This is bar!";
}

bar();    // 結果："This is bar!"が表示される。
console.log(x); //オープンで宣言されているｘ　：　"Outside x"が表示される。

//4 プライベート変数とは何ですか。
//>>  クローズドされた中で使われる変数。
 

// =======================================================================
//基礎演習
console.log("");
console.log("＝ここから、基礎演習＝");
console.log("");
console.log("基礎１");
function createPasswordProtectedAccount(userChosenPassword) {
  const savedPassword = userChosenPassword;

  function checkPassword(passwordEntered) {
    if (savedPassword === passwordEntered) {
      console.log("正しいパスワードです。アクセスを許可します。");
    } else {
      console.log("パスワードが間違っています。アクセスできません。");
    }
  }

  return checkPassword;
}

const account = createPasswordProtectedAccount("Test1234"); // 引数に初期パスワードを入れる。
account("8skwob"); // 引数に間違ったパスワードを入れる => "パスワードが間違っています。アクセスできません。"
account("Test1234"); // 引数に正しいパスワードを入れる => "正しいパスワードです。アクセスを許可します。"


console.log("");
console.log("基礎２");
function createDonationAccount() {
  let donations = 0;

  function addDonation() {
    console.log(donations);
    donations += 1;
  }
  console.log("寄付受付口座が作成されました。");
  return addDonation;
}
let cnt = createDonationAccount();
cnt();
cnt();
cnt();


console.log("");
console.log("基礎３");
  /**
  * @param {number} x
  * @returns {(y: number) => number} 引数 y をとり、y に x を足した値を返す関数
  */
  // コードを書き始めましょう
  function add(y) {
  // ここにコードを書きましょう
    const x= y
    console.log("SC1=" ,x,y)

    function addCalc(y){
      console.log("SC2=" ,x,y,x + y)
      return y + x
    } 
    
    return addCalc
}

  const addFive = add(5);
  test(addFive(1), 6);


console.log("");
console.log("基礎４");
// let counter = 0;    // オープンスペースに書いてあると追加される
function makeCounter() {
  let counter = 0;    //スコープ内にあると、ここでリセットされる。
  return function () {
    counter += 1;
    return counter;
  };
}

const counterA = makeCounter();
test(counterA(), 1);
test(counterA(), 2);

const counterB = makeCounter(); // 新しいカウンターを作りたい。
test(counterB(), 1);
test(counterB(), 2);


//ここから　中級演習
console.log("")
console.log("ここから中級演習")
console.log("");
console.log("中級１");
/**
* @param {number} 年齢
* @returns {() => boolean} 実行されるたびに age に 1 を足し、 age が 13 以上かどうかを返す関数
*/
// ここにコードを書きましょう
function createWebsiteAccount(age){
  let ageCount = age;
  // console.log(age,ageCount);
  function checkAge(){
    if (age > 13){
      // console.log(age,"adult");
      return true
    }
    ageCount += 1;
    // console.log(age,ageCount);
    if (ageCount >= 13){
      return true;
    }else{
      return false;
    }  
  }

  return checkAge;

}

const childAccount = createWebsiteAccount(10);
test(childAccount(), false); // => false
test(childAccount(), false); // => false
test(childAccount(), true); // => true (今、子供は 13 歳です！)

const adultAccount = createWebsiteAccount(33);
test(adultAccount(), true); // => true (何回呼び出すかに関わらず、いつも true を返す)
test(adultAccount(), true); // => true (何回呼び出すかに関わらず、いつも true を返す)
test(adultAccount(), true); // => true (何回呼び出すかに関わらず、いつも true を返す)


console.log("");
console.log("中級２");
/**
 * @param {number} x
 * @returns {(y: number) => number} 引数として y をとり、x に y を掛け合わせた値を返す関数
 */
 // ここにコードを書きましょう
function product(y){
  const x = y
  console.log("SC1=",x,y);

  function calcMulti(y){
    console.log("SC2=",x,y,x*y);
    return x * y;
  }

  return calcMulti;
}


 const product3 = product(3);
 test(product3(4), 12);
 test(product(4)(5), 20);
 

console.log("");
console.log("中級３");

/**
 * @param {number} x
 * @returns {(y: number) => number} 引数として y をとり、x から y を引いた値を返す関数
 */
 // ここにコードを書きましょう
function subtract(y){
  let x = y;
  console.log("SC1=",x,y);

  function calcSub(y){
    console.log("SC2=",x,y,x-y);
    return x - y;
  }

  return calcSub;
}


const subtract5 = subtract(5);

test(subtract5(4), 1);
test(subtract(10)(8), 2);





//ここから　ナイトメア
console.log("")
console.log("ここからナイトメア")





