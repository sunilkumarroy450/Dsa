const defangIPaddr = function (address) {
  let str = address.split(".");
  console.log(str.join("[.]"));
};

defangIPaddr("1.1.1.1");

//Q2

var finalValueAfterOperations = function (operations) {
  let X = 0;

  for (let i = 0; i < operations.length; i++) {
    if (operations[i] === "X++" || operations[i] === "++X") {
      X++;
    } else {
      X--;
    }
  }
  return X;
};
const res1 = finalValueAfterOperations(["--X", "X++", "X++"]);
console.log(res1);
