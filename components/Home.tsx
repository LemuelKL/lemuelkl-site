/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

import Link from "./Link.tsx";

export default function Home() {
  return (
    <div class={tw`flex flex-col`}>
      {/* <div class={tw`font-mono text-2xl`}><pre>HI THERE!</pre></div> */}
      <div class={tw`text-4xl`}>
        I'M{" "}
        <span class={tw`text-yellow-400 font-bold text-5xl`}>Lemuel Lee</span>
      </div>
      <div>
        <span class={tw`font-mono`}>BEng(CompSc) yr3. at&nbsp;</span>
        <Link text="The University of Hong Kong" dest="https://www.hku.hk" />
      </div>
      <div class={tw`text-xl`}>
        <div>
          Specialized in JavaScript & TypeScript web development
        </div>
      </div>
      <a
        class={tw`mt-11 self-end hover:underline italic font-bold`}
        href="/portal"
      >
        {`explore this site`}
      </a>
    </div>
  );
}
