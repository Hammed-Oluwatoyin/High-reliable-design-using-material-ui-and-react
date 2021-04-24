import React from 'react';
import Lottie from 'react-lottie';
import Grid from '@material-ui/core/Grid';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ButtonArrow from '../components/ui/ButtonArrow';
import Typography from '@material-ui/core/Typography';
import customSoftwareIcon from '../assets/Custom Software Icon.svg';
import mobileAppsIcon from '../assets/mobileIcon.svg';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import websitesIcon from "../assets/websiteIcon.svg";

import animationData from '../animations/landinganimation/data';

const useStyles = makeStyles((theme) => ({
  animation: {
    maxWidth: '50em',
    minWidth: '21em',
    marginTop: '2em',
    marginLeft: '10%',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '30em',
    },
    [theme.breakpoints.down('xs')]: {
      maxWidth: '22em',
      
    },
  },

  buttonContainer: {
    marginTop: '1em',
  },

  estimateButton: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.lightPink,
    borderRadius: 50,
    height: 45,
    width: 145,
    marginRight: 40,
    '&:hover': {
      backgroundColor: 'black',
      color: 'pink',
    },
  },
  learnButtonHero: {
    ...theme.learnButton,
    fontSize: '0.9rem',
    height: 45,
    width: 145,
    '&:hover': {
      backgroundColor: 'black',
      color: 'white',
    },
  },
  learnButton: {
    ...theme.learnButton,
    fontSize: '0.9rem',
    height: 45,
    width: 145,
    padding: 5,
    [theme.breakpoints.down('sm')]: {
      marginBottom: '2em',
    },
    '&:hover': {
      backgroundColor: 'black',
      color: 'white',
    },
  },
  mainContainer: {
    marginTop: '5em',
    [theme.breakpoints.down('md')]: {
      marginTop: '3em',
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: '2em',
    },
  },

  heroTextContainer: {
    minWidth: ' 21.5em',
    marginLeft: '1em',
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0,
    },
  },
  specialText: {
    fontFamily: 'pacifico',
    color: theme.palette.common.lightPink,
  },
  subtitle: {
    marginBottom: '1em',
  },

  icon: {
    marginLeft: '2em',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
    },
  },

  serviceContainer: {
    marginTop: '12em',
    [theme.breakpoints.down('sm')]: {
      padding: 25,
    },
  },
}));

export default function LandingPage() {
  const theme = useTheme();
  const classes = useStyles();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    
      <Grid container direction="column" className={classes.mainContainer}>
        <Grid item>
          {/* {-----Hero Block------} */}
          <Grid
            container
            justify="flex-end"
            alignItems="center"
            direction="row"
          >
            <Grid sm item className={classes.heroTextContainer}>
              <Typography variant="h2" align="center">
                Bringing High Fidelity Technology
                <br /> to the West Africa
              </Typography>
              <Grid
                container
                className={classes.buttonContainer}
                justify="center"
              >
                <Grid item>
                  <Button
                    className={classes.estimateButton}
                    variant="contained"
                  >
                    Free Estimate
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    className={classes.learnButtonHero}
                    variant="outlined"
                  >
                    <span style={{ marginRight: 10 }}>Learn More</span>
                    <ButtonArrow
                      width={15}
                      height={15}
                      fill={theme.palette.common.black}
                    />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid sm item className={classes.animation}>
              <Lottie options={defaultOptions} height={'100%'} width={'100%'} />
            </Grid>
          </Grid>
        </Grid> 
 {/* {-----Custom Software Block Start} */}
        <Grid  item>
        {" "}
         
          <Grid
            container
            direction="row"
            justify={matchesSM ? 'center' : undefined}
            className={classes.serviceContainer}
          >
            <Grid
              item
              style={{
                marginLeft: matchesSM ? 0 : '5em',
                textAlign: matchesSM ? 'center' : undefined,
              }}
            >
              <Typography variant="h4">Custom Software Development</Typography>
              <Typography variant="subtitle1" className={classes.subtitle}>
                Save Energy. Save Time, SaveMoney.
              </Typography>
              <Typography variant="subtitle1">
                Complete digital solutions, from investigation to{' '}
                <span className={classes.specialText}>celebration</span>
              </Typography>
              <Button variant="outlined" className={classes.learnButton}>
                <span style={{ marginRight: 10 }}>Learn More</span>
                <ButtonArrow
                  width={15}
                  height={15}
                  fill={theme.palette.common.black}
                />
              </Button>
            </Grid>
            <Grid  item>
              <img
                alt="custom software icon"
                src={customSoftwareIcon}
                className={classes.icon}
              />
            </Grid>
          </Grid>
        </Grid>
        {/* {-----Custom Software Block end} */}

         {/* {-----IOS/Android App  Block Start} */}
            <Grid  item>
        {" "}
         
          <Grid
            container
            direction="row"
            justify={matchesSM ? 'center' : "flex-end"}
            className={classes.serviceContainer}
          >
            <Grid
              item
              style={{
                
                textAlign: matchesSM ? 'center' : undefined,
              }}
            >
              <Typography variant="h4">IOS/Android App Development</Typography>
              <Typography variant="subtitle1" className={classes.subtitle}>
                Extend Functionality. Extend Access. Increase Engagement.
              </Typography>
              <Typography variant="subtitle1">
                Integrate your web experience or create a standalone app
                {matchesSM ? null : <br/>}
              </Typography>
              <Button variant="outlined" className={classes.learnButton}>
                <span style={{ marginRight: 10 }}>Learn More</span>
                <ButtonArrow
                  width={15}
                  height={15}
                  fill={theme.palette.common.black}
                />
              </Button>
            </Grid>
            <Grid  item style={{marginRight: matchesSM ? 0 : '5em',}}>
              <img
                alt="mobile phone icon"
                src={mobileAppsIcon}
                className={classes.icon}
              />
            </Grid>
            
          </Grid>
        </Grid>
         {/* {-----IOS/ANDROID Block End} */}
         {/* {-----Website Block Start} */}
        <Grid  item>
        {" "}
         
          <Grid
            container
            direction="row"
            justify={matchesSM ? 'center' : undefined}
            className={classes.serviceContainer}
          >
            <Grid
              item
              style={{
                marginLeft: matchesSM ? 0 : '5em',
                textAlign: matchesSM ? 'center' : undefined,
              }}
            >
              <Typography variant="h4">Website Development</Typography>
              <Typography variant="subtitle1" className={classes.subtitle}>
                Reach More Discover More. Sell More.
              </Typography>
              <Typography variant="subtitle1">
                Optimized for Search Engines, built for speed
              </Typography>
              <Button variant="outlined" className={classes.learnButton}>
                <span style={{ marginRight: 10 }}>Learn More</span>
                <ButtonArrow
                  width={15}
                  height={15}
                  fill={theme.palette.common.black}
                />
              </Button>
            </Grid>
            <Grid  item>
              <img
                alt="website icon"
                src={websitesIcon}
                className={classes.icon}
              />
            </Grid>
          </Grid>
        </Grid>
        {/* {-----Website Block end} */}
      </Grid>
    
  );
}