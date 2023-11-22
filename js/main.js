const BASIC_YEARLY_PRICE = '$100 / year';
const STANDART_YEARLY_PRICE = '$200 / year';
const PREMIUM_YEARLY_PRICE = '$300 / year';
const BASIC_MONTHLY_PRICE = '$9.99 / year';
const STANDART_MONTLY_PRICE = '$19.99 / year';
const PREMIUM_MONTHLY_PRICE = '$29.99 / year';

const slider = document.querySelector('.slider');
const basicPrice = document.querySelector('.price-basic');
const standartPrice = document.querySelector('.price-standart');
const premiumtPrice = document.querySelector('.price-premium');

const burgerMenu = document.querySelector('.burger');
const navMenu = document.querySelector('.nav');
const signInButton = document.querySelector('.signin');

const yearlyBillingButton = document.querySelector('.toggle__yearly');
const monthlyBillingButton = document.querySelector('.toggle__monthly');

const toggleBurgerMenuClick = () => {
  burgerMenu.classList.toggle('menu-active');
  navMenu.classList.toggle('menu-active');
  signInButton.classList.toggle('menu-active');
}

const onSetYearlyBillingClick = () => {
  monthlyBillingButton.classList.remove('active');
  yearlyBillingButton.classList.add('active');

  basicPrice.textContent = BASIC_YEARLY_PRICE;
  standartPrice.textContent = STANDART_YEARLY_PRICE;
  premiumtPrice.textContent = PREMIUM_YEARLY_PRICE;
}

const onSetMonthlyBillingClick = () => {
  yearlyBillingButton.classList.remove('active');
  monthlyBillingButton.classList.add('active');

  basicPrice.textContent = BASIC_MONTHLY_PRICE;
  standartPrice.textContent = STANDART_MONTLY_PRICE;
  premiumtPrice.textContent = PREMIUM_MONTHLY_PRICE;
}

const App = () => {
  yearlyBillingButton.addEventListener('click', onSetYearlyBillingClick);
  monthlyBillingButton.addEventListener('click', onSetMonthlyBillingClick);
  burgerMenu.addEventListener('click', toggleBurgerMenuClick);
}

App();
