import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  html,
  body {
    padding: 0;
    margin: 0;
    font-family: ${props => props.theme.typography.fontFamily};
    font-size: ${props => props.theme.typography.baselineFontSize};
    font-weight: 550;
    line-height: ${props => props.theme.typography.lineHeight};
    color: ${props => props.theme.typography.color};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    color: ${props => props.theme.typography.color};
  }

  html, body, #___gatsby, #gatsby-focus-wrapper {
    height: 100%;
    overflow: hidden;
  }

  a {
    color: ${props => props.theme.palette.accent};

    :hover {
      text-decoration: none;
    }
  }

  h1, h2, h3, h4 {
    padding: 0;
    margin: 0;
    font-weight: bold;
    font-family: ${props => props.theme.typography.headingFontFamily};
  }

  p {
    margin: 0;
    padding: 0;
    margin-bottom: 1em;
  }
`;
