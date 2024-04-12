# Tax Calculator Web Application

This is a web application designed to calculate taxes based on user-provided inputs such as gross annual income, extra income, age group, and deductions. The application provides a user-friendly interface for inputting data and displays the calculated tax information in a modal window.

## Features

- Calculate taxes based on user inputs.
- Validate input fields to ensure accurate calculations.
- Display tax calculation results in a modal window.
- Allow users to close the modal window after viewing the results.

## Technologies Used

- HTML
- CSS
- JavaScript
- Bootstrap (for styling)
- Font Awesome (for icons)

## Usage

1. Open the `index.html` file in a web browser.
2. Enter the required information:
   - Gross Annual Income: Total salary in a year before deductions.
   - Extra Income: Additional earnings from sources other than salary.
   - Age Group: Select the appropriate age group category.
   - Total Applicable Deductions: Sum of eligible deductions from income.
3. Click the "Submit" button to calculate taxes.
4. View the calculated tax information in the modal window.
5. Click the "Close" button to close the modal window.

## Getting Started
Just simply install 'Live Server' on vs code or run in Browser

## LIVE Projects

dainty-baklava-c29508.netlify.app

## Screenshot

## Tax Calculator Form

![App Screenshot](https://github.com/devgeek2700/Tax-Calculator/blob/master/Output/homepage.png?raw=true)

## Guide Popovers 

![App Screenshot](https://github.com/devgeek2700/Tax-Calculator/blob/master/Output/giudepopup.png?raw=true)

## Validation in Form 

![App Screenshot](https://github.com/devgeek2700/Tax-Calculator/blob/master/Output/validate.png?raw=true)

## Wrong Entry Guide 

![App Screenshot](https://github.com/devgeek2700/Tax-Calculator/blob/master/Output/enter!.png?raw=true)

## Result Popup Modal 

![App Screenshot](https://github.com/devgeek2700/Tax-Calculator/blob/master/Output/finaloutput.png?raw=true)

# Tax Calculator Test Suite

## Input Validation Tests

### Test 1: Validate Gross Annual Income Input
- **Scenario:** Verify that the Gross Annual Income input field only accepts numeric values.
- **Steps:**
  1. Enter a non-numeric value into the Gross Annual Income field.
  2. Submit the form.
- **Expected Result:** An error message should be displayed indicating that only numeric values are allowed.

### Test 2: Validate Extra Income Input
- **Scenario:** Ensure that the Extra Income input field only accepts numeric values.
- **Steps:**
  1. Enter a non-numeric value into the Extra Income field.
  2. Submit the form.
- **Expected Result:** An error message should be displayed indicating that only numeric values are allowed.

### Test 3: Validate Deductions Input
- **Scenario:** Check that the Deductions input field only accepts numeric values.
- **Steps:**
  1. Enter a non-numeric value into the Deductions field.
  2. Submit the form.
- **Expected Result:** An error message should be displayed indicating that only numeric values are allowed.

## Calculation Logic Tests

### Test 4: Calculate Overall Income
- **Scenario:** Verify that the overall income is calculated correctly based on Gross Annual Income, Extra Income, and Deductions.
- **Steps:**
  1. Enter valid values for Gross Annual Income, Extra Income, and Deductions.
  2. Submit the form.
- **Expected Result:** The overall income should be calculated accurately.

### Test 5: Calculate Tax Deduction
- **Scenario:** Ensure that the tax deduction is calculated correctly based on the overall income and age group.
- **Steps:**
  1. Enter valid values for Gross Annual Income, Extra Income, Deductions, and select an age group.
  2. Submit the form.
- **Expected Result:** The tax deduction should be calculated accurately according to the specified age group.

## User Interface Behavior Tests

### Test 6: Modal Display After Form Submission
- **Scenario:** Confirm that the modal form is displayed after successfully submitting the input form.
- **Steps:**
  1. Enter valid input values.
  2. Submit the form.
- **Expected Result:** The modal should appear on the screen displaying the tax calculation results.

### Test 7: Modal Close Functionality
- **Scenario:** Ensure that the modal form can be closed using the "Close" button.
- **Steps:**
  1. Open the modal form.
  2. Click on the "Close" button.
- **Expected Result:** The modal should be closed and no longer visible on the screen.



## How to Contribute

If you'd like to contribute to this project, you can follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/new-feature`).
3. Make your changes and commit them (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/new-feature`).
5. Create a new pull request.

## License

This project is licensed under the [MIT License](LICENSE).
