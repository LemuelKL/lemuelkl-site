/** @jsx h */
import { ComponentChildren, h } from "preact";
import { tw } from "@twind";

export default function Home() {
  return (
    <div class={tw`w-full flex flex-col align-center gap-6`}>
      <Section title="Personal Background">
        <div>Born and raised in Hong Kong.</div>
        <div>Speaks Cantonese as a native.</div>
        <div>Fluent in English and Mandarin.</div>
      </Section>
      <Section title="skills">
        <div>Frameworks: Vue React Svelte Quasar Qt Unity</div>
        <div>Self teach in little time</div>
      </Section>
      <Section title="Experiences">
        <div>
          Student Teaching Assistant at HKU for ENGG1330 and ENGG1340/COMP2113
        </div>
        <div>
          Fullstack Developer at SPYC
        </div>
        <div>
          Question Writer & Programmer at SPYC
        </div>
      </Section>
      <Section title="interests">
        <div>Software Engineering</div>
        <div>Teaching</div>
        <div>Cycling</div>
        <div>Dialogs</div>
      </Section>
    </div>
  );
}

const Section = ({ title, children }: {
  title: string;
  children: ComponentChildren;
}) => {
  return (
    <div class={tw`flex flex-col gap-2`}>
      <div class={tw`uppercase text-3xl`}>{title}</div>
      <main>{children}</main>
    </div>
  );
};
