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
  const [user, setUser] = useState<string>('lucasazlima');
  const [hidden, setHidden] = useState<boolean>(true);

  const navigate = useNavigation();
  const classes = useStyles();
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
          marginRight="10%"
        >
          <Box className={classes.box} display={hidden ? 'none' : 'flex'}>
            <TextField
              placeholder="Procure por um usuário..."
              onChange={(event) => setUser(event.target.value)}
              variant="outlined"
              className={classes.input}
              defaultValue="lucasazlima"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start" style={{ color: '#f2f2f2' }}>
                    @
                  </InputAdornment>
                ),
              }}
            />
            <Button
              color="primary"
              variant="contained"
              onClick={() => navigate.to(`/user/${user}`)}
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
