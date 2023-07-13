function exponentiation(N, P) {
  
  if (P === 0 || P === 1) {
    return 1;
  }

  return N * exponentiation(N, P - 1);
}