// Your code goes here

// variables
const changeBg = document.querySelector('body');
const changeNav = document.querySelector('header');
const changeP = document.getElementsByTagName("p");
const headings = document.getElementsByTagName('h1');

let randColor = Math.floor(Math.random()*16777215).toString(16);
let randColorStr = "'#" + randColor + "'";
console.log(randColorStr);

changeBg.onload = uglyColors();
function uglyColors(element) {
    console.log('page is loaded');
    changeNav.style.backgroundColor = 'limegreen';
    changeBg.style.backgroundColor = 'orange';
    changeP[0].style.backgroundColor = 'purple';
    changeP[1].style.backgroundColor = 'red';
    changeP[2].style.backgroundColor = 'pink';
    changeP[3].style.backgroundColor = 'yellow';
    changeP[4].style.backgroundColor = 'brown';
    changeP[5].style.backgroundColor = 'blue';
    changeP[6].style.backgroundColor = 'gray';
    changeP[7].style.backgroundColor = 'black';
    changeP[8].style.backgroundColor = 'aqua';
    changeP[9].style.backgroundColor = 'snow';
}

const moveImgs = document.querySelectorAll('img').forEach(item => {
    item.addEventListener('mouseenter', event => {
        item.style.transform = "rotate(9999999deg)";
        item.style.transition = 'all 180s';
    })
})

const scaleNav = document.querySelectorAll('header a').forEach(item => {
    item.addEventListener('mouseleave', event => {
        event.preventDefault();
        item.style.transform = 'scale(5)';
        item.style.transition = 'easein 1s';
    })
})

const kevOreo = document.querySelector('body').addEventListener('dblclick', event => {
    changeBg.style.backgroundImage = 'url(https://cdn.discordapp.com/emojis/613072162424619018.png?v=1)';
    // changeBg.style.backgroundColor = randColorStr;
});

changeP.onmousedown = document.querySelectorAll('p').forEach(item => {
    item.addEventListener('mousedown', event => {
    item.style.backgroundColor = 'magenta';
})
});

headings.oncontextmenu = document.querySelectorAll('body').forEach(item => {
    item.addEventListener('contextmenu', event => {
        alert('How dare you try to steal my code')
        alert('Don\'t you ever try that again')
        prompt('You promise?')
        if (prompt == 'yes') {
            return alert('thanks')
        } else {
            return prompt('you have to promise')
        }
    })
})

changeBg.onkeypress = document.querySelector('body').addEventListener('keypress', event => {
    changeBg.style.transform = 'rotate(870deg)';
})
