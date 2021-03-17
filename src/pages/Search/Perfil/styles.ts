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
        marginTop: 10,
        fontWeight: 'bold',
      },
      '& a': {
        textDecoration: 'none',
        color: 'black',
        '&:hover': {
          color: '#333',
        },
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
      height: '40vh',
      marginLeft: '5%',
      marginBottom: 30,
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
    },
    loaderImg: {
      width: '100px',
      height: '100px',
      borderRadius: '50%',
      background: '#f2f2f2',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      content: '""',
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
  })
);

export default useStyles;
