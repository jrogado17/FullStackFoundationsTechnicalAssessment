/* Write your code here! */

/**
 * The code below exports your functions so they can be tested.
 * Notice that the names are currently commented out.
 * Uncomment the functions as you write them.
 */




// Problem 1
function exclaim(mystr) { // define a function called exclaim that expects a string
  if (typeof mystr !== "string") {  // check if input is string. if not,display "error"
    return "error";
  } else { // if input is string, return string with a "!" appended to the end
    return mystr + '!';
  }
}


// Problem 2
function getAreaOfTrapezoid(a, b, h) { // define a function called getAreaofTrapezoid that expects numbers that are postive
  if (typeof a !== "number" || a <= 0) { // check if number is a number or is nonpositive. if not, display "error"
    return "error";
  } else if (typeof b !== "number" || b <= 0) { // check if number is a number or is nonpositive. if not, display "error"
    return "error";
  } else if (typeof h !== "number" || h <= 0) { // check if number is a number or is nonpositive. if not, display "error"
    return "error";
  } else { // of number is a number and is postive, preform calculation below to find area of a trapezoid
    return (a + b) * h / 2;
  }
}

// Problem 3
function isStringTooLong(string){ // define a function called isStringTooLong that expects a string
  if (typeof string !== "string") {  //returns "error" if the given argument is not a string
    return "error";
  }else if (string.length <= 26) { //returns false when a string is not too long
    return false;
  }else { //returns true when a string is too long
    return true;
  }
}

//Problem 4
function alternateCaps(string){
  if (typeof string !== "string") {  //returns "error" if the given argument is not a string
    return "error";
  } else {
    string = string.split(''); // let string be an array
    for (let i = 0; i < string.length; i++) { 
      if (i % 2 === 0){ // if index of the string is even, then set it to lowercase 
        string[i] = string[i].toLowerCase();
      } else { // for odd indexes of the string, then set to uppercase
        string[i] = string[i].toUpperCase();
      }
    }; // end of for loop

    return string.join(''); // turn array into string
  }
}
 // Problem 5

function reverse(array){ // set function to be defined as reverse with input 'array'
  let i = 0; // set i = 0 for index position 0
  let j = array.length-1; // set j equal to the last position of the array

  while (i !== j) { // while loop for i not equal to j (not the same position)
    const temp = array[i]; // swapping index position i with index position j
    array[i] = array[j]
    array[j] = temp;
    i++;
    j--;
  }
  return array;
}

// Problem 6
function getMostVowels(string){
  if (typeof string !== "string") {  //returns "error" if the given argument is not a string
    return "error";
  };

  let wordWithMostVowels = "";
  let maxVowelCount = 0;

  const vowels=["a","e","i","o","u"]; // set vowels 
  string = string.split(" "); // set string to equal every word (not every letter)
  for (let i = 0; i < string.length; i++){ // for loop to look at the word
    let count = 0; // when every new word starts it initalizes to 0
    const word = string[i];
    for (let j = 0; j < word.length; j++){ // for loop to look at the letters within the word
      const letter = word[j]; // looks at the letter in the word
      if (vowels.includes(letter)){ // checks to see if word includes the vowel letters
        count++; // go to next word
        if (count > maxVowelCount) {  
          maxVowelCount = count; // let maxVowelCount equal to count 
          wordWithMostVowels = word; // store word with most vowels
        }
      }
    }
  }

  return wordWithMostVowels; // return word with most vowels or empty string
}
//Problem 7
function createMultiplicationTable(num1, num2){
  if (typeof num1 !== "number") {  //returns "error" if the given argument is not a number 
    return "error";
  } else if (typeof num2 !== "number") {  //returns "error" if the given argument is not a number 
    return "error";
  }
  if (num1 === 0 || num2 === 0){ // returns an empty array if either argument is 0
    return [];
  }

  let output = [];
  for (let i = 1; i <= num1; i++) { // check to see how many arrays needs to be outputed
    let currTable = []; // let currTable be empty array
    for (let j = 1; j <= num2; j++) { // check to see how many numbers need to be in the array and multiply it with i
      currTable.push(i * j); // add i*j to the back of the array 
    }
    output.push(currTable) // add currTable to output
  }

  return output;
} 

module.exports = {
  exclaim,
  getAreaOfTrapezoid,
  isStringTooLong,
  alternateCaps,
  reverse,
  getMostVowels,
  createMultiplicationTable,
};
