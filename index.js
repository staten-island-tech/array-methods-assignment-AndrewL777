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
    locker: ["53"],
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
    locker: ["1"],
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
    locker: ["73"],
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
const result = people.filter(locknumber);
{
  function locknumber(locker) {
    return locker >= 100;
  }
}
console.log(result);
