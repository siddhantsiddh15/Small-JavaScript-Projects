const counters = document.querySelectorAll('.counter')


counters.forEach( counter => {
    counter.innerText = '0';


    const updateCounter = () =>  {
        const target = +counter.getAttribute('data-target') // gets the maximum number to be shown on the website
        
        const c = +counter.innerText

        const increment = target/200

        if(c< target){
            counter.innerText = `${Math.ceil(c + increment)}`
            setTimeout(updateCounter, 1)
        }else{
            counter.innerText = target
        }

        
    }

    updateCounter()
})