let cart=[]


window.onload = function(){
    var forms = document.getElementsByClassName('needs-validation');

    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });


    const params = new URLSearchParams(window.location.search);
    console.log('params', params);
    const encodedCart = params.get('cart');
    console.log('encodedCart', encodedCart);
      if(encodedCart){
        // decode the cart data
        const cartString = decodeURIComponent(encodedCart);
        // Parse the JSON string back to an object
        cart = JSON.parse(cartString);
      }
      else{
        // if no cart, redirect to home page
        window.location.href = `index.html`;
      }
      console.log('cart', cart);
      let checkOutElement=document.getElementById('checkOut');
      console.log('checkOutElement', checkOutElement);
      let total = 0;
      for(let i = 0; i < cart.length; i++){
          let itemTotal = cart[i].price * cart[i].quantity;
          total += itemTotal;
          console.log('cart at index i', cart[i]);
          const cartItemElement=document.createElement('li');
          cartItemElement.innerText=`${cart[i].quantity}- ${cart[i].item}- $${itemTotal}`;
          checkOutElement.appendChild(cartItemElement);
      }
      let cartTotalElement= document.createElement('li');
      let spanTotalElement= document.createElement('span');
      spanTotalElement.innerText='Total (USD)';
      let strongTotalElement= document.createElement('strong');
      strongTotalElement.innerText= `$${total}`
      cartTotalElement.appendChild(spanTotalElement);
      cartTotalElement.appendChild(strongTotalElement);
      checkOutElement.appendChild(cartTotalElement);
}
{/* <li class="list-group-item d-flex justify-content-between">
              <span>Total (USD)</span>
              <strong id="total"></strong>
            </li> */}

{/* <ul class="list-group mb-3"> 
<li class="list-group-item d-flex justify-content-between lh-condensed">
  <div>
    <h6 class="my-0">Product name</h6>
    <small class="text-muted">Brief description</small>
  </div>
  <span class="text-muted">$12</span>
</li>
<li class="list-group-item d-flex justify-content-between lh-condensed">
  <div>
    <h6 class="my-0">Second product</h6>
    <small class="text-muted">Brief description</small>
  </div>
  <span class="text-muted">$8</span>
</li>
<li class="list-group-item d-flex justify-content-between lh-condensed">
  <div>
    <h6 class="my-0">Third item</h6>
    <small class="text-muted">Brief description</small>
  </div>
  <span class="text-muted">$5</span>
</li>
<li class="list-group-item d-flex justify-content-between bg-light">
  <div class="text-success">
    <h6 class="my-0">Promo code</h6>
    <small>EXAMPLECODE</small>
  </div>
  <span class="text-success">-$5</span>
</li>
<li class="list-group-item d-flex justify-content-between">
  <span>Total (USD)</span>
  <strong>$20</strong>
</li>
</ul> */}
