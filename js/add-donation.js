
//  Donate for Noakhali
document.getElementById('donate-btn-1').addEventListener('click', function(event){
    event.preventDefault();

    const addDonation = getInputFieldValueById('input-donation');
    

    if(!isNaN(addDonation) && addDonation > 0){

        const donatedMoney = getTextFieldValueById('donation-amount-1');
        const newDonationAmount = donatedMoney + addDonation;

        const availableAmount = getTextFieldValueById('available-amount');
        const newAvailableAmount = availableAmount - addDonation;

        document.getElementById('donation-amount-1').innerText = newDonationAmount;
        document.getElementById('available-amount').innerText = newAvailableAmount;


    }
    else{
        alert("Failed to add donation.Please enter valid amount.");
    }


})


//  Donate for Feni
document.getElementById('donate-btn-2').addEventListener('click', function(event){
    event.preventDefault();

    const addDonation2 = getInputFieldValueById('input-donation-2');
    

    if(!isNaN(addDonation2) && addDonation2 > 0){

        const donatedMoney = getTextFieldValueById('donation-amount-2');
        const newDonationAmount = donatedMoney + addDonation2;

        const availableAmount = getTextFieldValueById('available-amount');
        const newAvailableAmount = availableAmount - addDonation2;

        document.getElementById('donation-amount-2').innerText = newDonationAmount;
        document.getElementById('available-amount').innerText = newAvailableAmount;


    }
    else{
        alert("Failed to add donation.Please enter valid amount.");
    }


})


//  Donate for Quota movement
document.getElementById('donate-btn-3').addEventListener('click', function(event){
    event.preventDefault();

    const addDonation3 = getInputFieldValueById('input-donation-3');
    

    if(!isNaN(addDonation3) && addDonation3 > 0){

        const donatedMoney = getTextFieldValueById('donation-amount-3');
        const newDonationAmount = donatedMoney + addDonation3;

        const availableAmount = getTextFieldValueById('available-amount');
        const newAvailableAmount = availableAmount - addDonation3;

        document.getElementById('donation-amount-3').innerText = newDonationAmount;
        document.getElementById('available-amount').innerText = newAvailableAmount;


    }
    else{
        alert("Failed to add donation.Please enter valid amount.");
    }


})