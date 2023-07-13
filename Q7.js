function decodeString(s) {
	const stack = [];

	for (let i = 0; i < s.length; i++) {
		let currentChar = s[i];

		if (isDigit(currentChar)) {
			let count = 0;
			while (isDigit(s[i])) {
				count = count * 10 + parseInt(s[i]);
				i++;
			}
			i--;

			stack.push(count);
		} else if (currentChar === '[') {
			stack.push('');
		} else if (currentChar === ']') {
			let encodedStr = stack.pop();
			let count = stack.pop();
			let repeatedStr = repeatString(encodedStr, count);

			if (stack.length > 0) {
				stack[stack.length - 1] += repeatedStr;
			} else {
				stack.push(repeatedStr);
			}
		} else {
			if (stack.length > 0) {
				stack[stack.length - 1] += currentChar;
			} else {
				stack.push(currentChar);
			}
		}
	}

	return stack.pop();
}

function isDigit(char) {
	return /[0-9]/.test(char);
}

function repeatString(str, count) {
	let repeatedStr = '';
	for (let i = 0; i < count; i++) {
		repeatedStr += str;
	}
	return repeatedStr;
}
