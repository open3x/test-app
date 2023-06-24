import { css } from '@/styled-system/css'
import Avatar from "@/components/Avatar"

export default function Home() {
  return (
    <section>
      <div className={css({ fontSize: "2xl", fontWeight: 'bold' })}>Hello 🐼!</div>
      <Avatar />
    </section>
  )
}
