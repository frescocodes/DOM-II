// Your code goes here

// variables
const changeBg = document.querySelector('body');
const changeNav = document.querySelector('header');
const changeP = document.getElementsByTagName("p");

changeBg.onload = uglyColors();

const moveImgs = document.querySelectorAll('img').forEach(item => {
    item.addEventListener('mouseenter', event => {
        item.style.transform = "rotate(9999999deg)";
        // item.style.transform = "rotate(283487923deg)";
        item.style.transition = 'all 180s';
    })
})

const scaleNav = document.querySelectorAll('header a').forEach(item => {
    item.addEventListener('mouseleave', event => {
        item.style.transform = 'scale(5)';
        item.style.transition = 'easein 1s';
    })
})

const kevOreo = document.querySelector('body').addEventListener('dblclick', event => {
    changeBg.style.backgroundImage = 'url(https://cdn.discordapp.com/emojis/613072162424619018.png?v=1)';
})


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
