import { useState } from 'react'
import "./TaTeTi.css"

const TURNS = {
  X: 'x',
  O: 'o'
}
// Array(9).fill(null)
// ['x', 'o', 'o', 'x', 'o', 'x', 'x', 'o', 'x']

const Square = ({children, isSelected, updateBoard, index }) => {
  
  const className = `square ${isSelected ? 'is-selected' : ''}`

  const handleClick = () => {
    updateBoard(index)
  }
  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
}

const WINNER_COMBOS = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // Horizontales
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // Verticales
  [0, 4, 8], [2, 4, 6]             // Diagonales
];

function TaTeTi()  {
  
const [board, setBoard] = useState(
  Array(9).fill(null)
)
const [turn, setTurn] = useState(TURNS.X)

const [winner, setWinner] =useState(null)

const checkWinner = (boardToCheck) => {
//revisamos todas las combinaciones ganadoras para ver si X u O ganó
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo
    if(
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
    ) {
      return boardToCheck[a]
    }
  }
  //si no hay ganador
  return null
}

const updateBoard = (index) => {
//no se actualiza posicion si ya hay algo
  if (board[index] || winner) return 
//actualizar el tablero
  const newBoard = [...board]
  newBoard[index] = turn
  setBoard(newBoard)
//cambiamos el turno
  const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
  setTurn(newTurn)
//revisamos si hay ganador
  const newWinner = checkWinner(newBoard)
  if (newWinner) {
    setWinner(newWinner)
  }

}


  return (
    <main className='board'>
      <h1>Ta Te Ti</h1>
      <section className='game'>
        {
          board.map((_, index) => {
            return(
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {board[index]}
                
              </Square>
                
              )
          })
        }
      </section>

      <section className='turn'>
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>
          
    </main>
  )
}
export default TaTeTi