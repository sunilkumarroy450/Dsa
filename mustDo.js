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

//#Anagram
function Anagram(str1, str2) {
  str1 = str1.replace(/[^\w]/g, "").toLowerCase();
  str2 = str2.replace(/[^\w]/g, "").toLowerCase();

  return str1.split("").sort().join("") === str2.split("").sort().join("");
}

let str1 = "anagram";
let str2 = "nag a ram";

const res2 = Anagram(str1, str2);
if (res2) {
  console.log("It is an Anagram");
} else {
  console.log("It is not an Anagram");
}

//#Check Palindrome

function CheckPalindrom(str) {
  let bag = "";
  for (let i = str.length - 1; i >= 0; i--) {
    bag += str[i];
  }
  if (bag === str) {
    console.log("It is a Palindrom");
  } else {
    console.log("It is not a Palindrom");
  }
}

let str = "naman";
CheckPalindrom(str);
