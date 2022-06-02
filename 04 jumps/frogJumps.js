let minJumps = 0;

function solution(start, end, steps) {
	if (start >= end) return minJumps;
	minJumps++;
	
	return solution(start+steps, end, steps);
}