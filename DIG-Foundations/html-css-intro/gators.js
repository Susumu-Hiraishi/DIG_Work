let resultWani = "";
// let aa = document.getElementById("gator").innerText;
// console.log(aa);
// window.alert("");
/**
 * @param {number} num -読込キーワード
 * @returns {anyText} ワニのキャラクターを表示数をresultEaniに返す
 */
function addGators(num){
  const gatorPic = "🐊"
  // console.log(gatorPic);
  // window.alert(num)
  if (typeof num === "number" ){
    for (let i = 1 ; i <= num ; i++){
      resultWani += gatorPic
      console.log(resultWani);
    }
  }
  // window.alert(resultWani)
}

let btn1 = document.getElementById("btn1");
btn1.addEventListener('click', function() {
  const textBox = document.getElementById("inText").value;
  // console.log(typeof textBox);
  // window.alert(textBox);
  const number = Number(textBox);
  // console.log(typeof number);
  addGators(number);
  document.getElementById("gator").textContent = resultWani;
  // window.alert(resultWani)
},false);

let btn2 = document.getElementById("btn2");
btn2.addEventListener('click', function() {
  window.location.reload();
},false);
