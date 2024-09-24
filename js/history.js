// Get buttons, sections, and other elements
const donationBtn = document.getElementById('donation-button');
const historyBtn = document.getElementById('history-button');
const donationSection = document.querySelector('main > section:first-of-type');
const historySection = document.getElementById('historySection');
const historyList = document.getElementById('historyList');

// Donation Button Click Handler
donationBtn.addEventListener("click", function(){
    donationSection.classList.remove('hidden');
    historySection.classList.add('hidden');

    donationBtn.classList.add('bg-lime-500');
    historyBtn.classList.remove('bg-lime-500');
});

// History Button Click Handler
historyBtn.addEventListener("click", function(){
    historySection.classList.remove('hidden');
    donationSection.classList.add('hidden');

    historyBtn.classList.add('bg-lime-500');
    donationBtn.classList.remove('bg-lime-500');
});

// Function to add donation to history
// Function to add donation to history
function addDonationToHistory(place, cause, amount) {
    if (amount && amount > 0) {
        const now = new Date();
        const date = now.toLocaleDateString();
        const time = now.toLocaleTimeString();

        // Create history div container
        const donationDiv = document.createElement("div");
        donationDiv.classList.add("border","font-bold" , "border-gray-300", "p-4", "rounded-lg", "mb-4");

        // Create donation details inside div
        const donationDetails = document.createElement("p");
        donationDetails.classList.add("text-gray-700");
        donationDetails.innerText = `Donated BDT ${amount} to ${place} for ${cause} on ${date} at ${time}`;

        // Append donation details to the donationDiv
        donationDiv.appendChild(donationDetails);

        // Append the donationDiv to the history section
        document.getElementById('historyList').appendChild(donationDiv);
    } else {
        alert("Please enter a valid donation amount.");
    }
}

// Donation button click event listeners
document.getElementById("donate-btn-1").addEventListener("click", function () {
    const donationAmount = document.getElementById("input-donation").value;
    addDonationToHistory("Noakhali", "flood-relief", donationAmount);
});

document.getElementById("donate-btn-2").addEventListener("click", function () {
    const donationAmount = document.getElementById("input-donation-2").value;
    addDonationToHistory("Feni", "famine-2024", donationAmount);
});

document.getElementById("donate-btn-3").addEventListener("click", function () {
    const donationAmount = document.getElementById("input-donation-3").value;
    addDonationToHistory("Quota Movement", "aid-for-injured", donationAmount);
});

