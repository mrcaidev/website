import { m } from "framer-motion";
import arch from "public/arch.svg";
import docker from "public/docker.svg";
import nestjs from "public/nestjs.svg";
import reactjs from "public/reactjs.svg";
import { useLocaleValue } from "src/hooks/locale.hook";
import skills from "src/i18n/skills.json";
import { Section } from "../common/section";
import { Card } from "./card";

const rise = {
  hide: {
    y: 30,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: { type: "tween", duration: 0.5 },
  },
};

export const Skills = () => {
  const text = useLocaleValue(skills.en, skills.zh);

  return (
    <Section id="skills">
      <m.div
        initial="hide"
        whileInView="show"
        transition={{ staggerChildren: 0.2 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-8"
      >
        <m.div variants={rise}>
          <Card img={reactjs} title="Frontend" content={text.frontend} />
        </m.div>
        <m.div variants={rise}>
          <Card img={nestjs} title="Backend" content={text.backend} />
        </m.div>
        <m.div variants={rise}>
          <Card img={docker} title="DevOps" content={text.devops} />
        </m.div>
        <m.div variants={rise}>
          <Card img={arch} title="Others" content={text.others} />
        </m.div>
      </m.div>
    </Section>
  );
};
