"use strict";

function feed(animal, foodObj) {
  if((animal === "dog" && foodObj["taste"] === "beef") || (animal === "cat" && foodObj["taste"] === "tuna")) {
    return "I love it!"
  } else {
    return "I don't like it!";
  }
}


function reverse(arr) {
  return arr.map(x => x).reverse();
}


function calculateTotalWithTax(priceObj, itemObj) {
  return Object.entries(priceObj).reduce((a,[key,value]) => a + Math.floor(value * itemObj[key] * 1.1),0);
}


function totalBookSales(arr) {
  return arr.map(x => x["price"] * x["sales"]);
}


function getValuesByProperty(obj, key) {
  return obj.reduce((a,b) => {
    a.push(b[key]);
    return a;
  },[]);
}


function mergeAndSumObjects(...arr) {
  const result = [];
  const idArr = [];

  const arr2 = arr.reduce((a,b) => {
    for(const ele of b) {
      a.push(ele);
    }
    return a;
  },[]);

  arr2.forEach(x => {
    if(idArr.indexOf(x["id"]) === -1) {
      result.push(x);
      idArr.push(x["id"])
    } else {
      result[idArr.indexOf(x["id"])]["x"] += x["x"];
      result[idArr.indexOf(x["id"])]["y"] += x["y"];
    }
  },[]);

  return result;
}


function doTheThing(arr, exp1, exp2, exp3) {
  return arr.map(x => exp1(x)).filter(y => exp2(y) && exp3(y));
}


function createMessages(greeting, obj) {
  return function(str) {
    return [obj["start"], greeting, str, obj["end"]].join(" ".repeat(obj["space"]));
  }
}


function getDiffDate(date1, date2) {
  const startDate = new Date(date1);
  const endDate = new Date(date2);

  const diffDate = endDate - startDate;
  return diffDate < 0 ? -diffDate / (1000 * 60 * 60 * 24) : diffDate / (1000 * 60 * 60 * 24);
}


function createCounter(num, x) {
  let count = 0;

  return () => {
    if(count === 0) {
      count++;
      return num;
    } else {
      num += (x || 1);
      return num;
    } 
  }
}


function endsWith(str, searchStr, endIndex) {
  let countLen = 0;

  for(let [i,j] = [(endIndex-1 || str.length-1), searchStr.length-1]; j >= 0; [i--, j--]) {
    if([...str][i] === [...searchStr][j]) countLen++;
  }
  return searchStr.length === countLen;
}


function findExtremeValue(obj, size) {
  let arr = obj;
  if(Array.isArray(obj) === false) arr = Object.values(obj);

  if(size === "MAX") {
    return arr.sort((a, b) => b - a)[0];
  } else if (size === "MIN") {
    return arr.sort((a, b) => a - b)[0];
  }
}

const vendingMachine = {
  money: 0,
  totalMoney: 1000,
  insertMoney: (x) => {
    if(x > 0) {
      vendingMachine["money"] += x;
      vendingMachine["totalMoney"] += x;
    } else {
      return "お金を投入してください";
    }
  },
  selectDrink: (x) => {
    if((x || -1) < 0) {
      return "お金が足りません";
    }
    let tmpMoney = vendingMachine["money"];
    for(const obj of drinkStock) {
      if(obj["name"] === x) {
        tmpMoney -= obj["price"];
      };
    }
    if(tmpMoney >= 0) {
      vendingMachine["money"] = tmpMoney;
      return `${x} が出てきました！`;
    } else {
      return "お金が足りません";
    }
  },
  returnChange: () => {
    let tmpMoney = vendingMachine["money"];
    vendingMachine["totalMoney"] -= vendingMachine["money"];
    vendingMachine["money"] = 0;
    return tmpMoney;
  }
}


function compare(value1, value2) {
  if(typeof value1 !== typeof value2) return false;

  switch (typeof value1) {
    case "string":
      if(value1 !== value2) return false;

    case "number":
      if(value1 !== value2) return false;

    case "object":
      if(value1.length !== undefined) {
        let count = value1.length;
        if(value1.length < value2.length) count = value2.length;
        for(let i = 0; i < count; i++) {
          if(value1[i] !== value2[i]) return false;
        }
      } else {
        for(const prop1 in value1) {
          if(typeof value1[prop1] !== "object" && value1[prop1] !== value2[prop1]) return false;
          if(typeof value1[prop1] === "object") {
            for(const prop2 in value1[prop1]) {
              if(typeof value1[prop1][prop2] !== "object" && value1[prop1][prop2] !== value2[prop1][prop2]) return false;
              if(typeof value1[prop1][prop2] === "object") {
                for(const prop3 in value1[prop1][prop2]) {
                  if(typeof value1[prop1][prop2][prop3] !== "object" && value1[prop1][prop2][prop3] !== value2[prop1][prop2][prop3]) return false;
                  if(typeof value1[prop1][prop2][prop3] === "object") {
                    for(const prop4 in value1[prop1][prop2][prop3]) {
                      if(typeof value1[prop1][prop2][prop3][prop4] !== "object" && value1[prop1][prop2][prop3][prop4] !== value2[prop1][prop2][prop3][prop4]) return false;
                    }
                  }
                }
              }
            }
          }
        }

        for(const prop1 in value2) {
          if(typeof value2[prop1] !== "object" && value2[prop1] !== value1[prop1]) return false;
          if(typeof value2[prop1] === "object") {
            for(const prop2 in value2[prop1]) {
              if(typeof value2[prop1][prop2] !== "object" && value2[prop1][prop2] !== value1[prop1][prop2]) return false;
              if(typeof value2[prop1][prop2] === "object") {
                for(const prop3 in value2[prop1][prop2]) {
                  if(typeof value2[prop1][prop2][prop3] !== "object" && value2[prop1][prop2][prop3] !== value1[prop1][prop2][prop3]) return false;
                  if(typeof value2[prop1][prop2][prop3] === "object") {
                    for(const prop4 in value2[prop1][prop2][prop3]) {
                      if(typeof value2[prop1][prop2][prop3][prop4] !== "object" && value2[prop1][prop2][prop3][prop4] !== value1[prop1][prop2][prop3][prop4]) return false;
                    }
                  }
                }
              }
            }
          }
        }
      }
  }

  return true;
}


function furnitureStore() {
  const userLists = [];
  const itemLists = [];

  return function(action, account, item) {
    const userIdLists = userLists.map(x => x["id"]);
    const itemIdLists = itemLists.map(x => x["id"]);

    switch(action) {
      case "CREATE_ACCOUNT":
        if(userIdLists.indexOf(account["id"]) === -1) {
          userLists.push(account);
          return true;
        } else {
          return false;
        }

      case "CREATE_ITEM":
        if(account["name"] === "ADMIN" && itemIdLists.indexOf(item["id"]) === -1) {
          itemLists.push(item);
          return true;
        } else {
          return false;
        }

      case "GET_ITEM":
        if(itemIdLists.indexOf(item["id"]) !== -1) {
          return itemLists[itemIdLists.indexOf(item["id"])];
        } else {
          return false;
        }

      case "GET_ITEM_BY_CATEGORY":
        return itemLists.filter(x => x["category"] === item["category"]);

      case "GET_ITEM_BY_PRICE":
        if(item["condition"] === "or less") {
          return itemLists.filter(x => x["price"] <= item["price"]);
        } else if (item["condition"] === "or more") {
          return itemLists.filter(x => x["price"] >= item["price"]);
        }

      case "GET_ITEM_BY_STOCK":
        if(item["condition"] === "or less") {
          return itemLists.filter(x => x["stock"] <= item["stock"]);
        } else if (item["condition"] === "or more") {
          return itemLists.filter(x => x["stock"] >= item["stock"]);
        }

      case "GET_ITEM_BY_NAME":
        return itemLists.filter(x => x["name"] === item["name"]);

      case "DELETE_ITEM":
        if(account["name"] === "ADMIN" && itemIdLists.indexOf(item["id"]) !== -1) {
          itemLists.splice(itemIdLists.indexOf(item["id"]),1);
          return true;
        } else {
          return false;
        }
    } 
  }
}


// module.exports = {
//   feed,
//   reverse,
//   calculateTotalWithTax,
//   totalBookSales,
//   getValuesByProperty,
//   mergeAndSumObjects,
//   doTheThing,
//   createMessages,
//   getDiffDate,
//   createCounter,
//   endsWith,
//   findExtremeValue,
//   vendingMachine,
//   compare,
//   furnitureStore,
// };











