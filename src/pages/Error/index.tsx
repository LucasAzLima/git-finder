import { Box, Typography } from '@material-ui/core';
import { KeyboardBackspace } from '@material-ui/icons';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import React from 'react';

import notFound from 'assets/img/not-found.svg';
import useNavigation from 'hooks/navigation';

const Error: React.FC = () => {
  const classes = useStyles();
  const navigate = useNavigation();
  return (
    <Box className={classes.box}>
      <Box className={classes.back} onClick={() => navigate.to('/')}>
        <KeyboardBackspace style={{ marginRight: 10 }} /> Voltar
      </Box>
      <Box>
        <Typography
          variant="h2"
          style={{
            fontWeight: 'bold',
            marginLeft: '5%',
            color: '#a09e9e',
            fontSize: '4rem',
          }}
        >
          Opssss!
        </Typography>

        <Typography
          variant="h2"
          style={{ fontWeight: 'bold', marginLeft: '5%', color: '#a09e9e' }}
        >
          Não encontramos algum perfil com esse usuário!
        </Typography>
      </Box>
      <img alt="not found" src={notFound} style={{ height: '60vh' }} />
    </Box>
  );
};

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
    box: {
      display: 'flex',
      width: '100%',
      height: '100vh',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      '@media (max-width: 400px)': {
        flexDirection: 'column',
      },
    },
  })
);

export default Error;
