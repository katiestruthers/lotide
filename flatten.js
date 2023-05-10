const flatten = function(arr) {
  let newArr = [];
  let newArrPos = 0;

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      for (let j = 0; j < arr[i].length; j++) {
        newArr[newArrPos] = arr[i][j];
        newArrPos++;
      }
    } else {
      newArr[newArrPos] = arr[i];
      newArrPos++;
    }
  }

  return newArr;
};

module.exports = flatten;