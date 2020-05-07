import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import GitHubIcon from '@material-ui/icons/GitHub';
import { Grid, Divider } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(10, 10),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  },
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <div >
      <footer className={classes.footer}>
        <Container maxWidth="xs">
          <Grid container spacing={5}>
            <Grid item>
              <Typography variant="h6">ViaDe En3B1</Typography>
              <Typography variant="subtitle2" color="textSecondary">Made by <Link style={{ color: "#302c58" }} target="_blank" href={"https://www.linkedin.com/in/pablocanalsuarez/"}>Pablo Cañal</Link></Typography>
              <div>
                <Link href="https://www.linkedin.com/in/pablocanalsuarez/">
                  <LinkedInIcon fontSize="default" />
                </Link>
                <Link style={{ marginLeft: '0.5rem' }} target="_blank" href="mailto:uo264903@uniovi.es">
                  <EmailIcon fontSize="default" />
                </Link>
              </div>
            </Grid>
            <Divider orientation="vertical" flexItem />
            <Grid item style={{ marginTop: '1rem' }}>
              <Link target="_blank" href="https://github.com/Arquisoft/viade_en3b1/">
                <GitHubIcon fontSize="large" />
              </Link>
            </Grid>
          </Grid>
        </Container>
      </footer>
    </div>
  );
}