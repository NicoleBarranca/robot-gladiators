// we declare an array using squared brackets as seen below. We keep track of the items inside of an array via their index number (which will always start with 0)
var people = ["Will Smith", "Jaiden Smith", "Willow Smith"];
// if we need to grab an item from within an array, we do so using squared bracket notation as seen below. Inside the squared brackets, we would put down the index number of the item we're trying to grab.
console.log(people[0]);
// we declare an object by using curly brackets and property value pairs separated by commas as seen below.
var person = {
  firstName: "Will",
  lastName: "Smith",
  age: 52
};
// if we need to grab a property from within an object, we do so using dot notation as seen below. We call of the object followed by a dot followed by the property name itself
console.log(person.firstName);
var person = {
  firstName: "Will",
  lastName: "Smith",
  age: 52,
  children: ["Jaiden Smith", "Willow Smith"],
  // a method is a function that lives as a property inside of an object
  fullName: function() {
    return this.firstName + " " + this.lastName
  }
};
console.log(person.children[1]);
var people = [
  {
    firstName: "Will",
    lastName: "Smith",
    age: 52,
  },
  {
    firstName: "Jaiden",
    lastName: "Smith",
    age: 22,
  },
  {
    firstName: "Willow",
    lastName: "Smith",
    age: 19,
  },
];
console.log(people[2].age)
// paramaters are a sort of placeholder whenever you're creating a function. They do not hold a value until the function is executed and an argument is passed into that function execution
function adder(x, y) {
  console.log(x); // 1
  console.log(y); // 2
}
function adder(x, y) {
  return (x + y);
}
// arguments are the items we pass into the parenthesis when we are executing a function. The arguments are what give our parameters a value
console.log(adder(1, adder(4, 5)));