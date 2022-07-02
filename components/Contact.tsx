/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

import Link from "../components/Link.tsx";

export default function Contact() {
  return (
    <div class={tw`flex flex-col gap-3`}>
      <div class={tw`flex gap-3`}>
        <Item
          imgUrl="GitHub-Mark-Light-120px-plus.png"
          text="GitHub"
          dest="https://www.github.com/LemuelKL"
        />
        <Item
          imgUrl="LI-In-Bug.png"
          text="LinkedIn"
          dest="https://www.linkedin.com/in/lemuel-lee-649a09209/"
        />
      </div>
    </div>
  );
}

function Item(
  { imgUrl, text, dest }: { imgUrl: string; text: string; dest: string },
) {
  return (
    <div
      class={tw
        `border p-4 rounded-2xl hover:bg-coolGray-800 flex items-center gap-4`}
    >
      <img class={tw`w-11`} src={imgUrl}></img>
      <Link text={text} dest={dest} />
    </div>
  );
}
