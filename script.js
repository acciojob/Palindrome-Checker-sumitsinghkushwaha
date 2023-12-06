function palindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  // Compare the original and reversed strings
  const reversedStr = cleanedStr.split('').reverse().join('');
  return cleanedStr === reversedStr;
}

// Example usage
console.log(palindrome("race a car")); // Output: false
console.log(palindrome("racecar"));    // Output: true
console.log(palindrome("RaceCar"));    // Output: true
console.log(palindrome("A man, a plan, a canal, Panama")); // Output: true
