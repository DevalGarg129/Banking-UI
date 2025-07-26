document.addEventListener("DOMContentLoaded", () => {
    const balanceDisplay = document.querySelector(".balance-amount");
    const depositBtn = document.querySelector(".deposit");
    const withdrawBtn = document.querySelector(".withdraw");

    let balance = 12500;

    function updateBalancedisplay(){
        balanceDisplay.textContent = `$${balance.toFixed(2)}`;
    }

    depositBtn.addEventListener("click", () => {
        const amount = parseFloat(prompt("Enter deposit amount : "));
        if(!NaN(amount) && amount > 0){
            balance += amount;
            updateBalancedisplay();
        }else{
            alert("please enter a valid number");
        }
    });

    withdrawBtn.addEventListener("click", () => {
        const amount = parseFloat(prompt("Enter withdrawal amount"));
        if(!NaN(amount) && amount > 0){
            if(amount > balance){
                alert("Insufficient funds");
            }else{
                balance -= amount;
                updateBalancedisplay();
            }
        }
        else{
            alert("Please enter a valid number");
        }
    });
    updateBalancedisplay();
})