// Get references to the modal elements
const modal = document.getElementById('donationModal');
const closeModalButton = document.getElementById('closeModal');

// To store the currently selected donation input and display
let currentDonationInput;
let currentDonationDisplay;

// Function to open the modal
function openModal(donationInput, donationDisplay) {
  currentDonationInput = donationInput;
  currentDonationDisplay = donationDisplay;
  modal.classList.remove('hidden'); // Show the modal
}

// Function to close the modal
function closeModal() {
  modal.classList.add('hidden'); // Hide the modal
}

// Attach event listeners to the "Donate Now" buttons for each donation card
document.getElementById('donate-btn-1').addEventListener('click', function() {
  const donationInput = document.getElementById('input-donation');
  const donationDisplay = document.getElementById('donation-amount-1');
  
  if (donationInput.value) {
    openModal(donationInput, donationDisplay);
  } else {
    alert('Please enter a donation amount');
  }
});

document.getElementById('donate-btn-2').addEventListener('click', function() {
  const donationInput = document.getElementById('input-donation-2');
  const donationDisplay = document.getElementById('donation-amount-2');
  
  if (donationInput.value) {
    openModal(donationInput, donationDisplay);
  } else {
    alert('Please enter a donation amount');
  }
});

document.getElementById('donate-btn-3').addEventListener('click', function() {
  const donationInput = document.getElementById('input-donation-3');
  const donationDisplay = document.getElementById('donation-amount-3');
  
  if (donationInput.value) {
    openModal(donationInput, donationDisplay);
  } else {
    alert('Please enter a donation amount');
  }
});

// Close the modal when clicking the close button
closeModalButton.addEventListener('click', function() {
  // Process the donation amount when closing the modal
  const donationValue = currentDonationInput.value;
  
  if (donationValue && !isNaN(donationValue)) {
    const existingAmount = parseInt(currentDonationDisplay.textContent, 10);
    const newAmount = existingAmount + parseInt(donationValue, 10);
    currentDonationDisplay.textContent = newAmount + ' BDT';  // Update the display
  }
  
  closeModal(); // Close the modal after processing
});
