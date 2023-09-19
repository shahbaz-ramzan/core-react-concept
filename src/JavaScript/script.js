// let arr = [1, 2, 3, 4];

// function fun(arr) {
//   var arr2 = arr;
//   console.log(arr2);
// }
// fun(arr);
// console.log(arr);

// let array = [1, 2, 3, 4];
// let newArray = [...array];
// console.log(newArray);
// newArray = [...array, 5, 6];
// console.log(newArray);
// console.log(array);

// DEEP COPY

// const develop1 = {
//   name: "shahbaz",
//   age: 25,
// };

// const develop2 = JSON.parse(JSON.stringify(develop1));
// develop2.age = 27;
// console.log(develop1);
// console.log(develop2);

// shallow copy with refernce to an other variable

const develop1 = {
  name: "shahbaz",
  age: 25,
  address: {
    country: "pakistan",
    state: "punjab",
    city: "bwp",
  },
};

// const develop2 = develop1;
// develop2.age = 27;
// console.log(develop1);
// console.log(develop2);

const develop2 = Object.assign({}, develop1);
develop2.age = 27;
develop2.address.city = "lahore";
console.log(develop1);
console.log(develop2);
