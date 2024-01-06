const toggle = document.querySelector('.toggle-button');
const checkbox = toggle.querySelector('input');
const prices = document.querySelectorAll('[class$="annually"], [class$="monthly"]');

checkbox.addEventListener('click', function () {
  const showMonthly = checkbox.checked;

  prices.forEach(price => {
    const isMonthly = /monthly/.test(price.classList.value);
    price.style.display = isMonthly === showMonthly ? 'flex' : 'none';
  });
});
