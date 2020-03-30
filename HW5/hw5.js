//Exercise 1
/*
function testThrow(err) {
  try {
    throw err;
  } catch (err) {
    console.log("Caught: " + err);
  }
}

testThrow(5);
testThrow("Test");
testThrow(new Error("An error happened"));
*/

//Exercise 2
/*
function calcRectangleArea(width, height) {
  if (typeof height !== "number" || typeof width !== "number") {
    throw new Error("width and height should be a number");
    return;
  } else {
    return width * height;
  }
}

try {
  calcRectangleArea(4, 5);
} catch (e) {
  console.log("Error: " + e.message);
}
*/

//Exercise 3
/*
function checkAge() {
  let getUserAge = prompt("Please, enter your age", "");
  if (getUserAge === "") {
    throw new Error("The field is empty! Please enter your age");
  } else if (Number(getUserAge) !== Number) {
    throw new Error("Age should be a number! Please enter your age");
  } else if (Number(getUserAge) < 14) {
    throw new Error("Yor are not old enough for this movie");
  } else {
    console.log("You got access movie");
  }
}

try {
  checkAge();
} catch (err) {
  alert("Error: " + err);
}
*/
