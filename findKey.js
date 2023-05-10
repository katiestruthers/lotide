const findKey = function(object, callback) {
  for (const item in object) {
    if (callback(object[item])) {
      return item;
    }
  }
};

module.exports = findKey;
