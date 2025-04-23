function Animal(name){
  this.name = name;
}
Animal.prototype.speak = function(){
  console.log("barks");
}
function Dog(name,breed){
  Animal.call(this,name);
  this.breed = breed;
}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.getBreed = function(){
  return this.breed;
}

const myDog = new Dog('Rex', 'German Shepherd');

console.log(myDog.name); // Logs: "Rex"
console.log(myDog.breed); // Logs: "German Shepherd"
console.log(myDog.getBreed());
myDog.speak();

console.log(Animal.prototype);
console.log(Dog.prototype);
