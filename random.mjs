function selectRandomFromRange(value1, value2) {
	const max = value2 || value1;
	const min = (value2 ? value1 : 0);
	return Math.floor((Math.random() * max) + 1) + min;
}
