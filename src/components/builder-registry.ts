import type { RegisteredComponent } from "@builder.io/sdk-qwik";
import Button  from "./button/button";
import Counter from "./counter/counter";

/**
 * This array is used to integrate custom components within Builder.
 * https://www.builder.io/c/docs/custom-components-intro
 *
 * These components will be found the "Custom Components"
 * section of Builder's visual editor.
 * You can also turn on "components only mode" to limit
 * editing to only these components.
 * https://www.builder.io/c/docs/guides/components-only-mode
 */
export const CUSTOM_COMPONENTS: RegisteredComponent[] = [
  {
    component: Button,
    name: "Button",
    inputs: [
      {
        name: "href",
        type: "string",
        defaultValue: 'https://google.com',
      },
    ],
    defaultChildren: [
      { 
        '@type': '@builder.io/sdk:Element',
        component: { name: 'Text', options: { text: 'I am child text block!' } }
      }
    ]
  },
];
