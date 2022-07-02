/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { useEffect, useState } from "preact/hooks";

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

  const [windowDimension, detectHW] = useState({
    winWidth: window.innerWidth,
    winHeight: window.innerHeight,
  });

  const detectSize = () => {
    detectHW({
      winWidth: window.innerWidth,
      winHeight: window.innerHeight,
    });
  };

  useEffect(() => {
    self.addEventListener("resize", detectSize);
    return () => {
      self.removeEventListener("resize", detectSize);
    };
  }, [windowDimension]);

  const [showNavPanel, setShowNavPanel] = useState(true);
  return (
    <div class={tw`w-screen h-screen flex justify-center bg-coolGray-600`}>
      <div class={tw`w-full max-w-7xl flex bg-green-500 shadow shadow-2xl`}>
        {windowDimension.winWidth >= 1280 && showNavPanel &&
          (
            <NavPanel
              routes={routes}
              activeRoute={activeRoute}
              setActiveRoute={setActiveRoute}
            />
          )}
        <div
          class={tw
            `cursor-pointer bg-teal-900 hover:bg-teal-700 min-w-[0.5rem] ${
              showNavPanel ? "max-w-[0.5rem]" : ""
            } flex flex-col justify-center ${
              showNavPanel ? "items-end" : "items-start"
            }`}
          onClick={() => setShowNavPanel(!showNavPanel)}
          style={{ pointerEvents: showNavPanel ? "none" : "auto" }}
        >
          <div
            class={tw
              `cursor-pointer min-w-fit flex justify-center items-center rounded-tl-full rounded-bl-full p-1 hover:text-white ${
                showNavPanel
                  ? "bg-teal-900 hover:bg-teal-700 w-4 h-4 hover:w-6 hover:h-6"
                  : "w-6 h-6"
              }`}
            style={{ pointerEvents: "auto" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class={tw`w-full`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={showNavPanel
                  ? "M10 19l-7-7m0 0l7-7m-7 7h18"
                  : "M14 5l7 7m0 0l-7 7m7-7H3"}
              />
            </svg>
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
