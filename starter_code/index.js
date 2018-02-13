const Elevator = require('./elevator.js');

const Person= require('./person.js');

let myElevator = new Elevator ();
const per1= new Person ("Andrea", 4, 6);
const per2= new Person ("Ky", 7, 1);

myElevator.call(per1);
myElevator.call(per2)


console.log(myElevator.waitingList)
myElevator.start();