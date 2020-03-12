console.log("Palatovska"); //Exercise 2

//Exercise 3
let variable1 = "str";
let variable2 = 123456;

alert(variable1);
alert(variable2);

variable1 = variable2;

alert(variable1);
alert(variable2);

//Exercise 4
let und1;
let obj = {
  str: "str",
  numb: 12345,
  bool: false,
  undef: und1,
  nul: null
};

//Exercise 5
let isAdult = confirm("Are you 18 years old or more?");
console.log(isAdult);

//Exercise 6
let firstName = "Vita", //string
  lastName = "Palatovska", //string
  group = "Lv-494.JavaScript Core1", //string
  birthYear = 1995, //number
  isMarried = false; //boolean

console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof group);
console.log(typeof birthYear);
console.log(typeof isMarried);

console.log(birthYear);
console.log(isMarried);
console.log(firstName + " " + lastName + "Group: " + group);

let nullVariable = null,
  undefinedVariable;

console.log(typeof nullVariable);
console.log(typeof undefinedVariable);

//Exercise 7

function getData() {
  let login = prompt("Please, enter your login", "");
  let email = prompt("Please, enter your email", "");
  let password = prompt("Please, enter your password", "");

  console.log(
    "Your login is " +
      login +
      ". " +
      "Your email is " +
      email +
      ". " +
      "Your password is " +
      password +
      "."
  );
}
getData();

//Exercise 8

function seconds() {
  let secInHour = 60 * 60;
  let secInDay = secInHour * 24;
  let secInMounth = secInDay * 30;

  console.log(
    "There is " +
      secInHour +
      " seconds in hour, " +
      secInDay +
      " seconds in day, " +
      secInMounth +
      " seconds in mounth."
  );
}
seconds();
