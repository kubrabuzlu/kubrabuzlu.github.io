
const flexItems = document.querySelectorAll('.flex-item');
var button = document.querySelector('#change-color');
var button2 = document.querySelector('.btn-6d');
button.addEventListener('click', function(){
    flexItems.forEach((item) => {
        const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
        item.style.backgroundColor = randomColor;
        console.log("Hello\n");
    });
});

button2.addEventListener('click', function(){
    window.open('https://www.python.org/', '_blank');
});