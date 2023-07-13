function findProduct(arr) {
  
  if (arr.length === 1) {
    return arr[0];
  }

  return arr[0] * findProduct(arr.slice(1));
}