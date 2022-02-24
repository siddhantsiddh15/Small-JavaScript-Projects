const buttons = document.querySelectorAll('.ripple')


buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        const x = e.clientX
        const y = e.clientY

        // tells the co-ordinates of the click

        const buttonTop = e.target.offsetTop
        const buttonLeft = e.target.offsetLeft

        // tells the location to button

        const xInside = x - buttonLeft
        const yInside = y - buttonTop

        const circle = document.createElement('span')

        circle.classList.add('circle')
        // add the values of xInside and yInside in the style
        circle.style.top = yInside + 'px'
        circle.style.left = xInside + 'px'

        // since we have used this keywprd it wont work with an arrow function. We change the arrow function to a regular function
        this.appendChild(circle)

        //the circle will keep getting added in the DOM. To remove it we use a function circle.remove() but with a delay. To give delay we use setTimeout

        setTimeout(() => {circle.remove}, 1000)
    })
})