window.onload = () => {
  localStorage.setItem('player', 'x')
  localStorage.setItem('moves', 0)
}

const jogoDaVelha = (id) => {
  mark(id)
}

function mark(id, player) {
  let block = document.querySelector(`#block${id}`)
  if (block.getAttribute('src') == "") {
    if (localStorage.player == 'x') {
      block.setAttribute('src', './img/x.png')
      localStorage.setItem('player', 'circle')
    }
    else {
      block.setAttribute('src', './img/circle.png')
      localStorage.setItem('player', 'x')
    }
    localStorage.moves++
    if (localStorage.moves >= 5)
    result()
  }
  else {
    alert('Ação impossível de ser executada')
  }
}

const result = () => { // lógica funcional, porém pode ser otimizada em menos linhas de código
  let block1 = document.querySelector(`#block1`).getAttribute('src')
  let block2 = document.querySelector(`#block2`).getAttribute('src')
  let block3 = document.querySelector(`#block3`).getAttribute('src')
  let block4 = document.querySelector(`#block4`).getAttribute('src')
  let block5 = document.querySelector(`#block5`).getAttribute('src')
  let block6 = document.querySelector(`#block6`).getAttribute('src')
  let block7 = document.querySelector(`#block7`).getAttribute('src')
  let block8 = document.querySelector(`#block8`).getAttribute('src')
  let block9 = document.querySelector(`#block9`).getAttribute('src')

  if (block1 == block2 && block1 == block3 && block1 != "")
    gameOver()
  if (block4 == block5 && block4 == block6 && block4 != "")
    gameOver()
  if (block7 == block8 && block7 == block9 && block7 != "")
    gameOver()
  if (block1 == block4 && block1 == block7 && block1 != "")
    gameOver()
  if (block2 == block5 && block2 == block8 && block2 != "")
    gameOver()
  if (block3 == block6 && block3 == block9 && block3 != "")
    gameOver()
  if (block1 == block5 && block1 == block9 && block1 != "")
    gameOver()
  if (block3 == block5 && block3 == block7 && block3 != "")
    gameOver()
}

function gameOver(x) {
  alert(`Game Over`)
}

const playAgain = () =>{
  location.reload()
}

// events para refresh da página
document.querySelector('.btnPlayAgain').addEventListener('click', playAgain)
addEventListener('keypress', (e) => {
  if (e.key == " " ||
      e.code == "Space") {
    playAgain()
  }
})
