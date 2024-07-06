/*
Given a string, write a function "countLetters" that returns the most
common character within the sentence. If there are multiple characters
that appear the most, return the lexicographically smallest one
(e.g. if 'a' and 'b' are both the most common, return 'a' because it
is closest to the beginning of the alphabet). Be sure to exclude spaces
and punctuation.
*/

const countLetters = (str) => {
  const freq = {};
  let time = 0;
  let char = '';
  for(let letter of str) {
    if(freq[letter] === undefined) freq[letter] = 1;
    else {
      freq[letter] = freq[letter] + 1;
      if(freq[letter] > time){
        char = letter;
        time = freq[letter]
      }
      else if(freq[letter] === time) {
        if(char > letter) char = letter;
      }
    }
  }
  return char;
}



// console.log(countLetters("The quick, brown fox jumped over the lazy dog.")); // e


/*** Do not change the code after this line ***/

module.exports = {
	countLetters,
};
