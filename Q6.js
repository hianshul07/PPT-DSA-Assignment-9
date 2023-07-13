function findNthTerm(a, d, N) {
  
  if (N === 1) {
    return a;
  }

  return findNthTerm(a, d, N - 1) + d;
}