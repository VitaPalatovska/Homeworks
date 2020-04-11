//Exercise 1
/*
function isUpperCase(str) {
  let expression = /^[A-Z]/;

  expression.test(str)
    ? console.log("String's starts with uppercase character")
    : console.log("String's not starts with uppercase character");
}
isUpperCase("regexp");
isUpperCase("RegExp");
*/

//Exercise 2
/*
function isEmailValid(email) {
  let validEmail = /^[a-zA-z][a-zA-Z-0-9]*\@[a-z]{1,6}\.[a-z]{2,3}/g;
  let isValidEmail = validEmail.test(email);
  console.log(isValidEmail);
}
isEmailValid("Qmail2@gmail.com");
*/

//Exercise 3
/*
function foundLetters(str) {
  let pattern = /d+(b*)+(d)/i;
  let matchResults = str.match(pattern);
  console.log(matchResults);
}
foundLetters("cdbBdbsbz");
*/
//Exercise 4

function reverseWords(str) {
  let firstWordPattern = /[^\s]\w*/g,
    words = Array.from(str.matchAll(firstWordPattern)),
    joinAndReverse = words.reverse().join(", ");

  console.log(joinAndReverse);
}
reverseWords("Java Script");

//Exercise 5
/*
function isCardValid(card) {
  let cardPattern = /(\d{0,4})/;
  cardPattern.test(card)
    ? console.log(`${card} is valid`)
    : console.log(`${card} is not valid`);
}
isCardValid("1234-5678-8765-4321");
*/

//Exercise 6
/*
function isEmailValid(email) {
  let emailPattern = /^[a-zA-z]+[a-zA-Z0-9\_|\-]\@[a-z]{1,6}\.[a-z]{3}/;
  emailPattern.test(email)
    ? console.log(`${email} is valid`)
    : console.log(`${email} is not valid`);
}

isEmailValid("my_mail@gmail.com");
isEmailValid("_my-mail@gmail.com");
*/

//Exercise 7
/*
function isLoginValid(login) {
  let loginPattern = /^[a-zA-z][a-zA-Z0-9\.]{1,9}$/g;
  loginPattern.exec(login)
    ? console.log(`${login} is valid`)
    : console.log(`${login} is not valid`);

  let foundNumber = /[0-9\.]+/g,
    numbArr = Array.from(login.matchAll(foundNumber));;
  console.log(numbArr.join(", "));
}

isLoginValid("ee1.1ret3");
isLoginValid("ee1*1ret3");
*/
