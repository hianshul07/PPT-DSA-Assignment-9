function canBeEqual(s, goal) {
  if (s.length !== goal.length) {
    return false;
  }

  let diffCount = 0;
  let diffIndices = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== goal[i]) {
      diffCount++;
      diffIndices.push(i);
    }
  }

  return diffCount === 2 && s[diffIndices[0]] === goal[diffIndices[1]] && s[diffIndices[1]] === goal[diffIndices[0]];
}