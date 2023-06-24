import { css } from "@/styled-system/css";
import { container, flex, grid, vstack } from "@/styled-system/patterns";
import Avatar from "@/components/avatar";
import Button from "@/components/button";
import ConnectButton from "@/components/wallet";

export default function Home() {
  return (
    <div className={container()}>
      <div className={vstack({ gap: "6", p: "4" })}>
        <div className={css({ fontSize: "2xl", fontWeight: "bold" })}>Hello 🐼!</div>
        <Avatar />
        <Button size="sm" color="secondary" />
      </div>
      <div className={flex({ direction: "row", align: "center" })}>
        <div className={css({ color: "blue" })}>First</div>
        <div className={css({ color: "orange" })}>Second</div>
        <div className={css({ color: "yellow" })}>Third</div>
      </div>
      <div className={grid({ columns: 3, gap: "6" })}>
        <div>First</div>
        <div>Second</div>
        <div>Third</div>
      </div>
      <ConnectButton />
    </div>
  );
}
