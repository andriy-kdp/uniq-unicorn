import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html: { 
  font-size: 62.5%;
  height: 100vh;
}
body {
  background-color: ${(props) => props.theme.colors.backgound.primary};
  color: ${(props) => props.theme.colors.text.primary};
  font-family: DM Sans, sans-serif;
  height: 100%;
  font-size: 1.6rem;
  line-height: 2.8rem;
}

h1 {
  font-size: 5.6rem;
  line-height: 7.2rem;
}

h2 {
  font-size: 4.2rem;
  line-height: 5.468rem;
}

h3 {
  font-size: 3.6rem;
  line-height: 4.4rem;
}

h4 {
  font-size: 2.8rem;
  line-height: 3.646rem;
}
h5 {
  font-size: 2.6rem;
  line-height: 3.646rem;
}
`;
