// sum with while number

var i = 1;
var sum = 0;
while (i <= 20) {
  sum += i;
  i++;
}
console.log(sum);

//sum even number;

var i = 1;
var sum = 0;
while (i <= 10) {
  if (i % 2 === 0) {
    sum += i;
  }
  i++;
}
console.log(sum);

// sum of odd

var i = 1;
var sum = 0;
while (i <= 10) {
  if (i % 3 === 0) {
    sum += i;
  }
  i++;
}
console.log(sum);
