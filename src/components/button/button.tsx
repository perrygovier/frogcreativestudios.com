import { component$, useStylesScoped$, Slot } from "@builder.io/qwik";

export interface ButtonProps {
  href?: string;
}
export const Button = component$<ButtonProps>((props) => {
  useStylesScoped$(`
    .btn {
      background: var(--primary);
      padding: 1em 1.5em;
      min-width: 5em;
      text-align: center;
      display: inline-block;
    }
  `);
  return (
    <a
      class="btn"
      href={props.href}
    >
      <Slot></Slot>
    </a>
  );
});
