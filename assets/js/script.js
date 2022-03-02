// global variables
const result = document.querySelector("#result");
const regex = /([a-z]|[0-9])/gim;

// addEventLister to the button for when clicked
document.querySelector("#submit").addEventListener("click", (event) => {
  // prevents button click default quirk
  event.preventDefault();
  // then run palindrome()
  palindrome();
});

function palindrome() {
  // set userInput variable
  let userInput = document.querySelector("#userInput").value;
  // if userInput does not meet the requirements
  if (userInput.length < 3 || userInput.length > 50) {
    // populate message to user
    result.innerText = `Please enter 3-50 characters only.`;
    // otherwise
  } else {
    // set a variable of parsed letters and numbers thru regex match()
    let filterUserInput = userInput.match(regex).join("").toUpperCase();
    // set another variable for the reversed version of the parsed userInput
    let reverseFilterUserInput = filterUserInput.split("").reverse().join("");
    // if userInput is a palindrome
    if (filterUserInput === reverseFilterUserInput) {
      result.innerText = `The parsed letters and/or numbers are
    ${filterUserInput}.
    In reverse, it's
    ${reverseFilterUserInput}.
    Thus, "${userInput}" is a palindrome`;
      // if userInput is not a palindrome
    } else {
      result.innerText = `The parsed letters and/or numbers are
      ${filterUserInput}.
    In reverse, it's
    ${reverseFilterUserInput}.
    Thus, "${userInput}" is a palindrome`;
    }
  }
}
