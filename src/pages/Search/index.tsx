import React, { useState } from 'react';
import {
  Box,
  Button,
  InputAdornment,
  TextField,
  Typography,
} from '@material-ui/core';
import { SearchOutlined, CloseOutlined } from '@material-ui/icons';

import Content from 'components/content';
import useStyles from './styles';
import useNavigation from 'hooks/navigation';
import Octocat from 'assets/img/Octocat.png';

const Users: React.FC = () => {
  const [user, setUser] = useState<string>('');
  const [hidden, setHidden] = useState<boolean>(true);

  const navigate = useNavigation();
  const classes = useStyles();

  function redirect() {
    if (user === '') {
      return;
    }
    navigate.to(`/user/${user}`);
  }
  return (
    <Content>
      <Box
        display="flex"
        justifyContent="space-between"
        margin="10px 20px 0px 20px"
        alignItems="center"
      >
        <Typography variant="h1" style={{ fontWeight: 'bold' }}>
          GitHub Finder
        </Typography>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="flex-end"
          minHeight="72px"
          marginRight="5%"
        >
          <Box className={classes.box} display={hidden ? 'none' : 'flex'}>
            <TextField
              placeholder="Procure por um usuário..."
              onChange={(event) => setUser(event.target.value)}
              variant="outlined"
              className={classes.input}
              defaultValue=""
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <p style={{ color: '#f2f2f2' }}>@</p>
                  </InputAdornment>
                ),
              }}
            />
            <Button
              color="primary"
              variant="contained"
              onClick={() => redirect()}
              className={classes.buttonFilter}
            >
              <SearchOutlined />
            </Button>
          </Box>
          {!hidden ? (
            <CloseOutlined
              className={classes.icon}
              onClick={() => setHidden(!hidden)}
            />
          ) : (
            <SearchOutlined
              className={classes.icon}
              onClick={() => setHidden(!hidden)}
            />
          )}
        </Box>
      </Box>
      <Box
        display="flex"
        justifyContent="space-between"
        marginTop="20px"
        alignItems="center"
      >
        <Typography variant="h1" className={classes.textCenter}>
          Pesquise e obtenha informações sobre seu perfil!
        </Typography>
        <img src={Octocat} style={{ width: '40%' }} />
      </Box>
    </Content>
  );
};

export default Users;
