const countVowels = str => {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    let char = str.charAt(i);
    if (
      char === 'a' || char === 'e' || char === 'i' ||
      char === 'o' || char === 'u' ||
      char === 'A' || char === 'E' || char === 'I' ||
      char === 'O' || char === 'U'
    ) {
      count++;
    }
  }
  return count;
};

// Example usage:
console.log(countVowels("JavaScript is Awesome"));  // Output: 8
