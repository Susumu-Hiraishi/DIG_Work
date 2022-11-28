'use strict'
// 1行目に記載している 'use strict' は削除しないでください
// ファイル全体で使用する TDD 用の変数を宣言する
//  Test-driven Development[TDD]
let actual;     //実際値
let expected;   //期待値

// ここから配列用テスト用関数
function test(actual,expected){
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("Yay! Test PASSED!");
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

/**
 * @param {Array<number>} numArray - 数値型の要素を持つ配列
 * @returns {Array<number>} 与えられた配列の中の奇数だけが入った配列
 */
function getOddNumbers(numArray) {
// ここにコードを書きましょう
  const resultArray = [];  

  for (const num of numArray){
    if (num % 2 !== 0){
      resultArray.push(num);
    }
    console.log(num,resultArray);
  }
  return resultArray;
}

actual = getOddNumbers([1, 2, 3, 4, 5, 6, 7, 8]);
expected = [1, 3, 5, 7];

// 現時点では、配列の比較には JSON.stringify を使う必要があると覚えておいてください。
if (JSON.stringify(actual) === JSON.stringify(expected)) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

  // テストを書きましょう。
test(getOddNumbers([-1, 0, 1, 2, 3, 4, 5, 6]),[-1, 1, 3, 5])




// =======================================================================
//ペア演習
console.log("");
console.log("＝ここから、ペア演習＝");

console.log("=1=")
const place = "Zoom";
const lesson = {
  instructors: ["Eriko", "Misa", "Tamaroh"],
  coding: true,
  place: "Zoom",
};
console.log(lesson["place"]); // Zoom
console.log(lesson.place); // Zoom
console.log(lesson[place]); // undefined　変数place=”Zoom"が入っている
console.log(lesson["cod" + "ing"]); // 文字列として結合されるので、coding===true
console.log(lesson[2]); // オブジェクトに順番は無いので、undefined
console.log(lesson.instructors[2]); // instructors配列の2番目=Tamaroh
console.log(lesson.length); // オブジェクトに長さはないので、undefined
console.log(lesson.instructors.length); // instructors配列なので３
console.log(typeof lesson.instructors); // instructors配列なのでobject

console.log("=2=")
const object = {
  a: "hello",
  b: "bye",
  c: 1000,
};

console.log(object["a"]); // hello
console.log(object.b); // bye
object["b"] = "goodbye";
console.log(object["b"]); // goodbye

// これは少しトリッキーです 😉
let a = "a"
console.log(object[a]); // エラー　→　変数　"a"　＝　hello

console.log("=3=")
const pokemons = [
  {
    Number: "001",
    Name: "Bulbasaur",
    Generation: "Generation I",
    About:
      "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.",
    Types: ["Grass", "Poison"],
  },
  {
    Number: "025",
    Name: "Pikachu",
    Generation: "Generation I",
    About:
      "Whenever Pikachu comes across something new, it blasts it with a jolt of electricity. If you come across a blackened berry, it's evidence that this Pokémon mistook the intensity of its charge.",
    Types: ["Electric"],
  },
  {
    Number: "019",
    Name: "Rattata",
    Generation: "Generation I",
    About:
      "Rattata is cautious in the extreme. Even while it is asleep, it constantly listens by moving its ears around. It is not picky about where it lives—it will make its nest anywhere.",
    Types: ["Normal"],
  },
];

console.log(pokemons[0]); // 配列０の中身全部
console.log(pokemons[1].Name); // Pikachu
console.log(pokemons[0]["Name"]); // Bulbasaur
console.log(pokemons[2]["About"]); // エラー　key-Valueになっていない。
console.log(pokemons[2].Types[0]); // Normal




//基礎演習
console.log("");
console.log("＝ここから、基礎演習＝");
console.log("=1=");
// ここにコードを書きましょう
const myInfo = {
  name: "SAM",
  age: 49,
  location: "Toyota City",
  isCoder: true,
}
// この演習では TDD スタイルのテストは必要ありません。ここでは console.log を使用してください。
console.log(myInfo["isCoder"]); // => "true"

console.log("=2=");
// ここにコードを書きましょう。
const morseCode = {
  t: "-",
  a: ".-",
  r: ".-.",
}

test(morseCode["t"], "-");
test(morseCode["a"], ".-");
test(morseCode["r"], ".-.");

console.log("=3=");
/**
 * @param {string} convWords - モールス信号に変換する文字
 * @returns {string} 与えられた文字に対応するモールス信号
 */
function morseCodeArt(convWords) {
  // ここにコードを書きましょう.
  let resurt = "";
  let cnt = 0; 
  const morseCode = {
    t: "-",
    a: ".-",
    r: ".-.",
  };
  
  for (const word of convWords){
      cnt += 1;
      // console.log(cnt,morseCode[word]);
      if (cnt === convWords.length){
        resurt += morseCode[word];
      }else{
        resurt += morseCode[word] + " ";
      }
  }
  // console.log(resurt);
  return resurt;

}


test(morseCodeArt("a"), ".-");
test(morseCodeArt("r"), ".-.");
test(morseCodeArt("t"), "-");
test(morseCodeArt("art"), ".- .-. -");

console.log("=4=");
/**
 * @param {object} objIn - オブジェクト
 * @param {Array<string>} valArray - 文字列の入った配列
 * @returns {object} 与えられた配列の要素をキーにして、それに対応する値は第1引数のオブジェクトから抽出して作られた新しいオブジェクト
 */
// ここにコードを書きましょう.
function select(objIn,valArray){
  const baseObj = objIn;
  const result = {};

  for (const word of valArray){
    result[word] = baseObj[word];
    // console.log(word,result[word]);
  }

  // console.log(result)
  return result;

}

test(select({ a: 1, b: 2, c: 3 }, ["a"]), { a: 1 });
test(select({ a: 1, b: 2, c: 3 }, ["a", "c"]), { a: 1, c: 3 });
test(select({ a: 1, b: 2, c: 3 }, ["a", "b", "c"]), { a: 1, b: 2, c: 3 });
test(select({ a: 1, b: 2, c: 3 }, []), {});

console.log("=5=");
/**
 * @param {string} words
 * @returns {{ [character: string]: number }} 与えられた文字列の中の各アルファベットをキーに、その登場回数を値にしたオブジェクト
 */
// ここにコードを書きましょう.
function countCharacters(words){
  const wordCount = {}
  let h = 0, e = 0, l = 0, o = 0, blank = 0;

  for (const word of words){
    if (word === "h"){
      wordCount[word] = h += 1;
    }else if (word === "e"){
      wordCount[word] = e += 1;
    }else if (word === "l"){
      wordCount[word] = l += 1;
    }else if (word === "o"){
      wordCount[word] = o += 1;
    }else if (word === " "){
      wordCount[word] = blank += 1;
    }  
  }

  // console.log(wordCount)
  return wordCount;
}


test(countCharacters("hello"), { h: 1, e: 1, l: 2, o: 1 });
test(countCharacters("hello hello"), { h: 2, e: 2, l: 4, o: 2, " ": 1 });


//ここから　中級演習
console.log("");
console.log("ここから中級演習");
/**
  * @param {string} words
  * @returns {{ [word: string]: number }}
  *  与えられた文字列の中の各単語をキーとして持つオブジェクト。
  * 各キーに対応する値は、それぞれの単語が文字列の中で使われている回数。
  */
  // ここにコードを書きましょう.
function countWords(words){
  const splWord = words.split(" ");
  let helloCount = 0, HelloCount = 0;

  const result = {};

  for (const  checkSpl of splWord){
    // console.log(checkSpl);
    if (checkSpl === "hello"){
      result[checkSpl] = helloCount += 1;
    }else if (checkSpl === "Hello"){
      result[checkSpl] = HelloCount += 1;
    }
  }

  // console.log(result)
  return result;
  
}


test(countWords("hello hello"), { hello: 2 });
test(countWords("hello Hello"), { hello: 1, Hello: 1 });
test(countWords(""), {});

//ここから　ポケモンタイム！！！
console.log("");
console.log("ここからポケモンタイム！！！");
console.log("ポケモン１");
const pokemons1 = [
  {
    Number: "001",
    Name: "Bulbasaur",
    Generation: "Generation I",
    About:
      "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.",
    Types: ["Grass", "Poison"],
  },
  {
    Number: "025",
    Name: "Pikachu",
    Generation: "Generation I",
    About:
      "Whenever Pikachu comes across something new, it blasts it with a jolt of electricity. If you come across a blackened berry, it's evidence that this Pokémon mistook the intensity of its charge.",
    Types: ["Electric"],
  },
  {
    Number: "019",
    Name: "Rattata",
    Generation: "Generation I",
    About:
      "Rattata is cautious in the extreme. Even while it is asleep, it constantly listens by moving its ears around. It is not picky about where it lives—it will make its nest anywhere.",
    Types: ["Normal"],
  },
];

/**
 * @param {Array<object>} objArray - ポケモンオブジェクトが入った配列
 * @returns {Array<string>} 各オブジェクトの `Names` を要素に持つ配列
 */
// ここにコードを書きましょう.
function getNames(objArray){
  let result = [];
  // console.log("arrayCount=",objArray.length);
  for (const targetObj of objArray){
    // console.log(targetObj.Name);
    result.push(targetObj.Name);
  }
  // console.log(result);
  return result;
}

// 'pokemons' の配列は、以下のコードより上に書かれていなければいけません。
test(getNames(pokemons1), ["Bulbasaur", "Pikachu", "Rattata"]);

console.log("ポケモン２");
/**
 * @param {Array<object>} pokemonArray - ポケモンが入った配列
 * @param {number} num - 取り出したいポケモンの 'number'
 * @returns {object|null} 与えられた数字を 'number' に持つポケモン。もし対応するポケモンが存在しなければ、null を返す。
 */
// ここにコードを書きましょう.
function findPokemon(pokemonArray,num){
  let result = false;
  let resultArray = {}
  for (const targetobj of pokemonArray){
    if (targetobj.Number == num){
      // console.log(targetobj)
      result = true;
      resultArray = targetobj;
    }
  }

  if (result === true ){
    return resultArray;
  }else{
    return null;
  }
}

test(findPokemon(pokemons, 1), pokemons[0]);
test(findPokemon(pokemons, 19), pokemons[2]);
test(findPokemon(pokemons, 25), pokemons[1]);
test(findPokemon(pokemons, 1337), null);



//ここから　応用演習
console.log("");
console.log("ここから応用演習");
console.log("応用１");
/**
 * @param {object} objIn - オブジェクト
 * @returns {object} 与えられたオブジェクトのキー/値のペアのうち、
 * 値が奇数のものを除いた新たなオブジェクト。
 */
 // ここにコードを書きましょう.
function removeOddValues(objIn){
  let resultObj = {};

  // console.log(objIn)
  if (typeof objIn.a === "number"){
    if (objIn.a % 2 === 0){
      resultObj.a = objIn.a;
    }
  }else{
    resultObj.a = objIn.a;
  }
  if (typeof objIn.b === "number"){
    if (objIn.b % 2 === 0){
      resultObj.b = objIn.b;
    }
  }else{
    resultObj.b = objIn.b;
  }
  if (typeof objIn.c === "number"){
    if (objIn.c % 2 === 0){
      resultObj.c = objIn.c;
    }
  }else{
    resultObj.c = objIn.c;
  }

  // console.log(resultObj);
  return resultObj;

}

  
test(removeOddValues({ a: 1, b: 2, c: 3 }), { b: 2 });
test(removeOddValues({ a: "1", b: "2", c: "3" }), {
  a: "1",
  b: "2",
  c: "3",
  });
  // 1 行が非常に長くなる場合は、キー/値のペアを改行して書くこともできます。




//ここから　ナマケモノタイム
console.log("");
console.log("ここから　ナマケモノタイム");

const bucketOfSloths = [
  { name: { first: "Furry", middle: "Danger", last: "Assassin" }, age: 2 },
  { name: { first: "Slow", last: "Pumpkin" }, age: 3 },
  { name: { first: "Bullet", middle: "Proof", last: "Sloth" }, age: 4 },
  { name: { first: "Boos", middle: "Boos", last: "Bun" }, age: 5 },
  { name: { first: "Jungle", last: "Fuzz" }, age: 2 },
];

console.log("=1=");
/**
 * @param {Array<object>} objArray - ナマケモノに入った配列
 * @returns {object} 名前・ミドルネーム・苗字を合わせた名前が一番長いナマケモノのオブジェクト
 */
// ここにコードを書きましょう.
function longestName(objArray){

  if (objArray === undefined){
    return undefined
  }

  let resultObj = {};
  let cnt = 0 , NameCnt = 0;

  for (const inObj of objArray){
    // console.log(inObj.name.first)
    cnt += 1;
    let fullName = "";
    if (inObj.name.first !== undefined){
      fullName += inObj.name.first
    }
    if (inObj.name.middle !== undefined){
      fullName += inObj.name.middle
    }
    if (inObj.name.last !== undefined){
      fullName += inObj.name.last
    }

    // console.log(fullName)
    if (cnt === 1){
      NameCnt = fullName.length;
      resultObj = inObj;
    }else{
      if (NameCnt < fullName.length){
        NameCnt = fullName.length;
        resultObj = inObj;
      }
    }
  }
  return resultObj;
}


test(longestName(bucketOfSloths), bucketOfSloths[0]);
test(longestName(bucketOfSloths.slice(1)), bucketOfSloths[2]);
test(longestName(), undefined);

/**
* @param {Array<object>} objArray - ナマケモノの情報が入った配列
* @returns {Array<object>} 与えられたすべてのナマケモノを若い順(ageの昇順)
 に並び替えた新たな配列。同じ年齢(age) の場合は、元の順番のままにする。
*/
// ここにコードを書きましょう.
function getSortedByAge(objArray){
  let resultArray = [];
  let cnt = 0 ;
  for (const inObj of objArray){
    cnt += 1;
    console.log(inObj.age);
    
    

  }
}

// bucketOfSloths のコピーを作りましょう。 (後でテストに使います。)
const bucketOfSlothsCopy = JSON.stringify(bucketOfSloths);

const bucketOfSlothsSortedByAge = [
  { name: { first: "Furry", middle: "Danger", last: "Assassin" }, age: 2 },
  { name: { first: "Jungle", last: "Fuzz" }, age: 2 },
  { name: { first: "Slow", last: "Pumpkin" }, age: 3 },
  { name: { first: "Bullet", middle: "Proof", last: "Sloth" }, age: 4 },
  { name: { first: "Boos", middle: "Boos", last: "Bun" }, age: 5 },
];

test(getSortedByAge(bucketOfSloths), bucketOfSlothsSortedByAge);

// 元の bucketOfSloths 配列が変更されていないことを確認する。
test(JSON.stringify(bucketOfSloths), bucketOfSlothsCopy);

