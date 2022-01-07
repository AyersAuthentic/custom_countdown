const inputContainer = document.getElementById('input-container');
const countdownForm = document.getElementById('countdownForm');
const dateElement = document.getElementById('date-picker');


// Set Date Input Min with Today's Data
const today = new Date().toISOString().split('T')[0];
dateElement.setAttribute('min', today);
