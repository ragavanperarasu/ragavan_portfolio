import {
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiNginx,
  SiRazorpay,
  SiRedux,
  SiBootstrap,
  SiTailwindcss,
  SiJavascript,
  SiAndroid,
  SiSpringboot,
  SiMysql,
  SiExpo,
} from "react-icons/si";
import { TECH } from "./projectData";

const ICONS = {
  react: SiReact,
  reactNative: SiReact,
  node: SiNodedotjs,
  express: SiExpress,
  mongo: SiMongodb,
  firebase: SiFirebase,
  nginx: SiNginx,
  razorpay: SiRazorpay,
  redux: SiRedux,
  bootstrap: SiBootstrap,
  tailwind: SiTailwindcss,
  js: SiJavascript,
  android: SiAndroid,
  spring: SiSpringboot,
  mysql: SiMysql,
  expo: SiExpo,
};

function TechStack({ items }) {
  return (
    <ul className="tech-pill-row" aria-label="Tech stack">
      {items.map((key) => {
        const meta = TECH[key];
        const Icon = ICONS[key];
        if (!meta || !Icon) return null;
        return (
          <li
            key={key}
            className="tech-pill"
            style={{ "--tech-color": meta.color }}
          >
            <Icon className="tech-pill-icon" aria-hidden="true" />
            <span>{meta.name}</span>
          </li>
        );
      })}
    </ul>
  );
}

export default TechStack;
