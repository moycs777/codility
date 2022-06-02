console.log('Hello')
function countDown(fromNumber) {
	console.log("0 fromNumber", fromNumber);
	if (fromNumber <= 0) return 0;
	countDown(fromNumber - 1);
}

// countDown(10);

// calculate sum of n
n = 16
function sum(n) {
	console.log('0 n ', n)
  if (n <= 1) {
		console.log('saindo')
    return n;
  }
	console.log('sum(n - 1) ', sum(n - 1))
  return n + sum(n - 1);
}

// sum(16)

function reverseArray(A) {
	let newArray = [];
	for(let i = A.length-1; i >= 0; i--) {
		newArray.push(A[i]);
	}
}

// reverseArray([3,2,1,'moises','serrano'])

// shift array //	//	//	//	//	//	//	//	//	//	//	//	//	//	//	
const normalArray = [3, 8, 9, 7, 6];
finalArray = [];
let isFirstTime = true;

function shiftFullArray(A, rotations) {
	let res = null;
	for (let i = 1; i <= rotations; i++) {	
		res =shiftArray(A)	
	}

	return res;
}

function shiftArray(A) {
	const lengthOfArray = A.length;
	let cachedArray = []
	let shiftedArray = isFirstTime == true
		? A
		: finalArray;	
	finalArray = []
	isFirstTime = false;	
	
	for(let i = 1; i < lengthOfArray; i++) {
		if (i == 1) cachedArray[0] = shiftedArray[lengthOfArray-1];			
		cachedArray[i] = shiftedArray[i-1];		
	}
	
	finalArray = [...cachedArray];
	shiftedArray = [...cachedArray]; 
	
	return finalArray;
}
// console.log(shiftFullArray(normalArray, 3));

// const oddArray = [9, 3, 9, 3, 9, 7, 9];
const oddArray = [1, 3, 9, 3, 7 , 7, 9];
const ocurrencies = {};
function findNotPairedInteger(A) {
	A.forEach(integer => {
		ocurrencies[integer] = ocurrencies[integer] === undefined 
			? 1
			: 0		
	})
	console.log('ocurrencies', ocurrencies);

	let resultIndex = null;
	for (let key in ocurrencies) {
		if (ocurrencies[key] == 1) resultIndex = key;
	}
	return parseInt(resultIndex);
}

// full optimal solution
function solution(a) {
    let unmatched = {}

    a.forEach( e => {
        if (unmatched[e]) {
            delete unmatched[e];
        } else {
            unmatched[e] = 'xxxx';
        }
    })
    console.log(unmatched);
    return parseInt(Object.keys(unmatched).toString())
}

// console.log(solution([3, 9, 3, 1 , 7 , 7, 9]))
// console.log(findNotPairedInteger(oddArray));


// eleminate sub levels
const data = {
  a: {
    b: {
      c: 'd',
    },
    e: 'j',
  },
  k: 'm',
};
/* 
 * EJERCICIO:
 * Crea una unica funcion para
 * convertir un objeto de muchos niveles 
 * a un solo objeto de un solo nivel
 * concatenando las claves separados con (.)
 * 
 * RESULTADO: 
 * { 
 *   "a.b.c": "d", 
 *   "a.e": "j", 
 *   "k": "m" 
 * }
*/
function prepareForMultiLevel(key, subKey) {
	// console.log('key, subKey ', key, subKey);
	let otherKeys = key + '.' + subKey;
	return 'wer';
}

const res = {};
for (let key in data) {
	// console.log('key in data ', key, typeof data[key])
	// when does not have children
	if (typeof data[key] == 'string') res[key] = data[key];
	// when it has children
	else {
		// res[key] = prepareForMultiLevel(key);
		// get sublevels
		for (let subKey in data[key]) {
			// console.log('subKey', subKey);
			// console.log('subKey all data', data[key][subKey]);
			if (typeof data[key][subKey] == 'string') res[key+ '.'+subKey] = data[key][subKey];
			else prepareForMultiLevel(key, subKey)
		}
	}	
}

// console.log(JSON.stringify(res));

// console.log('               .. ')

// optimal solution
// objeto con el resultado final
const newObj = {};

function getKeysAndValues(currentKey, sourceData) {
	// iteramos el objeto original
	for (const i in sourceData) {
		// console.log('currentKey ', currentKey)
		// console.log('i ', i)
		// creamos una nueva key donde alamcenamos el indice actual
		let newKey = i;
		// almacenamos el valor final
		const newVal = sourceData[i];

		// concatemos el indice actual con el/los anteriores
		if (currentKey.length > 0) newKey = currentKey + '.' + i;

		// si en el indice actual hay 1 o mas objetos, volvemos a llamar la funcion recursivamente
		if (typeof newVal === "object") getKeysAndValues(newKey, newVal, newObj);
		// si no, anadimos el valor
		else newObj[newKey] = newVal;		
	}
}

// nuestra funcion recursiva
getKeysAndValues("", data);

// console.log('newObj ', JSON.stringify(newObj))

// frog jumps
// let minJumps = 0;

// function solution(start, end, steps) {
// 	if (start >= end) return minJumps;
// 	minJumps++;
	
// 	return solution(start+steps, end, steps);
// }
let minJumps = 0;

function solution(start, end, steps) {
	if (end <= start) return minJumps;
	minJumps++;
	
	return solution(start, end-steps, steps);
}
// console.log('solution ', solution(10, 85, 30));
// console.log('solution ', solution(10, 5235, 30));

let min = 1;
let max = 1;
let uniqueNumber = 0;
let firstIteration= true;

function solution(A) {
	const sorted = A.sort();
	console.log('sorted', sorted);
	
	for(let i = sorted[0]; i < sorted[sorted.length-1]; i++) {
		if (firstIteration) min = sorted[i];
		firstIteration = false;
		
		const currentNumber = sorted[i];
		console.log(sorted[i]);
		if (currentNumber <= min) min = currentNumber;
		if (currentNumber >= max) max = currentNumber;
	} 

	console.log(min, max);
	return 'ok';
}
// console.log('solution ', solution([2,3,1,5]));

// Factorial
let resultFac = 1;
// function factorial(n) {
// 	let num = n;
// 	let fact = 1;
// 	while (num > 0) {
// 	  fact = fact * num;
// 	  num --;
// 	}
// 	return fact;
// }
const factorial = (n) => {
	if (n == 0) return resultFac;
	resultFac *= n;
	return factorial(n - 1);
};
console.log('factorial', factorial(5));
