const MIN_CHAR_CODE = "A".charCodeAt();
const MAX_CHAR_CODE = "Z".charCodeAt();

const isAlphaNumeric = (char) => {
  if (!isNaN(parseInt(char))) return true;

  const CHAR_CODE = char.charCodeAt();

  return CHAR_CODE >= MIN_CHAR_CODE && CHAR_CODE <= MAX_CHAR_CODE;
};

function isPalindrome(str) {
  const alphanumericString = str.toUpperCase().split("").filter(isAlphaNumeric);

  return alphanumericString.join("") == alphanumericString.reverse().join("");
}

// truthy
console.log(isPalindrome("eye"));
console.log(isPalindrome("racecar"));
console.log(isPalindrome("A man, a plan, a canal. Panama"));
console.log(isPalindrome("never odd or even"));

// falsy
console.log(isPalindrome("1 eye for of 1 eye."));
console.log(isPalindrome("not a palindrome"));
