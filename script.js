
const flexItems = document.querySelectorAll('.flex-item');
var button = document.querySelector('#change-color');
button.addEventListener('click', function(){
    flexItems.forEach((item) => {
        const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
        item.style.backgroundColor = randomColor;
        console.log("Hello\n");
    });
});

