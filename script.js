// Assignment Code
var generateBtn = document.querySelector("#generate");

//character strings
var lowers = 'abcdefghijklmnopqrstuvwxyz';
var uppers = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numbers = '0123456789';
var specials = '!@#$%^&*(){}[]=<>/,.';

//starting base variables
var characters;
var newPassword = [];


//Function to create password and write it into password box
function generatePassword() {
  var passwordLength = prompt('Please choose a length between 8 and 128 characters');
  while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) passwordLength = Number(prompt("Length must be 8-128 characters. How many characters would you like your password to be?"));

  var lowerChar = confirm('Do you want lowercase characters in your password?');
  var upperChar = confirm('Do you want uppercase characters in your password?')
  var numChar = confirm('Do you want numeric characters in your password?');
  var specialChar = confirm('Do you want special characters in your password?');

  while (!lowerChar && !upperChar && !numChar && !specialChar) {
    alert('You must select at least one character type!');
    lowerChar = confirm("Do you want lowercase characters in your password?");
    upperChar = confirm("Do you want uppercase characters in your password?");
    numChar = confirm("Do you want numeric characters in your password?");
    specialChar = confirm("Do you want special characters in your password?");
  }

  //if all 4 are true - combine all strings into one
  if (lowerChar && upperChar && numChar && specialChar) {
    characters = lowers.concat(uppers, numbers, specials);
  }

  //else if 3 are true
  else if (lowerChar && upperChar && numChar) {
    characters = lowers.concat(uppers, numbers);
  }

  else if (lowerChar && upperChar && specialChar) {
    characters = lowers.concat(uppers, specials);
  }

  else if (lowerChar && numChar && specialChar) {
    characters = lowers.concat(numbers, specials);
  }

  //else if 2 are true
  else if (lowerChar && upperChar) {
    characters = lowers.concat(uppers);
  }

  else if (lowerChar && numChar) {
    characters = lowers.concat(numbers);
  }

  else if (lowerChar && specialChar) {
    characters = lowers.concat(specials);
  }

  else if (upperChar && numChar) {
    characters = uppers.concat(numbers);
  }

  else if (upperChar && specialChar) {
    characters = uppers.concat(specials);
  }

  else if (numChar && specialChar) {
    characters = uppers.concat(specials);
  }

  //else if 1 is true
  else if (lowerChar) {
    characters = lowers;
  }

  else if (upperChar) {
    characters = uppers;
  }

  else if (numChar) {
    characters = numbers;
  }

  else if (specialChar) {
    characters = specials;
  }

  //Loop to generate characters for password
  for (var i = 0; i < passwordLength; i++) {
    var randomChar = characters[Math.floor(Math.random() * characters.length)];
    newPassword.push(randomChar);
  }

  //changes password array into a string
  var passwordFinal = newPassword.join('');

  //writes password into box
  var passwordText = document.querySelector("#password");
  passwordText.value = passwordFinal;
}






// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);

