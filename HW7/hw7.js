//Exercise 1
/*
let newWindow = window.open("", "", "width=300, height=300");

setTimeout(function() {
  newWindow.resizeTo(500, 500);
}, 2000);

setTimeout(function() {
  newWindow.moveTo(200, 200);
}, 4000);

setTimeout(function() {
  newWindow.close();
}, 6000);
*/

//Exercise 2
/*
document.querySelector(".btn").onclick = function() {
  document.querySelector("#text").classList.add("orange-text");
};
*/

//Exercise 3
/*
document.querySelector("#one-click").onclick = function() {
  this.parentElement.setAttribute("class", ".third-exercise");
  this.parentElement.classList.add("one-click");
};

document.querySelector("#double-click").ondblclick = function() {
  this.parentElement.setAttribute("class", ".third-exercise");
  this.parentElement.classList.add("double-click");
};

document.querySelector("#hold-click").onmousedown = function() {
  this.parentElement.setAttribute("class", ".third-exercise");
  this.parentElement.classList.add("hold-click");
};

document.querySelector("#hold-click").onmouseup = function() {
  this.parentElement.classList.remove("hold-click");
};

document.querySelector("#hover-link").onmouseover = function() {
  this.parentElement.classList.add("hover-link");
};
*/

//Exercise 4
/*
function removeListElem() {
  let removeBtn = document.getElementById("removeSelected");
  let list = document.querySelector("select");

  removeBtn.onclick = function() {
    list.remove(list.selectedIndex);
  };
}
removeListElem();
*/

//Exercise 5

function btnEvents() {
  let liveBtn = document.getElementById("liveBtn");
  let messageBox = document.querySelector(".message-box");

  liveBtn.onclick = function() {
    messageBox.innerHTML += "<p>I was pressed</p>";
  };
  liveBtn.onmouseover = function() {
    messageBox.innerHTML += "<p>Mouse on me</p>";
  };

  liveBtn.onmouseleave = function() {
    messageBox.innerHTML += "<p>Mouse is not on me</p>";
  };
}
btnEvents();

//Exercise 6
/*
function printWindowSize() {
  let messageBox = document.querySelector(".message-box");
  let message =
    "<p>Width: " + window.outerWidth + "|" + "Height: " + outerHeight + "<p>";

  messageBox.innerHTML += message;
}

window.addEventListener(
  `resize`,
  event => {
    printWindowSize();
  },
  false
);
*/

//Exercise 7
/*
function getCitiesOfCountry() {
  let country = document.querySelector("#countries"),
    citiesElements = document.querySelectorAll("option"),
    resultBox = document.querySelector(".result");

  country.onchange = function() {
    for (let i = 0; i < citiesElements.length; i++) {
      if (country.value !== citiesElements[i].getAttribute("value")) {
        citiesElements[i].parentNode.removeChild(citiesElements[i]);
      } else {
        cities.onchange = function() {
          let cities = document.querySelector("#cities");
          resultBox.innerHTML +=
            "<p>" +
            country.options[0].text +
            ", " +
            cities.options[cities.selectedIndex].text +
            "</p>";
        };
      }
    }
  };
}
getCitiesOfCountry();
*/
