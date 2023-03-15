import { AppBar, ContainerProps, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

interface PageProps {
  children?: any;
}

export const Page: React.FC<PageProps & ContainerProps> = ({
  children,
  ...props
}: PageProps & ContainerProps) => {
  return (
    <>
      <AppBar
        position="fixed"
        elevation={1}
        style={{ backgroundColor: "black", padding: "15px" }}
      >
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <Link to="/">
              <img alt="Logo" src={"Vial Logo.svg"} />
            </Link>
          </Grid>
          <Grid item>
            <Grid
              container
              justifyContent="space-evenly"
              alignItems="center"
              spacing={2}
            >
              <Grid item>
                <Typography align="center">Christopher Tam</Typography>
                <Typography align="center">Authenticated</Typography>
              </Grid>
              <Grid item>Login</Grid>
              <Grid item>Sign Up</Grid>
            </Grid>
          </Grid>
        </Grid>
      </AppBar>
      <main
        style={{
          paddingTop: "80px",
          paddingBottom: "80px",
        }}
        {...props}
      >
        {children}
      </main>
    </>
  );
};
