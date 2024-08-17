let ball = document.querySelector('.ball')
let ballpit = document.querySelector('#ballpit')

ball.remove()


document.addEventListener('mousemove', event => {
    if(event.buttons == 1){ //if mouse down
        requestAnimationFrame( () => {
            var randomColor = Math.floor(Math.random()*16777215).toString(16);
            let newBall = ball.cloneNode()
            newBall.style.backgroundColor = "#" + randomColor
            newBall.setAttribute('data-wind',Math.random()*10 - 5)
            newBall.style.left = event.clientX+'px'
            newBall.style.top = event.clientY+'px'
            ballpit.appendChild(newBall);
        })
    }
})

function fall(){
    let balls = document.querySelectorAll('.moving-ball')
    balls.forEach(ball => {
        let currentTop = parseInt(ball.style.top);
        let currentLeft = parseInt(ball.style.left);
        let velocity = parseFloat(ball.getAttribute('data-velocity'));
        let ballWind = parseInt(ball.getAttribute('data-wind'));
        
        velocity +=.025
        ball.style.top = (velocity + currentTop) + 'px';
        ball.setAttribute('data-velocity', velocity);

        //wind
        ball.style.left = Math.random() * ballWind + currentLeft + 'px';

        if(currentTop > window.innerHeight - 25 && velocity > 0){
            if(velocity <= 1.5){
                ball.classList.remove('moving-ball')
                setTimeout(() => ball.remove(), 1000)
            } 

            ball.setAttribute('data-velocity', velocity * -Math.random() * 0.65);
        }
        //left wall
        if(currentLeft < 0 && ballWind < 0){   
            ball.setAttribute('data-wind', -ballWind)
        }
        //walls
        else if(currentLeft > window.innerWidth && ballWind > 0){
            ball.setAttribute('data-wind', -ballWind)
        }
    });
}


setInterval(() => requestAnimationFrame(fall), 1)
