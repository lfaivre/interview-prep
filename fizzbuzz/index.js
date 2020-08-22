const fizzBuzz = (number) => {
	let divByThree = false;
	let divByFive = false;

	if (number % 3 === 0) divByThree = true;
	if (number % 5 === 0) divByFive = true;

	if (divByThree && divByFive) return 'fizzbuzz';
	else if (divByThree) return 'fizz';
	else if (divByFive) return 'buzz';
	else return number;
};

const fizzBuzzRunner = (number) => {
	for (let i = 1; i <= number; i++) {
		console.log(fizzBuzz(i));
	}
};

module.exports = fizzBuzzRunner;
