function isPowerOfTwo(n) {
  // Base case: n equals 1, which is a power of two
  if (n === 1) {
    return true;
  }

  // Base case: n is not divisible by 2 or becomes 0
  if (n % 2 !== 0 || n === 0) {
    return false;
  }

  // Recursive case: check if n/2 is a power of two
  return isPowerOfTwo(n / 2);
}