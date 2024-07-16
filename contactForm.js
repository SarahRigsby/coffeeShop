window.onload = function(){
    // document.getElementById('contactForm').addEventListener('submit', (event) =>submitContactForm(event))
    let formElement = document.getElementById('contactForm');
    formElement.addEventListener('submit', (event) =>submitContactForm(event));
}


function submitContactForm(event){
    event.preventDefault();
    console.log('I am submitting');
    const name= document.getElementById('name').value;
    console.log('name', name)
    const email= document.getElementById('email').value;
    console.log('email', email);
    const message= document.getElementById('message').value;
    console.log('message', message);
    alert(`Thank you ${name} for subscribing`);
    document.getElementById('contactForm').reset();
}