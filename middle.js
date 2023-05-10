const middle = function(arr) {
  let middleArr = [];

  if (arr.length <= 2) {
    return middleArr;
  } else if (arr.length % 2 === 0) {
    middleArr[0] = arr[(arr.length / 2) - 1];
    middleArr[1] = arr[arr.length / 2];
  } else {
    middleArr[0] = arr[Math.floor(arr.length / 2)];
  }
  
  return middleArr;
};

module.exports = middle;