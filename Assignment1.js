const n = 5; 
let currentNumber = 1; 

for (let i = 1; i <= n; i++) {
  let row = "";
  if (i % 2 !== 0) { 
    for (let j = 1; j <= i; j++) {
      row += currentNumber + " ";
      currentNumber++;
    }
  } else { // even row
    const startNumber = currentNumber + i - 1;
    for (let j = 1; j <= i; j++) {
      row = (startNumber - j + 1) + " " + row;
      currentNumber++;
    }
  }
  console.log(row);
}