/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

export default function Portal() {
  return (
    <div
      class={tw
        `bg-coolGray-200 h-screen flex justify-center items-center bg-gradient-to-br from-yellow-50 via-blue-200 to-coolGray-300 p-6`}
    >
      <div class={tw`self-start uppercase font-bold text-6xl text-coolGray-400`}>Portal</div>
    </div>
  );
}
