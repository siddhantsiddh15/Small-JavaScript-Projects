const loadTest = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");

let load = 0;

let int = setInterval(blurring, 30);

function blurring() {
  load++;
  if (load > 99) {
    clearInterval(int);
  }
  loadTest.innerText = `${load}%`;
  loadTest.style.opacity = scale(load, 0,100, 1,0);
  bg.style.filter = `blur(${scale(load,0, 100, 30, 0)}px)`
}


const scale = (x, in_min, in_max, out_min, out_max) =>{
    return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
  }