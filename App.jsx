import React, { Component } from 'react';

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

import ChartWrapper from "./ChartWrapper"

const useStyles = makeStyles(theme => ({
    tabsContainer: {
        display: "flex",
        justifyContent: "space-between",
    },
    header: {
        marginBottom: theme.spacing(4),
        padding: theme.spacing(2),
    },
}));

const App = () => {
  const classes = useStyles();

    return (
      <div className="App">
        <Container>
            <Paper className={classes.header}>
                <Typography variant="h5" component="h2">
                    Barchartly
                </Typography>
            </Paper>
            <ChartWrapper />
          </Container>
      </div>
    );
}
export default App;