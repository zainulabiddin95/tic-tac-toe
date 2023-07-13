import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Turn } from '@/lib/types'

type SquareProps = {
  value: Turn | null
  idx: number
  handleClick: (idx: number) => void
}

export const Square = ({ value, idx, handleClick }: SquareProps) => {
  return (
    <Button
      variant={'outline'}
      className={cn('w-24', 'h-24', 'text-2xl')}
      onClick={() => handleClick(idx)}
    >
      {value === null ? '' : value}
    </Button>
  )
}
