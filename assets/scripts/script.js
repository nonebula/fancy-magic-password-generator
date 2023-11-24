// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
//1. prompt to get user input for password
var passLength = prompt("Enter the length of your password (between 8 and 128 characters");
if (passLength < 8 || passLength > 128 || isNaN(passLength)) {
  alert("Invalid password length. Please enter a number between 8 and 128.");
  return;
}
//2. use confirm to ask whether to include others
var incLowerCase = confirm("Include lowercase characters?");
var incUpperCase = confirm("Include uppercase characters?");
var incNumber = confirm("Include numerical characters?");
var incSpecials = confirm("Include special characters?");
//3. validate user input (at least one character type selected)
if (!incLowerCase && !incUpperCase && !incNumber && !incSpecials){
  alert("Please select at least one character type.");
  return;
}
//4. return object containing user's chosen options
return {
  length: passLength,
  includeLowercase: incLowerCase,
  includeUppercase: incUpperCase,
  includeNumbers: incNumber,
  includeSpecials: incSpecials
};
}

// Function for getting a random element from an array
function getRandom(arr) {
  // Check if the array is empty
  if (arr.length === 0) {
    return null;
  }

  var randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

// Function to generate password with user input
function generatePassword() {
//steps:
//1. call getPasswordOptions to get the user's chosen options
var options = getPasswordOptions();
if (!options) {
// If options are not valid, return an empty string
      return '';
    }

    var allCharacters = '';

//2. based on choices, concatenate the selected character arrays into a single array
  if (options.includeLowercase) {
    allCharacters += lowerCasedCharacters.join('');
  }
  if (options.includeUppercase) {
    allCharacters += upperCasedCharacters.join('');
  }
  if (options.includeNumbers) {
    allCharacters += numericCharacters.join('');
  }
  if (options.includeSpecials) {
    allCharacters += specialCharacters.join('');
  }
//3. use a loop to generate a password of the specified length, randomly selecting characters from the array
var password = '';
for (var i = 0; i < options.length; i++) {
  password += getRandom(allCharacters);
}
//4. return the generated password.
return password;
}

// Get references to the #generate element all this below = done
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);