/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

type NavButtonProps = {
  active: boolean;
  text: string;
  handleClick: () => void;
};

const NavButton = ({ active, text, handleClick }: NavButtonProps) => {
  const activeBgStyle = `bg-${active ? "yellow-500" : "gray-700"}`;
  const activeTxtStyle = `text-${active ? "black" : "gray-300"}`;
  return (
    <button
      class={tw
        `w-full rounded-full p-2 ${activeBgStyle} ${activeTxtStyle} hover:bg-yellow-500 text-md font-bold  shadow-cyan-100 hover:shadow-2xl shadow`}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default NavButton;
