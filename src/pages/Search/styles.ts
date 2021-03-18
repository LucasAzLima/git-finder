import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    input: {
      '& .MuiOutlinedInput-root': {
        height: 50,
        color: '#f2f2f2',
        '& fieldset': {
          borderColor: 'transparent',
        },
        '&:hover fieldset': {
          borderColor: 'transparent',
        },
        '&.Mui-focused fieldset': {
          borderColor: 'transparent',
        },
      },
    },
    content: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: '20px',
      alignItems: 'center',
      '& img': {
        width: '40%',
      },
      '@media (max-width: 400px)': {
        flexDirection: 'column',
        justifyContent: 'center',
        '& img': {
          width: '100%',
        },
      },
    },

    header: {
      display: 'flex',
      justifyContent: 'space-between',
      margin: '10px 20px 0px 20px',
      alignItems: 'center',
      '@media (max-width: 400px)': {
        flexDirection: 'column',
      },
    },
    buttonFilter: {
      borderRadius: '0px 10px 10px 0px',
      width: 0,
      height: 52,
      padding: '12px 15px !important',
      margin: -1,
      color: '#f2f2f2',
      animation: '$animBSearch 1.5s ease forwards',
    },
    box: {
      flexDirection: 'row',
      alignItems: 'center',
      border: 'solid 1px #8D8D8D',
      borderRadius: 10,
      height: 50,
      width: 0,
      animation: '$animSearch 1.5s ease forwards',
      '& p': {
        wordWrap: 'break-word',
        textOverflow: 'ellipsis',
      },
    },
    textCenter: {
      fontSize: '3rem',
      animation: '$anim 1s ease forwards 0.5s',
      transform: 'translateY(20px)',
      opacity: 0,
    },
    icon: {
      marginLeft: 30,
      color: '#f2f2f2',
      background: '#a09e9e',
      borderRadius: '50%',
      height: '35px !important',
      width: '35px !important',
      '&:hover': {
        cursor: 'pointer',
      },
    },
    git: {
      textDecoration: 'none',
      color: '#f2f2f2',
      '&:hover': {
        color: '#a09e9e',
      },
    },
    '@keyframes anim': {
      '100%': {
        transform: 'translateY(-20px)',
        opacity: 1,
      },
    },
    '@keyframes animSearch': {
      '100%': {
        width: '100%',
      },
    },
    '@keyframes animBSearch': {
      '100%': {
        width: 52,
      },
    },
  })
);

export default useStyles;
