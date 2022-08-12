import actionsPrice from './actionsPrice';
import calcTotal from './calcTotal';
import { SELECTORS, CLASSES } from './selectors';

const counterActions = e => {
	if (
		e.target.classList.contains(CLASSES.PRICE_DECREASE) ||
		e.target.closest(SELECTORS.PRICE_DECREASE)
	) {
		const item = e.target.closest(SELECTORS.BASKET_ITEM);

		actionsPrice(item, '-');
		calcTotal();
	}

	if (
		e.target.classList.contains(CLASSES.PRICE_INCREASE) ||
		e.target.closest(SELECTORS.PRICE_INCREASE)
	) {
		const item = e.target.closest(SELECTORS.BASKET_ITEM);

		actionsPrice(item, '+');
		calcTotal();
	}
};

export default counterActions;
