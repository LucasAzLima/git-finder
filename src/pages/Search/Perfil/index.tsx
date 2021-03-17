import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import { Box, Typography } from '@material-ui/core';
import {
  AccountCircleOutlined,
  Description,
  Room,
  Group,
  KeyboardBackspace,
} from '@material-ui/icons';
import useStyles from './styles';

import notFound from 'assets/img/not-found.svg';
import logo from 'assets/img/github.svg';
import useNavigation from 'hooks/navigation';

interface userRepoRequest {
  html_url?: string;
  name?: string;
  language?: string;
  homepage?: string;
  stargazers_count: number;
}

interface userProfileRequest {
  avatar_url?: string;
  bio?: string;
  blog?: string;
  company?: string;
  email?: string;
  followers?: number;
  following?: number;
  html_url?: string;
  location?: string;
  login?: string;
  name?: string;
  twitter_username?: string;
}

interface error {
  data: {
    documentation_url: string;
    message: string;
  };
  status: number;
}

function Perfil() {
  const [userRepositories, setUserRepositories] = useState<userRepoRequest[]>();
  const [userProfile, setUserProfile] = useState<userProfileRequest>();
  const [erro, setErro] = useState<error>();
  const [loading, setLoading] = useState<boolean>(false);
  const params = useParams<{ user: string }>();
  const classes = useStyles();
  const navigate = useNavigation();
  useEffect(() => {
    async function get() {
      setLoading(true);
      await axios
        .get(`https://api.github.com/users/${params.user}`)
        .then((response) => {
          setUserProfile(response.data);
          getRepo();
        })
        .catch(function (error) {
          if (error.response) {
            setErro(error.response);
            setLoading(false);
          }
        });
    }
    async function getRepo() {
      await axios
        .get(`https://api.github.com/users/${params.user}/repos`)
        .then((response) => {
          const data: userRepoRequest[] = response.data;
          data.sort((a, b) => {
            if (a.stargazers_count > b.stargazers_count) return -1;
            if (a.stargazers_count < b.stargazers_count) return 1;
            return 0;
          });
          console.log(data);
          setUserRepositories(data);
          setLoading(false);
        })
        .catch(function (error) {
          if (error.response) {
            setErro(error.response);
            setLoading(false);
          }
        });
    }
    get();
  }, []);
  return !loading ? (
    userRepositories && userProfile ? (
      <Box width="100%">
        <img src={userProfile?.avatar_url} className={classes.avatar} />
        <Box className={classes.back} onClick={() => navigate.to('/')}>
          <KeyboardBackspace style={{ marginRight: 10 }} /> Voltar
        </Box>
        <Box className={classes.infos}>
          <Box display="flex" alignItems="center" marginTop="10px">
            <AccountCircleOutlined style={{ marginRight: 10 }} />
            <p>{userProfile?.name}</p>
          </Box>
          <Box display="flex" alignItems="center" marginTop="10px">
            <Description style={{ marginRight: 10 }} />
            <p>{userProfile?.bio}</p>
          </Box>
          <Box display="flex" alignItems="center" marginTop="10px">
            <Room style={{ marginRight: 10 }} />
            <p>{userProfile?.location}</p>
          </Box>
          <Box display="flex" alignItems="center" marginTop="10px">
            <Group style={{ marginRight: 10 }} />
            <p style={{ marginRight: 10 }}>{userProfile?.followers}</p>
            followers
          </Box>
          <Box display="flex" alignItems="center" marginTop="10px">
            <Group style={{ marginRight: 10 }} />
            <p style={{ marginRight: 10 }}>{userProfile?.following}</p>
            following
          </Box>
        </Box>
        <Typography
          variant="h2"
          style={{ fontWeight: 'bold', marginLeft: '5%', color: '#a09e9e' }}
        >
          Repositórios:
        </Typography>
        <Box className={classes.repos}>
          <Box paddingRight="5%">
            {userRepositories?.map((repo, i) => {
              if (i % 2 === 1) return null;
              return (
                <Box key={i} className={classes.box}>
                  <p title={repo.name}>
                    <a target="_blank" rel="noreferrer" href={repo.html_url}>
                      {repo.name}
                    </a>
                  </p>
                  <p title={repo.language}>{repo.language}</p>
                  <p>{repo.stargazers_count} Stars</p>
                </Box>
              );
            })}
          </Box>
          <Box>
            {userRepositories?.map((repo, i) => {
              if (i % 2 === 0) return null;
              return (
                <Box key={i} className={classes.box}>
                  <p title={repo.name}>
                    <a target="_blank" rel="noreferrer" href={repo.html_url}>
                      {repo.name}
                    </a>
                  </p>
                  <p title={repo.language}>{repo.language}</p>
                  <p>{repo.stargazers_count} Stars</p>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Box>
    ) : (
      <Box
        display="flex"
        width="100%"
        height="100vh"
        justifyContent="center"
        alignItems="center"
      >
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
        <img src={notFound} style={{ height: '60vh' }} />
      </Box>
    )
  ) : (
    <Box
      display="flex"
      width="100%"
      height="100vh"
      justifyContent="center"
      alignItems="center"
    >
      <Box className={classes.loader} />
      <img src={logo} className={classes.loaderImg} />
    </Box>
  );
}

export default Perfil;