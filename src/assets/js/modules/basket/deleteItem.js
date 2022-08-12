import calcTotal from './calcTotal';
import { SELECTORS, CLASSES } from './selectors';

const deleteItem = e => {
	if (e.target.classList.contains(CLASSES.ITEM_DELETE) || e.target.closest(SELECTORS.ITEM_DELETE)) {
		const deletedItem = e.target.closest(SELECTORS.BASKET_ITEM);
		deletedItem.remove();
		calcTotal();
	}
};

export default deleteItem;
