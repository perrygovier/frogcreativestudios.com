import { Slot, component$, useStyles$ } from '@builder.io/qwik';
import styles from './container.css?inline';

export interface ContainerProps {
  mode: 'light' | 'dark';
}

export const defaultProps: ContainerProps = {
  mode: 'light',
}

const Container = component$<ContainerProps>((props) => {
  useStyles$(styles);



  return (
    <section class={`container container--${props.mode}`}>
      <Slot></Slot>
    </section>
  );
});

export default Container;