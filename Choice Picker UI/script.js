const tagsEl = document.getElementById('tags');
const textarea = document.getElementById('textarea');

let arr= []
textarea.focus();

textarea.addEventListener('keyup', (e)=>{
    createTags(e.target.value)

    if(e.key ==='Enter'){
        setTimeout(() => {
                e.target.value =''
        }, 10)
    }

    randomSelect()
})

function randomSelect(){
    let i = Math.random()* arr.length;

    
}


function createTags(e){
    
    arr = e.split(',').filter(ar =>  ar.trim() !=='').map(ar => ar.trim())
    tagsEl.innerHTML = ''

    arr.forEach(element => {
        const tagEl = document.createElement('span');
        tagEl.classList.add('tag');
        tagEl.innerText = element;
        tagsEl.appendChild(tagEl)
    });
}