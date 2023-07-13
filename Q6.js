function findAnagrams(s, p) {
  const result = [];
  const freqMap = new Map();

  for (let char of p) {
    freqMap.set(char, (freqMap.get(char) || 0) + 1);
  }

  let left = 0;
  let right = 0;
  let counter = freqMap.size;

  while (right < s.length) {
    const charRight = s[right];

    if (freqMap.has(charRight)) {
      freqMap.set(charRight, freqMap.get(charRight) - 1);
      if (freqMap.get(charRight) === 0) {
        counter--;
      }
    }

    right++;

    if (right - left === p.length) {

      if (counter === 0) {
        result.push(left);
      }

      const charLeft = s[left];

      if (freqMap.has(charLeft)) {
        if (freqMap.get(charLeft) === 0) {
          counter++;
        }
        freqMap.set(charLeft, freqMap.get(charLeft) + 1);
      }

      left++;
    }
  }

  return result;
}
