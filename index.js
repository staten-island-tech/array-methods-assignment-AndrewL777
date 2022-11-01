const foods = [
  {
    item: "chicken",
    tasty: "tasty",
    cheap: "cheap",
    habitat: ["land"],
  },
  {
    item: "lobster",
    tasty: "tasty",
    cheap: "expensive",
    habitat: ["sea"],
  },
  {
    item: "beef",
    tasty: "tasty",
    cheap: "cheap",
    habitat: ["land"],
  },
  {
    item: "fish",
    tasty: "tasty",
    cheap: "cheap",
    habitat: ["sea"],
  },
  {
    item: "lamb",
    tasty: "not tasty",
    cheap: "cheap",
    habitat: ["land"],
  },
  {
    item: "duck",
    tasty: "tasty",
    cheap: "cheap",
    habitat: ["land,sea"],
  },
  {
    item: "crabs",
    tasty: "tasty",
    cheap: "cheap",
    habitat: ["land,sea"],
  },
  {
    item: "shrimp",
    tasty: "tasty",
    cheap: "cheap",
    habitat: ["sea"],
  },
  {
    item: "oysters",
    tasty: "not tasty",
    cheap: "expensive",
    habitat: ["land,sea"],
  },
];

foods.forEach((animal) => {
  console.log(animal.item);
  animal.habitat.forEach((list) => {
    console.log(list);
  });
});
