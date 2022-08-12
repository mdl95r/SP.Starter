import toLocaleString from '../../utils/toLocaleString';
import SELECTORS from './selectors';

const renderSummary = ({ subTotal, tax, shipping, total }) => {
	const summaryItems = document.querySelector(SELECTORS.SUMMARY_ITEMS);

	const str = `
		<li class="basket__summary-item">
			<div class="basket__summary-title">Subtotal</div>
			<div class="basket__summary-sum">${toLocaleString(subTotal)}</div>
		</li>

		<li class="basket__summary-item">
			<div class="basket__summary-title">Tax</div>
			<div class="basket__summary-sum">${toLocaleString(tax)}</div>
		</li>

		<li class="basket__summary-item">
			<div class="basket__summary-title">Shipping</div>
			<div class="basket__summary-sum">${toLocaleString(shipping)}</div>
		</li>

		<li class="basket__summary-item">
			<div class="basket__summary-title">Total</div>
			<div class="basket__summary-sum">${toLocaleString(total)}</div>
		</li>
	`;

	summaryItems.innerHTML = str;
};

export default renderSummary;
