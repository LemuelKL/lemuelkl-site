/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

export default function Home() {
  return (
    <div class={tw`flex flex-col`}>
      {/* <div class={tw`font-mono text-2xl`}><pre>HI THERE!</pre></div> */}
      <div class={tw`text-4xl`}>
        I'M{" "}
        <span class={tw`text-yellow-400 font-bold text-5xl`}>Lemuel Lee</span>
      </div>
      <div>
        <span class={tw`font-mono`}>BEng(CompSc) yr2. at&nbsp;</span>
        <a
          class={tw`text-lg hover:text-underline hover:bg-gray-700`}
          href="https://www.hku.hk"
        >
          The University of Hong Kong
        </a>
      </div>
      <div class={tw`text-xl`}>
        <div>
          Specialized in JavaScript & TypeScript related web development
        </div>
      </div>
    </div>
  );
}
