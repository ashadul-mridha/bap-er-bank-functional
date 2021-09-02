//work with functional

//get data from input feild
function inputField(feildName){
    let inputAmount = document.getElementById(feildName).value;
    inputAmount = parseFloat(inputAmount);

    //clear diposite input feild
    document.getElementById(feildName).value = ' ';

    return inputAmount;
}
//get current balance and add new add balance to update 
function updateBalance(feildname,newAddedBalance){

    let currentBalance = document.getElementById(feildname).innerText;
    currentBalance = parseFloat(currentBalance);

    let newNetBalance = newAddedBalance + currentBalance;
    //update deposite balance
    document.getElementById(feildname).innerText = newNetBalance;

}
function netBalanceNow(){
    let currentTotalBalance = document.getElementById('balance-total').innerText;
    currentTotalBalance = parseFloat(currentTotalBalance);
    return currentTotalBalance;
}
//update curent balance
function bankAmount(newBalance,isAdd){
    let currentTotalBalance = netBalanceNow();
    // let totalBalance = currentTotalBalance + newBalance;
    if(isAdd == true){
        let totalBalance = currentTotalBalance + newBalance;
        document.getElementById('balance-total').innerText = totalBalance;
    }else{
        let totalBalance = currentTotalBalance - newBalance;
        document.getElementById('balance-total').innerText = totalBalance;
    }

}




//added money for diposite
document.getElementById('diposite-btn').addEventListener('click',function(){
    
    let addDipositeBalance = inputField('diposite-amount');
    if(addDipositeBalance > 0){
        let currentNewDiposite = updateBalance('curent-dipo-amount',addDipositeBalance);
        bankAmount(addDipositeBalance,true);
    }

});

//Withdrow money from Balance
document.getElementById('withdrow-btn').addEventListener('click',function(){
    
    let currentBalanceNow = netBalanceNow();
    let addWithdrowAmount = inputField('withdrow-amount');
    if (addWithdrowAmount > 0 && currentBalanceNow > addWithdrowAmount) {
        let currentNewWithdrow = updateBalance('current-withdrow-balance',addWithdrowAmount);   bankAmount(addWithdrowAmount,false);
    }
    if (currentBalanceNow < addWithdrowAmount) {
        alert("You Don't Have suffeciant Balance");
    }
})

/* //add money to diposite
document.getElementById('diposite-btn').addEventListener('click',function(){
    
    let addDiposite = document.getElementById('diposite-amount').value;
    addDiposite = parseFloat(addDiposite);
    
    let currentDipoBalance = document.getElementById('curent-dipo-amount').innerText;
    currentDipoBalance = parseFloat(currentDipoBalance);

    let dipositeBalance = addDiposite + currentDipoBalance;
    //update deposite balance
    document.getElementById('curent-dipo-amount').innerText = dipositeBalance;
    //clear diposite input feild
    document.getElementById('diposite-amount').value = ' ';

    //update curent balance
    let currentTotalBalance = document.getElementById('balance-total').innerText;
    currentTotalBalance = parseFloat(currentTotalBalance);

    let totalBalance = currentTotalBalance + addDiposite;

    document.getElementById('balance-total').innerText = totalBalance;
    
})

//Withdrow money from Balance
document.getElementById('withdrow-btn').addEventListener('click',function(){
    
    let addWithdrow = document.getElementById('withdrow-amount').value;
    addWithdrow = parseFloat(addWithdrow);
    
    let currentWithdrowBalance = document.getElementById('current-withdrow-balance').innerText;
    currentWithdrowBalance = parseFloat(currentWithdrowBalance);

    let totalWithdrowBalance = addWithdrow + currentWithdrowBalance;
    //update withdrow balance
    document.getElementById('current-withdrow-balance').innerText = totalWithdrowBalance;
    //clear withdrow input feild
    document.getElementById('withdrow-amount').value = ' ';

    //update curent balance
    let currentTotalBalance = document.getElementById('balance-total').innerText;
    currentTotalBalance = parseFloat(currentTotalBalance);

    let totalBalance = currentTotalBalance - addWithdrow;

    document.getElementById('balance-total').innerText = totalBalance;
    
}) */