// name count

// const arr = ["jay", "dee", "bee", "see", "jay"];
// let obj = {};

// for (let i = 0; i < arr.length; i++) {
//   if (obj[arr[i]] === undefined) {
//     obj[arr[i]] = 1;
//   } else {
//     obj[arr[i]] += 1;
//   }
// }

// for (let key in obj) {
//   if (obj[key] === 1) {
//     console.log(key, "1");
//   } else {
//     console.log(key, "2");
//   }
// }

const arr1 = [
  { name: "jay" },
  { name: "sunil" },
  { name: "jay" },
  { name: "rakesh" },
];

let obj1 = {};

for (let i = 0; i < arr1.length; i++) {
  if (obj1[arr1[i].name] === undefined) {
    obj1[arr1[i].name] = 1;
  } else {
    obj1[arr1[i].name] += 1;
  }
}

for (let key in obj1) {
  if (obj1[key] === 2) {g
    console.log(key);
  }
}
