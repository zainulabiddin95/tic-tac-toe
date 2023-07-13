import { cn } from '@/lib/utils'
import { Alert, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { Board, Turn } from '@/lib/types'

type RestartProps = {
  winner: Turn | undefined
  board: Board
  setBoard: (board: Board) => void
  setTurn: (turn: Turn) => void
  setWinner: (winner: Turn | undefined) => void
}

export const Restart = ({
  winner,
  board,
  setBoard,
  setTurn,
  setWinner
}: RestartProps) => {
  const isBoardFull = board.every(value => value !== null)
  if (winner === undefined && !isBoardFull) return null

  return (
    <div className={cn('flex', 'flex-col', 'items-center', 'gap-2')}>
      <Alert className={cn('flex', 'justify-center', 'w-36', 'mt-4')}>
        <AlertTitle>{isBoardFull ? 'Draw' : `Winner is ${winner}`}</AlertTitle>
      </Alert>
      <Button
        variant={'ghost'}
        onClick={() => {
          setBoard(Array(9).fill(null))
          setTurn('X')
          setWinner(undefined)
        }}
      >
        Play Again
      </Button>
    </div>
  )
}
