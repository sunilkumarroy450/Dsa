//#Reduce String
// function ReduceString(str) {
//   let stack = [];
//   for (let i = 0; i < str.length; i++) {
//     if (stack.length != 0 && str[i] == stack[stack.length - 1]) {
//       stack.pop();
//     } else {
//       stack.push(str[i]);
//     }
//   }
//   if (stack.length == 0) {
//     console.log("Empty String");
//   } else {
//     console.log(stack.join(""));
//   }
// }

// let str = "aaabccddd";
// ReduceString(str);

//#Masai Palindromic Substring

function MasaiPalindromicSubstring(S) {
  var ans = 0;
  for (var i = 0; i < S.length; i++) {
    for (var j = i; j < S.length; j++) {
      var bag = "";

      for (var k = i; k <= j; k++) {
        bag = bag + S[k];
      }

      var rev_bag = "";

      for (var n = j; n >= i; n--) {
        rev_bag = rev_bag + S[n];
      }
      if (bag == rev_bag) {
        if (ans < bag.length) {
          ans = bag.length;
        }
      }
    }
  }
  console.log(ans);
}

let str = "thisracecarisgood";
MasaiPalindromicSubstring(str)