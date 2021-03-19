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

import useNavigation from 'hooks/navigation';
import Error from 'pages/Error';
import Loading from 'components/loading';
import Card from 'components/Card';

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

function Perfil() {
  const [userRepositories, setUserRepositories] = useState<userRepoRequest[]>();
  const [userProfile, setUserProfile] = useState<userProfileRequest>();
  const [erro, setErro] = useState<boolean>(false);
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
        .catch(() => {
          setErro(true);
          setLoading(false);
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
          setUserRepositories(data);
          setLoading(false);
        })
        .catch(() => {
          setErro(true);
          setLoading(false);
        });
    }
    get();
  }, [params.user]);

  return !loading ? (
    userRepositories && userProfile && !erro ? (
      <Box width="100%">
        <img
          alt="avatar"
          src={userProfile?.avatar_url}
          className={classes.avatar}
        />
        <Box className={classes.back} onClick={() => navigate.to('/')}>
          <KeyboardBackspace style={{ marginRight: 10 }} /> Voltar
        </Box>
        <Box className={classes.infos}>
          {userProfile?.name && (
            <Box className={classes.textBox}>
              <AccountCircleOutlined style={{ marginRight: 10 }} />
              <p>{userProfile?.name}</p>
            </Box>
          )}
          {userProfile?.bio && (
            <Box className={classes.textBox}>
              <Description style={{ marginRight: 10 }} />
              <p>{userProfile?.bio}</p>
            </Box>
          )}
          {userProfile?.location && (
            <Box className={classes.textBox}>
              <Room style={{ marginRight: 10 }} />
              <p>{userProfile?.location}</p>
            </Box>
          )}
          {userProfile?.followers && (
            <Box className={classes.textBox}>
              <Group style={{ marginRight: 10 }} />
              <p style={{ marginRight: 10 }}>{userProfile?.followers}</p>
              followers
            </Box>
          )}
          {userProfile?.following && (
            <Box className={classes.textBox}>
              <Group style={{ marginRight: 10 }} />
              <p style={{ marginRight: 10 }}>{userProfile?.following}</p>
              following
            </Box>
          )}
        </Box>
        <Typography
          variant="h2"
          style={{ fontWeight: 'bold', marginLeft: '5%', color: '#a09e9e' }}
        >
          Repositórios:
        </Typography>
        {userRepositories.length > 0 ? (
          <Box className={classes.repos}>
            <Box width="45%" paddingRight="5%">
              {userRepositories?.map((repo, i) => {
                if (i % 2 === 0) return null;
                return <Card repositorie={repo} key={i} />;
              })}
            </Box>
            <Box width="45%">
              {userRepositories?.map((repo, i) => {
                if (i % 2 === 1) return null;
                return <Card repositorie={repo} key={i} />;
              })}
            </Box>
          </Box>
        ) : (
          <Box className={classes.repos}>
            <Typography variant="h5" style={{ fontWeight: 'bold' }}>
              Sem repositórios cadastrados
            </Typography>
          </Box>
        )}
      </Box>
    ) : (
      <Error />
    )
  ) : (
    <Loading />
  );
}

export default Perfil;
