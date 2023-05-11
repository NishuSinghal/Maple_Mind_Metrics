function generatePattern() {
    const patternSize = 5; 
    const pattern = []; 
  
   
    for (let i = 0; i < patternSize; i++) {
      pattern[i] = []; 
  
     
      for (let j = 0; j < patternSize; j++) {
        if (i === j) { 
          if (i % 2 === 0) { 
            pattern[i][j] = '*'; 
          } else {
            pattern[i][j] = '#'; 
          }
        } else if (i + j === patternSize - 1) { 
          if (i % 2 === 0) { 
            pattern[i][j] = '#'; 
          } else {
            pattern[i][j] = '*'; 
          }
        } else { 
          if (i % 2 === 0) { 
            pattern[i][j] = '$'; 
          } else {
            pattern[i][j] = '%'; 
          }
        }
      }
    }
  
    for (let i = 0; i < patternSize; i++) {
      let row = ''; // string to store row
  
      for (let j = 0; j < patternSize; j++) {
        row += pattern[i][j] + ' ';
      }
  
      console.log(' '.repeat(i) + row.trim());
    }
  }
  
  generatePattern();