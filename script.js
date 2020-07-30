
 // login button event handler btn and input
 const loginBtn = document.getElementById("enter");
 loginBtn.addEventListener("click", function(){
    const loginArea = document.getElementById("login-area");
    loginArea.style.display = ("none"); 
    const transactionArea = document.getElementById("transaction-area");
 transactionArea.style.display = "block";
 const leaveBtn = document.getElementById("leave-btn");
         leaveBtn.style.display = "block";
 }) 
 
 
 
 //deposit button event handler btn 
 const depositBtn = document.getElementById("deposit-Btn");      
 depositBtn.addEventListener("click", function(){                 // const depositAmount = document.getElementById("deposit-amount").value;
                                                                  // const depositNumber = parseFloat(depositAmount);    
                                                                // const currentDeposit = document.getElementById("current-deposit").innerText;
                                                                // const currentDepositNumber = parseFloat(currentDeposit);
 
 // Deposit Input
      const depositNumber = getInputNumber("depositAmount");       // const totalDeposit = depositNumber + currentDepositNumber;
                                                             // document.getElementById("current-deposit").innerText = totalDeposit;
    
      updateSpanText("currentDeposit", depositNumber);
       updateSpanText("currentBalance", depositNumber);
 
     document.getElementById("depositAmount").value = "";   
                                                             // const currentBalance = document.getElementById("current-balance").innerText;
                                                             // const currentBalanceNumber = parseFloat(currentBalance);
                                                            // const totalBalance = depositNumber + currentBalanceNumber;
                                                            // document.getElementById("current-balance").innerText = totalBalance;
      
 })
 
 //withdraw Button & Input
 
 const withdrawBtn = document.getElementById("withdraw-Btn");
 withdrawBtn.addEventListener("click", function(){
                                                             // const withdrawAmount = document.getElementById("withdraw-amount").value;
                                                             // const withdrawNumber = parseFloat(withdrawAmount);
     const withdrawNumber = getInputNumber("withdrawAmount");
     document.getElementById("withdrawAmount").value = ""; 
                                                          // const currentWithdraw = document.getElementById("current-withdrawal").innerText;
                                                         // const currentWithdrawNumber = parseFloat(currentWithdraw);
                                                         // const totalWithdraw = withdrawNumber + currentWithdrawNumber;
                                                         // document.getElementById("current-withdrawal").innerText = totalWithdraw;   
 
 
     
     updateSpanText("currentWithdraw", withdrawNumber);
     updateSpanText("currentBalance", -1 * withdrawNumber);
 
      
 })
 
 //Current withdraw 
 function getInputNumber(id){
     const amount = document.getElementById(id).value; 
 const amountNumber = parseFloat(amount);
    return amountNumber;
 }
  //Current Balance
     function updateSpanText(id, depositNumber){
     const current = document.getElementById(id).innerText;
     const currentNumber = parseFloat(current);
     const totalAmount = depositNumber + currentNumber;
     document.getElementById(id).innerText = totalAmount;
 
 }
 
 const leaveBtn = document.getElementById("leave-btn");
 leaveBtn.addEventListener("click" , function(){
     transactionArea.style.display = "none";
     const loginArea = document.getElementById("login-area");
     loginArea.style.display = "block";
     
 })
 

