// Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
let challenge = '30 Days of JavaScript'

// Print the string on the browser console using console.log()
console.log("------------------Print String to browser console-----------");
console.log(challenge);

// Print the length of the string on the browser console using console.log()
console.log("------------------Print the length of the string-------------------");
console.log(length(challenge));

// Change all the string characters to capital letters using toUpperCase() method
console.log("------------------Convert string to UpperCase---------------------");
console.log(challenge.toUpperCase());

// Change all the string characters to lowercase letters using toLowerCase() method
console.log("------------------Convert string to lowercase----------------------");
console.log(challenge.toLowerCase());

// Cut (slice) out the first word of the string using substr() or substring() method
console.log("--------------------Slice out the first word of the string using substring method ----------------------");
console.log(challenge.substring(0,3));

// Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
console.log("--------------Slice out Days of Javascript from string------------------");
console.log(challenge.substring(3,21));

// Check if the string contains a word Script using includes() method
console.log("---------------------Check if string contains a word using include() method-------------");
console.log(challenge.includes('Days'));

// Split the string into an array using split() method
console.log("------------------------Split the string into an array using split method------------------ssss");
console.log(challenge.split());

// Split the string 30 Days Of JavaScript at the space using split() method
console.log("------------------Split the string at the space-----------------------");
console.log(challenge.split(' '));

// 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
console.log("---------------Split the string at space---------------");
let split_string = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(split_string.split(','));

// Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
console.log("----------Replace Method------------------");
console.log(challenge.replace('JavaScript', 'Python'));

// What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
console.log("---------character at method-----------------");
console.log("Character at 15th index-",challenge.charAt(15));

// What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
console.log("-----------------------------Character code of ----------------------");
console.log(challenge.charCodeAt("Character code of J - ",'J'));

// Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
console.log("------------------Position of the first occurence-------------------");
console.log(challenge.indexOf('a'))

// Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
console.log("--------------------last index to determine the position of last occurence-------------");
console.log(challenge.lastIndexOf('in'));

// Use indexOf to find the position of the first occurrence of the word because in the following sentence:
let sentence = 'You cannot end a sentence with because because because is a conjunction'
console.log(sentence.indexOf('because'));

// Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:
let sentence2 = 'You cannot end a sentence with because because because is a conjunction'
console.log(sentence.lastIndexOf('because'));

// Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(sentence2.search('because'));

// Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g 
let trim_fun=' 30 Days Of JavaScript '
console.log(trim_fun.trim(' '));

// Use startsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(trim_fun.startsWith('30'));

// Use endsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(trim_fun.endsWith('script'));

// Use match() method to find all the a’s in 30 Days Of JavaScript
console.log(trim_fun.match('a'));

// Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
let string1='30 Days of'
let string2 = 'JavaScript'
console.log(trim_fun.concat(string1, string2));

// Use repeat() method to print 30 Days Of JavaScript 2 times
console.log(trim_fun.repeat(2));

