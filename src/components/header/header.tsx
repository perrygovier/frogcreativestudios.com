import { component$, useStyles$ } from "@builder.io/qwik";
import styles from "./header.css?inline";
import { FROGLogo } from "../icons/frog";
import { Button } from "../button/button";

interface Link {
  label: string;
  url: string;
}
export interface HeaderProps {
  links?: Link[];
  cta?: Link;
  title: string;
}

export const defaultProps: HeaderProps = {
  links: [
    {label: "About", url: "/about"},
    {label: "The Artists", url: "/artists"},
    {label: "Paint by Numbers", url: "/shop/paint-by-numbers"},
    {label: "Puzzles", url: "/shop/puzzles"},
  ],
  cta: {label: "Shop", url: "/shop"},
  title: "FROG Creative Studios",
}

const Header = component$<HeaderProps>((props = defaultProps) => {
  useStyles$(styles);
  return (
    <header class="header">
      <nav>
        <div>
          <a href="/" title="FROG Creative Studios" class="logo">
            <FROGLogo height={67} width={97} />
            <span>{props.title}</span>
          </a>
        </div>
        <ul>
          {props.links?.map((link, key:number) => (
            <li key={`item-${key}`}>
              <a
                href={link.url}
                target="_blank"
                class="btn header__link"
              >
                {link.label}
              </a>
            </li>
          ))}

          {props.cta ? (<li>
            <Button href={props.cta.url}>
              {props.cta.label}
            </Button>
          </li>) : null}
        </ul>
      </nav>
    </header>
  );
});
export default Header;