let ball = document.querySelector('.ball')
let ballpit = document.querySelector('#ballpit')

let balls = []

document.addEventListener('mousemove', event => {
    if(event.buttons == 1){ //if mouse down
        requestAnimationFrame( () => {
            var randomColor = Math.floor(Math.random()*16777215).toString(16);
            let newBall = ball.cloneNode()
            newBall.style.backgroundColor = "#" + randomColor
            newBall.style.left = event.clientX+'px'
            newBall.style.top = event.clientY+'px'
            ballpit.appendChild(newBall);
            balls.push(newBall)
        })
    }
})

function fall(){
    console.log(window.innerWidth)
    balls.forEach(ball => {
        if(parseInt(ball.style.top) < window.innerHeight-25){
            ball.style.top = Math.random()*5 + parseInt(ball.style.top) + 'px';
            ball.style.left = Math.random()*5 + parseInt(ball.style.left) + 'px';
        }
        else{
            ball.style.top = 0
        }
        if(parseInt(ball.style.left) > window.innerWidth) {
            ball.style.left = 0
        }
    })
}

setInterval(() => requestAnimationFrame(fall), 1)
