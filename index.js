const foods = [
  {
    food: "chicken",
    tasty: "tasty",
    cheap: "cheap",
    vegan: "not vegan",
  },
  {
    food: "lobster",
    tasty: "tasty",
    cheap: "expensive",
    vegan: "not vegan",
  },
  {
    food: "french fries",
    tasty: "tasty",
    cheap: "cheap",
    vegan: " vegan",
  },
  {
    food: "ice cream",
    tasty: "tasty",
    cheap: "cheap",
    vegan: "not vegan",
  },
  {
    food: "grapefruits",
    tasty: "not tasty",
    cheap: "cheap",
    vegan: "vegan",
  },
  {
    food: "wagyu beef",
    tasty: "tasty",
    cheap: "expensive",
    vegan: "not vegan",
  },
  {
    food: "noodles",
    tasty: "tasty",
    cheap: "cheap",
    vegan: "vegan",
  },
  {
    food: "eggs",
    tasty: "tasty",
    cheap: "cheap",
    vegan: "not vegan",
  },
  {
    food: "oysters",
    tasty: "not tasty",
    cheap: "expensive",
    vegan: "not vegan",
  },
];
foods.foreach((fd) => {
  fd.food.forEach((foods) => {
    console.log(foods);
  });
});
