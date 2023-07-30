import { component$, useStyles$ } from "@builder.io/qwik";
import styles from "./footer.css?inline";
import { TwitterLogo } from "../icons/twitter";
import { InstagramLogo } from "../icons/instagram";
import { FacebookLogo } from "../icons/facebook";
import { FrogEnterprisesLogo } from "../icons/frogEnterprises";

export default component$(() => {
  useStyles$(styles);

  const socialLinks = [
    { href: "https://twitter.com", icon: <TwitterLogo /> },
    { href: "https://facebook.com", icon: <FacebookLogo /> },
    { href: "https://instagram.com", icon: <InstagramLogo /> },
  ];

  const footerLinks = [
    { href: "/about", name: "About" },
    { href: "/artists", name: "The Artists" },
    { href: "/shop", name: "Shop" },
    { href: "/contact", name: "Contact" },
  ];

  return (
    <footer class="siteFooter">
      <nav>
        <ul>
          {socialLinks.map( (link, key) => (
            <li key={key}>
              <a href={link.href}>
                {link.icon}
              </a>
            </li>
          ))}
        </ul>
        <ul>
          {footerLinks.map( (link, key) => (
            <li key={key}>
              <a href={link.href} class="btn">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <a href="" class="FELogo">
        <FrogEnterprisesLogo />
      </a>
      <span>©2023 FROG Enterprises Inc. All rights reserved.</span>
    </footer>
  );
});
