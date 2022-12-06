const Training = () => {
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
    const items = [
      { type: "fruit", color: "green", name: "apple", quantity: 100 },
      { type: "fruit", color: "orange", name: "tangerine", quantity: 500 },
      { type: "vegetable", color: "purple", name: "eggplant", quantity: 50 },
      { type: "fruit", color: "yellow", name: "banana", quantity: 10000 },
      { type: "vegetable", color: "red", name: "tomato", quantity: 5000 },
      { type: "meat", color: "red", name: "beef", quantity: 10 },
    ];

    //prettier-ignore
    const quantitySum = items.reduce(
      (accumulator, currentValue) => accumulator + currentValue.quantity, 0
    );

    const groupedItems = items.reduce((group, item) => {
      const { color } = item;
      group[color] = group[color] ?? [];
      group[color].push(item);
      return group;
    }, {});

    console.log("grouped items:", groupedItems);
    console.log("reduced sum:", quantitySum);
  };

  const reverseArray = () => {
    // noncopying
    const array = ["a", "g", 500, { message: "hi" }];
    const reversedArray = [...array].reverse(); // we use spread syntax to make a shallow copy
    // if you just do array.reverse() you reverse the original array!
    console.log(array);
    console.log(reversedArray);
  };

  const shiftArray = () => {
    // noncopying
    // removes item at index 0 and returns it
    const array = [1, 2, 3];
    console.log(array.shift()); // returns 1
    console.log(array);
  };

  const unshiftArray = () => {
    // in place, adds at start
    const array = [1, 2, 3];
    array.unshift(-1, 0);
    console.log(array);
  };

  const sliceArray = () => {
    // copying
    const animals = ["ant", "bison", "camel", "duck", "elephant"];
    const sliced = animals.slice(1, 2);
    console.log(animals);
    console.log(sliced);
  };

  const spliceArray = () => {
    // in place
    const array = ["z", "g", "b", "x"];
    // array.splice(0, 1); // remove first
    // array.splice(0, 1, "hi"); // replace first with hi
    array.splice(0, 1, "what", "the", "heck"); // replace first with 3 elements
    console.log(array);
  };

  const useToLocaleString = () => {
    // https://www.w3schools.com/jsref/jsref_tolocalestring.asp
    const array = ["hello", 5, ["what"]];
    console.log(array.toLocaleString());
    const date = new Date();
    console.log(date.toLocaleString());
    console.log(
      date.toLocaleString("pl-PL", {
        dateStyle: "short",
        timeStyle: "short",
      })
    );
  };

  const objectMethods = () => {
    const array = [
      ["hi", "what"],
      ["does", "this"],
    ];

    const object = {
      name: "iPhone 13",
      modelId: "203ruyf9vh",
      weight: "305",
      price: "1099",
    };
    console.log(Object.values(object));
  };

  objectMethods();

  return <h1>Training</h1>;
};

export default Training;
