// name count

const arr = ["jay", "dee", "bee", "see", "jay"];
let obj = {};

for (let i = 0; i < arr.length; i++) {
  if (obj[arr[i]] === undefined) {
    obj[arr[i]] = 1;
  } else {
    obj[arr[i]] += 1;
  }
}

for (let key in obj) {
  if (obj[key] === 1) {
    console.log(key, "1");
  } else {
    console.log(key, "2");
  }
}
