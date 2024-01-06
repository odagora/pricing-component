// Selecting the toggle button, checkbox, and prices with classes ending in 'annually' or 'monthly'
const toggle = document.querySelector('.toggle-button');
const checkbox = toggle.querySelector('input');
const prices = document.querySelectorAll('[class$="annually"], [class$="monthly"]');

// Function to check if an element's class list contains a specified keyword
function classHasKeyword(element, keyword) {
  return new RegExp(keyword).test(element.classList.value);
}

// Initial loop to hide 'monthly' prices on page load
prices.forEach(price => {
  const isMonthly = classHasKeyword(price, 'monthly');
  if (isMonthly) price.classList.add('hidden');
});

// Adding event listener for checkbox click
checkbox.addEventListener('click', function () {
  // Determining whether to show monthly prices based on checkbox state
  const showMonthly = checkbox.checked;

  // Loop through prices to toggle the 'hidden' class based on checkbox state
  prices.forEach(price => {
    const isMonthly = classHasKeyword(price, 'monthly');
    // Toggle 'hidden' class based on whether the price is monthly and checkbox is checked
    price.classList.toggle('hidden', isMonthly !== showMonthly);
  });
});
