import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    input: {
      '& .MuiOutlinedInput-root': {
        height: 70,
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
      height: '40px !important',
      width: '40px !important',
      '&:hover': {
        cursor: 'pointer',
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
