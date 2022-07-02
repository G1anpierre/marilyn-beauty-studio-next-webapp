import { Layout } from '../src/components/Layout';
import type { AppProps } from 'next/app';
import { ThemeWrapper } from '../src/components/ThemeWrapper';

function MyApp({ Component, pageProps }: AppProps) {
  // Providers - Context/Providers, Theme, data
  // Layout
  // props adicionales
  const {
    homepage: { navbar },
  } = pageProps;

  return (
    <ThemeWrapper>
      <Layout navbar={navbar}>
        <Component {...pageProps} title="hello world" />
      </Layout>
    </ThemeWrapper>
  );
}

export default MyApp;
