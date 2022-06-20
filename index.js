function isPalindrome(word) {
  // Write your algorithm here
 
 let revWord = word.split('').reverse().join('')
 return word === revWord
}

/* 
  Add your pseudocode here
  write a function that checks a string (word) to see if it is palidrome (same forwards and backwords)
  use .re
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
