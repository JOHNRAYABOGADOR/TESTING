# AI Prompt Log

This log records the user prompts that guided the tracker implementation and the resulting work. Conversation date: 2026-10-06.

| #   | User prompt                                                                                                                                                 | Result                                                                                                                                               |
| --- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | “Create the basic HTML structure for my Personal Expense Tracker System. Include only the required interface elements and keep the code beginner-friendly.” | Added the page title, total summary, expense form, and expense table in `index.html`.                                                                |
| 2   | “add the main functionality User enters data ↓ JavaScript processes it ↓ Application displays result”                                                       | Added form submission handling, table rows, and a running total in `script.js`.                                                                      |
| 3   | “add input validation Empty input Invalid input Zero Negative number Wrong format”                                                                          | Added specific validation messages and checks for missing fields, malformed amounts, zero, negative amounts, and amounts with excess decimal places. |
| 4   | “fix the design use user-friendly design and also make it simple”                                                                                           | Added responsive styling, readable form controls, focus styles, and a clear total summary in `style.css`.                                            |
| 5   | “Refactor this JavaScript to reduce repeated code while keeping the same functionality. Explain the changes.”                                               | Reused cached form references and one currency formatter, and moved the validation-message helper outside the submit handler.                        |
| 6   | “for documentation README.md docs/requirements-analysis.md docs/ai-prompt-log.md”                                                                           | Added the README, requirements analysis, and this prompt log.                                                                                        |

## Validation Notes

During development, JavaScript syntax was checked and a runtime harness exercised empty, malformed, zero, negative, excess-decimal, and valid expense submissions. The valid case added a table row and updated the total; invalid cases did not alter either.
