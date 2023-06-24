'use client'

import { MouseEventHandler } from 'react'
import { cva } from '@/styled-system/css'

export const button = cva({
  base: {
    p: '8px 16px',
    borderRadius: '4px',
    border: '1px solid',
    cursor: 'pointer',
  },

  variants: {
    size: {
      sm: {
        fontSize: '14px',
        padding: '4px 8px'
      },
      lg: {
        fontSize: '18px',
        padding: '12px 24px'
      }
    },
    color: {
      primary: {
        backgroundColor: 'blue',
        color: 'white'
      },
      secondary: {
        backgroundColor: 'gray',
        color: 'black'
      }
    },
    disabled: {
      true: {
        opacity: 0.5,
        cursor: 'not-allowed'
      }
    }
  },


  // compound variants
  compoundVariants: [
    // apply small size variant when both small size and primary color are selected
    {
      size: 'sm',
      color: 'primary',
      css: {
        border: '2px solid blue'
      }
    },
    // apply large size variant when both large size and secondary color are selected and the button is disabled
    {
      size: 'lg',
      color: 'secondary',
      disabled: true,
      css: {
        backgroundColor: 'lightgray',
        color: 'darkgray',
        border: 'none'
      }
    }
  ]
})

const Button = ( { onClick }: { onClick?: MouseEventHandler<HTMLButtonElement> } ) => (
  <button className={button({ size: 'lg' })} onClick={onClick}>
    Click Me
  </button>
)

export default Button
