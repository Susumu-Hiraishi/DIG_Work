'use strict'
// Please don't delete the 'use strict' line above

// test({ a: "A", b: "B" }, { b: "B", a: "A" });


//ウォーミングアップ
console.log("1");

/**
* @param {number} maxNum
* @returns {number} 与えられた数まで足す。
*/
function countSam(maxNum) {
  let result = 0;
  let cnt = 0;

  while (cnt !== maxNum) {
    cnt++;
    result += cnt;
    // console.log(cnt, result);
  }
  return result;
}

console.log(countSam(3));


// 自分自身を呼び出す　再帰関数

