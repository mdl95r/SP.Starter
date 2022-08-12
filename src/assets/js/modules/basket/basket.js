import SELECTORS from './selectors';
import toLocaleString from '../../utils/toLocaleString';
import calcSubTotal from './calcSubTotal';
import counterActions from './counterActions';
import deleteItem from './deleteItem';
import renderSummary from './renderSummary';
import summaryAdditionals from './summaryAdditionals';

const initBasket = () => {
	const basketItems = document.querySelector(SELECTORS.BASKET_ITEMS);

	const itemsArray = [
		{
			id: 0,
			title: 'Amet minim mollit non deserunt ullamco est sit',
			price: 525,
			count: 1,
			image: 'image1.png',
		},
		{
			id: 1,
			title: 'Amet minim mollit non deserunt ullamco est sit',
			price: 525,
			count: 1,
			image: 'image2.png',
		},
	];

	const renderBasketItems = items => {
		let str = '';

		if (!items.length) {
			basketItems.innerHTML = '';
			return;
		}

		items.forEach(el => {
			str += `
				<li class="basket__item">
					<div class="basket__img-wrap">
						<img class="basket__item-img" src="/assets/images/resources/${el.image}" alt="image1">
					</div>
					<div class="basket__item-content">
						<h3 class="basket__item-title">${el.title}</h3>
						<div class="basket__item-info">
								<div class="basket__item-counters">
									<button class="button button_icon js-button-decrease basket__item-button">
											<svg class="basket__item-icon" viewBox="0 0 24 24">
												<use xlink:href="#icon-minus" />
											</svg>
									</button>
									<span 
										class="basket__item-counter js-item-counter" 
										data-item-counter="${el.count}">${el.count}</span>
									<button class="button button_icon js-button-increase basket__item-button">
											<svg class="basket__item-icon" viewBox="0 0 24 24">
												<use xlink:href="#icon-plus" />
											</svg>
									</button>
								</div>
								<div
									class="basket__item-price js-basket-item-price"
									data-item-price="${el.price}">${toLocaleString(el.price)}</div>
						</div>
						<button class="button button_icon js-item-delete basket__item-button basket__item-button_delete">
								<svg class="basket__item-icon" viewBox="0 0 24 24">
									<use xlink:href="#icon-delete" />
								</svg>
						</button>
					</div>
				</li>
				`;

			basketItems.innerHTML = str;
		});
	};

	renderBasketItems(itemsArray);

	renderSummary({
		subTotal: calcSubTotal(),
		tax: summaryAdditionals.tax,
		shipping: summaryAdditionals.shipping,
		total: calcSubTotal() + summaryAdditionals.tax + summaryAdditionals.shipping,
	});

	basketItems.addEventListener('click', deleteItem);

	basketItems.addEventListener('click', counterActions);
};

export default initBasket;
