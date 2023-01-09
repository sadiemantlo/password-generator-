// Assignment Code
var generateBtn = document.querySelector("#generate");
const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const alphabetLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j","k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "=", "+", "?"];
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

const generatePassword = function() {
    var pool = [];
    var characterAmount = window.prompt("How many characters would you like your password to contain?");
    if (!characterAmount || characterAmount < 8 || characterAmount > 128) {
      window.alert("You must select a character amount between 8-128");
      return("sorry dude :/ try again");
    }
    var specialChar = window.confirm("Would you like to use special characters?");
    var upperCase = window.confirm("Would you like to use uppercase letters?");
    var lowerCase = window.confirm("Would you like to use lowercase letters?");
    var num = window.confirm("Would you like to use numbers?");

    if (specialChar) {
        pool = pool.concat(specialCharacters);
      }
      if (upperCase) {
        pool = pool.concat(alphabet);
      }
      if (lowerCase) {
        pool = pool.concat(alphabetLower);
      }
      if (num) {
        pool = pool.concat(numbers);
      }
      // make a thing that doesn't allow them to not select any type of character
      if (characterAmount >= 8 && characterAmount <= 128) {
        var poolPassword = ""
        for (i = 0; i < characterAmount; i++) {
          var index = Math.floor(Math.random() * pool.length)
          poolPassword = poolPassword + pool[index]
        }
      }
      if (!specialChar && !upperCase && !lowerCase && !num) {
        window.alert("Come on man... how do you expect me to generate a password with no letters, numbers or special characters?? Please select one");
        return("just pick one it's not that hard");
      }
      return poolPassword
    }
 
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
 
  passwordText.value = password;
 
}
 
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);