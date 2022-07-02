/** @jsx h */
import { ComponentChildren, h } from "preact";
import { tw } from "@twind";

import Link from "./Link.tsx";

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
          Student Teaching Assistant at{" "}
          <Link text="HKU" dest="https://www.hku.hk" /> for{" "}
          <Link
            text="ENGG1330"
            dest="https://www.cs.hku.hk/index.php/programmes/course-offered?infile=2019/engg1330.html"
          />{" "}
          and{" "}
          <Link
            text="ENGG140/COMP2113"
            dest="https://www.cs.hku.hk/index.php/programmes/course-offered?infile=2019/engg1340.html"
          />
        </div>
        <div>
          Fullstack Developer (freelance) at{" "}
          <Link text="SPYC" dest="https://www.pyc.edu.hk" />
        </div>
        <div>
          Question Writer & Programmer (freelance) at{" "}
          <Link text="SPYC" dest="https://www.pyc.edu.hk" />
        </div>
      </Section>
      <Section title="interests">
        <div>Software Engineering</div>
        <div>Teaching</div>
        <div>Cycling</div>
        <div>Dialogue</div>
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
