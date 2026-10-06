# Personal Expense Tracker

A small, browser-based expense tracker built with plain HTML, CSS, and JavaScript. It lets one user enter expenses, see them in a table, and track their combined total.

## Features

- Add an expense with a description, amount, category, and date.
- Validate required fields and show a message when an entry is invalid.
- Reject malformed amounts, zero, negative values, and amounts with more than two decimal places.
- Display each valid expense and update the total in US dollars.
- Use a responsive layout that works on narrow and wide screens.

## Run the App

Open `index.html` in a web browser. The project has no build step, package installation, or server requirement.

## Use the App

1. Enter a description, amount, category, and date.
2. Select **Add Expense**.
3. If an entry is invalid, correct the field named by the message and submit again.
4. View accepted entries in the Expenses table and their sum in Total Expenses.

## Project Files

- `index.html` contains the page structure and input form.
- `style.css` contains the page layout, colors, and responsive styles.
- `script.js` validates form submissions, adds expense rows, and updates the total.
- `docs/requirements-analysis.md` describes the requirements, assumptions, and acceptance criteria.
- `docs/ai-prompt-log.md` records the prompts used during development.

## Data and Limitations

Expenses are stored only in the current page session. Reloading or closing the page clears the entries. The total is formatted in US dollars. The current version does not support editing or deleting entries, persistence, multiple currencies, or user accounts.

## Checks

There is no automated test suite in the project. During development, JavaScript syntax and the main submission cases were checked, including empty and malformed values, zero, negative amounts, excess decimal places, and a valid expense.
