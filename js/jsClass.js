console.log("a");
function Car(){
  let name="qm3";
  this.carName="qm3";
}
console.log(Car);
console.log(Car.prototype);
console.log(new Car());
console.log(Object.create(Car));
