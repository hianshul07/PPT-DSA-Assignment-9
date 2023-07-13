function isValid(s) {
  let stack = [];
  let starCount = 0;

  for (let i = 0; i < s.length; i++) {
    let char = s[i];

    if (char === '(' || char === '*') {
      stack.push(char);
    } else if (char === ')') {
      if (stack.length > 0) {
        stack.pop();
      } else if (starCount > 0) {
        starCount--;
      } else {
        return false;
      }
    }
  }

  while (stack.length > 0) {
    let top = stack.pop();

    if (top === '(') {
      if (starCount > 0) {
        starCount--;
      } else {
        return false;
      }
    }
  }

  return true;
}