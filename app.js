function calculateLoan() {
   // console.log("change");
   loanAmountValue = document.getElementById("loan-amount").value

   //console.log(loanAmountValue);
   interestRateValue = document.getElementById("interest-rate").value

   MonthsToPayValue = document.getElementById("months-to-pay").value

   interest = (loanAmountValue * (interestRateValue * 0.01)) / MonthsToPayValue

   MonthlyPayment = (loanAmountValue / MonthsToPayValue + interest).tofixed(2);

   document.getElementById("payment").innerHTML = `Monthly Payment: ${MonthlyPayment}`;
}