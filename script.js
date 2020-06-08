// Assignment Code
var generateBtn = document.querySelector("#generate");
//generateBtn gets the first element with the id generate -> <button>
//<button> is now generateBtn

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
//passwordText gets the first element with the id password -> <textarea>
//<textarea> is now passwordText

  passwordText.value = password;
  ///the generated password becomes the passwordText

}


var lowers = 'abcdefghijklmnopqrstuvwxyz';
var uppers = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numbers = '0123456789';
var specials = '!@#$%^&*(){}[]=<>/,.';

var characters;

var newPassword = '';




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

  for (var i = 0; i < passwordLength.length; i++) {
    var randomChar = characters[Math.floor(Math.random() * characters.length)];
    newPassword.push(randomChar);
    console.log(newPassword)
  }


}






// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
///when the button is clicked, the writePassword function starts


//Let it know which character types are allowed
//Tell it to pick a random character type from the 4 character types
//then pick a random character from that type's string
//add that character to newPassword (push to variable string)
//do this as many types as the value of passwordLength
