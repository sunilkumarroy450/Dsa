function ReduceString(str) {
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    if (stack.length != 0 && str[i] == stack[stack.length - 1]) {
      stack.pop();
    } else {
      stack.push(str[i]);
    }
  }
  if (stack.length == 0) {
    console.log("Empty String");
  } else {
    console.log(stack.join(""));
  }
}

let str = "aaabccddd";
ReduceString(str);
