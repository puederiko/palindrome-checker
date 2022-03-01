// Create a function to take in a string.
function palindrome(str) {
  // Set regex to only gather letters and numbers.
  let regex = /([a-z]|[0-9])/gim;
  // Use match() to split the filterred str into an array, then join() it to a single string, then format it toUpperCase(), and save it as a variable.
  let filterStr = str.match(regex).join("").toUpperCase();
  // split() filterStr into an array, reverse() the array, join() it to a single string, format it toUpperCase(), and save it as a variable.
  let reverseFilterStr = filterStr.split("").reverse().join("").toUpperCase();
  // if filterStr and reverseFilterSTr is strictly equal,
  if (filterStr === reverseFilterStr) {
    // it is a palindrome.
    console.log(`"${str}" is a palindrome`);
  } else {
    // Otherwise, it is not.
    console.log(`"${str}" is not a palindrome`);
  }
}

palindrome("neven");
