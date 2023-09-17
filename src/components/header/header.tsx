import { component$, useSignal, useStyles$, $ } from "@builder.io/qwik";
import styles from "./header.css?inline";
import { FROGLogo } from "../icons/frog";
import Button from "../button/button";
import { MenuToggle } from "../menu-toggle/menu-toggle";

interface Link {
  label: string;
  url: string;
}
export interface HeaderProps {
  links?: Link[];
  cta?: Link;
  title?: string;
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

export default component$<HeaderProps>(({
  links = defaultProps.links,
  cta = defaultProps.cta,
  title = defaultProps.title,
}) => {

  useStyles$(styles);
  const mobileMenuActive = useSignal(false);

  const toggle = $(() => mobileMenuActive.value = !mobileMenuActive.value);
  const close = $(() => mobileMenuActive.value = false);
  const getMobileMenuClass = () => {
    return mobileMenuActive.value ? 'mobile-menu-open' : 'mobile-menu-closed';
  }

  return (
    <header class="header">
      <nav>
        <div>
          <a href="/" title="FROG Creative Studios" class="logo">
            <FROGLogo height={67} width={97} />
            <span>{title}</span>
          </a>
        </div>
        {/* <ul class={getMobileMenuClass()}>
          {links?.map((link, key:number) => (
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

          {cta ? (<li>
            <Button href={cta.url}>
              {cta.label}
            </Button>
          </li>) : null}
        </ul>
        <div class="header__MenuToggleWrapper" onClick$={toggle}>
          <MenuToggle active={mobileMenuActive.value} />
        </div>
        <div class={`header__click-catcher ${getMobileMenuClass()}`} 
             onClick$={close}></div> */}
      </nav>
    </header>
  );
});
