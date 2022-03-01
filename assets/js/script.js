function gatherUserInput() {
  let userInput = document.querySelector("#userInput").value;
  palindrome(userInput);
}

document.querySelector("#submit").addEventListener("click", (event) => {
  event.preventDefault();
  gatherUserInput();
});

function palindrome(str) {
  let result = document.querySelector("#result");
  // Set regex to only gather letters and numbers.
  let regex = /([a-z]|[0-9])/gim;
  // Use match() to split the filterred str into an array, then join() it to a single string, then format it toUpperCase(), and save it as a variable.
  let filterStr = str.match(regex).join("").toUpperCase();
  console.log(filterStr);
  // split() filterStr into an array, reverse() the array, join() it to a single string, format it toUpperCase(), and save it as a variable.
  let reverseFilterStr = filterStr.split("").reverse().join("").toUpperCase();
  console.log(reverseFilterStr);
  // if filterStr and reverseFilterSTr is strictly equal,
  if (filterStr === reverseFilterStr) {
    // it is a palindrome.
    result.innerHTML = `"${str}" is a palindrome`;
  } else {
    // Otherwise, it is not.
    result.innerHTML = `"${str}" is not a palindrome`;
  }
}
