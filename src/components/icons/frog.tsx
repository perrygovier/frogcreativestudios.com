import type { QwikIntrinsicElements } from '@builder.io/qwik'

export function FROGLogo(props: QwikIntrinsicElements['svg'], key: string) {
  return (
    <svg 
      width="97"
      height="67"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24.15 16.67"
      {...props} 
      key={key}>
      
      <path fill="currentColor" d="m24.15,4.63c0-2.55-2.13-4.63-4.73-4.63-2.05,0-3.78,1.25-4.45,3.03-.23.63-.83,1.03-1.5.95-.45-.02-.93-.05-1.4-.05h-.01c-.48,0-.95.02-1.4.05-.68.08-1.28-.33-1.5-.95-.65-1.78-2.4-3.03-4.43-3.03C2.1,0,0,2.08,0,4.63c0,1.2.45,2.28,1.2,3.1.3.33.43.73.38,1.18-.03.13-.03.25-.03.35,0,2.9,4.64,7.33,10.46,7.41h0c5.83-.07,10.58-4.51,10.58-7.41,0-.1-.03-.23-.03-.35-.08-.45.05-.85.38-1.18.75-.83,1.2-1.9,1.2-3.1h0ZM4.67,7.6c-1.75,0-3.18-1.38-3.18-3.1s1.43-3.1,3.18-3.1,3.15,1.4,3.15,3.1-1.4,3.1-3.15,3.1Zm14.85-.19c-1.75,0-3.18-1.38-3.18-3.1s1.43-3.1,3.18-3.1,3.18,1.4,3.18,3.1-1.43,3.1-3.18,3.1ZM4.09,2.57c-.63,0-1.13.48-1.13,1.08s.5,1.1,1.13,1.1,1.1-.5,1.1-1.1-.5-1.08-1.1-1.08Zm15.99-.24c-.63,0-1.13.48-1.13,1.08s.5,1.1,1.13,1.1,1.1-.5,1.1-1.1-.5-1.08-1.1-1.08Z"></path>
    </svg>
  );
}