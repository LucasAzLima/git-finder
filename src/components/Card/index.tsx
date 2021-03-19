import React from 'react';
import { Box } from '@material-ui/core';
import { Book, Language, Stars } from '@material-ui/icons';

import useStyles from './styles';

interface Repositorie {
  repositorie: userRepoRequest;
  key: number;
}

interface userRepoRequest {
  html_url?: string;
  name?: string;
  language?: string;
  homepage?: string;
  stargazers_count: number;
}

const Card: React.FC<Repositorie> = ({ repositorie, key = '' }) => {
  const classes = useStyles();
  return (
    <Box key={key} className={classes.box}>
      <Box className={classes.textBox}>
        <Book style={{ marginRight: 10 }} />
        <p title={repositorie.name}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={repositorie.html_url}
          >
            {repositorie.name}
          </a>
        </p>
      </Box>
      <Box className={classes.textBox}>
        <Language style={{ marginRight: 10 }} />
        <p title={repositorie.language}>
          {repositorie.language === null ? '-' : repositorie.language}
        </p>
      </Box>

      <Box className={classes.textBox}>
        <Stars style={{ marginRight: 10 }} />
        <p>{repositorie.stargazers_count} Stars</p>
      </Box>
    </Box>
  );
};

export default Card;
