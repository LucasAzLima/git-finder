import { createMuiTheme } from '@material-ui/core';
import { Colors } from './styles';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as LabTypes from '@material-ui/lab/themeAugmentation';

export const theme = createMuiTheme({
  spacing: 10,
  palette: {
    text: {
      primary: '#333333',
    },
    primary: {
      main: '#333333',
      contrastText: Colors.foreground.primary,
      dark: Colors.background.primary,
    },
  },
  typography: {
    h1: {
      fontFamily: 'Open Sans',
      fontWeight: 'normal',
      fontSize: 30,
      letterSpacing: -0.5,
      color: '#f2f2f2',
    },
    h2: {
      fontFamily: 'Roboto',
      fontWeight: 'bold',
      fontSize: 30,
    },
    h5: {
      fontFamily: 'Open Sans',
      fontWeight: 600,
      fontSize: 20,
      letterSpacing: -0.48,
      color: '#f2f2f2',
    },
  },
});
