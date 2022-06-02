const A = [2, 3, 1, 5];
console.log("PermMissingElem Perm missing element in array");

const solution = (A) => {
  var size = A.length;
  var sum = (size + 1) * (size + 2) / 2;
  for (let i = 0; i < size; i++) {
      sum -= A[i];
  }

  return sum;

  // const myArray = A.sort();
  // const len = myArray.length;
  // let missing = 1;
  // for (let i = myArray[0]; i <= len+1; i++) {
  //   if (!myArray.includes(i)) missing = i;
  // }
  // return missing;
};
console.log('PermMissingElem ', solution(A));
