import { createGlobalStyle } from "styled-components";
import { media } from "../utils/use-media-query";

export const articleDataAttribs = {
  H2: "data-header=article-h2",
  H3: "data-header=article-h3",
  Div: "data-div=article-div",
  P: "data-p=article-p",
  Ul: "data-ul=article-ul",
  Li: "data-li=article-li",
  Blockquote: "data-quote=article-quote",
  Hr: "data-hr=article-h4",
  Img: "data-img=article-img",
};

const { Blockquote, Div, H2, H3, Hr, Li, P, Ul, Img } = articleDataAttribs;

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html { 
  font-size: 62.5%;
  height: 100vh;
}
body {
  background-color: ${(props) => props.theme.colors.background.primary};
  color: ${(props) => props.theme.colors.text.primary};
  font-family: DM Sans, sans-serif;
  height: 100%;
  font-size: 1.6rem;
  line-height: 2.8rem;
}
div, p, span, pre {
  font-family: DM Sans, sans-serif;
}

h1, h2, h3, h4, h5, h6 {
  color: ${(props) => props.theme.colors.text.secondary}
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
h6,pre {
  font-size: 1.6rem;
  line-height: 2.83rem;
}
hr {
  width: 100%;
}

li {
  margin-left: 2rem;
}

h2[${H2}] {
  font-size: 3.6rem;
  line-height: 4.4rem;
}
h3[${H3}] {
  margin-bottom: 1.6rem;
  font-size: 3rem;
  line-height: 3.8rem;
}
div[${Div}] {
  margin-bottom: 6rem
}
p[${P}] {
  margin-bottom: 2rem
}
ul[${Ul}] {
  margin-bottom: 2rem;
}
li[${Li}] {
  margin-left: 2.5rem;
}
hr[${Hr}] {
  width: 100%
}
blockquote[${Blockquote}] {
  margin: 0 0 11rem;
  border-left: 2px solid #fff;
  padding-left: 6rem;
  h4 {
    font-style: italic;
    margin-bottom: 3.2rem;
  }
}
img[${Img}] {
  margin: 7rem 0
}

@media (${media.xs}) {
  h1 {
    font-size: 3.2rem;
    line-height: 5.8rem;
  };
  
  h2 {
    font-size: 2.4rem;
    line-height: 3.6rem;
  }
  
}
`;
