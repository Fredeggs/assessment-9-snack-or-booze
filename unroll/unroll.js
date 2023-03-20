function unroll(squareArray) {
  let squareArrayCopy = squareArray;
  let unrolledArr = [];
  let permutations;
  if (squareArrayCopy.length % 2 === 1) {
    permutations = (squareArrayCopy.length + 1) / 2;
  } else {
    permutations = squareArrayCopy.length / 2;
  }

  for (let i = 0; i < permutations; i++) {
    if (squareArrayCopy.length === 1) {
      unrolledArr.push(...squareArrayCopy.shift());
    } else if (squareArrayCopy.length === 2) {
      unrolledArr.push(...squareArrayCopy.shift());
      unrolledArr.push(...squareArrayCopy.pop().reverse());
    } else {
      unrolledArr.push(...squareArrayCopy.shift());
      for (let j = 0; j < squareArrayCopy.length - 1; j++) {
        unrolledArr.push(squareArrayCopy[j].pop());
      }
      let bottomRow = squareArrayCopy.pop().reverse();
      unrolledArr.push(...bottomRow);
      for (let j = squareArrayCopy.length - 1; j >= 0; j--) {
        unrolledArr.push(squareArrayCopy[j].shift());
      }
    }
  }
  return unrolledArr;
}

module.exports = unroll;
