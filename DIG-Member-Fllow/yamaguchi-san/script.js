const input = document.getElementById("input") ;

//文章表示
function textDisplay() {
  console.log("aa");
  const text1 = document.getElementsByTagName("h5")[0] ;
  text1.style.display = "block" ;
}

input.addEventListener("click", textDisplay);