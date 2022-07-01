/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { StateUpdater, useState } from "preact/hooks";

export default function About() {
  const routes: { text: string; route: string }[] = [{
    text: "Home",
    route: "home",
  }, {
    text: "About",
    route: "about",
  }];
  const [route, setRoute] = useState("about");
  return (
    <div class={tw`w-screen h-screen flex flex-col`}>
      <div class={tw`bg-gray-700 h-screen max-w-sm flex flex-col`}>
        <div class={tw`basis-1/3 flex-grow p-8`}>
          <InfoCard></InfoCard>
        </div>
        <div
          class={tw`basis-2/3 flex-grow flex flex-col gap-3 items-center p-8`}
        >
          {route}
          {routes.map(({ text, route }) => {
            return (
              <NavButton
                text={text}
                handleClick={() => setRoute(route)}
              />
            );
          })}
        </div>
      </div>
      <div></div>
    </div>
  );
}

type NavButtonProps = {
  text: string;
  handleClick: () => void;
};

const NavButton = ({ text, handleClick }: NavButtonProps) => {
  return (
    <button
      class={tw
        `bg-gray-600 w-full rounded-full p-2 text-coolGray-200 text-lg font-bold hover:bg-cyan-700 shadow-cyan-100 hover:shadow-2xl shadow`}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

const InfoCard = () => {
  return (
    <div class={tw`flex flex-col items-center gap-3`}>
      <img
        class={tw`rounded-full border-8 max-w-[70%]`}
        src="lemuel.jpg"
        alt="lemuel"
      />
      <div class={tw`flex flex-col text-white items-center`}>
        <div class={tw`text-3xl font-bold`}>Lemuel Lee</div>
        <div class={tw`text-lg`}>CS Undergraduate</div>
      </div>
    </div>
  );
};
