function findPermutations(S) {
  const permutations = [];

  // Convert the string into an array for easier swapping
  const arr = S.split("");

  // Generate permutations recursively
  permute(arr, 0, permutations);

  return permutations;
}

function permute(arr, start, permutations) {
  if (start === arr.length - 1) {
    // Base case: reached the last character, add the current permutation to the result
    permutations.push(arr.join(""));
    return;
  }

  for (let i = start; i < arr.length; i++) {
		
    swap(arr, start, i);

    permute(arr, start + 1, permutations);

    swap(arr, start, i);
  }
}

function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}