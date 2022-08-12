const replaceCurrency = (el, currency = '$') => {
	return Number(el.textContent.replace(currency, ''));
};

export default replaceCurrency;
