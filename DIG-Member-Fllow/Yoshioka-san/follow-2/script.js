'use strict'
// Please don't delete the 'use strict' line above

// test({ a: "A", b: "B" }, { b: "B", a: "A" });

//2  findKeys という名前の関数を宣言してください。
//   この関数は引数としてオブジェクトと "target" (文字列または数値) を受け取り、
//   オブジェクト中、ターゲットにマッチする値を持つ全てのキーを含む新しい配列を返します。
// console.log("---課題2---");
// // ここにコードを書きましょう
// function findKeys(obj, target) {
//   //からの配列を用意
//   const answer = [];
//   //objの中をループする
//   for (const key in obj) {
//     //objのkey-valを見に行く、
//     //valとkeyが一致したら、
//     console.log("key=", key, " : target=", target);
//     if (obj[key] === target) {
//       //配列に絞り込む
//       answer.push(key);
//     }
//   }
//   return answer;
// }
// test(findKeys({ a: 1, b: 2, c: 6, d: 4, e: 2 }, 2), ["b", "e"]);
// test(findKeys({ 1: "h", b: "el", c: "hello", d: "hello", e: "o" }, "hello"), ["c", "d"]);


/*
  基礎3
  buildObject という名前の関数を宣言してください。
  この関数は引数として 2 つの配列を受け取り、新しいオブジェクトを返します。
  リターンするオブジェクトは、第一引数の配列の要素をオブジェクトのキーとして設定し、
  第二引数の配列の要素をオブジェクトの値として設定します。
  */

//吉岡さん
// function buildObject(array1, array2) {
//   const result = {};
//   for (let i = 0; i < array1.lenght; i++) {
//     //ここからどうしたらいいかわからない。。
//   }
// }
/*
for of loop -> 配列を対象としたループ
for in loop -> オブジェクトを対象としたループ
  for の処理回数を決められない
while loop 
for loop (iが一つずつインクリメントされるループ)
  for の処理回数を決められる
*/
//
// let obj = {};
// //key = a, value = 1 -> obj に入れたい { a:1 }
// obj["a"] = 1;
// console.log(obj);

//配列の要素にアクセスしたい時はインデックスを使う

//3  buildObject という名前の関数を宣言してください。この関数は引数として 2 つの配列を受け取り、
//   新しいオブジェクトを返します。リターンするオブジェクトは、
//   第一引数の配列の要素をオブジェクトのキーとして設定し、第二引数の配列の要素をオブジェクトの値として設定します。
// console.log("---課題3---");
// // ここにコードを書きましょう
// function buildObject(array1, array2) {
//   const result = {};
//   for (let i = 0; i < array1.length; i++) {
//     // console.log(array1[i]);
//     // console.log(array1[i],array2[i]);
//     result[array1[i]] = array2[i];   //追加しました
//   }
//   console.log(result);   //追加しました
//   return result;
// }
// test(buildObject(["a", "b", "c"], [1, 2, 3]), { "a": 1, "b": 2, "c": 3 });
// test(buildObject(["cat", "dog", "duck"], ["meow", "woof", "quack"]), { "cat": "meow", "dog": "woof", "duck": "quack" });
// test(buildObject(["cat", "dog", "duck"], [null, 0, NaN]), { "cat": null, "dog": 0, "duck": NaN });
// test(buildObject(["abc", "def", "ghi"], [[0, 1, 2], [3, 4, 5], [6, 7, 8]]), { "abc": [0, 1, 2], "def": [3, 4, 5], "ghi": [6, 7, 8] });

// function textChg(){
//   document.body.getElementsByTagName("h1")[0].innerText = "変えたぜ！"
// }

// setTimeout(() => {textChg()},3000);



function map(array) {
  // console.log(typeof array);  //object
  // console.log(Array.isArray(array));  //true
  const result = [];
  if (Array.isArray(array) === true) {
    for (let i = 0; i < array.length; i++) {
      result.push(addOne(array[i]));
    }
  } else if (Array.isArray(array) === false) { //←ここのelseの下と最後の｛の下に赤の波線が入ります。
    for (const key in array) {
      result.push(addOne(array[key]));
    }
  }
  return result;
}
//====================================

function addOne(num) {
  return num + 1;
}

map([1, 2, 3], addOne); // [2, 3, 4]
map({ a: 1, b: 2, c: 3 }, addOne); // [2, 3, 4]

console.log(map([1, 2, 3], addOne));
console.log(map({ a: 1, b: 2, c: 3 }, addOne));

test(map([1, 2, 3], addOne), [2, 3, 4]);
test(map({ a: 1, b: 2, c: 3 }, addOne), [2, 3, 4]);