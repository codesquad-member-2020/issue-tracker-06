import { createMuiTheme, Theme as MuiTheme } from '@material-ui/core/styles';
const muiTheme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#444444'
    }
  }
});

const fontSize = {
  micro: '8px',
  small: '12px',
  base: '14px',
  ragular: '18px',
  large: '20px',
  xLarge: '24px',
  title: '30px'
};

const color = {
  darkGray: '#444444',
  gray: '#999999',
  lightGray: '#cccccc',
  base: '#f7f8fa',
  white: '#ffffff',
  green: '#32c654'
};

const theme = {
  ...muiTheme,
  fontSize,
  color
};

export default theme;
