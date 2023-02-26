// #Slection Sort;

// function Sort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     min = i;
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] < arr[min]) {
//         min = j;
//       }
//     }
//     swap(arr, min, i);
//   }
//   return arr;
// }

// function swap(arr, i, j) {
//   temp = arr[i];
//   arr[i] = arr[j];
//   arr[j] = temp;
// }

// let arr = [3, 5, 0, 9, 8];
// console.log(Sort(arr));

// #Bubble Sort
// function Sort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (var j = 0; j < arr.length - i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         swap(arr, j, j + 1);
//       }
//     }
//   }
//   return arr;
// }

// function swap(arr, i, j) {
//   temp = arr[i];
//   arr[i] = arr[j];
//   arr[j] = temp;
// }

// let arr = [3, 5, 0, 9, 8];
// console.log(Sort(arr));

//#Two Sorted Arrays
function Sort(arr1, arr2) {
  left = 0;
  right = arr2.length - 1;
  var count = 0;
  while (left < arr1.length && right >= 0) {
    if (arr1[left] > arr2[right]) {
      right--;
    } else if (arr1[left] < arr2[right]) {
      left++;
    } else {
      count++;
      left++;
      right--;
    }
  }
  return count;
}

let arr1 = [1, 2, 2, 3, 4, 5];
let arr2 = [4, 4, 3, 2, 1, 1];
console.log(Sort(arr1, arr2));
