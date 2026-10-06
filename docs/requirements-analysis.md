# Requirements Analysis

## Project Overview

The Personal Expense Tracker is a single-page browser application for recording individual expenses and viewing their running total. It is intended to remain small and straightforward for a beginner to understand.

## Goals

- Make it quick to enter an expense.
- Prevent incomplete or invalid expense data from being added.
- Show accepted expenses and their combined amount clearly.
- Work on desktop and mobile-sized screens without requiring a build system.

## User

One person uses the application in a browser on their own device. The current version does not identify users or share data between devices.

## Functional Requirements

1. The expense form provides fields for description, amount, category, and date.
2. Each field is required. Descriptions containing only whitespace are treated as empty.
3. The amount must be a valid number greater than zero, with no more than two decimal places.
4. The category must be selected from Food, Transport, Housing, or Other.
5. The date must be supplied using the browser's date input.
6. If an entry is invalid, the application displays a helpful message, focuses the relevant field, and does not add a row or change the total.
7. If an entry is valid, the application adds it to the expense table and clears the form.
8. The total reflects all expenses added during the current page session and is formatted in US dollars.
9. Before the first expense is added, the table displays an empty-state message.

## Quality and Usability Requirements

- Use semantic HTML and visible labels for form fields.
- Make validation feedback available as an announced alert.
- Keep controls readable and usable with keyboard focus.
- On narrow screens, stack the form fields and allow the table to scroll horizontally without widening the page.
- Use plain HTML, CSS, and JavaScript with no external runtime dependencies.

## Assumptions and Constraints

- All amounts use US dollars; currency selection is not configurable.
- Expense data is held in JavaScript memory only and is cleared when the page reloads.
- The browser provides the date input control.
- Each expense has one description, amount, category, and date.

## Out of Scope

- Saving data to local storage, a file, or a server.
- Editing or deleting an expense after it is added.
- Filtering, sorting, charts, budgets, recurring expenses, authentication, or multi-user support.
- Supporting currencies other than US dollars.

## Acceptance Criteria

- Submitting a blank description shows an error and leaves the table and total unchanged.
- Submitting a blank amount shows an error.
- Submitting malformed input, zero, a negative amount, or an amount with more than two decimal places is rejected with an error.
- Submitting a valid expense adds one row with the provided date, description, category, and formatted amount.
- The displayed total increases by the accepted amount and the form resets.
- The initial empty-state message disappears after the first valid expense is added.
- At a mobile viewport, the form is one column and the overall page does not overflow horizontally; the table may scroll within its section.
