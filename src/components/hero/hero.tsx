import { component$, useStyles$, Slot } from '@builder.io/qwik';
import styles from './hero.css?inline';

export interface HeroProps {
  url: string;
  alt: string;
}

export const defaultProps: HeroProps = {
  url: "https://picsum.photos/1360/907",
  alt: "A random image from picsum.photos",
}

const Hero = component$<HeroProps>((props) => {
  useStyles$(styles);


  return (
    <section class="hero">
      <img class="hero__image" src={props.url} alt={props.alt}/>
      <div class="hero__mask"></div>
      <div class="hero__content">
        <Slot></Slot>
      </div>
    </section>
  );
});

export default Hero;