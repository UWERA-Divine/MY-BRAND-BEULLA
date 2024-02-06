function isPalindrome(str) {
  // Convert the string to lowercase to ignore case sensitivity
  str = str.toLowerCase();

  // Initialize two pointers, one starting from the beginning and one from the end
  let start = 0;
  let end = str.length - 1;

  // Iterate until the pointers meet in the middle
  while (start < end) {
    // Ignore non-alphanumeric characters by advancing the pointers
    while (!isAlphanumeric(str.charAt(start))) {
      start++;
    }
    while (!isAlphanumeric(str.charAt(end))) {
      end--;
    }

    // If the characters at the pointers are not equal, return false
    if (str.charAt(start) !== str.charAt(end)) {
      return false;
    }

    // Move the pointers inward
    start++;
    end--;
  }

  // If the loop completes without returning false, the string is a palindrome
  return true;
}

// Helper function to check if a character is alphanumeric
function isAlphanumeric(char) {
  const code = char.charCodeAt(0);
  return (code >= 97 && code <= 122) || (code >= 48 && code <= 57); // lowercase letters or digits
}

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
