// Your code goes here

// variables
const changeBg = document.querySelector('body');
const changeNav = document.querySelector('header');
const changeP = document.getElementsByTagName("p");
const moveImgs = document.querySelectorAll('img').forEach(item => {
    item.addEventListener('mouseenter', event => {
        item.style.transform = "rotateX(30)";
        item.style.transition = 'all 0.5s';
    })
})

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
