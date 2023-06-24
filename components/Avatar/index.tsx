'use client'

import { Root, Image, Fallback } from '@radix-ui/react-avatar';
import { css } from '@/styled-system/css';

const Avatar = () => (
  <Root
    className={css({
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      verticalAlign: 'middle',
      overflow: 'hidden',
      userSelect: 'none',
      width: 45,
      height: 45,
      borderRadius: '100%'
    })}
  >
    <Image
      src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80"
      alt="Colm Tuite"
      className={css({
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        borderRadius: 'inherit'
      })}
    />
    <Fallback delayMs={600}>
      CT
    </Fallback>
  </Root>
)

export default Avatar
