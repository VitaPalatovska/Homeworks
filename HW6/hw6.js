//Exercise1
/*
let getTest1 = document.getElementById("test"),
  getTest2 = document.querySelector("#test");
console.log(getTest1);
console.log(getTest2);
*/

//Exercise2
//document.querySelector(".image").setAttribute("src", "cat.jpg");

//Exercise3
/*
let textChildren = document.querySelectorAll("#text p");

textChildren.forEach((item, index) => {
  console.log("Selector text " + index + ": " + item.innerHTML);
});
*/

//Exercise4

let firstElem = document.getElementById("list").firstElementChild,
  lastElem = document.getElementById("list").lastElementChild,
  secondElem = firstElem.nextElementSibling.innerHTML,
  fourthElem = lastElem.previousElementSibling.innerHTML,
  fifthElem = document.querySelectorAll("#list li");

alert(firstElem.innerHTML);
alert(lastElem.innerHTML);
alert(secondElem);
alert(fourthElem);
alert(fifthElem[2].innerHTML);

//Exercise5
/*
document.querySelector("h1").style.backgroundColor = "green";
let myDivElements = document.querySelectorAll("#myDiv p");
myDivElements[0].style.fontWeight = "bold";
myDivElements[1].style.color = "red";
myDivElements[2].style.textDecoration = "underline";
myDivElements[3].style.fontStyle = "italic";

let unList = document.querySelector("#myList");
unList.style.listStyle = "none";
let unListChildren = document.querySelectorAll("#myList li");

unListChildren.forEach(item => {
  item.style.display = "inline";
});

unList.nextElementSibling.style.visibility = "hidden";
*/

//Exercise6
/*
let inputVal1 = prompt("Please, enter something for first input", ""),
  inputVal2 = prompt("Please, enter something for second input", "");
document.querySelector("#input1").setAttribute("value", inputVal1);
document.querySelector("#input2").setAttribute("value", inputVal2);
*/

//Exercise7

document.body.innerHTML = `<main class="mainClass check item"> 	
<div id="myDiv">
<p>First paragraph</p>           
</div>
</main> 
`;
