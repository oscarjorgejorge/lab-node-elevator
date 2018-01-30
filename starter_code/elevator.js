class Elevator {
  constructor(){
    this.floor      = 0;
    this.MAXFLOOR   = 10;
    this.requests   = [];
    this.direction;
    this.waitingList = [];
    this.passengers = [];
    this.requests = [];
  }

  start() { 
    const intervalId = setInterval(function (){
       update();
    }, 1000)
  }
  stop() {
    clearInterval(intervalId);
   }
  update() { 
    log();
  }
  _passengersEnter() { }
  _passengersLeave() { }
  floorUp() { 
    if (this.MAXFLOOR < 10) {
      this.floor ++;
    }
  }
  floorDown() { 
    if (this.floor > 0) {
      this.floor --;
    }
  }
  call(Person) { 
    const newPerson = new Person ('Juan', 0, 3);
    this.waitingList.push(newPerson);
    this.requests.push(newPerson.originFloor);
  }
  log() { 
    console.log(`Direction: ${this.direction} | Floor: ${this.floor}`)
  }
}

module.exports = Elevator;
