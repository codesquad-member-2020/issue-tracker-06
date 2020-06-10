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
  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyleProvider;
