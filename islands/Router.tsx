/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { useState } from "preact/hooks";

export default function Router() {
  const routes: { text: string; route: string }[] = [{
    text: "Home",
    route: "home",
  }, {
    text: "About",
    route: "about",
  }, {
    text: "Education",
    route: "education",
  }, {
    text: "Porfolio",
    route: "portfolio",
  }, {
    text: "Contact",
    route: "contact",
  }];
  const [route, setRoute] = useState("home");
  return (
    <div class={tw`w-screen h-screen flex`}>
      <div class={tw`bg-gray-800 h-screen max-w-sm flex flex-col justify-center`}>
        <div class={tw`flex-shrink p-8`}>
          <InfoCard></InfoCard>
        </div>
        <div
          class={tw`flex-shrink flex flex-col gap-3 items-center p-8`}
        >
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
      <div class={tw`bg-gray-900 w-full`}>a</div>
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
        `bg-gray-700 w-full rounded-full p-2 text-coolGray-200 text-md font-bold hover:bg-cyan-700 shadow-cyan-100 hover:shadow-2xl shadow`}
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
