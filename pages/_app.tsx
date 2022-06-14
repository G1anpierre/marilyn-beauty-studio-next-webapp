import type { AppProps } from 'next/app';
import { ThemeWrapper } from '../src/components/ThemeWrapper';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeWrapper>
      <Component {...pageProps} />
    </ThemeWrapper>
  );
}

export default MyApp;
