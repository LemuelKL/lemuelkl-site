/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { useEffect, useState } from "preact/hooks";

import type { Route } from "./Router.tsx";
import InfoCard from "../components/InfoCard.tsx";
import NavButton from "../components/NavButton.tsx";

export default function NavPanel(
  { routes, activeRoute, setActiveRoute }: {
    routes: Route[];
    activeRoute: Route;
    setActiveRoute: (route: Route) => void;
  },
) {
  return (
    <div
      class={tw
        `bg-gray-800 h-screen max-w-sm flex-shrink flex flex-col gap-4 justify-center p-8`}
    >
      <div class={tw`flex-shrink`}>
        <InfoCard></InfoCard>
      </div>
      <div
        class={tw`flex-shrink flex flex-col gap-3 items-center`}
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
  );
}
