import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    loader: {
      width: '200px',
      height: '200px',
      borderRadius: '50%',
      border: '16px solid #a09e9e',
      borderTop: '16px solid #f2f2f2',
      animation: '$spin 2s linear infinite',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },

    loaderImg: {
      width: '100px',
      height: '100px',
      borderRadius: '50%',
      animation: '$spinInv 2s linear infinite',
      content: '""',
    },

    '@keyframes spin': {
      '0%': {
        transform: 'rotate(0deg)',
      },
      '100%': {
        transform: 'rotate(360deg)',
      },
    },

    '@keyframes spinInv': {
      '0%': {
        transform: 'rotate(0deg)',
      },
      '100%': {
        transform: 'rotate(-360deg)',
      },
    },
  })
);

export default useStyles;
