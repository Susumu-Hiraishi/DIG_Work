'use strict'
// Please don't delete the 'use strict' line above

// console.log(allPokemon);
// console.log(allPokemon.length);
// console.log(allPokemon[0]);

console.log("=基礎1=");
/**
* @returns {Array<string>} データ中のすべてのポケモンの名前を要素に
持つ配列
*/
function getNames(){
  let result = [];
  for (const pokemon of allPokemon ){
    result.push(pokemon.Name);
  }
  // console.log(result);
  return result;
}

test(getNames(), getNamesExpected);

console.log("=基礎2=");
/**
* @param {string} name - ポケモンの名前
* @returns {object} 与えられた名前を持つポケモンのオブジェクト
*/
function getPokemonByName(name){
  return allPokemon[getNames().indexOf(name)];
}

test(getPokemonByName("Pikachu"), getPokemonByNameExpected);

console.log("=基礎3=");

/**
 * @returns {number} 全ポケモンの最大CP（戦闘力）の平均値
*/
function getAvgMaxCP(){
  let result = 0;
  for (const pokemon of allPokemon ){
    // console.log(result,pokemon.MaxCP);
    result += pokemon.MaxCP;
  }
  return result / allPokemon.length
}

// コンピュータは内部で2進法を使っているため、10進法の小数点以下の
// 計算で誤差がでることがあります。

// このテストで計算した値が期待値と全く同じでなくても近似値であれば
// 合格として、テストをコメントアウトしておいてください。

test(getAvgMaxCP(), getAvgMaxCPExpected);

console.log("=基礎4=");
/**
* @param {string} attack（技）
* @returns {Array<object>} 与えられた技に耐性がある、すべてのポケ
モンのオブジェクトが入った配列
*/
function getResistantPokemon(attack){
  
  let allResistant = [];
  for (const pokemon of allPokemon ){
    // console.log(pokemon,pokemon.Resistant.indexOf(attack))
    if (pokemon.Resistant.indexOf(attack) >= 0){
      allResistant.push(pokemon);
    }
  }
  return allResistant
}

test(getResistantPokemon("Fire"), getResistantPokemonExpected);


console.log("=基礎5=");
/**
* @param {string} attack（技）
* @returns {Array<string>} 与えられた技に耐性がある、すべてのポケ
モンの名前が入った配列
*/
function getResistantPokemonNames(attack){
  let result = [];
  for (const pokemon of allPokemon ){
    // console.log(pokemon.Name,pokemon.Resistant.indexOf(attack))
    if (pokemon.Resistant.indexOf(attack) >= 0){
      result.push(pokemon.Name);
    }
  }
  return result
}


test(getResistantPokemonNames("Ice"), getResistantPokemonNamesExpected);



console.log("=基礎6=");

/**
* @returns {{ [weakness: string]: number }} 弱点とその弱点を持つポケ
モンの数の組み合わせをキー/値のペアで表現したオブジェクト
*/
function getWeaknessCounts(){
  let result = {};
  let weakNameArray = [];
  for (const pokemon of allPokemon ){
    for (const weak of pokemon.Weaknesses){
      if( weakNameArray.indexOf(weak) < 0 ){
        weakNameArray.push(weak);
      }
    }
    // console.log(weakNameArray);
  }
  for (const chek of weakNameArray){
    let cnt = 0;
    for (const pokemon of allPokemon ){
      for ( const chekWeak of pokemon.Weaknesses){
        if ( chekWeak.indexOf(chek) >= 0 ){
          cnt ++;
        }
      }
    }
    result[chek] = cnt;
    // console.log(chek,cnt);
  }
  return result
}


test(getWeaknessCounts(), getWeaknessCountsExpected);


console.log("=中級1=");




console.log("=中級2=");

