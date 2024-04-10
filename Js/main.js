function validateInput(inputId, errorIconId) {
    event.preventDefault(); 
    let input = document.getElementById(inputId);
    let errorIcon = document.getElementById(errorIconId);
    let isValid = true;
  
    if (!isNumeric(input.value)) {
      errorIcon.style.visibility = "visible";
      errorIcon.style.opacity = "1";
      isValid = false;
    } else if (input.value.trim() === "") {
      isValid = false;
    } else {
      errorIcon.style.visibility = "hidden";
      errorIcon.style.opacity = "0";
    }
  
    return isValid;
  }
  
  function isNumeric(value) {
    return /^\d+$/.test(value);
  }
  
  function validateAndCalculate() {
    let isValid = true;
  
    let inputFields = document.querySelectorAll("input");
    inputFields.forEach((input) => {
      let errorIconId = "exaclIcon" + input.id.substr(-1);
      if (!validateInput(input.id, errorIconId)) {
        isValid = false;
      }
    });
  
    if (isValid) {
        let grossAnnualIncome = parseFloat(document.getElementById("input1").value);
        let extraIncome = parseFloat(document.getElementById("input2").value);
        let ageGroup = document.getElementById("event_select").value;
        let deductions = parseFloat(document.getElementById("input4").value);

        // Calculate overall income
        let overallIncome = grossAnnualIncome + extraIncome - deductions;

        // Format overall income with commas
        let formattedOverallIncome = overallIncome.toLocaleString();

        // Calculate tax deduction based on overall income and age group
        let taxDeduction = 0;
        if (overallIncome > 800000) {
            if (ageGroup === "sdance") {
                taxDeduction = 0.3 * (overallIncome - 800000);
            } else if (ageGroup === "code") {
                taxDeduction = 0.4 * (overallIncome - 800000);
            } else if (ageGroup === "sbr") {
                taxDeduction = 0.1 * (overallIncome - 800000);
            }
        }

        // Display result in the modal form
        let answerDiv = document.getElementById("answerDiv");
        let answerDivtax = document.getElementById("answerDivtax");
        answerDiv.innerHTML = `<span id="resOverallAns">$${formattedOverallIncome}</span> Lakhs.`;
        answerDivtax.innerHTML = `<span id="resAns">$${taxDeduction.toFixed(2)}</span> Lakhs.`;

        // Display modal form
        let modal = document.getElementById("modal");
        modal.style.display = "block";
    } else {
        alert("Error! Please fill out all fields correctly.");
    }

    return isValid;
  }
  
  function closeModal() {
    let modal = document.getElementById("modal");
    modal.style.display = "none";
}
