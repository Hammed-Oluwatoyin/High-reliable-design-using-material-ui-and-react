import React from 'react';
import Lottie from 'react-lottie';
import { Link } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Hidden from '@material-ui/core/Hidden';
import integrationAnimation from '../animations/integrationAnimation/data';

import backArrow from '../assets/backArrow.svg';
import forwardArrow from '../assets/forwardArrow.svg';
import swiss from '../assets/swissKnife.svg';
import access from '../assets/extendAccess.svg';
import engagement from '../assets/increaseEngagement.svg';

const useStyles = makeStyles((theme) => ({
  heading: {
    maxWidth: '40em',
  },
  arrowContainer: {
    marginTop: '0.5em',
  },
  rowContainer: {
    paddingLeft: '5em',
    paddingRight: '5em',

    [theme.breakpoints.down('sm')]: {
      paddingLeft: '1.5em',
      paddingRight: '1.5em',
    },
  },
}));

export default function MobileApps(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

  const integrationOptions = {
    loop: true,
    autoplay: true,
    animationData: integrationAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Grid container direction="column">
      {/* Custom Software Block start*/}

      <Grid
        item
        container
        direction="row"
        justify={matchesMD ? 'center' : undefined}
        className={classes.rowContainer}
        style={{ marginTop: matchesXS ? '1em' : '2em' }}
      >
        <Hidden mdDown>
          <Grid
            item
            className={classes.arrowContainer}
            style={{ marginRight: '1em', marginLeft: '-3.5em' }}
          >
            <IconButton
              style={{ backgroundColor: 'transparent' }}
              component={Link}
              to="/customsoftware"
              onClick={() => props.setSelectedIndex(1)}
            >
              <img
                src={backArrow}
                alt="Back to Custom Software Development Page"
              />
            </IconButton>
          </Grid>
        </Hidden>

        <Grid item container direction="column" className={classes.heading}>
          <Grid item>
            <Typography align={matchesMD ? 'center' : undefined} variant="h2">
              iOS/Android App Development
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              align={matchesMD ? 'center' : undefined}
              paragraph
            >
              Mobile apps allow you to take your tools on the go
            </Typography>
            <Typography
              align={matchesMD ? 'center' : undefined}
              variant="body1"
              paragraph
            >
              Whether you want an app for your customers, employees, or
              yourself, we can build cross-platform native solutions for any
              part of your business process. this opens you up to a whole new
              world of possibilties by taking advantage of phone features like
              the camera, GPS, push notifications, and more.
            </Typography>
            <Typography
              variant="body1"
              align={matchesMD ? 'center' : undefined}
              paragraph
            >
              Convenience , Connection
            </Typography>
            <Typography
              align={matchesMD ? 'center' : undefined}
              variant="body1"
              paragraph
            >
              We create exactly what you want, exactly how you want it
            </Typography>
          </Grid>
        </Grid>
        <Hidden mdDown>
          <Grid item>
            <IconButton
              style={{ backgroundColor: 'transparent' }}
              component={Link}
              to="/websites"
              onClick={() => props.setSelectedIndex(3)}
            >
              <img
                src={forwardArrow}
                alt="Forward to Website Development Page"
              />
            </IconButton>
          </Grid>
        </Hidden>
      </Grid>
      {/* Custom Software Block End*/}

      {/* Integration Animation, Silmutaneous platform  support Block Start*/}
      <Grid
        item
        container
        direction={matchesSM ? 'column' : 'row'}
        className={classes.rowContainer}
        style={{ marginTop: '15em', marginBottom: '15em' }}
      >
        <Grid item container direction="column" md>
          <Grid item>
            <Typography
              variant="h4"
              gutterBottom
              align={matchesSM ? 'center' : undefined}
            >
              Integration
            </Typography>
          </Grid>
          <Grid>
            <Typography
              variant="body1"
              align={matchesSM ? 'center' : undefined}
              paragraph
            >
              Our technology enables an innate interconnection between web and
              mobile applications, putting everything you need right in one
              convenient place
            </Typography>

            <Typography
              variant="body1"
              align={matchesSM ? 'center' : undefined}
              paragraph
            >
              This allows you to extend your reach, reinvent interactions, and
              develop a stronger relationship with your users than ever before
            </Typography>
          </Grid>
        </Grid>
        <Grid item md style={{ marginBottom: '3em' }}>
          <Lottie options={integrationOptions} style={{ maxWidth: '20em' }} />
        </Grid>

        <Grid item container direction="column" md>
          <Grid item>
            <Typography
              align={matchesSM ? 'center' : 'right'}
              variant="h4"
              gutterBottom
            >
              Simultaneous Platform Support
            </Typography>
          </Grid>
          <Grid>
            <Typography
              align={matchesSM ? 'center' : 'right'}
              variant="body1"
              paragraph
            >
              Our cutting-edge development process allows us to create apps for
              iPhone, Android, and tablets- all at the same time
            </Typography>

            <Typography
              align={matchesSM ? 'center' : 'right'}
              variant="body1"
              paragraph
            >
              This significantly reduces cost and services and creates a more
              unified brand experence across all devices.
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      {/* Integration Animation, Silmutaneous platform  support Block End*/}
      {/* Swiss, Access, Management  support Block Start*/}
      <Grid
        item
        container
        direction={matchesMD ? 'column' : 'row'}
        className={classes.rowContainer}
        style={{ marginBottom: '15em' }}
      >
        <Grid item container direction="column" alignItems="center" md>
          <Grid item>
            <Typography align="center" variant="h4" gutterBottom>
              Extend Functionality
            </Typography>
          </Grid>
          <Grid item>
            <img src={swiss} alt="swiss army knife" />
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="column"
          alignItems="center"
          style={{
            marginTop: matchesMD ? '10em' : 0,
            marginBottom: matchesMD ? '10em' : 0,
          }}
          md
        >
          <Grid item>
            <Typography align="center" variant="h4" gutterBottom>
              Extend Access
            </Typography>
          </Grid>
          <Grid item>
            <img
              src={access}
              alt="tear-on-off sign"
              style={{ maxWidth: matchesSM ? '20em' : '28em' }}
            />
          </Grid>
        </Grid>
        <Grid item container direction="column" alignItems="center" md>
          <Grid item>
            <Typography align="center" variant="h4" gutterBottom>
              Increase Engagement
            </Typography>
          </Grid>
          <Grid item>
            <img src={engagement} alt="app with notification" />
          </Grid>
        </Grid>
      </Grid>

      {/* Swiss, Access, Management  support Block End*/}
    </Grid>
  );
}
