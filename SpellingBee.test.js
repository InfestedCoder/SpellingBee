const SpellingBee = require('./SpellingBee');

test('all words include first letter', () => {
    const letters = ['w','a','l','n','t','d','i'];
    const words = SpellingBee(letters, 5);
    console.log(words);
    words.forEach((word)=>{
        expect(word.indexOf(letters[0])).toBeGreaterThan(-1);
    })
});