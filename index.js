
const menuItems = [ 
    { id: 1, item: "Black Coffee", price: 1, image: 'https://github.com/osu4life75/coffeShopImages/blob/main/intro-1641943654.jpg?raw=true'},
    { id: 2, item: "Espresso", price: 2, image: 'https://github.com/bryanrigsby/imagesForCoffeeShopSite/blob/main/resized_espresso1.jpeg?raw=true' },
    { id: 3, item: "Cappuccino", price: 3, image: 'https://github.com/bryanrigsby/imagesForCoffeeShopSite/blob/main/resized_cappuccino.jpeg?raw=true' },
    { id: 4, item: "Latte", price: 2, image: 'https://github.com/bryanrigsby/imagesForCoffeeShopSite/blob/main/resized_latte.jpeg?raw=true' },
    { id: 5, item: "Mocha", price: 4, image: 'https://github.com/bryanrigsby/imagesForCoffeeShopSite/blob/main/resized_mocha.jpeg?raw=true' },
    { id: 6, item: "Americano", price: 2, image: 'https://github.com/bryanrigsby/imagesForCoffeeShopSite/blob/main/resized_americano.jpeg?raw=true' }
]
window.onload = function(){
    let menuItemElement= document.getElementById('menuItem')
    for (let index = 0; index < menuItems.length; index++) {
        console.log('Menu Items')
        console.log(menuItems)
        // menuItemElement.innerText = menuItems[index]["item"]
        const newDivElement = document.createElement('div');
        // make card div
        const cardDivElement = document.createElement('div');
        cardDivElement.className ="card";
        cardDivElement.style.width="18rem";
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
        cardDivElement.appendChild(cardTitleElement);
        // make add to cart button

        // set inner text of newDivElement
        // newDivElement.innerText = menuItems[index]["item"];
        // append to newDivElement
        newDivElement.appendChild(cardDivElement);

        menuItemElement.appendChild(newDivElement);
    }
}







function changeName(){
    let inputValueElement = document.getElementById('inputName')
    let inputValue = inputValueElement.value 
    console.log(inputValue)

    let user = document.getElementById('user')
    user.textContent = 'Hello ' + inputValue
}