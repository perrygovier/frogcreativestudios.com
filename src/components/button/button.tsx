import { component$, useStylesScoped$, Slot } from "@builder.io/qwik";

export interface ButtonProps {
  href?: string;
}
export default component$<ButtonProps>(({href = "/shop"}) => {
  useStylesScoped$(`
    .btn {
      background-color: var(--primary);
      color: var(--light);
      padding: 1em 1.5em;
      min-width: 5em;
      text-align: center;
      display: inline-block;
      text-decoration: none;
      transition: .2s color ease-in-out, .2s background-color ease-in-out;
    }
    .btn:hover {
      color: var(--primary);
      background-color: var(--light);
    }
    .btn .builder-text {
      min-width: 100%;
    }
  `);
  return (
    <a
      class="btn"
      href={href}
    >
      <Slot></Slot>
    </a>
  );
});
