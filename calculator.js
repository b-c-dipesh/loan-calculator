'use strict';

window.addEventListener('DOMContentLoaded', function () {
	const form = document.getElementById('calc-form');
	if (form) {
		setupIntialValues();
		form.addEventListener('submit', function (e) {
			e.preventDefault();
			update();
		});
	}
});

// Get current input values from the form and return them as an object
function getCurrentUIValues() {
	return {
		amount: +document.getElementById('loan-amount').value,
		years: +document.getElementById('loan-years').value,
		rate: +document.getElementById('loan-rate').value,
	};
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
	// update the UI with the monthly payment amount
	document.querySelector('#monthly-payment').innerText = monthly;
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
	// calculate the principle amount, interest rate and total number of payments
	const principleAmount = Number(values.amount);
	const interestRate = Number(values.rate / 100 / 12);
	const totalPayments = Number(values.years * 12);

	// use the formula to calculate monthly Payment  P * i / (1 - (1+i)^-n)
	return (
		(principleAmount * interestRate) /
		(1 - Math.pow(1 + interestRate, -totalPayments))
	).toFixed(2);
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
	// select DOM elements
	const loanAmountInput = document.querySelector('#loan-amount');
	const loanYearsInput = document.querySelector('#loan-years');
	const loanRateInput = document.querySelector('#loan-rate');

	// setup some default values in the UI
	loanAmountInput.value = 9000;
	loanYearsInput.value = 3.5;
	loanRateInput.value = 9.52;

	// get the monthly payment and update the UI with the result
	const monthlyPayment = calculateMonthlyPayment(getCurrentUIValues());
	updateMonthly(monthlyPayment);
}

// Get the current values from the UI
// Update the monthly payment
function update() {
	// get the monthly payment and update the UI with the result
	const monthlyPayment = calculateMonthlyPayment(getCurrentUIValues());
	updateMonthly(monthlyPayment);
}
