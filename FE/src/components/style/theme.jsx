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
  color,
  mainFontColor: '#586069',
  darkFontColor: '#424242',
  listBackground: '#f6f8fa',
  listBorderColor: '#c8cbcf',
  mainBlueColor: '#0366d6',
  greyButton: `padding: 6px 12px;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  border: 1px solid rgba(27,31,35,.2);
  border-radius: .25em;
  outline: 0;
  color: #24292e;
  background-color: #eff3f6;
  background-image: linear-gradient(-180deg,#fafbfc,#eff3f6 90%);
  &:hover {
    text-decoration: none;
    background-repeat: repeat-x;
    border: 1px solid rgba(27, 31, 35, 0.4);
  }`,
  greenButton: `
  color: #fff;
  background-color: '#28a745';
  background-image:linear-gradient(-180deg, #34d058, #28a745 90%);
  padding: 6px 12px;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  cursor: pointer;
  border: 1px solid rgba(27, 31, 35, 0.2);
  border-radius: 0.25em;
  outline: 0;
  &:hover {
    text-decoration: none;
    background-repeat: repeat-x;
    border: 1px solid rgba(27, 31, 35, 0.8);
  }
 `,
  input: ` 
  color:'#586069';
  border: 1px solid #d1d5da;
  border-radius: 3px;
  outline: none;
  box-shadow: inset 0 1px 2px rgba(27, 31, 35, 0.075);
  padding: 6px 8px;
  line-height: 20px;
  height: 20px;
  background: #fafbfc;
  &::placeholder {
    color: #BDBDBD;
  }
  &:focus {
    border-color: #2188ff;
    background : white;
    outline: none;
    box-shadow: inset 0 1px 2px rgba(27, 31, 35, 0.075), 0 0 0 0.2em rgba(3, 102, 214, 0.3);;
  }`
};

export default theme;
