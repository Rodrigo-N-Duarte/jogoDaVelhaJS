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
  let block1 = getBlock(1), block2 = getBlock(2), block3 = getBlock(3), block4 = getBlock(4), 
  block5 = getBlock(5), block6 = getBlock(6), block7 = getBlock(7), block8 = getBlock(8), block9 = getBlock(9)

    comparision(block1,block2,block3)
    comparision(block4,block5,block6)
    comparision(block7,block8,block9)
    comparision(block1,block4,block7)
    comparision(block2,block5,block8)
    comparision(block3,block6,block9)
    comparision(block1,block5,block9)
    comparision(block3,block5,block7)
}
function getBlock(id){
  return document.querySelector(`#block${id}`).getAttribute('src')
}

function comparision(a,b,c){
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
