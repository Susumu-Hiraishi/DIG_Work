// 'use strict'
// // 1行目に記載している 'use strict' は削除しないでください

function biggerNumber(numOne, numTwo) {
    if(numOne > numTwo){
        return numOne;
    }else if(numOne < numTwo){
        return numTwo;
    }else{
        return "等しい";
    }
}

console.log(biggerNumber(4, 3)); // 'The first argument is bigger.' を表示
console.log(biggerNumber(3, 4)); // => 'The second argument is bigger.'
console.log(biggerNumber(4, 4)); // => 'The second argument is bigger.'

//問題５
function printDataType(data) {
    if (typeof data === "number") {
        console.log("This is a number.");
    }else if(typeof data === "boolean"){
        console.log("This is a boolean.");
    }else if(typeof data === "string"){
        console.log("This is a string.");
    }else{
        console.log("This is not a string, boolean, or number.");
    }
    // More code here.

}

printDataType(42); // => "This is a number."
printDataType("Hello!"); // "This is a string." が表示されるようにする。
printDataType(true); // => "This is a boolean."
printDataType(undefined); // => "This is not a string, boolean, or number."

// let black   = '\u001b[30m';
// let red     = '\u001b[31m';
// let green   = '\u001b[32m';
// let yellow  = '\u001b[33m';
// let blue    = '\u001b[34m';
// let magenta = '\u001b[35m';
// let cyan    = '\u001b[36m';
// let white   = '\u001b[37m';

// let reset   = '\u001b[0m';

function randomStopLight(){
    let value = Math.floor(Math.random() * 10);
    console.log("ランダムな数字は、 ", value);
    if (value < 3){
        // return red + "●Red";
        return "🔴Red";
    }else if (value <= 6){
        // return yellow + "●Yellow";
        return "🟡Yellow";
    }else{
        // return green + "●Green";
        return "🟢Green";
    }
}
console.log(randomStopLight());

