
import Button from '@mui/material/Button'
import type { ButtonProps as MuiButtonProps } from '@mui/material/Button'
import type { ReactNode } from 'react'

interface ButtonProps extends Omit<MuiButtonProps, 'children' | 'variant'> {
  children: ReactNode
  variant?: 'text' | 'contained' | 'outlined'
}

export default function Buttons({ children, variant = 'contained', ...props }: ButtonProps) {
  return <Button variant={variant} {...props}>{children}</Button>
}