'use strict'
// 1行目に記載している 'use strict' は削除しないでください

//ここから　DIG教育中＝＝＝
console.log("ここからDIG教育中")

const variableString = "I am a string";
console.log(typeof variableString); // "string"と表示されましたか？

const variableNumber = 1;         // "number"と表示させるにはどんな値を代入すればいいでしょう？
console.log(typeof variableNumber); // "number"と表示されましたか？

// ここにコードを書いて、"boolean"と表示されるようにしてください。
const variableBoolean = true;
console.log(typeof variableBoolean);

// ここにコードを書いて、"undefined"と表示されるようにしてください。
const variableUndefined = undefined;
console.log(typeof variableUndefined);

const numberA = 20;
const numberB = 50;

// const average = (numberA+numberB)/2;
// console.log(average); // numberA と numberB の平均が表示される。

function addTen(number) {
    return console.log(number + 10)
}
addTen(5); // => 15

console.log("")
//ここから　基礎演習
console.log("ここから基礎演習")
function add(numOne, numTwo) {
    return numOne + numTwo;
}
// テスト
console.log(add(4, 3)); // 7 を表示
console.log(add(100, 42)); // => 142

console.log(add(100)); // 何が起こる？
console.log(add(1, 4, 5)); // 何が起こる？

function simpleFunctionA() {
    return "Hello simple function A";
}

function simpleFunctionB() {
    console.log("Hello simple function B");
}

console.log(simpleFunctionA(), "--> From running Simple Function A");
console.log(simpleFunctionB(), "--> From running Simple Function B");

// subtract という名前の関数を宣言しましょう。
function subtract(num1, num2) {
    return num1 - num2
}
console.log(subtract(4, 3)); // => 1
console.log(subtract(100, 42)); // => 58

// greeting という名前の関数を宣言しましょう。
   // ここにコードを書いてください
function greeting(name) {
    return "Hello, " + name;
}

console.log(greeting("Alex")); // => "Hello, Alex!"
console.log(greeting("Beau")); // => "Hello, Beau!"

// average という名前の関数を宣言しましょう
function average(num1,num2){
    return (num1 + num2) / 2;
}
console.log(average(100,50));

// 次の関数には誤りがあります。何が間違っているのでしょうか。
function square() {
    return 5 * 5;
}
console.log(square());

function square2(x) {
    return x * x;
}
console.log(square(5)); //=>25

//  一方こちらは問題なく動きます。さらに良い書き方はないでしょうか？
function square3(monkey) {
    return monkey ** 2;
}
console.log(square3(6)); //=>36

// cubeという名前の関数を宣言しましょう。x の 3 乗を出力してください。
function cube(x) {
    return x ** 3;
}
console.log(cube(2)) //=>8

console.log("")
//ここから　中級演習
console.log("ここから中級演習")
// 次のコードを実行したら何が表示されますか？なぜそうなるのでしょうか？
function simpleHelloA() {
    console.log("hello");
}

function simpleHelloB() {
    return "hello";
}

const a = simpleHelloA();
const b = simpleHelloB();
console.log(a, b);
// simpleHelloA には、呼び出されれば、コンソールログに出力される
// ただ、return　の記述が無いため、戻り値が入らない
//aの変数には、Undefinedが入る
//ｂの変数には、helloが入る
//undefine　helo が表示される。

// 下の関数を 3 回呼び出し、それぞれの返り値を変数に代入するようコードを書き足して、コメントにある表示が出るようにしてください。

function createGreeting(greetingPhrase, instructorName) {
    return greetingPhrase + ", " + instructorName + "!";
}

let morningGreeting = createGreeting("Good morning","Mike")
let dayGreeting = createGreeting("Hello","Beau")
let eveningGreeting = createGreeting("Good evening","Alex")

console.log(morningGreeting); //"Good morning, Mike!" を表示
console.log(dayGreeting); // "Hello, Beau!" を表示
console.log(eveningGreeting); // "Good evening, Alex!" を表示

// この PDF に記載されている公式の関数を作成しましょう。
console.log("ここからPDF公式")
//正方形の面積を求める
function squareAria(sideLength){
    return sideLength ** 2;
}
console.log(squareAria(4)); //=>16

//長方形の面積を求める
function rectangleAria(longSide,shortSide){
    return longSide * shortSide;
}
console.log(rectangleAria(5,8)); //=>40

//並行四辺形の面積を求める
function parallelogramAria(longSide,hightLength){
    return longSide * hightLength;
}
console.log(parallelogramAria(5,8)); //=>40

//台形の面積を求める
function trapezoidAria(longSide,shortSide,hightLength){
    return (1/2) * hightLength *(shortSide + longSide);
}
console.log(trapezoidAria(5,8,6)); //=>39

//三角形の面積を求める
function triangleAria(buttom,hightLength){
    return (1/2) * buttom * hightLength;
}
console.log(triangleAria(10,6)); //=>30

//円の面積を求める
function circleAria(radius){
    return Math.PI * radius **2;
}
console.log(circleAria(2)); //=>12.566370614359172

//直方体の体積を求める
function rectangularSolidVolume(length,width,hightLength){
    return length * width * hightLength;
}
console.log(rectangularSolidVolume(3,4,5)); //=>60

//正方体の体積を求める
function cubeVolume(side){
    return side ** 3;
}
console.log(cubeVolume(3)); //=>27

// 円柱の体積を求める
function rightCircularCylinderVolume(radius,hightLength){
    return Math.PI * radius ** 2 * hightLength;
}
console.log(rightCircularCylinderVolume(3,10)); //=>282.7433388230814

// 球の体積を求める
function spherevolume(radius){
    return (4/3) * Math.PI * radius ** 3;
}
console.log(spherevolume(3)); //=>113.09733552923254

// 円錐の体積を求める
function rightCircularConeVolume(radius,hightLength){
    return (1/3) * Math.PI * radius ** 2 * hightLength;
}
console.log(rightCircularConeVolume(3,10)); //=>94.24777960769379

// 四角錐の体積を求める
function squareOrRectangularPyramidVolume(length,width,hightLength){
    return (1/3) * length * width * hightLength;
}
console.log(squareOrRectangularPyramidVolume(3,4,5)); //=>20

// 円錐台の体積の求める
function fustumOfRightCircularConeVolume(bigRadius,smallRadius,hightLength){
    return Math.PI * (smallRadius ** 2 + smallRadius * bigRadius + bigRadius ** 2) / 3;
}
console.log(fustumOfRightCircularConeVolume(3,4,5)); //=38.746309394274114

console.log("")

//ここから　応用演習
console.log("ここから応用演習")
// Function-intro フォルダで実施


