//Exercise 1
/*
let x = 1;
let y = 2;

let res1 = String(x) + y; // Допишіть код, необхідно використовувати змінні x і y
console.log(res1); // "12"
console.log(typeof res1); // "string"

let res2 = Boolean(x) + String(y); // Допишіть код, необхідно використовувати змінні x і y
console.log(res2); // "true2"
console.log(typeof res2); // "string"

let res3 = Boolean(x + y); // Допишіть код, необхідно використовувати змінні x і y
console.log(res3); // true
console.log(typeof res3); // "boolean"

let res4 = (Boolean(x) + String(y)) / y; // Допишіть код, необхідно використовувати змінні x і y
console.log(res4); // NaN
console.log(typeof res4); // "number"
*/
//Exercise 2
/*
let abc = prompt("Please, enter number", "");
if (abc % 7 === 0 && abc % 2 === 0) {
  alert("This number can division 2 and 7");
} else if (abc % 2 === 0) {
  alert("This number can division 2");
} else if (abc % 7 === 0) {
  alert("This number can division 7");
} else {
  alert("This number can't division 2 or 7");
}
*/
//Exercise 3
/*
let arr = [];

arr.push(12345);
arr.push("str");
arr.push(true);
arr.push(null);
alert(arr.length);
let arrValue = prompt("Please, enter number", "");
arr.push(arrValue);
alert(arr[4]);
arr.shift();
alert(arr);
*/

//Exercise 4
/*
let cities = ["Rome", "Lviv", "Warsaw"];
let resArr = cities.join("*");
console.log(resArr);
*/

//Exercise 5
/*
let isAdult = prompt("Введіть свій вік", "");

if (isAdult > 18) {
  alert("Ви досягли повнолітнього віку");
} else if (isAdult < 10) {
  alert("Ви ще надто молоді");
}*/

//Exercise 6
/*
let sideA = prompt("Введіть довжину сторони A трикутника", "");
let sideB = prompt("Введіть довжину сторони B трикутника", "");
let sideC = prompt("Введіть довжину сторони C трикутника", "");

trianglesArea(sideA, sideB, sideC);

function isDataValid() {
  let correctData = [];
  for (let i = 0; i < arguments.length; i++) {
    if (!isNaN(arguments[i]) && arguments[i] > 0) {
      correctData.push(Number(arguments[i]));
    } else {
      console.log("Incorrect data");
    }
  }

  if (correctData.length === arguments.length) {
    console.log(correctData);
    return correctData;
  }
}

//console.log(isDataValid(sideA, sideB, sideC));

function trianglesArea(sideA, sideB, sideC) {
  let validationResult = isDataValid(sideA, sideB, sideC);
  let validData = validationResult.sort(function(a, b) {
    return a - b;
  });
  let c = validData[2],
    b = validData[1],
    a = validData[0];

  let sqrHypotenuse = c ** 2;
  // console.log(sqrHypotenuse);

  if (sqrHypotenuse === a ** 2 + b ** 2) {
    let pythagoras = (a * b) / 2;
    alert("Площа трикутника = " + pythagoras + ". Трикутник прямокутний.");
  } else {
    let p = semiPerimetr(a, b, c);
    caluculateSquare = Math.sqrt(p * (p - a) * (p - b) * (p - c));
    alert("Площа трикутника " + caluculateSquare.toFixed(3));
  }
}
function semiPerimetr(a, b, c) {
  let sum = a + b + c;
  return sum / 2;
}
*/
//Exercise 7

function salutation() {
  let hours = new Date().getHours();
  console.log(hours);
  if ((23 <= hours && hours < 24) || hours < 5) {
    alert("Доброї ночі");
  } else if (5 <= hours && hours < 11) {
    alert("Доброго ранку");
  } else if (11 <= hours && hours < 17) {
    alert("Доброго дня");
  } else if (17 <= hours && hours < 23) {
    alert("Доброго вечора");
  }
}
salutation();
