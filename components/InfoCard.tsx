/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

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
        <div class={tw`text-lg`}>Open for Opportunities 📨</div>
      </div>
    </div>
  );
};

export default InfoCard