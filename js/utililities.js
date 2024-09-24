
function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputMoney = parseFloat(inputValue);
    return inputMoney;

}

function getTextFieldValueById(id){
    const inputText = document.getElementById(id).innerText;
    const donationMoney = parseFloat(inputText);
    return donationMoney;

}