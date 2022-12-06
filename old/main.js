console.log("Welcome to Training");

const sections = Array.from(document.getElementsByTagName("section"));
sections.forEach((section) => {
  section.addEventListener("click", (e) => {
    section.classList.toggle("closed");
  });
});

const shallowCopy = () => {
  const recipe = ["pasta", { list: ["eggs", "flour", "water"] }];
  console.log(recipe);
  const ingredientsList = Array.from(recipe);
  console.log(ingredientsList);
  // now play ONE of these
  ingredientsList[1].list = ["banana", "apple", "melon"]; // stays connected to original
  ingredientsList[1] = { list: ["ketchup", "concrete", "bees"] }; // disconnects from original
  //
  console.log("///// AFTER /////");
  console.log(recipe);
  console.log(ingredientsList);
};

const arrayLength = () => {
  const fruits = ["mango", "banana", "apple"];
  console.log(fruits.length, fruits);
  fruits[6] = "pear"; // adds empty slots in between
  console.log(fruits.length, fruits);
  fruits.length = 3; // it deletes elements
  console.log(fruits.length, fruits);
};

const everyElement = () => {
  function testFunction(item) {
    console.log(item);
    return item < 50;
  }
  const testArray = [1, 5, 60, 20, 5, 6];
  console.log(testArray.every(testFunction)); // if all items are returned, returns true
};

const someElement = () => {
  const array = [1, 2, 3, 4];
  containsEven = array.some((item) => item > 3);
  console.log(containsEven);
};

const filterElements = () => {
  const words = ["hi", "house", "tornado", "javascript"];
  const result = words.filter((item) => item.length < 5);
  console.log(result);
};

const findElements = () => {
  // finds FIRST or LAST element that satisfies the function conditional
  const array = [1, 5, 600, 24000, 15000, 0, "g", { message: "error" }];
  const finderFunc = (item) => item > 10000;
  const found = array.find(finderFunc); // first
  const foundIndex = array.findIndex(finderFunc); // first
  const foundLast = array.findLast(finderFunc); // last
  const foundLastIndex = array.findLastIndex(finderFunc); // last
  console.log("index", foundIndex, "is", found);
  console.log("Reversed:", foundLastIndex, "is", foundLast);
};

const flatMap = () => {
  const array = [
    1,
    5,
    [600, 300, 60000],
    { message: "hello" },
    "I'm a string!",
  ];

  const flatArray = array.flatMap((item, index, array) => {
    console.log(index, array);
    return item;
  });
  console.log(array);
  console.log(flatArray);
};

const groupItems = () => {
  // EXPERIMENTAL: poor browser compatibility
  const items = [
    { type: "material", name: "wood", quantity: 100 },
    { type: "material", name: "concrete", quantity: 500 },
    { type: "material", name: "plastic", quantity: 50 },
    { type: "product", name: "box", quantity: 10000 },
    { type: "product", name: "book", quantity: 5000 },
    { type: "staff", name: "worker", quantity: 10 },
  ];

  const groups = items.group(({ type }) => type == "material");
  console.log(groups);
};

const mapItems = () => {
  const testArray = [
    { key: "hi", value: 50 },
    { key: "doyou", value: 60 },
    { key: "work", value: 700 },
  ];

  const mappedArray = testArray.map(({ key, value }) => {
    return { [key]: value }; // this is NOT a Map yet
  });

  console.log(mappedArray);
};

const reduceArray = () => {
  const array = [
    { type: "material", name: "wood", quantity: 100 },
    { type: "material", name: "concrete", quantity: 500 },
    { type: "material", name: "plastic", quantity: 50 },
    { type: "product", name: "box", quantity: 10000 },
    { type: "product", name: "book", quantity: 5000 },
    { type: "staff", name: "worker", quantity: 10 },
  ];

  const array2 = [1, 2, 3, 4];

  const quantitySum = array.reduce(
    (accumulator, currentValue) => accumulator + currentValue.quantity,
    0
  );

  const sum = array.reduce(
    (accumulator, currentValue) => accumulator + currentValue.quantity,
    0
  );

  console.log("reduced sum:", quantitySum);
};

reduceArray();
