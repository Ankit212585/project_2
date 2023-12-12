const button = document.querySelector("button")
const body = document.querySelector("body")

const color = ['red','blue','black','aqua','pink','green','white','orange'];

function myfunk(){
    const colorIndex  = parseInt(Math.random()*color.length)
    body.style.backgroundColor = color[colorIndex]
}
button.addEventListener('click',myfunk)