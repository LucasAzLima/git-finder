import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    back: {
      position: 'absolute',
      display: 'flex',
      left: 20,
      top: 50,
      content: '""',
      color: '#f2f2f2',
      alignItems: 'center',
      fontWeight: 'bold',
      '&:hover': {
        cursor: 'pointer',
      },
    },

    textBox: {
      display: 'flex',
      alignItems: 'center',
      marginTop: '10px',
    },

    avatar: {
      position: 'absolute',
      right: 0,
      top: 0,
      content: '""',
      zIndex: -5,
      width: '40%',
      justifySelf: 'flex-end',
      maskImage: 'linear-gradient(to bottom, #222222,transparent)',
    },

    infos: {
      display: 'flex',
      flexDirection: 'column',
      color: '#f2f2f2',
      fontSize: '1.5rem',
      height: '40%',
      marginLeft: '5%',
      marginBottom: 30,
      width: '60%',
      marginTop: 100,
      justifyContent: 'center',
      '& svg': {
        color: '#a09e9e',
      },
      '@media (max-width: 400px)': {
        width: '100%',
      },
    },

    repos: {
      display: 'flex',
      flexDirection: 'row',
      marginLeft: '5%',
      marginBottom: '5%',
      maxHeight: 400,
      width: '60%',
      overflow: 'auto',
      '@media (max-width: 700px)': {
        width: '100%',
      },
      '&::-webkit-scrollbar': {
        width: '10px',
      },
      '&::-webkit-scrollbar-track': {
        background: '#f1f1f1',
      },
      '&::-webkit-scrollbar-thumb': {
        background: '#888',
      },
      '&::-webkit-scrollbar-thumb:hover': {
        background: '#555',
      },
    },

    '@keyframes emerged': {
      '100%': {
        opacity: 1,
      },
    },
  })
);

export default useStyles;
