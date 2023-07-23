// SVG animation by @mikaelainalem from https://codepen.io/ainalem/pen/LJYRxz

import { component$, useStyles$ } from '@builder.io/qwik';
import styles from './menu-toggle.css?inline';

export interface MenuToggleProps {
  active? : boolean;
}

export const MenuToggle = component$<MenuToggleProps>(({active = false}) => {
  useStyles$(styles);
  
  return (
    <svg class={`hamburger hamburgerRotate hamburger4 ${active ? 'active' : ''}`}
         viewBox="0 0 100 100" 
         width="80">
      <path class="line top"
            d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20" />
      <path class="line middle" d="m 70,50 h -40" />
      <path class="line bottom"
            d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20" />
    </svg>
  );
});
