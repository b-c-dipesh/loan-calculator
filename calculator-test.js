describe('Calculate Monthly Payment', () => {
	const values = { amount: 9000, years: 3.5, rate: 9.52 };

	it('should calculate the monthly payment correctly', () => {
		expect(calculateMonthlyPayment(values)).toBe('252.81');
		expect(
			calculateMonthlyPayment({
				amount: '9000',
				years: '3.5',
				rate: '9.52',
			})
		).toBe('252.81');
	});

	it('should return a result with 2 decimal places', () => {
		expect(calculateMonthlyPayment(values).split('.').length).toBe(2);
	});
});
