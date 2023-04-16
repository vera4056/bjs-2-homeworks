function getArrayParams(...arr) {
	let min = Infinity;
	let max = -Infinity;
	let sum = 0;

	for (const elem of arr) {
		if (elem > max) {
			max = elem;
		}

		if (elem < min) {
			min = elem;
		}

		sum = sum + elem;
	}

	let avg = sum / arr.length;
	avg = +avg.toFixed(2);

	return {
		min: min,
		max: max,
		avg: avg
	};
}

function summElementsWorker(...arr) {
	let sum = 0;

	for (const elem of arr) {
		sum = sum + elem; // sum += elem
	}
	return sum;

}

function differenceMaxMinWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}

	return Math.max(...arr) - Math.min(...arr);

}

function differenceEvenOddWorker(...arr) {
	let sumEven = 0;
	let sumOdd = 0;

	for (const elem of arr) {
		if (elem % 2 == 0) {
			sumEven = sumEven + elem;
		} else {
			sumOdd = sumOdd + elem;
		}

	}
	return sumEven - sumOdd;

}

function averageEvenElementsWorker(...arr) {
	let sumEven = 0;
	let cnt = 0;

	for (const elem of arr) {
		if (elem % 2 == 0) {
			sumEven = sumEven + elem;
			cnt++;
		}
	}

	let avg = sumEven / cnt;

	return avg;

}

function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity;

	for (const arr of arrOfArr) {
		const temp = func(...arr);
		if (temp > maxWorkerResult) {
			maxWorkerResult = temp;
		}
	}

	return maxWorkerResult;

}