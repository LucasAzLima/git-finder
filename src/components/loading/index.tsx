import { Box } from '@material-ui/core';
import React from 'react';

import useStyles from './styles';
import logo from 'assets/img/github.svg';

const Loading: React.FC = () => {
  const classes = useStyles();
  return (
    <Box
      display="flex"
      width="100%"
      height="100vh"
      justifyContent="center"
      alignItems="center"
    >
      <Box className={classes.loader}>
        <img alt="logo" src={logo} className={classes.loaderImg} />
      </Box>
    </Box>
  );
};

export default Loading;
