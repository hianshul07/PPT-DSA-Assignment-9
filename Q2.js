function sumOfFirstN(n) {
  if (n === 0 || n === 1) {
    return n;
  }

  return n + sumOfFirstN(n - 1);
}