function checkPalindrome(pali) {
    let deconstruct = pali.split("");
    // Deconstructs the letters of the word given into an array
    let reverseLetters = deconstruct.reverse();
    // Reverses the letters in the array
    let reversedWord = reverseLetters.join("");
    // Joins the letters together into a word
    // This checks whether or not the reversed word and word match up also 
    // It outputs true or false accordingly
    if (pali.toLowerCase() == reversedWord.toLowerCase()) {
        alert('True')
    }
    else {
        alert('False')
    }
}
// Brings up the prompt for the user and saves the word the user inputs
let possiblePalindrome = prompt('Input a Palindrome')
checkPalindrome(possiblePalindrome)
// Calls the function