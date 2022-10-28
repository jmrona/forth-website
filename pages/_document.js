import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="icon" href="/img/brand/favicon.ico" />
        <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.15.1/css/all.css" integrity="sha384-9ZfPnbegQSumzaE7mks2IYgHoayLtuto3AS6ieArECeaR8nCfliJVuLh/GaQ1gyM" crossOrigin="anonymous"/>
        <link href="assets/fontawesome/css/fontawesome.css" rel="stylesheet"/>
        <link href="assets/fontawesome/css/brands.css" rel="stylesheet"/>
        <link href="assets/fontawesome/css/solid.css" rel="stylesheet"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}