'use strict'
// Please don't delete the 'use strict' line above

// test({ a: "A", b: "B" }, { b: "B", a: "A" });

//7  map という名前の関数を宣言してください。
//  この関数は引数としてコレクション(オブジェクトまたは配列)とコールバック関数を受け取り、
//  コレクション内の各要素に対してコールバック関数を実行した結果を要素に持つ新しい配列を返します。
//  コールバック関数は、コレクション内のすべての要素に適用されます。 
//  :warning: 注意：ネイティブメソッド (.forEach, .map) は使用しないでください。
// console.log("---課題7---");

// // ここにコードを書きましょう

// // 私が書いたコード ==================
// const map = function(x) {
//   const result = [];
//   console.log(x);
//   return x;
// }
// //====================================

// function addOne(num) {
//   return num + 1;
// }


// map([1, 2, 3], addOne); // [2, 3, 4]
// map({ a: 1, b: 2, c: 3 }, addOne); // [2, 3, 4]

// // console.log(map([1, 2, 3], addOne));
// // console.log(map({ a: 1, b: 2, c: 3 }, addOne));

// test(map([1, 2, 3], addOne), [2, 3, 4]);
// test(map({ a: 1, b: 2, c: 3 }, addOne), [2, 3, 4]);


//11  compose という名前の関数を宣言してください。
//    この関数は引数として funcA と funcB という 2 つの関数を受け取り、新しい関数を返します。
//    リターンされた関数は引数 x を受け取ります。リターンされた関数を実行すると、
//    funcA の実行結果を funcB の引数として渡した結果を返します。
// console.log("---課題11---");
// // ここにコードを書きましょう
// //私が書いたコード=====================

// const compose = function(funcA,funcB){
//   const x = funcA;
//   return x || funcB + funcA;
// };
// //====================================

// function multiplyTwo(x) {
//   return x * 2;
// }

// function addTen(x) {
//   return x + 10;
// }

// const baz = compose(multiplyTwo, addTen);
// baz(5); // 20
// baz(100); // 210

// console.log(baz(5));
// console.log(baz(100));

//10  each という名前の関数を宣言してください。
//    この関数は引数としてコレクション(オブジェクトまたは配列)とコールバック関数を受け取り、
//    コレクション内の各要素に対してコールバック関数を一度だけ実行してください。この関数は何もリターンしません。
//    :warning: 注意：ネイティブメソッド (.forEach, .map) は使用しないでください。
console.log("---課題10---");
// ここにコードを書きましょう
//私が書いたコード=====================
function each(objArray,collback) {
  (function() {
    if(Array.isArray(objArray) === true) {
      console.log(each)
      collback(each);
    }
  }),objArray
  // console.log(objArray);
};

//====================================
each({ a: 1, b: 2, c: 3 }, console.log);
each([4, 5, 6], console.log);

test(each({ a: 1, b: 2, c: 3 }, console.log));
test(each([4, 5, 6], console.log));

// 上記を実行すると下記を表示するはずです
// 1
// 2
// 3
// 4
// 5
// 6
