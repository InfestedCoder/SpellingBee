const checkWord = require('check-word');
const words = checkWord('en');

/**
 * Generates words such that:
 *    Each word includes the first letter in the array
 *    Each word is at least four letters long
 * @param letters - array of letters to use in generated words
 * @param maxLength - maximum length of words to generate
 *
 * @returns array of generated words
 */
function generateWords(letters, maxLength){
  maxLength = maxLength || 5;

  let words = [];
  let letterCombinations = [...letters];

  for( var i = 2; i <= maxLength; i++ ){
    letterCombinations = generateLetterCombinations(letters, letterCombinations, words)
  }

  return words;
}

function generateLetterCombinations(letters, letterCombinations, words) {
  let newLetterCombinations = [];
  letters.forEach((letter)=>{
    console.log('generating ' + (letterCombinations[0].length + 1) + ' letter words starting with \'' + letter + '\'');
    letterCombinations.forEach((letterCombination)=>{
      const newLetterCombination = letter + letterCombination;
      newLetterCombinations.push(newLetterCombination);

      if( isValidWord(newLetterCombination, letters[0]))
        words.push(newLetterCombination);
    })
  })

  return newLetterCombinations;
}

function isValidWord(letterCombination, requiredLetter){
  return letterCombination.length > 3
      && letterCombination.indexOf(requiredLetter) != -1
      && words.check(letterCombination);
}

module.exports = generateWords