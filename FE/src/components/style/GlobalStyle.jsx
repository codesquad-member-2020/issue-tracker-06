import React from 'react';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import theme from '@/components/style/theme';
import { StylesProvider, ThemeProvider as MuiThemeProvider } from '@material-ui/styles';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

const GlobalStyleProvider = ({ children }) => {
  return (
    <StylesProvider injectFirst>
      <StyledThemeProvider theme={theme}>
        <MuiThemeProvider theme={theme}>
          <GlobalStyle />
          {children}
        </MuiThemeProvider>
      </StyledThemeProvider>
    </StylesProvider>
  );
};

const GlobalStyle = createGlobalStyle`
  ${reset}
  html * {
    box-sizing: border-box;
    font-size: ${theme.fontSize.base};
    font-family: "Roboto", "Apple SD Gothic Neo", "Helvetica", "Arial", sans-serif;
  }
  button {
    background: none;
    border: 0;
  }
  @font-face { font-family: 'GmarketSansLight'; src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansLight.woff') format('woff'); font-weight: normal; font-style: normal; }
  `;

export default GlobalStyleProvider;
