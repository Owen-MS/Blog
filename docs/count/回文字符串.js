const validPalindrome = function (s) {
  let i = 0, j = s.length - 1;

  while (i < j && s[i] === s[j]) {
    i++;
    j--;
  }
  if (isPalindrome(i+1, j)) {
    return true;
  }

  if (isPalindrome(i, j-1)) {
    return true;
  }

  function isPalindrome(k, m) {
    console.log(k, m);
    while (k < m) {
      if (s[k] !== s[m]) {
        return false
      }
      k++;
      m--;
    }
    return true
  }

  return false
};
console.log(validPalindrome('cbbcc'));
