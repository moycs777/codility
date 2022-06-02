const A = [3, 1, 2, 4, 3];
let minDifference = 0;
let sumAcumulator = 0;
const totalSum = [];
const len = A.length;
const reducer = (accumulator, curr) => accumulator + curr;

// We can split this tape in four places:

// P = 1, difference = |3 − 10| = 7
// P = 2, difference = |4 − 9| = 5
// P = 3, difference = |6 − 7| = 1
// P = 4, difference = |10 − 3| = 7

const solution = (A) => {
  for(let i = 0; i < len; i++) {
    let baseNumber = A[i];
    let totalSideB = 0;
    if (i < len-1) {
      const totalSideA = A.slice(0, i+1).reduce(reducer)
      // console.log('start ', A.slice(0, i+1))
      // console.log('\n totalSideA ',A.slice(0, i+1).reduce(reducer));
      // console.log(totalSideA)      
    }
    if (i <= len) {
      if (i >= 1) {
        // console.log('(i+1, len)', (i+1), (len-1));
        // console.log('asd', A.slice((i), (len)))
        totalSideB = A.slice((i), (len)).reduce(reducer)
        // console.log(len, i+2)
        console.log('totalSideB', totalSideB);
      }      
    }    
  }

  
  return minDifference;
}

console.log('TapeEquilibrium ', solution(A));