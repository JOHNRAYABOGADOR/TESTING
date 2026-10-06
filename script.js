const expenseForm = document.getElementById("expense-form");
const expenseList = document.getElementById("expense-list");
const totalExpenses = document.getElementById("total-expenses");
const expenseError = document.getElementById("expense-error");
const descriptionInput = document.getElementById("expense-name");
const amountInput = document.getElementById("expense-amount");
const categoryInput = document.getElementById("expense-category");
const dateInput = document.getElementById("expense-date");
const currencyFormatter = new Intl.NumberFormat("en-US", {
	style: "currency",
	currency: "USD"
});

let totalAmount = 0;

function showValidationError(message, field) {
	expenseError.textContent = message;
	expenseError.hidden = false;
	field.focus();
}

expenseForm.addEventListener("submit", function (event) {
	event.preventDefault();
	expenseError.hidden = true;

	const description = descriptionInput.value.trim();
	const amountText = amountInput.value;
	const amount = Number(amountText);
	const category = categoryInput.value;
	const date = dateInput.value;

	if (!description) {
		showValidationError("Please enter a description.", descriptionInput);
		return;
	}

	if (amountInput.validity.badInput || (amountText !== "" && !Number.isFinite(amount)) || amountInput.validity.stepMismatch) {
		showValidationError("Enter a valid amount, such as 12.50.", amountInput);
		return;
	}

	if (amountText === "") {
		showValidationError("Please enter an amount.", amountInput);
		return;
	}

	if (amount < 0) {
		showValidationError("Amount cannot be negative.", amountInput);
		return;
	}

	if (amount === 0) {
		showValidationError("Amount must be greater than zero.", amountInput);
		return;
	}

	if (!category) {
		showValidationError("Please select a category.", categoryInput);
		return;
	}

	if (!date) {
		showValidationError("Please select a date.", dateInput);
		return;
	}

	const emptyMessage = expenseList.querySelector("td[colspan]");
	if (emptyMessage) {
		expenseList.replaceChildren();
	}

	const row = document.createElement("tr");
	const expenseDetails = [
		date,
		description,
		category.charAt(0).toUpperCase() + category.slice(1),
		currencyFormatter.format(amount)
	];

	expenseDetails.forEach(function (detail) {
		const cell = document.createElement("td");
		cell.textContent = detail;
		row.appendChild(cell);
	});

	expenseList.appendChild(row);

	totalAmount += amount;
	totalExpenses.textContent = currencyFormatter.format(totalAmount);

	expenseForm.reset();
});
