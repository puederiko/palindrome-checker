// Create a variable for the test characters.
let chars = "palindrome";
// There's no reverse method for strings, but arrays do. Use the split() method to convert the string into an array.
let splitChars = chars.split("");
// Then, use reverse() method to reverse splitUserInput.
let reverseChars = splitChars.reverse();
// Then, use use join() method to create a single string for the array.
let joinChars = reverseChars.join("");
// Compare the user input and the reversed version
if (chars === joinChars) {
  console.log(`"${chars}" is a palindrome`);
}
// if they're the same, it's a palindrome
else {
  console.log(`"${chars}" is not a palindrome`);
}
// otherwise, it's not
