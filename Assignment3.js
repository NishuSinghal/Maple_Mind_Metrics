function zigzagSequence(sequence) {
    let sortedSequence = sequence.sort((a, b) => b - a); 
    let zigzag = []; 
    
    for (let i = 0, j = sequence.length - 1; i <= j; i++, j--) {
      if (i === j) {
        zigzag.push(sortedSequence[i]);
      } else {
        zigzag.push(sortedSequence[i], sortedSequence[j]);
      }
    }
    
    return zigzag;
  }

let sequence = [1, 2, 3, 4, 5];
let zigzag = zigzagSequence(sequence);
console.log(zigzag); // output: [5, 1, 4, 2, 3]