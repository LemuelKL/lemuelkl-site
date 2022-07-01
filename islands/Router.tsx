/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { useState } from "preact/hooks";

import InfoCard from "../components/InfoCard.tsx";
import NavButton from "../components/NavButton.tsx";
import Home from "../components/Home.tsx";
import About from "../components/About.tsx";

type Route = {
  name: string;
  page: () => h.JSX.Element;
};

export default function Router() {
  const routes: Route[] = [{
    name: "Home",
    page: Home,
  }, {
    name: "About",
    page: About,
  }, {
    name: "Education",
    page: Home,
  }, {
    name: "Porfolio",
    page: Home,
  }, {
    name: "Contact",
    page: Home,
  }];
  const [activeRoute, setActiveRoute] = useState(routes[0]);
  return (
    <div class={tw`w-screen h-screen flex justify-center bg-coolGray-600`}>
      <div class={tw`w-full max-w-7xl flex bg-green-500 shadow shadow-2xl`}>
        <div
          class={tw`bg-gray-800 h-screen max-w-sm flex flex-col justify-center`}
        >
          <div class={tw`flex-shrink p-8`}>
            <InfoCard></InfoCard>
          </div>
          <div
            class={tw`flex-shrink flex flex-col gap-3 items-center p-8`}
          >
            {routes.map((route) => {
              return (
                <NavButton
                  active={route.name === activeRoute.name}
                  text={route.name}
                  handleClick={() => setActiveRoute(route)}
                />
              );
            })}
          </div>
        </div>
        <div
          class={tw
            `bg-gray-900 text-white flex-grow flex justify-center items-center p-6`}
        >
          {activeRoute.page()}
        </div>
      </div>
    </div>
  );
}
