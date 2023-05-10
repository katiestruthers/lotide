const without = function(source, itemsToRemove) {
  const returnArr = [];

  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      returnArr.push(source[i]);
    }
  }

  return returnArr;
};

module.exports = without;