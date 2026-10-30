import MuiButton from '@mui/material/Button'
import type { ButtonProps as MuiButtonProps } from '@mui/material/Button'
import type { ReactNode } from 'react'

interface ButtonComponentProps extends Omit<MuiButtonProps, 'children' | 'variant'> {
  children: ReactNode
  variant?: 'text' | 'contained' | 'outlined'
}

export default function Button({ children, variant = 'contained', ...props }: ButtonComponentProps) {
  return (
    <MuiButton variant={variant} {...props}>
      {children}
    </MuiButton>
  )
}
