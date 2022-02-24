// .show-nav class was not added initially with the container class/
// container.show-nav{
//   transform:SpeechRecognitionAlternative(-20deg);
//}


const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container')


open.addEventListener('click', () => container.classList.add('show-nav'))

close.addEventListener('click', () => container.classList.remove('show-nav'))