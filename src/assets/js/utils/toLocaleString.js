const toLocaleString = (num, locale = 'en-US', currency = 'USD') => {
	return num
		.toLocaleString(locale, {
			style: 'currency',
			currency: currency,
			minimumFractionDigits: 0,
		})
		.replace(',', '');
};

export default toLocaleString;
