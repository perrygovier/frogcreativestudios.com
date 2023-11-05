import { component$ } from "@builder.io/qwik";
import { useDocumentHead, useLocation } from "@builder.io/qwik-city";
// import { QwikPartytown } from '../partytown/partytown';

/**
 * The RouterHead component is placed inside of the document `<head>` element.
 */
export const RouterHead = component$(() => {
  const head = useDocumentHead();
  const loc = useLocation();

  const analytics = `window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-272SV4FCHP');`;

  const schema = `
    {
      "@context": "https://schema.org/",
      "@type": "Corporation",
      "name": "Frog Creative Studios",
      "url": "https://frogcreativestudios.com",
      "logo": "https://frogcreativestudios.com/images/logo.png",
      "sameAs": [
        "https://www.facebook.com/frogcreativestudios",
        "https://www.instagram.com/frogcreativestudios/"
      ]
    }`;

  return (
    <>
      <title>{head.title + ' | Frog Creative Studios'}</title>

      <link rel="canonical" href={loc.url.href} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />

      {head.meta.map((m) => (
        <meta key={m.key} {...m} />
      ))}

      {/* <QwikPartytown forward={['dataLayer.push']} /> */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-272SV4FCHP"></script>
      <script dangerouslySetInnerHTML={analytics}></script>

      {head.links.map((l) => (
        <link key={l.key} {...l} />
      ))}

      {head.styles.map((s) => (
        <style key={s.key} {...s.props} dangerouslySetInnerHTML={s.style} />
      ))}


      {/* <!-- HTML Meta Tags --> */}
      <meta name="description" content="Paint by Number Kits and Puzzles featuring the work of local Northwoods artists. "/>

      {/* <!-- Facebook Meta Tags --> */}
      <meta property="og:url" content="https://frogcreativestudios.com" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Frog Creative Studios" />
      <meta property="og:description" content="Paint by Number Kits and Puzzles featuring the work of local Northwoods artists. " />
      <meta property="og:image" content="http://frogcreativestudios.com/images/og.png" />

      {/* <!-- Twitter Meta Tags --> */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="frogcreativestudios.com" />
      <meta property="twitter:url" content="https://frogcreativestudios.com" />
      <meta name="twitter:title" content="Frog Creative Studios" />
      <meta name="twitter:description" content="Paint by Number Kits and Puzzles featuring the work of local Northwoods artists." />
      <meta name="twitter:image" content="http://frogcreativestudios.com/images/og.png" />

      <script type="application/ld+json" dangerouslySetInnerHTML={schema}></script>
    </>
  );
});
