/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { useState } from "preact/hooks";

import InfoCard from "../components/InfoCard.tsx";
import NavButton from "../components/NavButton.tsx";
import Home from "../components/Home.tsx";
import About from "../components/About.tsx";

export default function Router() {
  const routes: { text: string; page: () => h.JSX.Element }[] = [{
    text: "Home",
    page: Home,
  }, {
    text: "About",
    page: About,
  }, {
    text: "Education",
    page: Home,
  }, {
    text: "Porfolio",
    page: Home,
  }, {
    text: "Contact",
    page: Home,
  }];
  const [route, setRoute] = useState(About);
  return (
    <div class={tw`w-screen h-screen flex`}>
      <div
        class={tw`bg-gray-800 h-screen max-w-sm flex flex-col justify-center`}
      >
        <div class={tw`flex-shrink p-8`}>
          <InfoCard></InfoCard>
        </div>
        <div
          class={tw`flex-shrink flex flex-col gap-3 items-center p-8`}
        >
          {routes.map(({ text, page }) => {
            return (
              <NavButton
                text={text}
                handleClick={() => setRoute(page)}
              />
            );
          })}
        </div>
      </div>
      <div class={tw`bg-gray-900 text-white w-full flex justify-center items-center`}>
        {route}
      </div>
    </div>
  );
}
