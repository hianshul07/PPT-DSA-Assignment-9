function findMax(arr) {
  
	if (arr.length === 1) {
		return arr[0];
	}

	const subArrayMax = findMax(arr.slice(1));
	return Math.max(arr[0], subArrayMax);
}
