import type { QwikIntrinsicElements } from '@builder.io/qwik'

export function FacebookLogo(props: QwikIntrinsicElements['svg'], key: string) {
  return (
    <svg width="40" 
         height="40" 
         viewBox="0 0 40 40" 
         fill="none" 
         xmlns="http://www.w3.org/2000/svg"
         {...props} 
         key={key}>
      <path d="M17.1 31.2V21.1812H13.6V17.2H17.1V14.05C17.1 12.3875 17.5848 11.0969 18.5545 10.1781C19.5242 9.25936 20.8121 8.79999 22.4182 8.79999C23.7212 8.79999 24.7818 8.85832 25.6 8.97499V12.5187H23.4182C22.6 12.5187 22.0394 12.6937 21.7363 13.0437C21.4939 13.3354 21.3727 13.8021 21.3727 14.4437V17.2H25.2363L24.6909 21.1812H21.3727V31.2H17.1Z" 
            fill="currentColor"/>
    </svg>
  );
}