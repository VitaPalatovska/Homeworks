//Exercise1
/*
(function() {
  let arr = [2, 3, 4, 5];
  let sum = 0;
  /*for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }*/

/* let j = 0;
  while (j < arr.length) {
    sum += arr[j];
    j++;
  }
  console.log(sum);
})();*/

//Exercise2
/*
(function() {
  for (let i = 0; i < 15; i++) {
    if (i == 0 || i % 2 == 0) {
      console.log(i + " is even");
    } else {
      console.log(i + " is odd");
    }
  }
})();
*/

//Exercise 3
/*
function randomFrom1To500() {
  return Math.floor(Math.random() * (500 - 1) + 1);
}

function randArray(k) {
  let arr = [];
  for (let i = 0; i < k; i++) {
    arr.push(randomFrom1To500());
  }

  return arr;
}
console.log(randArray(5));
*/

//Exercise 4
/*
function raiseData() {
  let getNumb = prompt("Введіть число, яке треба піднести до ступеня", "");
  let getPow = prompt("Введіть ступінь", "");
  raiseToDegree(Number(getNumb), Number(getPow));
}
raiseData();
function isInt(a) {
  return (a ^ 0) === a;
}
function raiseToDegree(a, b) {
  if (isInt(a) && isInt(b)) {
    alert(a ** b);
  }
}
*/

//Exercise 5
/*
function findMin() {
  let min = Infinity;
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] < min) {
      min = arguments[i];
    }
  }
  return min;
}

console.log(findMin(12, 14, 4, -4, 0.2));
*/

//Exercise 6
/*
function findUnique(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        return false;
      }
    }
  }
  return true;
}
console.log(findUnique([1, 2, 3, 5, 3]));
console.log(findUnique([1, 2, 3, 5, 11]));
*/

//Exercise 7
/*
function lastElem(arr) {
  let lastEl = [];
  let arrLength = arr.length;
  let num = arguments[1];

  if (num === undefined) {
    num = 1;
  } else if (num > arrLength) {
    num = arrLength;
  }

  for (let i = arrLength - num; i < arrLength; i++) {
    lastEl.push(arr[i]);
  }

  return lastEl;
}

console.log(lastElem([3, 4, 10, -5])); // -5
console.log(lastElem([3, 4, 10, -5], 2)); // [10, -5]
console.log(lastElem([3, 4, 10, -5], 8)); // [3, 4, 10, -5]
*/

//Exercise 8
/*
function capitalLetters(str) {
  let space = " ";
  let newStr = "";
  newStr += str[0].toUpperCase();

  for (let i = 1; i < str.length; i++) {
    if (str[i] === space) {
      newStr += str[i] + str[i + 1].toUpperCase();
    } else {
      if (str[i + 1] !== space && str[i + 1] != undefined) {
        newStr += str[i + 1];
      }
    }
  }
  console.log(newStr);
}

capitalLetters("i love java script");
*/
