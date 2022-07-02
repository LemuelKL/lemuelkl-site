/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { useState } from "preact/hooks";

import Home from "../components/Home.tsx";
import About from "../components/About.tsx";

import NavPanel from "../islands/NavPanel.tsx";

export type Route = {
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
    page: () => <div>Education</div>,
  }, {
    name: "Porfolio",
    page: () => <div>Porfolio</div>,
  }, {
    name: "Contact",
    page: () => <div>Contact</div>,
  }];
  const [activeRoute, setActiveRoute] = useState(routes[1]);
  return (
    <div class={tw`w-screen h-screen flex justify-center bg-coolGray-600`}>
      <div class={tw`w-full max-w-7xl flex bg-green-500 shadow shadow-2xl`}>
        <NavPanel
          routes={routes}
          activeRoute={activeRoute}
          setActiveRoute={setActiveRoute}
        />
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
