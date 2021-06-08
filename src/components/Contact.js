import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import ButtonArrow from "./ui/ButtonArrow";
import background from "../assets/background.jpg";
import phoneIcon from "../assets/phone.svg";
import emailIcon from "../assets/email.svg";
import airplane from "../assets/send.svg";
import mobileBackground from "../assets/mobileBackground.jpg";

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundImage: `url(${background})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
    height: "60em",
    paddingBottom: "10em",
    [theme.breakpoints.down("md")]: {
      backgroundImage: `url(${mobileBackground})`,
    },
  },
  estimateButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 80,
    width: 205,
    backgroundColor: theme.palette.common.lightPink,
    fontSize: "1.5rem",
    marginRight: "5em",
    marginLeft: "2em",
    [theme.breakpoints.down("md")]: {
      marginLeft: 0,
      marginRight: 0,
    },
    "&:hover": {
      backgroundColor: "black",
      color: "white",
    },
  },
  learnButton: {
    ...theme.learnButton,
    fontSize: "0.9rem",
    height: 45,
    width: 145,
    padding: 5,
    [theme.breakpoints.down("md")]: {
      marginBottom: "2em",
    },
    "&:hover": {
      backgroundColor: "black",
      color: "white",
    },
  },

  message: {
    border: `2px solid ${theme.palette.common.black}`,
    marginTop: "5em",
    borderRadius: 5,
  },

  sendButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 65,
    width: 245,
    fontSize: "1.3rem",
    backgroundColor: theme.palette.common.lightPink,
    "&:hover": {
      color: "#ffffff",
      backgroundColor: theme.palette.common.black,
    },
  },
}));

export default function Contact(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");
  const [emailHelper, setEmailHelper] = useState("");

  const [phone, setPhone] = useState("");
  const [phoneHelper, setPhoneHelper] = useState("");

  const [message, setMessage] = useState("");

  const [open, setOpen] = useState(false);

  const onChange = (event) => {
    let valid;

    switch (event.target.id) {
      case "email":
        setEmail(event.target.value);
        valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
          event.target.value
        );
        if (!valid) {
          setEmailHelper("Invalid email");
        } else {
          setEmailHelper("");
        }
        break;
      case "phone":
        setPhone(event.target.value);
        valid = /^\(?([0-9]{4})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(
          event.target.value
        );
        if (!valid) {
          setPhoneHelper("Invalid phone");
        } else {
          setPhoneHelper("");
        }
        break;
      default:
        break;
    }
  };

  return (
    <Grid container direction="row">
      <Grid
        item
        container
        direction="column"
        justify="center"
        alignItems="center"
        style={{
          marginBottom: matchesMD ? "5em" : 0,
          marginTop: matchesSM ? "1em" : matchesMD ? "5em" : 0,
        }}
        lg={4}
        xl={3}
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography
                align={matchesMD ? "center" : undefined}
                variant="h2"
                style={{ lineHeight: 1 }}
              >
                Contact Us
              </Typography>
              <Typography
                align={matchesMD ? "center" : undefined}
                variant="body1"
                style={{ color: theme.palette.common.black }}
              >
                We're waiting
              </Typography>
            </Grid>
            <Grid item container style={{ marginTop: "2em" }}>
              <Grid item>
                <img
                  src={phoneIcon}
                  alt="phone"
                  style={{ marginRight: "0.5em" }}
                />
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  style={{
                    color: theme.palette.common.black,
                    fontSize: " 1rem",
                  }}
                >
                  <a
                    href="tel:09058817629"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    (0905) 881 7629
                  </a>
                </Typography>
              </Grid>
            </Grid>
            <Grid item container style={{ marginBottom: "2em" }}>
              <Grid item>
                <img
                  src={emailIcon}
                  alt="envelope"
                  style={{ marginRight: "0.5em", verticalAlign: "bottom" }}
                />
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  style={{
                    color: theme.palette.common.black,
                    fontsize: "1rem",
                  }}
                >
                  <a
                    href="mailto:dauda.hammed132@gmail.com"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    dauda.hammed132@gmail.com
                  </a>
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              container
              style={{ maxWidth: "20em" }}
              direction="column"
            >
              <Grid item style={{ marginBottom: "0.5em" }}>
                <TextField
                  label="Name"
                  id="name"
                  fullWidth
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </Grid>
              <Grid item>
                <TextField
                  style={{ marginBottom: "0.5em" }}
                  label="Email"
                  id="email"
                  error={emailHelper.length !== 0}
                  helperText={emailHelper}
                  fullWidth
                  value={email}
                  onChange={onChange}
                />
              </Grid>
              <Grid item>
                <TextField
                  style={{ marginBottom: "0.5em" }}
                  label="Phone"
                  error={phoneHelper.length !== 0}
                  helperText={phoneHelper}
                  fullWidth
                  id="phone"
                  value={phone}
                  onChange={onChange}
                />
              </Grid>
            </Grid>
            <Grid item style={{ maxWidth: "20em" }}>
              <TextField
                fullWidth
                InputProps={{ disableUnderline: true }}
                id="message"
                multiline
                rows={10}
                value={message}
                className={classes.message}
                onChange={(event) => setMessage(event.target.value)}
              />
            </Grid>
            <Grid item container justify="center" style={{ marginTop: "2em" }}>
              <Button
                // disabled={
                //   name.length === 0 ||
                //   message.length === 0 ||
                //   email.length === 0 ||
                //   phone.length === 0 ||
                //   phoneHelper.length !== 0 ||
                //   emailHelper.length !== 0
                // }
                variant="contained"
                className={classes.sendButton}
                onClick={() => setOpen(true)}
              >
                Send message
                <img
                  src={airplane}
                  alt="paper airplane"
                  style={{ marginLeft: "1rem" }}
                />
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Dialog
        open={open}
        fullScreen={matchesXS}
        onClose={() => {
          setOpen(false);
        }}
        style={{ zIndex: 1302 }}
        PaperProps={{
          style: {
            width: "50em",
            paddingTop: matchesXS ? "1em" : "5em",
            paddingBottom: matchesXS ? "1em" : "5em",
            paddingLeft: matchesXS
              ? 0
              : matchesSM
              ? "5em"
              : matchesMD
              ? "8em"
              : "8em",
            paddingRight: matchesXS
              ? 0
              : matchesSM
              ? "5em"
              : matchesMD
              ? "8em"
              : "8em",
          },
        }}
      >
        <DialogContent>
          <Grid item container direction="column" justify="center">
            <Grid item>
              <Typography align="center" variant="h4" gutterBottom>
                Confirm Message
              </Typography>
            </Grid>
            <Grid item style={{ marginBottom: "0.5em" }}>
              <TextField
                label="Name"
                id="name"
                fullWidth
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </Grid>
            <Grid item>
              <TextField
                style={{ marginBottom: "0.5em" }}
                label="Email"
                id="email"
                error={emailHelper.length !== 0}
                helperText={emailHelper}
                fullWidth
                value={email}
                onChange={onChange}
              />
            </Grid>
            <Grid item>
              <TextField
                style={{ marginBottom: "0.5em" }}
                label="Phone"
                error={phoneHelper.length !== 0}
                helperText={phoneHelper}
                fullWidth
                id="phone"
                value={phone}
                onChange={onChange}
              />
            </Grid>

            <Grid item>
              <TextField
                fullWidth
                InputProps={{ disableUnderline: true }}
                id="message"
                multiline
                rows={10}
                value={message}
                className={classes.message}
                onChange={(event) => setMessage(event.target.value)}
              />
            </Grid>
            <Grid
              item
              container
              direction="row"
              style={{ marginTop: "2em" }}
              alignItems="center"
              justify="center"
            >
              <Grid item>
                <Button
                  color="default"
                  className={classes.sendButton}
                  onClick={() => setOpen(false)}
                  style={{ marginBottom: "2rem" }}
                >
                  Cancel
                </Button>
              </Grid>
              <Grid item>
                <Button
                  // disabled={
                  //   name.length === 0 ||
                  //   message.length === 0 ||
                  //   email.length === 0 ||
                  //   phone.length === 0 ||
                  //   phoneHelper.length !== 0 ||
                  //   emailHelper.length !== 0
                  // }
                  variant="contained"
                  className={classes.sendButton}
                  onClick={() => setOpen(true)}
                  style={{
                    marginBottom: "2em",
                    marginLeft: matchesMD ? 0 : "2em",
                  }}
                >
                  Send message
                  <img
                    src={airplane}
                    alt="paper airplane"
                    style={{ marginLeft: "1rem" }}
                  />
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>

      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.background}
        justify={matchesMD ? "center" : undefined}
        lg={8}
        xl={9}
        alignItems="center"
      >
        <Grid
          item
          style={{
            marginLeft: matchesMD ? 0 : "3em",
            textAlign: matchesMD ? "center" : "inherit",
          }}
        >
          <Grid container direction="column">
            <Grid item>
              <Typography align={matchesMD ? "center" : undefined} variant="h2">
                Simple Software
                <br />
                Revolutionary Results.
              </Typography>
              <Typography
                align={matchesMD ? "center" : undefined}
                variant="subtitle2"
                style={{ fontSize: "1.5rem" }}
              >
                Take advantage of 21st century
              </Typography>
              <Grid item>
                <Grid container justify={matchesMD ? "center" : undefined}>
                  <Button
                    variant="outlined"
                    component={Link}
                    to="/revolution"
                    className={classes.learnButton}
                    onClick={() => {
                      props.setValue(2);
                    }}
                  >
                    <span style={{ marginRight: 5 }}>Learn More</span>
                    <ButtonArrow
                      width={10}
                      height={10}
                      fill={theme.palette.common.black}
                    />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Button
            component={Link}
            to="/estimate"
            variant="contained"
            className={classes.estimateButton}
            onClick={() => {
              props.setValue(5);
            }}
          >
            Free Estimate
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
