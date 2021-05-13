"use strict";

import React from "react";
import {
  Paper,
  Container,
  Grid,
  makeStyles,
  Typography,
  Button,
} from "@material-ui/core";
import Header from "../../organisms/header";
import MultipleSelect from "../../organisms/multi-select";
import CasesService from "../../../services/cases.service";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: "30vh",
    width: "90vw",
    marginTop: "2vh",
    backgroundColor: "#00000014",
  },
  control: {
    padding: theme.spacing(2),
  },
  case: {
    padding: theme.spacing(10),
  },
}));

export default function Cases() {
  const classes = useStyles();
  const [cases, setCases] = React.useState([]);
  const [actualCase, setActualCase] = React.useState({ case: "", id: 0 });
  const [index, setIndex] = React.useState(1);

  React.useEffect(() => {
    CasesService.getAll().then(({ data }) => {
      setCases(data.result);
      setActualCase(data.result[index]);
      console.log(data.result);
    });
  }, []);

  return (
    <div>
      <Header />
      <Container>
        <Grid container className={classes.root} spacing={2}>
          <Grid item xs={12}>
            <Grid container justify="center">
              <Grid item>
                <Paper className={classes.paper}>
                  <Typography
                    className={classes.case}
                    variant="h6"
                    align="justify"
                  >
                    {actualCase.case}
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid item xs={12} style={{ marginTop: "5vh" }}>
              <MultipleSelect />
            </Grid>
          </Grid>
          <Grid item xs={12} style={{ marginTop: "5vh" }}>
            <Button type="button" color="secondary" variant="contained">
              Next Case
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
