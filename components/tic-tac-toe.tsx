'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import { Board, Turn } from '@/lib/types'
import { Square } from '@/components/square'
import { Restart } from '@/components/restart'

export const TicTacToe = () => {
  const [board, setBoard] = useState<Board>(Array(9).fill(null))
  const [turn, setTurn] = useState<Turn>('X')
  const [winner, setWinner] = useState<Turn | undefined>(undefined)

  useEffect(() => {
    calculateWinner()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [board])

  const handleClick = (idx: number) => {
    if (board[idx] !== null || winner !== undefined) {
      return
    }

    const newBoard = [...board]
    newBoard[idx] = turn
    setBoard(newBoard)
    setTurn(turn === 'X' ? 'O' : 'X')
  }

  const calculateWinner = () => {
    const rows = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8]
    ]

    const columns = [
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8]
    ]
    const diagonals = [
      [0, 4, 8],
      [2, 4, 6]
    ]
    const lines = [...rows, ...columns, ...diagonals]
    for (const line of lines) {
      const [a, b, c] = line
      if (board[a] !== null && board[a] === board[b] && board[a] === board[c]) {
        setWinner(turn === 'X' ? 'O' : 'X')
        return
      }
    }
  }

  return (
    <div className={cn('flex', 'flex-col', 'items-center')}>
      <div className={cn('inline-grid', 'grid-cols-3', 'gap-2')}>
        {board.map((value, idx) => {
          return (
            <Square
              key={idx}
              value={value}
              idx={idx}
              handleClick={handleClick}
            />
          )
        })}
      </div>
      <Restart
        winner={winner}
        setBoard={setBoard}
        setTurn={setTurn}
        setWinner={setWinner}
        board={board}
      />
    </div>
  )
}
