const checkWord = require('check-word');
const words = checkWord('en');

const letters = ['w','a','l','n','t','d','i'];

// Each word must be at least 4 letters long
// Each word must include the first letter in the array

let twoLetterWords = [];
for(var i=0; i<letters.length; i++){    
  twoLetterWords.push(createWords(letters[i],letters));
}

twoLetterWords = twoLetterWords.flat();
console.log(twoLetterWords);

let threeLetterWords = [];
for(var i=0; i<letters.length; i++){
  threeLetterWords.push(createWords(letters[i],twoLetterWords));
}

threeLetterWords = threeLetterWords.flat();
console.log(threeLetterWords);

let fourLetterWords = [];
for(var i=0; i<letters.length; i++){
  fourLetterWords.push(createWords(letters[i],threeLetterWords));
}

fourLetterWords = fourLetterWords.flat();
console.log(fourLetterWords);

let fiveLetterWords = [];
for(var i=0; i<letters.length; i++){
  fiveLetterWords.push(createWords(letters[i],fourLetterWords));
}

fiveLetterWords = fiveLetterWords.flat();
console.log(fiveLetterWords);

let sixLetterWords = [];
for(var i=0; i<letters.length; i++){
  sixLetterWords.push(createWords(letters[i],fiveLetterWords));
}

sixLetterWords = sixLetterWords.flat();
console.log(sixLetterWords);

let sevenLetterWords = [];
for(var i=0; i<letters.length; i++){
  sevenLetterWords.push(createWords(letters[i], sixLetterWords));
}

sevenLetterWords = sevenLetterWords.flat();
console.log(sevenLetterWords);


function createWords(firstLetter, newLetters) {
  var letters = [];
  for(var i=0; i<newLetters.length; i++){
    const word = firstLetter + newLetters[i];
    if(words.check(word) || true){
      letters.push(word);     
    }
  }
  return letters;
}