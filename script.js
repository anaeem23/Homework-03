// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // Asking for criteria and confirming they chose something
  var characterTest = 0;
  while (characterTest === 0) {
    var lowerCase = confirm(
      `Would you like to include lowercase characters? OK for YES, Cancel for NO`
    );
    var upperCase = confirm(
      `Would you like to include Uppercase characters? OK for YES, Cancel for NO`
    );
    var numericCase = confirm(
      `Would you like to include numeric characters? OK for YES, Cancel for NO`
    );
    var specialCase = confirm(
      `Would you like to include special characters? OK for YES, Cancel for NO`
    );

    if (!lowerCase && !upperCase && !numericCase && !specialCase) {
      alert("You did not say yes to any of the criteria, please try again");
    } else {
      characterTest = 1;
    }
  }

  var numberTest = 0;

  while (numberTest === 0) {
  var numberCharacters = prompt(
    `How many characters should your password be? Must choose a number between 8 and 24`
  );

  if (numberCharacters<8 || numberCharacters>24) {
    alert("You put a number which is either less than 8 or greater than 24. Please try again.");
  } else {
    numberTest =1;
  }
  }



  var lower = "abcdefghijklmnopqrstuvwxyz";
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numeric = "0123456789";
  var special = "!#$%&()*+,-./:;<=>?@[]^_`{}|~";
  var text = " ";

  if (lowerCase && upperCase && numericCase && specialCase) {
    var possible = lower + upper + numeric + special;
    for (var i = 0; i < numberCharacters; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
  } else if (!lowerCase && upperCase && numericCase && specialCase) {
    var possible = upper + numeric + special;
    for (var i = 0; i < numberCharacters; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
  } else if (!lowerCase && !upperCase && numericCase && specialCase) {
    var possible = numeric + special;
    for (var i = 0; i < numberCharacters; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
  } else if (!lowerCase && !upperCase && !numericCase && specialCase) {
    var possible = special;
    for (var i = 0; i < numberCharacters; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
  } else if (lowerCase && !upperCase && numericCase && specialCase) {
    var possible = lower + numeric + special;
    for (var i = 0; i < numberCharacters; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
  } else if (lowerCase && !upperCase && !numericCase && specialCase) {
    var possible = lower + special;
    for (var i = 0; i < numberCharacters; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
  } else if (lowerCase && !upperCase && !numericCase && !specialCase) {
    var possible = lower;
    for (var i = 0; i < numberCharacters; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
  } else if (lowerCase && upperCase && !numericCase && specialCase) {
    var possible = lower + upper + special;
    for (var i = 0; i < numberCharacters; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
  } else if (lowerCase && upperCase && !numericCase && !specialCase) {
    var possible = lower + upper;
    for (var i = 0; i < numberCharacters; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
  } else if (!lowerCase && upperCase && !numericCase && !specialCase) {
    var possible = upper;
    for (var i = 0; i < numberCharacters; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
  } else if (lowerCase && upperCase && numericCase && !specialCase) {
    var possible = lower + upper + numeric;
    for (var i = 0; i < numberCharacters; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
  } else if (!lowerCase && upperCase && numericCase && !specialCase) {
    var possible = upper + numeric;
    for (var i = 0; i < numberCharacters; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
  } else if (lowerCase && !upperCase && numericCase && !specialCase) {
    var possible = lower + numeric;
    for (var i = 0; i < numberCharacters; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
  } else if (!lowerCase && upperCase && !numericCase && specialCase) {
    var possible = upper + special;
    for (var i = 0; i < numberCharacters; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
  } else {
    var possible = numeric;
    for (var i = 0; i < numberCharacters; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
  }

  var passwordText = document.querySelector("#password");
  {
    // passwordText.value = password;

    passwordText.value = text;

    return text;
  }
}



// Add event listener to generate button

generateBtn.onclick = function () {
  writePassword();
};

function Test() {
  console.log(`I DID IT`);
}
