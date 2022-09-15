const dino = document.querySelector('#dino')
const block = document.querySelector('#block')
const myscore = document.getElementById('score')
const btnJump = document.getElementById('btn')
const defaultName = 'John Doe'
const defaultScore = 0
const inputName = document.getElementById('playerName')
let score = 0

inputName.addEventListener('input',function(){
  if (inputName.value == ' ') {
    inputName.value = defaultName
  } else {
     localStorage.setItem('playerName',this.value)
     inputName.value = this.value
  }
})

window.onload = () =>{
  const getName = localStorage.getItem('playerName')
  getName == null || getName == '' || getName == ' '?inputName.value = defaultName : inputName.value = getName
const getScore = localStorage.getItem('score')
getScore == null?myscore.innerHTML = 'Score :' + defaultScore :    myscore.innerHTML = 'Score :' + getScore 
}



function jumpDino(){
    dino.classList.add('jump')
    setTimeout(function(){
      block.classList.add('slide')
    },500)
    btnJump.innerHTML = 'Jump !'
    var myInterval = setInterval(function(){
      score++
      myscore.innerHTML = 'Score :' + score
    },1000)
    setTimeout(function(){
      dino.classList.remove('jump')
    },400)
}

btnJump.onclick = jumpDino


let checkDead = setInterval(function(){
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
  let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue('left'));
  if (blockLeft > 0 && blockLeft < 95 && dinoTop >= 155 ) {
    btnJump.innerHTML = 'Game over!'
    window.location.reload();
    block.style.animation = 'none'
  }
},10)


