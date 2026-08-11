import Head from "next/head";
import { AppProps } from "next/app";
import GlobalStyled from "../styles/global";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Rodrigo Moreira | Software Developer</title>
        <meta
          name="description"
          content="Desenvolvedor de Software com experiência em aplicações web, APIs e integrações, atuando com TypeScript, Angular, Node.js e SQL Server."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:title"
          content="Rodrigo Moreira | Software Developer"
        />
        <meta
          property="og:description"
          content="Desenvolvedor de Software com experiência em aplicações web, APIs e integrações, atuando com TypeScript, Angular, Node.js e SQL Server."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.rodrigomoreira.dev" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <GlobalStyled />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
