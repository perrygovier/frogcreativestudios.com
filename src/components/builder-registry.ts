import type { RegisteredComponent } from "@builder.io/sdk-qwik";
import Button from "./button/button";
import Hero from "./hero/hero";
import PingPong from "./ping-pong/ping-pong";

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
        name: "url",
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
  {
    component: Hero,
    name: "Hero",
    inputs: [
      {
        name: "url",
        type: "file",
        friendlyName: "Background Image",
        allowedFileTypes: ['jpeg', 'jpg', 'png', 'svg'],
        required: true,
        defaultValue: 'https://picsum.photos/1360/907',
      },
      {
        name: "alt",
        type: "string",
        friendlyName: "Image Description",
        required: true,
        defaultValue: 'Hero Image Description',
      },
    ],
    defaultChildren: [
      { 
        '@type': '@builder.io/sdk:Element',
        component: { name: 'Text', options: { text: 'I am child text block!' } }
      }
    ]
  },
  {
    component: PingPong,
    name: "PingPong",
    inputs: [
      {
        name: "url",
        type: "file",
        friendlyName: "Side Image",
        allowedFileTypes: ['jpeg', 'jpg', 'png', 'svg'],
        required: true,
        defaultValue: 'https://picsum.photos/1360/907',
      },
      {
        name: "alt",
        type: "string",
        friendlyName: "Image Description",
        required: true,
        defaultValue: 'Image Description',
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
