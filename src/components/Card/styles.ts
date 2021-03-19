import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    box: {
      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
      borderRadius: 5,
      background: '#fff',
      marginTop: 10,
      minHeight: 100,
      padding: 10,
      animation: '$emerged 1s ease forwards 0.5s',
      opacity: 0,
      '& p': {
        fontWeight: 'bold',
        textOverflow: 'ellipsis',
      },
      '& a': {
        textDecoration: 'none',
        color: 'black',
        '&:hover': {
          color: '#333',
        },
      },
      '& svg': {
        color: '#474747',
      },
    },

    textBox: {
      display: 'flex',
      alignItems: 'center',
      marginTop: '10px',
    },

    '@keyframes emerged': {
      '100%': {
        opacity: 1,
      },
    },
  })
);

export default useStyles;
