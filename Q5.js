function compress(chars) {
  let write = 0; 
  let read = 0;

  while (read < chars.length) {
    let currentChar = chars[read];
    let count = 1;

    while (read + 1 < chars.length && chars[read + 1] === currentChar) {
      read++;
      count++;
    }

    chars[write] = currentChar;
    write++;

    if (count > 1) {
      let countStr = count.toString();
      for (let i = 0; i < countStr.length; i++) {
        chars[write] = countStr[i];
        write++;
      }
    }

    read++;
  }

  return write;
}