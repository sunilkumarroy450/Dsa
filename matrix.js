//#nTraversal

function nTraversal(matrix) {
  var bag = "";
  for (var i = matrix.length - 1; i >= 0; i--) {
    bag += matrix[i][0] + " ";
  }

  for (i = 1, j = 1; i < matrix.length && j < matrix.length; i++, j++) {
    bag += matrix[i][j] + " ";
  }

  for (i = matrix.length - 2; i >= 0; i--) {
    bag += matrix[i][matrix.length - 1] + " ";
  }
  console.log(bag);
}

let mat = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
nTraversal(mat);

//##Reverse N Traversal
function reverseNtraversal(matrix) {
  var bag = "";
  for (var i = 0; i < matrix.length; i++) {
    bag += matrix[i][0] + " ";
  }

  for (var i = matrix.length - 2; i >= 0; i--) {
    bag += matrix[i][matrix.length - 1 - i] + " ";
  }

  for (var i = 1; i < matrix.length; i++) {
    bag += matrix[i][matrix.length - 1] + " ";
  }
  console.log(bag);
}

let mat1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
reverseNtraversal(mat1);

//##Spiral Traversal (Rectangular Matrix)

function SpiralTraversal(arr, N, M) {
  top = 0;
  left = 0;
  bottom = N - 1;
  right = M - 1;
  size = N * M;
  ans = [];
  while (ans.length < size) {
    for (i = top; i <= bottom && ans.length < size; i++) {
      //traversing the left most unvisited column from top to botoom
      ans.push(arr[i][left]);
    }
    left++; //incrementing the left boundary

    for (i = left; i <= right && ans.length < size; i++) {
      //traversing the bottom most unvisited row from left to right
      ans.push(arr[bottom][i]);
    }
    bottom--; //decrementing the bottom boundary

    for (i = bottom; i >= top && ans.length < size; i--) {
      //traversing the right most unvisited column from bottom to top
      ans.push(arr[i][right]);
    }
    right--; //decrementing the right boundary

    for (i = right; i >= left && ans.length < size; i--) {
      //traversing the top most unvisited row from right to left
      ans.push(arr[top][i]);
    }
    top++; //incrementing the top boundary
  }
  console.log(ans.join(" "));
}

let mat2 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];
let N = 3;
let M = 4;
SpiralTraversal(mat2, N, M);
