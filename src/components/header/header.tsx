import { component$ } from "@builder.io/qwik";
import styles from "./header.module.css";
import { FROGLogo } from "../icons/frog";

interface Link {
  label: string;
  url: string;
}
export interface HeaderProps {
  links?: Link[];
  cta?: Link;
}

export const defaultProps: HeaderProps = {
  links: [
    {label: "About", url: "/about"},
    {label: "The Artists", url: "/artists"},
    {label: "Paint by Numbers", url: "/shop/paint-by-numbers"},
    {label: "Puzzles", url: "/shop/puzzles"},
  ]
}

export const Header = component$<HeaderProps>((props = defaultProps) => {
  return (
    <header class={styles.header}>
      <nav class={styles.wrapper}>
        <div class={styles.logo}>
          <a href="/" title="FROG Creative Studios">
            <FROGLogo height={67} width={97} />
            FROG Creative Studios
          </a>
        </div>
        <ul>
          {props.links?.map((link, key:number) => (
            <li key={`item-${key}`}>
              <a
                href={link.url}
                target="_blank"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
});
