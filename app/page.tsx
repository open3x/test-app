'use client'

import { css } from '@/styled-system/css'
import { container, flex, grid, vstack } from '@/styled-system/patterns'
import Avatar from "@/components/Avatar"
import Button from '@/components/Button'

export default function Home() {
  return (
    <div className={container()}>
      <div className={vstack({ gap: '6', p: '4' })}>
        <div className={css({ fontSize: "2xl", fontWeight: 'bold' })}>Hello 🐼!</div>
        <Avatar />
        <Button onClick={() => alert("clicked")} />
      </div>
      <div className={flex({ direction: 'row', align: 'center' })}>
        <div>First</div>
        <div>Second</div>
        <div>Third</div>
      </div>
      <div className={grid({ columns: 3, gap: '6' })}>
        <div>First</div>
        <div>Second</div>
        <div>Third</div>
      </div>
    </div>
  )
}
