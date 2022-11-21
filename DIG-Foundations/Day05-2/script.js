'use strict'
// 1行目に記載している 'use strict' は削除しないでください
// ファイル全体で使用する TDD 用の変数を宣言する
//  Test-driven Development[TDD]
let expected;   //期待値
let actual;     //実際値



//ウォーミングアップ
console.log("");
console.log("＝ここから、ウォーミングアップ＝");








// =======================================================================
//基礎演習
console.log("");
console.log("＝ここから、基礎演習＝");

// 1.AVERAGE
console.log("基礎１")
/**
 * @param {number} num1 - 1 番目の数字
 * @param {number} num2 - 2 番目の数字
 * @returns {number} １番目と２番目の数字の平均値を出力
 */
// 関数を宣言しましょう
function AVERAGE(x, y) {
  const TWO = 2;
  return (x + y) / TWO;
}

actual = AVERAGE(1, 1); // テストする式
expected = 1; // 期待するテスト結果

if (actual === expected) {
  console.log("Test PASSED!");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

expected = 1.5; // 期待するテスト結果
actual = AVERAGE(1, 2); // テストする式

if (actual === expected) {
  console.log("Test PASSED!");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

expected = 2.5;
actual = AVERAGE(2, 3);

if (actual === expected) {
  console.log("Test PASSED!");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

expected = 3;
actual = AVERAGE(2, 4);

if (actual === expected) {
  console.log("Test PASSED!");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}


//2.isPositive
console.log("基礎２")
/**
 * @param {number} num1 - 1 番目の数字
 * @returns {boolean} １番目の値が、正の値かどうか判定、絶対値はFalse
 */
function isPositive(thing) {
  if (thing < 0) {
    return false;
  } else if (thing > 0) {
    return true;
  } else if (thing === 0) {
    return false;
  }
}

actual = isPositive(1); // テストする式
expected = true; // 期待するテスト結果

if (actual === expected) {
  console.log("Test PASSED!");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

// さらにテストを書きましょう。

actual = isPositive(-1); // テストする式
expected = false; // 期待するテスト結果

if (actual === expected) {
  console.log("Test PASSED!");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}


//3.
console.log("基礎３")
/**
 * @param {number} base - 底辺の数字
 * @param {number} height - 高さの数字
 * @returns {number} 三角形の面積
 */
function AreaOfTriangle(base, height) {
 const areaOfRectangle = base * height;
 return areaOfRectangle / 2;
}

actual = AreaOfTriangle(3, 5); // テストする式
expected = 7.5; // 期待するテスト結果

if (actual === expected) {
  console.log("Test PASSED!");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

// さらにテストを書きましょう。

actual = AreaOfTriangle(3, -5); // テストする式
expected = -7.5; // 期待するテスト結果

if (actual === expected) {
  console.log("Test PASSED!");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

//4.
console.log("基礎４")
/**
 * @param {number} num - 判定する数字
 * @returns {boolean} 7の倍数かどうか判定
 */
function multipleOfSeven(num) {
  const judge = num % 7 === 0;

  if (judge === true) {
    return true;
  } else {
    return false;
  }
}

// さらにテストを書きましょう。

actual = multipleOfSeven(14.1); // テストする式
expected = false; // 期待するテスト結果

if (actual === expected) {
  console.log("Test PASSED!");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

actual = multipleOfSeven(21); // テストする式
expected = true; // 期待するテスト結果

if (actual === expected) {
  console.log("Test PASSED!");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}


//5.
console.log("基礎５")
/**
 * @param {number} num1 - 1 番目の数字
 * @returns {number} 　入力数値の絶対値を返す
 */
function absolute(number) {
  const zero = 0;
  if (number < zero) {
    return zero - number;
  }
  return number
}

// さらにテストを書きましょう。

actual = absolute(-1); // テストする式
expected = 1; // 期待するテスト結果

if (actual === expected) {
  console.log("Test PASSED!");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
} 

actual = absolute(-0.000001); // テストする式
expected = 0.000001; // 期待するテスト結果

if (actual === expected) {
  console.log("Test PASSED!");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
} 




//ここから　中級演習
console.log("")
console.log("ここから中級演習")
console.log("中級１")
/**
 * @param {number} input - 入力数値 
 * @param {number} lower - 下限値
 * @param {number} upper - 上限値
 * @returns {boolean} 　入力数値が範囲内ならTrue、それ以外はFalse
 */
function inRange(input, lower, upper) {
  if (input >= lower) {
    if (input <= upper) {
      return true;
    } else if (input > upper) {
      return false;
    }
  } else if (input < lower) {
    return false;
  }
}

// さらにテストを書きましょう。

actual = inRange(5,5,7); // テストする式
expected = true; // 期待するテスト結果

if (actual === expected) {
  console.log("Test PASSED!");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
} 

actual = inRange(-5,0-7,0); // テストする式
expected = true; // 期待するテスト結果

if (actual === expected) {
  console.log("Test PASSED!");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

console.log("中級２")
/**
 * @param {number} op1 - 入力値1 
 * @param {number} op2 - 入力値2
 * @returns {number} 　入力値１を２で割った余りを出力
 */
 function remainder(op1, op2) {
  const thing = op2 * Math.floor(op1/op2);
  console.log(thing)
  return op1 - thing;
}

// さらにテストを書きましょう。
actual = remainder(6,5); // テストする式
expected = 1; // 期待するテスト結果

if (actual === expected) {
  console.log("Test PASSED!");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

console.log("中級３")
/**
 * @param {boolean} authenticity1 - Boolean値1 
 * @param {boolean} authenticity2 - Boolean値2
 * @returns {boolean} 　排他の時は、Trueを返す
 */
 function exclusiveor(authenticity1, authenticity2) {
  let isOr = authenticity1 || authenticity2;
  console.log(isOr)
  let isAnd = authenticity1 && authenticity2;
  console.log(isAnd)
  let isXor = isOr && !isAnd;
  console.log(isXor)
  return isXor;
}

// さらにテストを書きましょう。
actual = exclusiveor(true,true); // テストする式
expected = false; // 期待するテスト結果

if (actual === expected) {
  console.log("Test PASSED!");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

actual = exclusiveor(false,true); // テストする式
expected = true; // 期待するテスト結果

if (actual === expected) {
  console.log("Test PASSED!");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

actual = exclusiveor(true,false); // テストする式
expected = true; // 期待するテスト結果

if (actual === expected) {
  console.log("Test PASSED!");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

actual = exclusiveor(false,false); // テストする式
expected = false; // 期待するテスト結果

if (actual === expected) {
  console.log("Test PASSED!");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

console.log("中級４")
/**
 * @param {number} first - 1つ目の数値
 * @param {number} second - 2つ目の数値
 * @param {number} third - 3つ目の数値
 * @param {number} last - 最後の数値
 * @returns {boolean} 　順番に大きくなっていれば、Trueを返す
 */
function increasedNnumber(first, second, third, last) {
  const judge1 = first < second;
  console.log(judge1);
  const judge2 = second < third;
  console.log(judge2);
  const lastJudge = third < last;
  console.log(lastJudge);

  if (judge1) {
    if (judge2) {
      if (lastJudge) {
        return true;
      } else {
        return false;
      }
    } else {
      return false
    }
  } else {
    return false;
  }
}

// さらにテストを書きましょう。
actual = increasedNnumber(1,3,5,2); // テストする式
expected = false; // 期待するテスト結果

if (actual === expected) {
  console.log("Test PASSED!");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

actual = increasedNnumber(1,2,3,4); // テストする式
expected = true; // 期待するテスト結果

if (actual === expected) {
  console.log("Test PASSED!");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}



//ここから　応用演習
console.log("")
console.log("ここから応用演習")

console.log("応用１")
/**
 * @param {number} x1Point - x座標1の数値
 * @param {number} x2Point - x座標2の数値
 * @param {number} y1Point - ｙ座標1の数値
 * @param {number} x2Point - y座標2の数値
 * @returns {boolean} 　偏微分の答えを返す Sqr(x^2+y^2)
 */

function partialDifferentiation(x1Point, x2Point, y1Point, y2Point) {
  const xDistance = x2Point - x1Point;
  const xCoordinates = xDistance * xDistance;
  const yDistance = y2Point - y1Point;
  const yCoordinates = Math.pow(yDistance,2);
  const sumcoordinates = xCoordinates + yCoordinates;
  const answer = sumcoordinates ** .5;
  return answer;
}

// さらにテストを書きましょう
actual = partialDifferentiation(1,2,3,4); // テストする式
expected = 1.4142135623730951; // 期待するテスト結果

if (actual === expected) {
  console.log("Test PASSED!");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

actual = partialDifferentiation(3,6,3,6); // テストする式
expected = Math.sqrt(3**2+3**2); // 期待するテスト結果

if (actual === expected) {
  console.log("Test PASSED!");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

//ここから　ナイトメア
console.log("")
console.log("ここからナイトメア")





