const people = [
  {
    name: "John",
    animal: "chicken",
    color: "blue",
    device: "ipad",
    locker: ["142"],
  },
  {
    name: "Bob",
    animal: "lobster",
    color: "red",
    device: "phone",
    locker: ["54"],
  },
  {
    name: "Jake",
    animal: "cow",
    color: "phone",
    device: "laptop",
    locker: ["643"],
  },
  {
    name: "Harry",
    animal: "fish",
    color: "orange",
    device: "phone",
    locker: ["16"],
  },
  {
    name: "Link",
    animal: "lamb",
    color: "green",
    device: "laptop",
    locker: ["2"],
  },
  {
    name: "Anson",
    animal: "duck",
    color: "purple",
    device: "phone",
    locker: ["72"],
  },
  {
    name: "Jayson",
    animal: "crab",
    color: "orange",
    device: "laptop",
    locker: ["73"],
  },
  {
    name: "Taylor",
    animal: "shrimp",
    color: "black",
    device: "macbook",
    locker: ["42"],
  },
  {
    name: "Hunter",
    animal: "oyster",
    color: "white",
    device: "ipad",
    locker: ["13"],
  },
];


people.forEach((person) => {
    console.log(person.name);
    person.locker.forEach((list) => {
      console.log(list);
    });
  }); 

const abovehundred = people.filter(function(person){
  return person.locker > 100;
})
console.log(abovehundred)

