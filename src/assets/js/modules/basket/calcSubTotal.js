import replaceCurrency from '../../utils/replaceCurrency';
import SELECTORS from './selectors';

const calcSubTotal = () => {
	const allPrices = [...document.querySelectorAll(SELECTORS.BASKET_ITEM_PRICE)];

	const subTotal = allPrices.reduce((acc, el) => acc + replaceCurrency(el), 0);

	return subTotal;
};

export default calcSubTotal;
