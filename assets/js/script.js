// addEventLister to the button for when clicked
document.querySelector("#submit").addEventListener("click", (event) => {
  // prevent button click default quirk
  event.preventDefault();
  // run gatherUserInput()
  gatherUserInput();
});

function gatherUserInput() {
  // gather userInput value
  let userInput = document.querySelector("#userInput").value;
  // run palindrome() with the userInput as the parameter
  palindrome(userInput);
}

function palindrome(str) {
  // get the element to where we'll populate the message
  let result = document.querySelector("#result");
  // set regex to gather only letters and numbers
  let regex = /([a-z]|[0-9])/gim;
  // get filterred str and stringify it to uppercase
  let filterStr = str.match(regex).join("").toUpperCase();
  console.log(filterStr);
  //
  let reverseFilterStr = filterStr.split("").reverse().join("");
  console.log(reverseFilterStr);
  // if filterStr and reverseFilterSTr is strictly equal,
  if (filterStr === reverseFilterStr) {
    // it is a palindrome.
    result.innerText = `The parsed letters and/or numbers are
    ${filterStr}.
    In reverse, it's
    ${reverseFilterStr}.
    Thus, "${str}" is a palindrome`;
  } else {
    // Otherwise, it is not.
    result.innerText = `The parsed letters and/or numbers are
    ${filterStr}.
    In reverse, it's
    ${reverseFilterStr}.
    Thus, "${str}" is a palindrome`;
  }
}
