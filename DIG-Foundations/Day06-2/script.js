'use strict'
// 1行目に記載している 'use strict' は削除しないでください
// ファイル全体で使用する TDD 用の変数を宣言する
//  Test-driven Development[TDD]
let expected;   //期待値
let actual;     //実際値


//ウォーミングアップ
console.log("");
console.log("＝ここから、ウォーミングアップ＝");

// ... 以下でテストする対象のコード書きましょう






// =======================================================================
//基礎演習
console.log("");
console.log("＝ここから、基礎演習＝");
//
console.log("基礎１");

/**
 * @param {string} word - テストの対象となる文字列
 * @param {number} threshold - 閾値
 * @returns {any} 与えられた文字列の長さが指定された閾値より長いかどうか
 */
// ここにコードを書きましょう
function isLongerThan(word,threshold){

  if (typeof word === "string" && typeof threshold === "number"){
    return word.length > threshold
  }else{
    return "Invalid input."
  }
}

actual = isLongerThan("three", 3);
expected = true;

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = isLongerThan("three", 5);
expected = false;

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = isLongerThan(3, 5);
expected = "Invalid input.";

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

//２
console.log("")
console.log("基礎２");

/**
 * @param {number} num1 - テストの対象となる数値
 * @returns {boolean} 与えられた数値が奇数かどうかを表すブーリアン
 */
// ここにコードを書きましょう
function isOddWithoutIf(num1){
  console.log("余り=",num1 % 2)
  return num1 % 2 !== 0
}

actual = isOddWithoutIf(3);
expected = true;

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = isOddWithoutIf(4);
expected = false;

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}
 
//
console.log("")
console.log("基礎３");
/**
 * @param {number} num - 数値（0-10）。その名前がアルファベットの形で返ることになる
 * @returns {"zero"|"one"|"two"|"three"|"four"|"five"|"six"|"seven"|"eight"|"nine"|"ten"} 与えられた数値をアルファベットで記した時の名前
 */
// ここにコードを書きましょう
function getSimpleNumberName(num){
  let arry = ["zero","one","two","three","four","five","six","seven","eight","nine","ten"];
  return arry[num]
}

actual = getSimpleNumberName(0);
expected = "zero";

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

// さらにテストを書いて、コードが正しいことを確認してください
actual = getSimpleNumberName(10);
expected = "ten";

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
} 


//
console.log("")
console.log("基礎４");

/**
 * @param {number} num - 正多角形の辺の数 (3-8)
 * @returns {"triangle"|"square"|"pentagon"|"hexagon"|"heptagon"|"octagon"} 与えられた数の辺を持つ凸多角形の英語名
 */
// ここにコードを書きましょう
function getRegularConvexPolygonName(num){
  let arry = ["triangle","square","pentagon","hexagon","heptagon","octagon"];
  return arry[num - 3]
}

actual = getRegularConvexPolygonName(3);
expected = "triangle";

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

// さらにテストを書いて、コードが正しいことを確認してください
actual = getRegularConvexPolygonName(5);
expected = "pentagon";

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}


//ここから　中級演習
console.log("")
console.log("ここから中級演習")
/**
 * @param {1|2|3|4|5|6|7|8|9|10|11|12} hour - 時 (12時間制)
 * @param {number} min - 分
 * @param {"AM"|"PM"} meridian - "AM" または "PM"
 * @returns {"morning"|"afternoon"|"evening"|"night"} 大まかな「時間帯」
 */
// ここにコードを書きましょう
function getTimeOfDay(hour,min,meridian){
  const arry = ["morning","afternoon","evening","night"];
  let buf24;
  let bufMin;

  if (meridian === "PM"){
    buf24 = hour + 12 
  }else{
    buf24 = hour
  }

  bufMin = (buf24 * 60) + min
  console.log("時間（分）=",bufMin)

  if ((4 * 60) <= bufMin && bufMin < (12 * 60)){
    return arry[0]
  }else if ((12 * 60) <= bufMin && bufMin < (17 * 60)){
    return arry[1]
  }else if ((17 * 60) <= bufMin && bufMin < ((20 * 60) + 30)){
    return arry[2]
  }else{
    return arry[3]
  }
}


actual = getTimeOfDay(4, 0, "AM");
expected = "morning";

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = getTimeOfDay(3, 59, "AM");
expected = "night";

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

// さらにテストを書いて、コードが正しいことを確認してください。
actual = getTimeOfDay(5, 31, "PM");
expected = "evening";

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}



//ここから　応用演習
console.log("")
console.log("ここから応用演習")

/**
 * @param {number} radius - 半径
 * @returns {number} 与えられた半径の円の面積
 */
// ここにコードを書きましょう
function getAreaOfCircle(radius){
  return (radius ** 2) * Math.PI
}


// ここにあなたのテストを書きましょう
actual = getAreaOfCircle(1);
expected = (1 * 1) * Math.PI;

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

//ここから　ナイトメア
console.log("")
console.log("ここからナイトメア")

/**
 * @param {number} s - 数値。その名前がアルファベットの形で返ることになる
 * @returns {String} 与えられた数値をアルファベットで記した時の名前
 */
// ここにコードを書きましょう

function getNumberName(s) {
  //  
  console.log("呼び出し")
  //  
    var NumtoEnglish = {},
      n = "",
      xiao = "",
      zheng = "",
      regxinteger = /^([0-9]{1,}([.][0-9]*)?)$/;

  NumtoEnglish.tally = {
      arr1: ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"],
      arr2: ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"],
      arr3: ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"],
      arr4: ["hundred", "thousand", "million", "billion", "trillion", "quadrillion"]
  }
  //      
  NumtoEnglish.Convert_integer = function (n) {
      try {
          var fenge = this.toThousands(n).split(',');
          result = "";
          for (var i = 0; i < fenge.length; i++) {
              if (fenge[i].length == 3) {
                  result += this.tally.arr1[fenge[i].substring(0, 1)] + " "; //  
                  result += this.tally.arr4[0];
                  if (this.doubledight(fenge[i].substring(1)) != "") {
                      result += " and " + this.doubledight(fenge[i].substring(1));
                  }
              } else if (fenge[i].length == 2) {
                  result += this.doubledight(fenge[i]) //  
              } else if (fenge[i].length == 1) {
                  result += this.tally.arr1[fenge[i]]; //  
              }
              //       （    1000，           ）
              if (i < fenge.length - 1) {
                  result += " " + this.tally.arr4[fenge.length - 1 - i] + " ";
              }
          }
          return result;
      } catch (ex) {
          console.error(ex);
      }
  }
  //      
  NumtoEnglish.Convert_decimal = function (n) {
      var d = n.split('');
      var result = '';
      if (d.length > 0) {
          d.forEach(a => {
              result += this.Convert_integer(a) + " ";
          });
      }
      return result;
  }
  //     
  NumtoEnglish.doubledight = function (n) {
      var result = "";
      if (parseInt(n) != 0) {
          var dd = n.split('');
          if (dd[0] < 1) {
              result = this.tally.arr1[dd[1]];
          } else if (dd[0] == 1) {
              result = this.tally.arr2[dd[1]];
          } else {
              result = this.tally.arr3[dd[0] - 2] + "-" + this.tally.arr1[dd[1]];
          }
      }
      return result;
  }

  //       ， ：1000000 = 1,000,000
  NumtoEnglish.toThousands = function (num) {
      var num = (num || 0).toString(),
          result = '';
      while (num.length > 3) {
          result = ',' + num.slice(-3) + result;
          num = num.slice(0, num.length - 3);
      }
      if (num) {
          result = num + result;
      }
      return result;
  }

  //  String  
  if (!regxinteger.test(parseInt(s))) {
      return "Error：Must in digital format";
  }

  //       （       ）
  var NumList = s.toString().split('.'),
      zheng = NumtoEnglish.Convert_integer(NumList[0]); //    
  //       2，     
  if (NumList.length == 2) {
      if (NumList[1].length <= 2) {
          xiao = NumtoEnglish.Convert_decimal(NumList[1]);
      } else {
          //      2 ，   ，     
          return n;
      }
  }
  //      
  return zheng + (xiao == "" ? "" : " point " + xiao);
  
}


// ここからテスト

actual = getNumberName(0);
expected = "zero";

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = getNumberName(1345);
expected = "one thousand three hundred forty five";

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

// さらにテストを書いて、コードが正しいことを確認してください



