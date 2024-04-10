// avg of even no from 1 to 100;
var i = 1;
var sum = 0;
var count = 0;
while (i <= 100) {
  if (i % 2 === 0) {
    sum += i;
    count++;
  }
  i++;
}

var avg = sum / count;
console.log(avg);
