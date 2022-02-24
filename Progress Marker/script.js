//Get elemetns with id

//get circles and active by querySelectorAll. This includes all elements 
// having circle and active in it.

// set maximum value of currentActive with next and prev button

// in update function, 
// iterate over circle first
// with idx ie index is less than currenActive, keep adding active in circle class
// if idx is greater than currentActive, remove active from elements having circle class

// progress is declared and matched with div tag with id  
// to change width of element use,
// variable_name.css_sheet_name.width = expression + '%'


// set buttons prev and next as diabled and enabled as per currentActive value

const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");



let currentActive = 1;
next.addEventListener("click", () => {
  currentActive++;

  if (currentActive > circles.length) {
    currentActive = circles.length;
  }
  update();
});

prev.addEventListener("click", () => {
  currentActive--;

  if (currentActive < 1) {
    currentActive = 1;
  }
  update();
});


function update(){

    circles.forEach((circle, idx) =>{
        if(idx<currentActive){
            circle.classList.add('active')
        }else{
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')

    progress.style.width = (actives.length-1) /(  circles.length-1)*100 +'%'

    if(currentActive ===1){
         prev.disabled =true
    }else if (currentActive === circles.length){
        next.disabled = true
    }else{
        prev.disabled = false
        next.disabled = false
    }
    
}