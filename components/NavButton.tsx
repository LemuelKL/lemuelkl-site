/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

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

export default NavButton;
