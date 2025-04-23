let cartBody = document.getElementById('cart');


function addItems(element){
	console.log('stuff was added');
	let li = document.createElement('li');
	li.innerHTML = element.dataset.img
				 + element.dataset.name
				 + element.dataset.price
				 + '<div class="delet-items"> X </div>';
	cartBody.appendChild(li);
	addCartToFrom(element.dataset.id);

	M.toast({html: 'Item added to basket', classes: 'rounded'})
}

function deleteItems(element){
	console.log('delet item');
	element.parentNode.remove();
}

window.addEventListener('click', (event) => {
	console.log('click');

	if(event.target.classList.contains('button-buy')){
		console.log('click on button');
		addItems(event.target);
	}

	if(event.target.classList.contains('delet-items')){
		console.log('click on button for delet item');
		deleteItems(event.target);
	}
})

let inputCart = document.getElementById('cartFF');
function addCartToFrom(id){
	inputCart.value += id + ", ";
}