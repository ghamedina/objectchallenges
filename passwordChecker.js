//You are writing the user registration page for a secure web site.
//On the registration page, the user has to enter a user ID and a password, which
//has to adhere to the to following criteria:

//User Id and password cannot be the same
//User ID and password have to be atleast 6 characters long.
//User Id cannot contain the following characters: !#$
//Password has to contain atlease one of: !#$
//Password cannot be "password"

var userId = prompt("Please enter what User ID you would like.")
var pass = prompt("Please enter your password.")

//User Id and password cannot be the same
userId != pass;

//User ID and password have to be atleast 6 characters long.
userId.length >= 6;
pass.length >= 6;

//User Id cannot contain the following characters: !#$
!userId.includes("!")
!userId.includes("#")
!userId.includes("$")

//Password has to contain atlease one of: !#$
pass.includes("!")
pass.includes("#")
pass.includes("$")

//Password cannot be "password"
pass != "password";

userId.length >= 6 && pass.length >= 6

!userId.includes("!") && !userId.includes("#") && !userId.includes("$")

pass.includes("!") || pass.includes("#") || pass.includes("$")

// Function to determine whether userId is valid
// function isuserIdvalid(string) {
//   return string.length >= 6 && !string.includes("!") && !string.includes("#") && !string.includes("$");
// }

userId != pass;

// Checking to see if password and user ID are the same
function isUserPass(str1, str2) {
  if (str1 != str2) {
    return { valid: "true"};
  } else {
    return {
      valid: false,
      reason: "User ID cannot be the same as your password."
    };
  };
}
// Object for checking userId length
function isUserLength(string) {
  if (string.length >= 6) {
    return { valid: true};
  } else {
    return {
      valid: false,
      reason: "User Id is not at least 6 characters."
    };
  };
}

// Object for checking userId for not including special characters.
function isUserSpecial(string) {
  var special = !string.includes("!") && !string.includes("#") && !string.includes("$");
  if (special) {
    return { valid: true};
  } else {
    return {
      valid: false,
      reason: "User Id cannot contain special characters !, #, or $."
    };
  };
}

// Function to determine whether pass is valid
// function ispassvalid(str) {
//   return str != "password" && str.length >= 6 && (str.includes("!") || str.includes("#") || str.includes("$")) && (str.includes("0") || str.includes("1") || str.includes("2") || str.includes("3") || str.includes("4") || str.includes("5") || str.includes("6") || str.includes("7") || str.includes("8") || str.includes("9")) && (str !== str.toLowerCase() && str !== str.toUpperCase());
// }

// Object for checking whether or not the password length is valid.
function isPassLength(str) {
  var passLength = str.length >= 6;
  if (passLength) {
    return { valid: true};
  } else {
    return {
      valid: false,
      reason: "Password is not at least 6 characters."
    };
  };
}

// Object for checking whether or not the password contains special characters !, #, or $.
function isPassSpecial(str) {
  var special = str.includes("!") || str.includes("#") || str.includes("$");
  if (special) {
    return { valid: true};
  } else {
    return {
      valid: false,
      reason: "Password must contain at least one of the special characters !, #, or $."
    };
  };
}

// Object for checking whether or not the password contains a number.
function isPassNumber(str) {
  var number = str.includes("0") || str.includes("1") || str.includes("2") || str.includes("3") || str.includes("4") || str.includes("5") || str.includes("6") || str.includes("7") || str.includes("8") || str.includes("9");
  if (number) {
    return { valid: true};
  } else {
    return {
      valid: false,
      reason: "Password must contain at least one number."
    };
  };
}

// Object for checking whether or not password contains at least 1 uppercase and 1 lowercase letter.
function isPassCase(str) {
  var upLow = str != str.toLowerCase() && str != str.toUpperCase();
  if (upLow) {
    return { valid: true};
  } else {
    return {
      valid: false,
      reason: "Password must contain at least one upper case and one lower case character."
    };
  };
}

// Object for checking whether or no password equals "password".
function isPassPass(str) {
  var pass = str != "password";
  if (pass) {
    return { valid: true};
  } else {
    return {
      valid: false,
      reason: 'Password cannot be "password".'
    };
  };
}

//Function to determine whether credentials are valid
function arecredvalid(userId, pass){
  return isuserIdvalid(userId) && ispassvalid(pass)
}


// Master Password Checker :
// Checking to see if password and user ID are the same
function getCred() {
  function isUserPass(str1, str2) {
    if (str1 != str2) {
      return { valid: "true"};
    } else {
      return {
        valid: "false",
        reason: "User ID cannot be the same as your password."
      };
    };
  }
  // Object for checking userId length
  function isUserLength(string) {
    if (string.length >= 6) {
      return { valid: true};
    } else {
      return {
        valid: false,
        reason: "User Id is not at least 6 characters."
      };
    };
  }
  // Object for checking userId for not including special characters.
  function isUserSpecial(string) {
    var special = !string.includes("!") && !string.includes("#") && !string.includes("$");
    if (special) {
      return { valid: true};
    } else {
      return {
        valid: false,
        reason: "User Id cannot contain special characters !, #, or $."
      };
    };
  }
  // Object for checking whether or not the password length is valid.
  function isPassLength(str) {
    var passLength = str.length >= 6;
    if (passLength) {
      return { valid: true};
    } else {
      return {
        valid: false,
        reason: "Password is not at least 6 characters."
      };
    };
  }
  // Object for checking whether or not the password contains special characters !, #, or $.
  function isPassSpecial(str) {
    var special = str.includes("!") || str.includes("#") || str.includes("$");
    if (special) {
      return { valid: true};
    } else {
      return {
        valid: false,
        reason: "Password must contain at least one of the special characters !, #, or $."
      };
    };
  }
  // Object for checking whether or not the password contains a number.
  function isPassNumber(str) {
    var number = str.includes("0") || str.includes("1") || str.includes("2") || str.includes("3") || str.includes("4") || str.includes("5") || str.includes("6") || str.includes("7") || str.includes("8") || str.includes("9");
    if (number) {
      return { valid: true};
    } else {
      return {
        valid: false,
        reason: "Password must contain at least one number."
      };
    };
  }
  // Object for checking whether or not password contains at least 1 uppercase and 1 lowercase letter.
  function isPassCase(str) {
    var upLow = str != str.toLowerCase() && str != str.toUpperCase();
    if (upLow) {
      return { valid: true};
    } else {
      return {
        valid: false,
        reason: "Password must contain at least one upper case and one lower case character."
      };
    };
  }
  // Object for checking whether or no password equals "password".
  function isPassPass(str) {
    var pass = str != "password";
    if (pass) {
      return { valid: true};
    } else {
      return {
        valid: false,
        reason: 'Password cannot be "password".'
      };
    };
  }
  // Gather credentials
  var id = prompt("Please enter what User ID you would like.");
  var p = prompt("Please enter your password.");
  // ID Setting up variables to call objects validity and reason.
  var isUserLength = isUserLength(id);
  var isUserSpecial = isUserSpecial(id);
  var isUserPass = isUserPass(id, p);
  // Password Setting up variables to call objects validity and reason.
  var isPassLength = isPassLength(p);
  var isPassSpecial = isPassSpecial(p);
  var isPassNumber = isPassNumber(p);
  var isPassCase = isPassCase(p);
  var isPassPass = isPassPass(p);
  // Indicating whether or not user Id is valid.
  if (true != isUserLength) {
    console.log(isUserLength.valid + ", " + isUserLength.reason);
  };
  if (true != isUserSpecial) {
    console.log(isUserSpecial.valid + ", " + isUserSpecial.reason);
  };
  if (true != isUserPass) {
    console.log(isUserPass.valid + ", " + isUserPass.reason);
  };
  if (true === isUserLength * isUserSpecial * isUserPass) {
    console.log("Your user ID is valid.");
  };
  // Indicating whether or not password is valid.
  if (true != isPassLength) {
    console.log(isPassLength.valid + ", " + isPassLength.reason);
  };
  if (true != isPassSpecial) {
    console.log(isPassSpecial.valid + ", " + isPassSpecial.reason);
  };
  if (true != isPassNumber) {
    console.log(isPassNumber.valid + ", " + isPassNumber.reason);
  };
  if (true != isPassCase) {
    console.log(isPassCase.valid + ", " + isPassCase.reason);
  };
  if (true != isUserPass) {
    console.log(isPassPass.valid + ", " + isPassPass.reason);
  };
  if (true === isUserLength ) {
    console.log("Your credentials are valid.");
  };
}


















// Function to gather credentials
// function getcred() {
//   var id = prompt("Please enter what User ID you would like.");
//   var p = prompt("Please enter your password.");
//   alert("Are your credentials valid?: " + arecredvalid(id, p));
}

// Stretch Goal - Password has to contain at least one digit
// pass.includes

// Super Stretch Goal - Password has to contain a lower and an uppercase letter\
// pass != pass.toUpperCase() || pass != pass.toLowerCase()


////Object oriented password checker

// var userId = prompt("Please enter what User ID you would like.")
// var pass = prompt("Please enter your password.")
