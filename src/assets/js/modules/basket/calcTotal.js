import calcSubTotal from './calcSubTotal';
import renderSummary from './renderSummary';
import summaryAdditionals from './summaryAdditionals';

const calcTotal = () => {
	const subTotal = calcSubTotal();

	const total = subTotal + summaryAdditionals.tax + summaryAdditionals.shipping;

	const summaryObj = {
		subTotal,
		tax: summaryAdditionals.tax,
		shipping: summaryAdditionals.shipping,
		total,
	};

	renderSummary(summaryObj);
};

export default calcTotal;
