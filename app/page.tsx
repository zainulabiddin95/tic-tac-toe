import { TicTacToe } from '@/components/tic-tac-toe'
import { cn } from '@/lib/utils'

export default function Home() {
  return (
    <main className={cn('flex', 'justify-center', 'mt-24')}>
      <TicTacToe />
    </main>
  )
}
