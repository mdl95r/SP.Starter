import replaceCurrency from '../../utils/replaceCurrency';
import toLocaleString from '../../utils/toLocaleString';
import SELECTORS from './selectors';

const actionsPrice = (item, action) => {
	const itemPrice = item.querySelector(SELECTORS.BASKET_ITEM_PRICE);
	const itemCounter = item.querySelector(SELECTORS.PRICE_COUNTER);
	const price = +itemPrice.dataset.itemPrice;
	const priceTextContent = replaceCurrency(itemPrice);
	const itemCounterContent = +itemCounter.textContent;
	const dataCount = +itemCounter.dataset.itemCounter;

	switch (action) {
		case '+':
			itemPrice.textContent = toLocaleString(priceTextContent + price);
			itemCounter.textContent = itemCounterContent + dataCount;
			break;

		case '-':
			itemPrice.textContent =
				priceTextContent - price <= 0 ? '$0' : toLocaleString(priceTextContent - price);

			itemCounter.textContent =
				itemCounterContent - dataCount <= 0 ? 0 : itemCounterContent - dataCount;

			break;

		default:
			break;
	}
};

export default actionsPrice;
