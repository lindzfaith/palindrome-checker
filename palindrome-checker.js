function isPalindrome(str) {
  return str == str.split("").reverse().join("");
}

console.log(isPalindrome("eye"));
console.log(isPalindrome("racecar"));
