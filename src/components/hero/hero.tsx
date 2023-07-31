import { component$, useStyles$, Slot } from '@builder.io/qwik';
import styles from './hero.css?inline';

export interface HeroProps {
  image: {
    url: string;
    alt: string;
  }
}

export const defaultProps: HeroProps = {
  image: {
    url: "https://picsum.photos/1360/907",
    alt: "A random image from picsum.photos",
  }
}

const Hero = component$<HeroProps>(({image = defaultProps.image}) => {
  useStyles$(styles);

  return (
    <section class="hero">
      <img src={image.url} alt={image.alt}/>
      <Slot></Slot>
    </section>
  );
});

export default Hero;