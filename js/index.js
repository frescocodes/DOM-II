// Your code goes here

// variables
const changeBg = document.querySelector('body');
const changeNav = document.querySelector('header');
const changeP = document.getElementsByTagName("p");
const headings = document.getElementsByTagName('h1');
const button = document.querySelector('.btn');

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
});

changeP.onmousedown = document.querySelectorAll('p').forEach(item => {
    item.addEventListener('mousedown', event => {
        event.stopPropagation();
        item.style.backgroundColor = 'magenta';
})
});

changeBg.oncontextmenu = document.querySelectorAll('body').forEach(item => {
    item.addEventListener('contextmenu', event => {
        alert('Somebody once told me the world is gonna roll me')
        alert('I ain\'t the sharpest tool in the shed')
        alert('She was looking kind of dumb with her finger and her thumb')
        alert('In the shape of an "L" on her forehead')
        alert('Well the years start coming and they don\'t stop coming')
        alert('Fed to the rules and I hit the ground running')
        alert('Didn\'t make sense not to live for fun')
        alert('Your brain gets smart but your head gets dumb')
        alert('So much to do, so much to see')
        alert('So what\'s wrong with taking the back streets?')
        alert('You\'ll never know if you don\'t go')
        alert('You\'ll never shine if you don\'t glow')
        alert('Hey now, you\'re an all-star, get your game on, go play')
        alert('Hey now, you\'re a rock star, get the show on, get paid')
        alert('And all that glitters is gold')
        alert('Only shooting stars break the mold')
        alert('It\'s a cool place and they say it gets colder')
        alert('You\'re bundled up now, wait till you get older')
        alert('But the meteor men beg to differ')
        alert('Judging by the hole in the satellite picture')
        alert('The ice we skate is getting pretty thin')
        alert('The water\'s getting warm so you might as well swim')
        alert('My world\'s on fire, how about yours?')
        alert('That\'s the way I like it and I never get bored')
        alert('Hey now, you\'re an all-star, get your game on, go play')
        alert('Hey now, you\'re a rock star, get the show on, get paid')
        alert('All that glitters is gold')
        alert('Only shooting stars break the mold')
        alert('Hey now, you\'re an all-star, get your game on, go play')
        alert('Hey now, you\'re a rock star, get the show, on get paid')
        alert('And all that glitters is gold')
        alert('Only shooting stars')
        alert('Somebody once asked could I spare some change for gas?')
        alert('I need to get myself away from this place')
        alert('I said yep what a concept')
        alert('I could use a little fuel myself')
        alert('And we could all use a little change')
        alert('Well, the years start coming and they don\'t stop coming')
        alert('Fed to the rules and I hit the ground running')
        alert('Didn\'t make sense not to live for fun')
        alert('Your brain gets smart but your head gets dumb')
        alert('So much to do, so much to see')
        alert('So what\'s wrong with taking the back streets?')
        alert('You\'ll never know if you don\'t go (go!)')
        alert('You\'ll never shine if you don\'t glow')
        alert('Hey now, you\'re an all-star, get your game on, go play')
        alert('Hey now, you\'re a rock star, get the show on, get paid')
        alert('And all that glitters is gold')
        alert('Only shooting stars break the mold')
        alert('And all that glitters is gold')
        alert('Only shooting stars break the mold')
    })
})

changeBg.onkeypress = document.querySelector('body').addEventListener('keypress', event => {
    changeBg.style.transform = 'rotate(870deg)';
})

changeP.onmouseup = document.querySelectorAll('p').forEach(item => {
    item.addEventListener('mouseup', event => {
    item.style.backgroundColor = 'turquoise';
})
});


let scale = 1;
const p = document.querySelectorAll('p');

p.onwheel = document.querySelectorAll('p').forEach(item => {
    item.addEventListener('wheel', event => {
        event.preventDefault();
        scale += event.deltaY * -0.01;
        scale = Math.min(Math.max(.125, scale), 4);
        item.style.transform = `scale(${scale})`;
    })
})

const buttonDbl = document.querySelector('.btn').addEventListener('dblclick', event => {
    event.stopPropagation();
    button.style.backgroundColor = 'red';
});



// STRETCH
 TweenMax.to("p", 0.5, {
  rotationX: 180,
  ease: Power1.easeInOut,
});