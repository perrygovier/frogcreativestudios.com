import { Slot, component$, useStyles$ } from '@builder.io/qwik';
import styles from './ping-pong.css?inline';

export interface PingPongProps {
  url: string;
  alt: string;
}

export const defaultProps: PingPongProps = {
  url: "https://cdn.builder.io/api/v1/image/assets%2F37ded3b122524a739392c33ac92e0db5%2F33553de4c41a4cfd9176a91f5f907b6f",
  alt: "A random image from picsum.photos",
}

const PingPong = component$<PingPongProps>((props = defaultProps) => {
  useStyles$(styles);
  return (
    <section class="pingPong">
      <img class="pingPong__image" src={props.url} alt={props.alt}/>
      <Slot></Slot>
    </section>
  );
});

export default PingPong;