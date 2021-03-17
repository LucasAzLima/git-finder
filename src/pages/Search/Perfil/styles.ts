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
    },
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
    repos: {
      display: 'flex',
      flexDirection: 'row',
      marginLeft: '5%',
      marginBottom: '5%',
      maxHeight: 400,
      width: '60%',
      overflow: 'auto',
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
