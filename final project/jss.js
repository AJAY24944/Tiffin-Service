document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Message sent!');
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Logged in!');
});

function orderDish(dishName) {
    alert(`You have ordered ${dishName}`);
}
