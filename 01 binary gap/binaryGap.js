// A binary gap within a positive integer N is any maximal sequence of consecutive zeros that is surrounded by ones at both ends in the binary representation of N.
console.log('hello world')
let gap = 0;
let prevNumber = null;
let maxGap = 0;
let reminders = [];
let counter = 0;
function convertToBinary(intNumber) {
	console.log('-----------------------------')
	console.log('reminders ', reminders)
	console.log('reminders ', reminders.toString())
	console.log('reminders * 1 ', reminders.toString() + 1)
	counter++;
	// console.log('counter ', counter)
	// console.log('intNumber ', intNumber)
	if (intNumber == 0) {
		console.log('reminders ', reminders)
		console.log('reminders.reverse().join("") ', reminders.reverse().join(""))
		const finalInteger = reminders.reverse().join("");
		// const finalInteger = parseInt(reminders.reverse().join(""));
		reminders = [];
		// console.log('BigInt(n).toString())', BigInt(finalInteger).toString())
		return finalInteger > 0
			? finalInteger 
			: 0;
	} else {
		const quotient = parseInt(intNumber / 2);
		const reminder = parseInt(intNumber % 2); 
		console.log({quotient, reminder})
		reminders.push(reminder);
		
		return convertToBinary(quotient);
		
	}
	
}
console.log(convertToBinary(66561));
// console.log(convertToBinary(6291457));
// console.log(convertToBinary(1610612737));
// 

function intToBinary(number, res = "") {
	console.log('------------------------------');
  if (number < 1) {
		console.log('number res', number, res)
    if (res === "") return "0"
    else return res
	}
  else {
		console.log('number ', number)
		console.log('res ', res)
		console.log('Math.floor(number / 2) ', Math.floor(number / 2))
		console.log('number % 2 ', number % 2)
		console.log('number % 2 + res ', number % 2 + res)
		return intToBinary(Math.floor(number / 2), number % 2 + res)
	}
}
// console.log(intToBinary(66561))

function solution(N) {
	const binaryNumbers = intToBinary(N);
	arrayOfBinaries = binaryNumbers.toString();
	for(let i = 0; i < arrayOfBinaries.length; i++) {
		const binaryNumber = parseInt(arrayOfBinaries[i])
		const nextNumber = 
			i+1 < arrayOfBinaries.length 
			? arrayOfBinaries[i+1]
			: 0;

		if (binaryNumber == 0) {
			gap++;
			if (gap > maxGap && nextNumber == 1) maxGap = gap;
			// if (gap > maxGap && nextNumber >= 1) maxGap = gap;
		}
		else gap = 0; 
		prevNumber = i;       
	}

	let result = maxGap;

	gap = 0;
	prevNumber = null;
	maxGap = 0;

	return result;
}

console.log('solution ', solution(12))
// console.log('solution ', solution(15))
// console.log('solution ', solution(1041))
// console.log('solution ', solution(32))
// console.log('solution ', solution(529))
// console.log('solution ', solution(20))
// console.log('solution ', solution(256))
console.log('solution ', solution(66561))
// console.log('solution ', solution(561892))
console.log('solution ', solution(1610612737))


function findBinaryGap(N) {
	console.log('N : ', N)
	arrayOfBinaries = N.toString();
	console.log('arrayOfBinaries ', arrayOfBinaries)
	for(let i = 0; i < arrayOfBinaries.length; i++) {
		const binaryNumber = parseInt(arrayOfBinaries[i])
		const nextNumber = 
			i+1 < arrayOfBinaries.length 
			? arrayOfBinaries[i+1]
			: 0;

		if (binaryNumber == 0) {
			gap++;
			if (gap > maxGap && nextNumber >= 1) maxGap = gap;
		}
		else gap = 0; 
		
		prevNumber = i;       
	}

	let result = maxGap;

	gap = 0;
	prevNumber = null;
	maxGap = 0;

	return result;
}

// console.log('findBinaryGap ', findBinaryGap(10000010000000001_2));



reminders2 =  [
  1, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 1, 0, 0, 0,
  0, 0, 1
];
console.log('sdf', reminders2.reverse().join(""));
console.log('sdf', parseInt(reminders2.reverse().join("")));