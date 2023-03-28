//#Bubble Sort;

function Sort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}

function swap(arr, i, j) {
  temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

let arr = [3, 5, 0, 9, 8];
const res = Sort(arr);
console.log(res);

//Or

function Sort1(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length - i; j++) {
      if (arr[j] < arr[j - 1]) {
        swap1(arr, j, j - 1);
      }
    }
  }
  return arr;
}

function swap1(arr, i, j) {
  temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

let arr1 = [3, 1, 0, 9, 8];
const res1 = Sort1(arr1);
console.log(res1);
