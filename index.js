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
    let menuItemElement= document.getElementById('menuItem')

    //testing
    for (let index = 0; index < menuItems.length; index++) {
        // make card div
        const cardDivElement = document.createElement('div');
        cardDivElement.className ="card";
        cardDivElement.style.width="18rem";
        menuItemElement.appendChild(cardDivElement)
        // make image
        const cardImgElement = document.createElement('img');
        cardImgElement.src = menuItems[index]['image'];
        cardImgElement.className ="card-img-top";
        cardImgElement.alt = menuItems[index].item;
        cardDivElement.appendChild(cardImgElement);
        // make card body div
        const cardBodyElement = document.createElement('div');
        cardBodyElement.className ='card-body';
        cardDivElement.appendChild(cardBodyElement);
        // inside card body
        // make card title h5
        const cardTitleElement = document.createElement('h5');
        cardTitleElement.className='card-title';
        cardTitleElement.innerText = menuItems[index]["item"]+" - $"+menuItems[index]["price"];
        const addToCart =document.createElement("button");
        addToCart.classList="btn btn-primary";
        addToCart.innerText = 'Add to Cart';
        addToCart.onclick=()=>addedToCart(menuItems[index]);
        cardTitleElement.appendChild(addToCart);
        cardBodyElement.appendChild(cardTitleElement);
    }
// display cart
let cartElement= document.getElementById('cart');
   for (let i = 0; i < cart.length; i++) {
      console.log('cart at index i', cart[i]);
   }     
}

    //end testing



    // for (let index = 0; index < menuItems.length; index++) {
    //     console.log('index', index);
    //     let temp = 0;
    //     if (index > 0) {
    //         temp = index + 2;
    //     }
    //     console.log('temp',temp)
    //     console.log(menuItems[index])
    //     // menuItemElement.innerText = menuItems[index]["item"]
        
    //         const newDivElement = document.createElement('div');
    //         newDivElement.className ="row";

    //         for (let j = 0; j < 3; j++) {
    //             const newColElement = document.createElement('div');
    //             newColElement.className ="col-12 col-md-4";
    //             newDivElement.appendChild(newColElement);
    //             // make card div
    //             const cardDivElement = document.createElement('div');
    //             cardDivElement.className ="card";
    //             cardDivElement.style.width="18rem";
    //             newColElement.appendChild(cardDivElement)
    //             // make image
    //             const cardImgElement = document.createElement('img');
    //             cardImgElement.src = menuItems[temp]['image'];
    //             cardImgElement.className ="card-img-top";
    //             cardImgElement.alt = menuItems[temp].item;
    //             cardDivElement.appendChild(cardImgElement);
    //             // make card body div
    //             const cardBodyElement = document.createElement('div');
    //             cardBodyElement.className ='card-body';
    //             cardDivElement.appendChild(cardBodyElement);
    //             // inside card body
    //             // make card title h5
    //             const cardTitleElement = document.createElement('h5');
    //             cardTitleElement.className='card-title';
    //             cardTitleElement.innerText = menuItems[temp]["item"]+" - $"+menuItems[temp]["price"];
    //             const addToCart =document.createElement("button");
    //             addToCart.classList="btn btn-primary";
    //             addToCart.innerText = 'Add to Cart';
    //             addToCart.onclick=()=>addedToCart(temp);
    //             cardTitleElement.appendChild(addToCart);
    //             cardBodyElement.appendChild(cardTitleElement);
    //             if (temp > menuItems.length) {
    //                 return
                    
    //             }
    //             temp+=1
    //         }

    //         // make column div
    //         // make add to cart button
    
            
    
    //         menuItemElement.appendChild(newDivElement);

        
    // }
// }

function addedToCart(item){
  console.log('addToCart', item);
  cart.push(item);
  displayCart();
  console.log('cart',cart);
}

function displayCart(){
    let cartElement= document.getElementById('cart');
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