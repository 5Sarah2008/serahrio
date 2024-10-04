const fonts = ['Jacquarda Bastarda', 'Ubuntu', 'Bebas Neue', 'Lobster'];
let currentFont = 0;

setInterval(() => {
    document.getElementById('slogan').style.fontFamily = fonts[currentFont];
    currentFont = (currentFont + 1) % fonts.length;
}, 2000);

// Optionally add interactivity for "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert('Product added to cart!');
    });
});
