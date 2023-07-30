import type { FunctionComponent, JSXNode} from "@builder.io/qwik";
import { component$, useStyles$ } from "@builder.io/qwik";
import styles from "./footer.css?inline";
import { TwitterLogo } from "../icons/twitter";
import { InstagramLogo } from "../icons/instagram";
import { FacebookLogo } from "../icons/facebook";
import { FrogEnterprisesLogo } from "../icons/frogEnterprises";

interface Link {
  label: string;
  url: string;
}
interface SocialLink {
  icon: JSXNode<string | FunctionComponent<Record<string, any>>>;
  url: string;
}

export interface FooterProps {
  footerLinks: Link[];
  socialLinks: SocialLink[];
  copyright: string;
}

export const defaultProps: FooterProps = {
  footerLinks: [
    { url: "/about", label: "About" },
    { url: "/artists", label: "The Artists" },
    { url: "/shop", label: "Shop" },
    { url: "/contact", label: "Contact" },
  ],
  socialLinks: [
    { url: "https://twitter.com", icon: <TwitterLogo /> },
    { url: "https://facebook.com", icon: <FacebookLogo /> },
    { url: "https://instagram.com", icon: <InstagramLogo /> },
  ],
  copyright: "©2023 FROG Enterprises Inc. All rights reserved.",
}


export default component$<FooterProps>(({
  footerLinks = defaultProps.footerLinks,
  socialLinks = defaultProps.socialLinks,
  copyright = defaultProps.copyright,
}) => {
  useStyles$(styles);

  return (
    <footer class="siteFooter">
      <nav>
        <ul>
          {socialLinks.map( (link: SocialLink, key: number) => (
            <li key={key}>
              <a href={link.url}>
                {link.icon}
              </a>
            </li>
          ))}
        </ul>
        <ul>
          {footerLinks.map( (link, key) => (
            <li key={key}>
              <a href={link.url} class="btn">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <a href="/" class="FELogo">
        <FrogEnterprisesLogo />
      </a>
      <span>{copyright}</span>
    </footer>
  );
});
