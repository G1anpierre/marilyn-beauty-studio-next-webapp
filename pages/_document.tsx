import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html>
        <Head>
          {/* favicon */}
          {/* Webfont */}
          {/* stylesheet */}
          {/* script/js */}
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700;800;900&display=swap"
            rel="stylesheet"
            crossOrigin="anonymous"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
