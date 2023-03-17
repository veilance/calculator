import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Link,
} from "@mui/material";
import { Field, Formik } from "formik";
import React from "react";
import { Page } from "../components/Page";
import * as Yup from "yup";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { config } from "../config";

export const SignInPage: React.FC = () => {
  const navigation = useNavigate();
  const loginUser = ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    return axios.post(`${config.api.baseURL}/user/login`, {
      email,
      password,
    });
  };

  return (
    <Page title="Register" maxWidth="sm">
      <Box
        display="flex"
        height="80vh"
        flexDirection="column"
        justifyContent="center"
      >
        <Container maxWidth="sm">
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={Yup.object().shape({
              email: Yup.string()
                .email("Must be a valid email")
                .max(255)
                .required("Email is required"),
              password: Yup.string()
                .min(8)
                .max(255)
                .required("Password is required"),
            })}
            onSubmit={(variables) => {
              return loginUser(variables).then(({ data }) => {
                if (data && variables.email) {
                  localStorage.setItem("email", variables.email);
                  navigation("/");
                }
              }).catch((err) => {
                console.log({ err })
              });
            }}
          >
            {({ errors, handleSubmit, isSubmitting, touched }) => (
              <form onSubmit={handleSubmit} id="sign-up">
                <Box mb={2}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <Typography variant="h3" align="left">
                        Hello Again!
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography color="textSecondary" variant="body1">
                        Don't have an account?{" "}
                        <Link component={RouterLink} to="/login">
                          Sign Up
                        </Link>
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
                <Field name="email">
                  {({ field }) => (
                    <TextField
                      fullWidth
                      {...field}
                      variant="outlined"
                      label="Email"
                      type="email"
                      required
                      margin="normal"
                      error={Boolean(touched.email && errors.email)}
                      helperText={touched.email && errors.email}
                    />
                  )}
                </Field>
                <Field name="password">
                  {({ field }) => (
                    <TextField
                      fullWidth
                      {...field}
                      type="password"
                      variant="outlined"
                      label="Password"
                      required
                      margin="normal"
                      error={Boolean(touched.password && errors.password)}
                      helperText={touched.password && errors.password}
                    />
                  )}
                </Field>
                <Box my={2}>
                  <Button
                    id="register-button"
                    color="primary"
                    disabled={isSubmitting}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                    style={{
                      backgroundColor: "black",
                    }}
                  >
                    Log In
                  </Button>
                </Box>
              </form>
            )}
          </Formik>
        </Container>
      </Box>
    </Page>
  );
};
