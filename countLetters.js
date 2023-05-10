const countLetters = function(string) {
  const letters = {};
  const noSpace = string.split(' ').join('');

  for (let letter of noSpace) {
    if (letter in letters) {
      letters[letter] += 1;
    } else {
      letters[letter] = 1;
    }
  }

  return letters;
};

module.exports = countLetters;