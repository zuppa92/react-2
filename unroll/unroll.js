function unroll(squareArray) {
    const result = [];
    while (squareArray.length) {
      result.push(...squareArray.shift());
      for (let row of squareArray) {
        result.push(row.pop());
      }
      squareArray.reverse().forEach(row => row.reverse());
    }
    return result;
  }
  
  module.exports = unroll;