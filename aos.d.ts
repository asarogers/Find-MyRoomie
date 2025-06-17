// types/aos.d.ts
declare module 'aos' {
    interface AosOptions {
      disable?: boolean | 'mobile';
      startEvent?: string;
      initClassName?: string;
      animatedClassName?: string;
      useClassNames?: boolean;
      disableMutationObserver?: boolean;
      debounceDelay?: number;
      throttleDelay?: number;
      offset?: number;
      delay?: number;
      duration?: number;
      easing?: string;
      once?: boolean;
      mirror?: boolean;
      anchorPlacement?: string;
    }
  
    export function init(options?: AosOptions): void;
    export function refresh(): void;
    const AOS: {
        init: typeof init;
        refresh: typeof refresh;
      };
      
      export default AOS;
      
  }
  