// Assignment Code
var generateBtn = document.querySelector("#generate");

// Define lists of potential characters for the password
var lowerChar = 'abcdefghijklmnopqrstuvwxyz';
var upperChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numericChar = '1234567890';
var specialChar = '!"#$%&()*+,-./:;<=>?@^_`{|}~';

function generatePassword(){
    // Ask user input for password length, then verify to continue creating password
    var passwordLength = prompt("Please enter your desired password length.");
    if (passwordLength >= 8 && passwordLength <= 128){
      // Create an array to include elegible characters, then add characters as user
      // picks
      var elegibleChar = [];
      var lowercase = window.confirm("Would you like to include lowercase letters?");
      if (lowercase){
        elegibleChar += lowerChar.split('');
      }
      var uppercase = window.confirm("Would you like to include uppercase letters?");
      if (uppercase){
        elegibleChar += upperChar.split('');
      }
      var numeric = window.confirm("Would you like to include numeric characters?");
      if (numeric){
        elegibleChar += numericChar.split('');
      }
      var special = window.confirm("Would you like to include special characters?");
      if (special){
        elegibleChar += special.split('');
      }
      // Validate that user selected at least one character type
      if (!lowercase && !uppercase && !numeric && !special){
        window.alert("You must select at least one character type. Please try again.");
      } else{
        // For loop that chooses random characters up until the password lenght, using
        // elegible characters
        for (let i = 0; i < passwordLength; i++){
          var password = '';
          password += elegibleChar[Math.random()*passwordLength];
        }
      }
    } else {
      window.alert("You have entered an invalid number of characters. Please try again.")
    }

}

// Write password to the #password input
function writePassword() {
  // Generate the password
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
