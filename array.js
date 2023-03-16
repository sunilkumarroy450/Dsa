const buildArray = function (nums) {
  const n = nums.length;
  const ans = new Array(n);
  for (let i = 0; i < n; i++) {
    ans[i] = nums[nums[i]];
  }
  return ans;
};

const arr = [0, 2, 1, 5, 3, 4];
console.log(buildArray(arr));

//Q2

var getConcatenation1 = function (nums) {
  const ans = [...nums, ...nums];
  return ans;
};

const res1 = getConcatenation1([1, 2, 1]);
console.log(res1);

// OR

var getConcatenation = function (nums) {
  let n = nums.length;
  let ans = new Array(2n);
  for (let i = 0; i < n; i++) {
    ans[i] = nums[i];
    ans[i + n] = nums[i];
  }
  return ans;
};

const res = getConcatenation([1, 2, 1]);
console.log(res);
