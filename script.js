const expenseForm = document.getElementById("expense-form");
const expenseList = document.getElementById("expense-list");
const totalExpenses = document.getElementById("total-expenses");

let totalAmount = 0;

expenseForm.addEventListener("submit", function (event) {
	event.preventDefault();

	const description = document.getElementById("expense-name").value.trim();
	const amount = Number(document.getElementById("expense-amount").value);
	const category = document.getElementById("expense-category").value;
	const date = document.getElementById("expense-date").value;

	if (!description || amount <= 0 || !category || !date) {
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
		new Intl.NumberFormat("en-US", {
			style: "currency",
			currency: "USD"
		}).format(amount)
	];

	expenseDetails.forEach(function (detail) {
		const cell = document.createElement("td");
		cell.textContent = detail;
		row.appendChild(cell);
	});

	expenseList.appendChild(row);

	totalAmount += amount;
	totalExpenses.textContent = new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD"
	}).format(totalAmount);

	expenseForm.reset();
});
