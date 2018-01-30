class Person {
  constructor(name, originFloor, destinationFloor){
    this.name = name;
    this.originFloor = originFloor;
    this.destinationFloor = destinationFloor;
  }
}

const juan = new Person('Juan', 0, 3);



module.exports = Person;
