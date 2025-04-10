// 1. Object Destructuring
const person = { name: "John", age: 25 };
const { name, age } = person;
console.log("Object Destructuring:", name, age); // John 25

// 2. Array Destructuring
const numbers = [1, 2, 3];
const [a, b, c] = numbers;
console.log("Array Destructuring:", a, b, c); // 1 2 3

// 3. Destructuring with Renaming
const user = { username: "alice", city: "Paris" };
const { username: userName, city: userCity } = user;
console.log("Destructuring with Renaming:", userName, userCity); // alice Paris

// 4. Destructuring in Function Parameters
const printUser = ({ name, age }) => {
  console.log("Destructuring with Function:", `${name} is ${age} years old`);
};
printUser({ name: "Bob", age: 30 }); // Bob is 30 years old

// 5. Destructuring with Rest Operator
const colors = ["red", "green", "blue", "yellow"];
const [first, second, ...restColors] = colors;
console.log("Destructuring with Rest Operator:", first, second, restColors); 
// red green [ 'blue', 'yellow' ]
