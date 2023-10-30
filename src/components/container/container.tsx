import { Slot, component$, useStyles$ } from '@builder.io/qwik';
import styles from './container.css?inline';

export const ALL_MODES = ['light', 'dark'] as const;
type ModeTuple = typeof ALL_MODES;

export interface ContainerProps {
  mode: ModeTuple[number];
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