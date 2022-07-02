/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

export default function Link({ text, dest }: { text: string; dest: string }) {
  return (
    <a class={tw`text-lg hover:text-underline hover:bg-gray-700`} href={dest}>
      {text}
    </a>
  );
}
