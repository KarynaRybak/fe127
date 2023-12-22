let room = {
  height: 3,
  tv: 'samsung',
  big: true
};

console.log(room);
alert(typeof room.big);

let user = {
  name: "John",
  age: 30
};

if (user.age) {
console.log(user.age);
}

let users = {
  user_1: {
    name: "John",
    age: 30
  },
  user_2: {
    name: "Bob",
    age: 21
  },
  user_3: {
    name: "Anna",
    age: 19
  }
}

for(let key in users) {
  if(users[key].name === "Bob") {
  let bobUser = users[key];
  console.log(bobUser);
  break;
  }
}

for(let key in users) {
  if(users[key].name === "Anna"){
    delete users[key];
    break;
  }
}
console.log(users);

const obj = {
  id: 5,
  token: 12343423
 };

 const { id }  = obj;
console.log(id);

const car = {
  manufacturer: "Toyota",
  model: "Camry",
  year: 2022,
  averageSpeed: 90,
  fuelTankVolume: 60,
  averageFuelConsumption: 8,
  drivers:["John","Anna","Bob"],

  displayInfo: function () {
    console.log("Manufacturer: " + this.manufacturer);
    console.log("Model: " + this.model);
    console.log("Year: " + this.year);
    console.log("Average Speed: " + this.averageSpeed + " km/h");
    console.log("Fuel Tank Volume: " + this.fuelTankVolume + " liters");
    console.log("Average Fuel Consumption: " + this.averageFuelConsumption + " liters per 100 km");
    console.log("Drivers: " + this.drivers.join(", "));
},

addDriver: function (driverName) {
  this.drivers.push (driverName);
  console.log(`Driver ${driverName} has been added to the list.`);
},
checkDriver: function (driverName) {
  const isDriverInList = this.drivers.includes(driverName);
  if (isDriverInList) {
    console.log(`Driver ${driverName} is in the list.`);
  } else {
    console.log(`Driver ${driverName} is not in the list.`);
}
},
calculateTrip : function (distance) {
  const hoursWithoutBreaks = distance / this.averageSpeed;
  const breaks = Math.floor(hoursWithoutBreaks / 4);
  const totalHours = hoursWithoutBreaks + breaks;
  const totalFuelNeeded = (distance / 100) * this.averageFuelConsumption;
  console.log(`Total time for the trip: ${totalHours} hours`);
  console.log(`Total fuel needed for the trip: ${totalFuelNeeded} liters`);
}
};
car.displayInfo();
car.addDriver();
car.displayInfo();
car.calculateTrip(500); 