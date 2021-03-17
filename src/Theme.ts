import { createMuiTheme } from '@material-ui/core';
import { Colors, Spacing } from './styles';
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
    secondary: {
      main: Colors.primary,
      contrastText: '#FFF',
      dark: 'rgba(14, 75, 130, 0.12)',
    },
    warning: {
      main: '#FFA41B',
    },
    error: {
      main: '#ED0000',
    },
    info: {
      main: '#2196F3',
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
    },
    h6: {
      fontFamily: 'Roboto',
      fontWeight: 'normal',
      fontSize: 14,
    },
    subtitle1: {
      fontFamily: 'Open Sans',
      fontWeight: 'normal',
      fontSize: 20,
    },
    subtitle2: {
      fontFamily: 'Open Sans',
      fontWeight: 600,
      fontSize: 16,
    },
    body1: {
      fontFamily: 'Roboto',
      fontWeight: 'normal',
      fontSize: 20,
    },
    body2: {
      fontFamily: 'Roboto',
      fontWeight: 'normal',
      fontSize: 16,
    },
    caption: {
      fontFamily: 'Roboto',
      fontWeight: 300,
      fontSize: 14,
    },
    overline: {
      fontFamily: 'Roboto',
      fontWeight: 'normal',
      fontSize: 14,
      lineHeight: 1,
      letterSpacing: 'initial',
      textTransform: 'initial',
    },
    button: {
      textTransform: 'initial',
    },
  },
  shape: {
    borderRadius: 10,
  },
  overrides: {
    MuiAppBar: {
      root: {
        backgroundColor: 'white',
      },
    },
    MuiFab: {
      root: {
        height: 48,
        width: 48,
        '&:hover': {
          color: Colors.primary,
          boxShadow: Colors.shadows.default,
        },
        '&$disabled': {
          backgroundColor: '#ECECEC',
          color: 'rgba(51, 51, 51, 0.38)',
        },
      },
      secondary: {
        boxShadow: 'none',
      },
    },
    MuiButton: {
      root: {
        fontFamily: 'Roboto',
        fontWeight: 500,
        fontSize: 14,
        padding: `${Spacing.extraSmall} ${Spacing.large}`,
        height: 48,
        '&$disabled': {
          backgroundColor: '#ECECEC',
          color: 'rgba(51, 51, 51, 0.38)',
        },
      },
      text: {
        color: '#f2f2f2',
        hover: {
          color: Colors.primary,
          boxShadow: Colors.shadows.default,
        },
        boxShadow: 'none',
      },
      textSecondary: {
        '&:hover': {
          color: Colors.primary,
          boxShadow: Colors.shadows.default,
        },
        boxShadow: 'none',
      },
      containedSecondary: {
        '&:hover': {
          color: Colors.primary,
          boxShadow: Colors.shadows.default,
        },
        boxShadow: 'none',
      },
    },
    MuiInputAdornment: {
      root: {
        fontWeight: 'normal',
        fontSize: '16px !important',
        color: 'rgba(0, 0, 0, 0.54)',
      },
    },
    MuiOutlinedInput: {
      input: {
        padding: '0px 14px',
      },
    },
    MuiInputLabel: {
      outlined: {
        transform: 'translate(14px, 17px) scale(1)',
      },
    },
    MuiInputBase: {
      root: {
        minHeight: 48,
      },
      input: {
        fontFamily: 'Roboto',
        fontWeight: 'normal',
        fontSize: 16,
      },
    },
    MuiTextField: {
      root: {
        minHeight: 48,
      },
    },
    MuiAutocomplete: {
      root: {
        minHeight: 48,
      },
      inputRoot: {
        padding: '0px 9px !important',
      },
      input: {
        padding: '6.5px 4px !important',
      },
      option: {
        fontSize: 16,
      },
    },
    MuiFormHelperText: {
      contained: {
        marginLeft: 0,
        marginRight: 0,
      },
    },
  },
  props: {
    MuiInputAdornment: {
      disableTypography: true,
    },
  },
});
