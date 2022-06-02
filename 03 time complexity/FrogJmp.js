const X = 10;
const Y = 85;
const D = 30;

const solution = (X, Y, D) => {
  return Math.ceil((Y-X)/D);
}

console.log('FrogJmp ', solution(X, Y, D));