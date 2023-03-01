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
