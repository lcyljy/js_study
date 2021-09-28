function Car(){
  this.a="qm3";
  this.move=function(){
    console.log("움직여라 차야")
  };
}
Car.prototype.move2=function(){
  console.log("move2 움직인다 차야");
}
console.group("Car","start");
console.log(Car);
console.log(Car.prototype);
console.log(Car.a);
console.groupEnd("Car","end");

//함수에 선언된 멤버를 사용하려면 함수를 객체로 생성해야한다.
//new 연산자를 선언하면 Car 함수를 복사해서 새로운 prototype을 생성
console.group("new Car()","start");
const car = new Car();
console.log(car); //새롭게 생성된 객체의 프로토타입.
car.move();
console.log(car.a);
console.log(car.__proto__);//설계도가 되는 부모의 Car.prototype
car.__proto__.move2();
console.groupEnd();
//
console.group("Object.create(Car)","start");

const car2 = Object.create(Car);
//Car.prototype을 복제해서 car2 참조
//Car는 car2.__proto__가 참조한다,
console.log("car2",car2);
console.log("car2.a",car2.a);
//car2.move();
console.log("car2.prototype",car2.prototype);
car2.prototype.move2();
console.log("car2.__proto__",car2.__proto__);
console.groupEnd();

console.group("Object.create(new Car())","start");
const car3 = Object.create(new Car());
//car3 독자적인 프로토타입 있다.
//car3 부모로 new Car() __proto__가 참조한다.
//{}==new Object()
console.log("car3.a",car3.a);
car3.move();
car3.move2();
console.log("car3",car3);
console.log("car3.__proto__",car3.__proto__); //new Car()
console.log("car3.__proto__.__proto__",car3.__proto__.__proto__);// Car.prototype
console.log("car3.__proto__.__proto__.__proto__",car3.__proto__.__proto__.__proto__);// Object.prototype
console.log("car3.__proto__.__proto__.__proto__.__proto__",car3.__proto__.__proto__.__proto__.__proto__);//null prototype
console.groupEnd();

console.log(()=>{}); //익명함수는 객체가 아니라 진짜 실행만 있는 함수



//
