/** @jsx h */
import { ComponentChildren, h } from "preact";
import { tw } from "@twind";

// import NavPanel from "../components/NavPanel.tsx";

type ChildrenProps = {
  children: ComponentChildren;
};

export default function Layout({ children }: ChildrenProps) {
  return (
    <div class={tw`w-screen h-screen flex flex-col`}>
      {/* <NavPanel /> */}
      <main>{children}</main>
    </div>
  );
}
