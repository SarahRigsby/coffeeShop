let cart=[]



const menuItems = [ 
    { id: 1, item: "Black Coffee", price: 1, image: 'https://github.com/osu4life75/coffeShopImages/blob/main/intro-1641943654.jpg?raw=true'},
    { id: 2, item: "Espresso", price: 2, image: 'https://github.com/bryanrigsby/imagesForCoffeeShopSite/blob/main/resized_espresso1.jpeg?raw=true' },
    { id: 3, item: "Cappuccino", price: 3, image: 'https://github.com/bryanrigsby/imagesForCoffeeShopSite/blob/main/resized_cappuccino.jpeg?raw=true' },
    { id: 4, item: "Latte", price: 2, image: 'https://github.com/bryanrigsby/imagesForCoffeeShopSite/blob/main/resized_latte.jpeg?raw=true' },
    { id: 5, item: "Mocha", price: 4, image: 'https://github.com/bryanrigsby/imagesForCoffeeShopSite/blob/main/resized_mocha.jpeg?raw=true' },
    { id: 6, item: "Americano", price: 2, image: 'https://github.com/bryanrigsby/imagesForCoffeeShopSite/blob/main/resized_americano.jpeg?raw=true' },
]
window.onload = function(){
    console.log('cart',cart)
    let menuItemElement= document.getElementById('menuItemContainer')

    for (let index = 0; index < menuItems.length; index++) {
        // console.log('index', index);
        
        const newDivElement = document.createElement('div');
        newDivElement.className ="row";

        for (let j = 0; j < 3; j++) {

            //calculate current item index
            let currentItemIndex = index + j;

            // check if the currentItemIndex is within the bounds of menitems array
            if (currentItemIndex >= menuItems.length) {
                break;
            }

            const newColElement = document.createElement('div');
            newColElement.className ="col-12 col-md-4";
            newDivElement.appendChild(newColElement);

            // create card div
            const cardDivElement = document.createElement('div');
            cardDivElement.className ="card";
            cardDivElement.style.width="18rem";
            newColElement.appendChild(cardDivElement)

            // create image element
            const cardImgElement = document.createElement('img');
            cardImgElement.src = menuItems[currentItemIndex]['image'];
            cardImgElement.className ="card-img-top";
            cardImgElement.alt = menuItems[currentItemIndex].item;
            cardDivElement.appendChild(cardImgElement);

            // create card body div
            const cardBodyElement = document.createElement('div');
            cardBodyElement.className ='card-body';
            cardDivElement.appendChild(cardBodyElement);

            // inside card body
            // create card title h5
            const cardTitleElement = document.createElement('h5');
            cardTitleElement.className='card-title';
            cardTitleElement.innerText = menuItems[currentItemIndex]["item"]+" - $"+menuItems[currentItemIndex]["price"];
            cardBodyElement.appendChild(cardTitleElement);

            // create add to cart button
            const addToCart =document.createElement("button");
            addToCart.classList="btn btn-primary";
            addToCart.innerText = 'Add to Cart';
            addToCart.onclick=()=>addedToCart(menuItems[currentItemIndex]);
            cardBodyElement.appendChild(addToCart);
        }

        menuItemElement.appendChild(newDivElement);

        // Increment index to skip already processed items
        index += 2; // Skip next 2 items as they are already processed in the inner loop

    }
}

function addedToCart(item){
//   console.log('addToCart', item);
  cart.push(item);
  displayCart();
//   console.log('cart',cart);
}

function displayCart(){
    let cartElement= document.getElementById('cart');
    cartElement.replaceChildren();
    console.log('cartElement', cartElement);
    for (let i = 0; i < cart.length; i++) {
        console.log('cart at index i', cart[i]);
        const cartItemElement = document.createElement('div');
        cartItemElement.innerText=cart[i].item;
        cartElement.appendChild(cartItemElement);
     }  
}


function changeName(){
    let inputValueElement = document.getElementById('inputName')
    let inputValue = inputValueElement.value 
    console.log(inputValue)

    let user = document.getElementById('user')
    user.textContent = 'Hello ' + inputValue
}
