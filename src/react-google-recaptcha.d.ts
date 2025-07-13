declare module 'react-google-recaptcha' {
  import * as React from 'react';

  export interface ReCAPTCHAProps {
    sitekey: string;
    onChange?: (token: string | null) => void;
    onExpired?: () => void;
    theme?: 'light' | 'dark';
    size?: 'compact' | 'normal';
    tabindex?: number;
    // other props you might want...
  }

  export default class ReCAPTCHA extends React.Component<ReCAPTCHAProps> {
    reset(): void;
    execute(): void;       // if you want to support invisible reCAPTCHA execute
  }
}
