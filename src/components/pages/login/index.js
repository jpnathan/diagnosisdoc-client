import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { TextField, Button, Grid, Container } from "@material-ui/core";
import AuthService from "../../../services/auth.service";
import regeneratorRuntime from "regenerator-runtime";

export default function LoginPage(props) {
  const history = useHistory();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) =>
    AuthService.login(data).then(({ data }) => {
      AuthService.saveTokenInLocalStorage(data.result);
      reset();
      history.push("/cases");
    });

  return (
    <Container maxWidth="xs" style={{ marginTop: "10vh" }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  {...register("email")}
                  label="Email"
                  name="email"
                  size="small"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  {...register("password")}
                  label="Password"
                  name="password"
                  size="small"
                  type="password"
                  variant="outlined"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Button
              color="secondary"
              fullWidth
              type="submit"
              variant="contained"
            >
              Log in
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}
