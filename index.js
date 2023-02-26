// #Slection Sort;

function Sort(arr) {
  for (let i = 0; i < arr.length; i++) {
    min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    swap(arr, min, i);
  }
  return arr;
}

function swap(arr, i, j) {
  temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

let arr = [3, 5, 0, 9, 8];
console.log(Sort(arr));
