const fill = document.querySelector('.fill')
const empties = document.querySelectorAll('.empty')


fill.addEventListener('dragstart', dragStart)
fill.addEventListener('dragend', dragEnd)


for(const empty of empties){
        empty.addEventListener('dragover', dragOver) 
        empty.addEventListener('dragenter', dragEnter)
        empty.addEventListener('dragleave', dragLeave)
        empty.addEventListener('drop', dragDrop)
}

function dragStart(){

    this.className += ' hold'
    setTimeout(() => {
        this.className = 'invisible'
    }, 0)
    

    // this.className can change any class of any object. += means we are appending the class
    // this.className += ' hold'  
    // setTimeout( () => {
    //     this.className = 'invisible'
    // }, 0)
    
    // console.log('drag start')
}

function dragEnd(){
    this.className = ' fill'
}

function dragOver(e){
    //resets the  current drag operation to none hence below line 
    e.preventDefault()
}

function dragEnter(e){
    //reject the immediate user selection as potential target hence below line 
    e.preventDefault()
    this.className += ' hovered'
}

function dragDrop(){
    this.className = 'empty'
    this.append(fill)
}

function dragLeave(){
    this.className = 'empty'
}


