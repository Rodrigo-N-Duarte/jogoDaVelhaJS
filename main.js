window.onload = () => {
  localStorage.setItem('player', 'x')
  localStorage.setItem('moves', 0)
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
  let blocks = [9]
  for (let i = 1; i <= 9; i++)
  blocks[i] = document.querySelector(`#block${i}`).getAttribute('src')

  // testa todas as possiveis combinações de fim de jogo
  comparision(blocks[1], blocks[2], blocks[3])
  comparision(blocks[4], blocks[5], blocks[6])
  comparision(blocks[7], blocks[8], blocks[9])
  comparision(blocks[1], blocks[4], blocks[7])
  comparision(blocks[2], blocks[5], blocks[8])
  comparision(blocks[3], blocks[6], blocks[9])
  comparision(blocks[1], blocks[5], blocks[9])
  comparision(blocks[3], blocks[5], blocks[7])
}

function comparision(a, b, c) {
  if (a == b && a == c && a != "")
    gameOver()
}


const gameOver = (x) => {
  alert(`Game Over`)
}

const playAgain = () => {
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
