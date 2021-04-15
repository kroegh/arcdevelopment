import React from "react";
import Lottie from "react-lottie";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ButtonArrow from "../components/ui/ButtonArrow";
import Typography from "@material-ui/core/Typography";

import animationData from "../animations/landinganimation/data";
import planeIcon from "../assets/aeroplane.svg";
import trainIcon from "../assets/train.svg";
import boatIcon from "../assets/boat.svg";

const useStyles = makeStyles((theme) => ({
  animation: {
    maxWidth: "50em",
    minWidth: "21em",
    marginTop: "2em",
    marginLeft: "10%",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "40em",
    },
  },
  offerButton: {
    marginLeft: "25px",
    fontWeight: "700",
    color: "white",
    marginRight: 40,
    width: 145,
    height: 40,
  },
  buttonContainer: {
    marginTop: "1em",
  },
  infoButtonHero: {
    borderColor: theme.palette.common.blue,
    color: theme.palette.common.blue,
    borderWidth: 2,
    textTransform: "none",
    height: 40,
    lenght: 145,
  },
  mainContainer: {
    marginTop: "5em",
    [theme.breakpoints.down("md")]: {
      marginTop: "3em",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "2em",
    },
  },
  heroTextContainer: {
    minWidth: "21.5em",
    marginLeft: "1em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
    infoBar: {},
  },
}));

export default function LandingPage() {
  const classes = useStyles();
  const theme = useTheme();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Grid container direction="column" className={classes.mainContainer}>
      <Grid item>
        {/*-----Hero Block-----*/}
        <Grid container justify="flex-end" alignItems="center" direction="row">
          <Grid item xs className={classes.heroTextContainer}>
            <Typography variant="h2" align="center">
              Få 5 uforpligtende <br /> fragttilbud
            </Typography>
            <Grid
              container
              justify="center"
              className={classes.buttonContainer}
            >
              <Grid item>
                <Button
                  variant="contained"
                  className={classes.offerButton}
                  color="secondary"
                >
                  Få Tilbud
                </Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" className={classes.infoButtonHero}>
                  <span style={{ marginRight: 5 }}>Mere info</span>
                  <ButtonArrow
                    width={15}
                    height={15}
                    fill={theme.palette.common.blue}
                  />
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item sm className={classes.animation}>
            <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        {/*-----Services Block-----*/}
        <Grid container direction="row" justify="center">
          <Grid item xs>
            <img alt="aeroplane icon" src={planeIcon}></img>
          </Grid>
          <Grid item xs>
            <Typography variant="h4" align="center">
              wag
            </Typography>
          </Grid>
          <Grid item xs>
            <Typography variant="h4" align="center">
              wag
            </Typography>
          </Grid>
        </Grid>
        <Grid container direction="row" justify="center">
          <Grid item xs>
            <Typography variant="h4" align="center">
              wag
            </Typography>
          </Grid>
          <Grid item xs>
            <Typography variant="h4" align="center">
              wag
            </Typography>
          </Grid>
          <Grid item xs>
            <Typography variant="h4" align="center">
              wag
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
