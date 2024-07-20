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
}



