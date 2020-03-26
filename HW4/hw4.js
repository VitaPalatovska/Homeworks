//Exercise 1
/*
function propsCount(obj) {
  let props = Object.keys(obj);
  console.log(props.length);
}
let mentor = {
  course: "JS fundamental",
  duration: 3,
  direction: "web-development"
};
propsCount(mentor);
*/

//Exercise 2
/*
let randomObj = {
  phone: 8888888,
  name: "Name",
  email: "random@email.com",
  login: "qwerty",
  password: "qwe123az"
};

function showProps(obj) {
  let props = Object.keys(obj);
  let values = Object.values(obj);
  console.log(props);
  console.log(values);
}
showProps(randomObj);
*/

//Exercise 3
/*
let workersSalary = [];

class Worker {
  #experience;
  constructor(fullName, dayRate, workingDays) {
    this.fullName = fullName;
    this.dayRate = dayRate;
    this.workingDays = workingDays;
    this.#experience = 1.2;
  }

  set _experience(exp) {
    this.#experience = exp;
  }

  get _experience() {
    return this.#experience;
  }

  showSalary() {
    workersSalary.push(this.dayRate * this.workingDays);
    console.log(this.dayRate * this.workingDays);
  }

  showSalaryWithExperience() {
    console.log(this.#experience * this.dayRate * this.workingDays);
  }
}

let worker1 = new Worker("John Johnson", 20, 23);
console.log(worker1.fullName);
console.log(worker1.showSalary());
console.log("New experience: " + worker1._experience);
console.log(worker1.showSalaryWithExperience());
console.log((worker1._experience = 1.5));
console.log("New experience: " + worker1._experience);
console.log(worker1.showSalaryWithExperience());
console.log(
  "--------------------------------------------------------------------------------"
);
let worker2 = new Worker("Tom Tomson", 48, 22);
console.log(worker2.fullName);
console.log(worker2.showSalary());
console.log("New experience: " + worker2._experience);
console.log(worker2.showSalaryWithExperience());
console.log((worker2._experience = 1.5));
console.log("New experience: " + worker2._experience);
console.log(worker2.showSalaryWithExperience());
console.log(
  "--------------------------------------------------------------------------------"
);
let worker3 = new Worker("Andy Ander", 29, 23);
console.log(worker3.fullName);
console.log(worker3.showSalary());
console.log("New experience: " + worker3._experience);
console.log(worker3.showSalaryWithExperience());
console.log((worker3._experience = 1.5));
console.log("New experience: " + worker3._experience);
console.log(worker3.showSalaryWithExperience());
console.log(
  "--------------------------------------------------------------------------------"
);
console.log(workersSalary);

let sortWorkersSalary = workersSalary.sort(function(a, b) {
  return a - b;
});

console.log(sortWorkersSalary);
*/

//Exercise 4
/*
class Persone {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }

  showFullName() {
    console.log(this.name + " " + this.surname);
  }
}

class Student extends Persone {
  constructor(name, surname, year) {
    super(name, surname);
    this.year = year;
  }

  showFullName(middleName) {
    return this.name + " " + this.surname + " " + middleName;
  }

  showCourse() {
    let date = new Date();
    let curentYear = date.getFullYear();
    if (curentYear - this.year >= 1 && curentYear - this.year <= 6) {
      return curentYear - this.year - 1;
    }
  }
}

var stud1 = new Student("Petro", "Petrenko", 2015);
console.log(stud1.showFullName("Petrovych")); // Petrenko Petro Petrovych
console.log("Current course: " + stud1.showCourse());
*/

//Exercise 5

class GeometricFigure {
  getArea() {
    return 0;
  }

  toString() {
    return Object.getPrototypeOf(this).constructor.name;
  }
}

class Triangle extends GeometricFigure {
  constructor(a, b, c) {
    super();
    this.sideA = a;
    this.sideB = b;
    this.sideC = c;
    this.p = (this.sideA + this.sideB + this.sideC) / 2;
  }

  getArea() {
    return Math.sqrt(
      this.p *
        (this.p - this.sideA) *
        (this.p - this.sideB) *
        (this.p - this.sideC)
    );
  }
}

class Square extends GeometricFigure {
  constructor(side) {
    super();
    this.side = side;
  }
  getArea() {
    return this.side ** 2;
  }
}

class Circle extends GeometricFigure {
  constructor(r) {
    super();
    this.r = r;
  }
  getArea() {
    let p = 3.1415;
    return p * this.r ** 2;
  }
}
const figures = [new Triangle(4, 5, 3), new Square(7), new Circle(5)];
//console.log(figures);

function handleFigures(figures) {
  let total = [];
  figures.forEach(function(item, i) {
    console.log(item);
    if (item instanceof GeometricFigure) {
      total.push(item.getArea());
      console.log("Geometric figure: " + item + " " + item.getArea());
    }
  });

  console.log("Total area: " + total.reduce((a, b) => a + b));
}
handleFigures(figures);
