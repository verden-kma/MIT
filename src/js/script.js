if (document.readyState == 'loading') {
	document.addEventListener(DOMContentLoaded, ready);
}
else {
	ready();
}

function ready() {
	// show and hide modal window
document.getElementById('cart-btn').addEventListener('click', function() {
        document.querySelector('.bg-modal').style.display = 'flex';
        document.body.style.overflow = 'hidden';
    });

document.querySelector('.close').addEventListener('click', function() {
    document.querySelector('.bg-modal').style.display = 'none';
    document.body.style.overflow = 'visible';
});

// delete buttons
var removeProdButtons = document.getElementsByClassName('delete-btn');
for (var i = 0; i < removeProdButtons.length; i++) {
	removeProdButtons[i].addEventListener('click', function(event) {
		var button = event.target;
		button.parentElement.parentElement.parentElement.remove();
		updateTotal();
	});
}

// Tron check
var suspiciousQuantity = document.getElementsByClassName('quantity');
for (var i = 0; i < suspiciousQuantity.length; i++) {
		var inputQuantity = suspiciousQuantity[i];
		inputQuantity.addEventListener('change', validateQuantity);
	}

// add products to cart

var newComersBtn = document.getElementsByClassName('buy-btn');
for (var i = 0; i < newComersBtn.length; i++) {
	newComersBtn[i].addEventListener('click', addProduct);
}

}


function addProduct(event) {
	var card = event.target.parentElement;
	var price = card.getElementsByClassName('price')[0].innerText;
	var name = card.getElementsByClassName('item-name').getElementsByTagName('p')[0].innerText;
	var imgSrc = card.getElementsByClassName('item-image')[0].src;
	console.log(name, price, imgSrc);
}

function validateQuantity(event) {
	var quant = event.target;
	if (isNaN(quant.value) || quant.value <= 0) {
		quant.value = 1;
		console.log('https://ukmaedu-my.sharepoint.com/:i:/g/personal/andrii_rozhko_ukma_edu_ua/EYHNkNgMeaxMgfnkdHrNJIIBSXylfArkCdG2JDh23GNqdg?e=vYa8ef');
	}
	updateTotal();
}



function updateTotal() {
	var prods = document.getElementsByClassName('products')[0];
	var containers = prods.getElementsByClassName('markup-goods');
	var remainingTotal = 0;
	for (var i = 0; i < containers.length; i++) {
		var card = containers[i];

		var priceElement = card.getElementsByClassName('price')[0];
		var quantityElement = card.getElementsByClassName('quantity')[0];

		var price = parseFloat(priceElement.innerText.replace('₴', ''));
		var quantity = quantityElement.value;
		remainingTotal += price * quantity;
	}
	remainingTotal = Math.round(remainingTotal * 100) / 100;
	document.getElementById('total').innerText = "₴" + remainingTotal;
}