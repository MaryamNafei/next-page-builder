import { normalize } from "styled-normalize";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  ${normalize}
`;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
