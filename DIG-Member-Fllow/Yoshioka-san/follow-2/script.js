'use strict'
// Please don't delete the 'use strict' line above

// test({ a: "A", b: "B" }, { b: "B", a: "A" });

//2  findKeys という名前の関数を宣言してください。
//   この関数は引数としてオブジェクトと "target" (文字列または数値) を受け取り、
//   オブジェクト中、ターゲットにマッチする値を持つ全てのキーを含む新しい配列を返します。
console.log("---課題2---");
// ここにコードを書きましょう
function findKeys(obj,target) {
  //からの配列を用意
  const answer =[];
  //objの中をループする
  for(const key in obj) {
    // console.log(obj[key]);
    // console.log(key,"key");
    // console.log(obj,"obj");
    //objのkey-valを見に行く、
    //valとkeyが一致したら、
    console.log("key=",key," : target=",target);
    if(key === target) {
    //配列に絞り込む
      answer.push(key);
    }
  }
  return answer;
}
test(findKeys({ a: 1, b: 2, c: 6, d: 4, e: 2 }, 2),["b", "e"]);
test(findKeys({ 1: "h", b: "el", c: "hello", d: "hello", e: "o" }, "hello"),["c", "d"]);