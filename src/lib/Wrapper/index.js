import { Grid } from "@mui/material";

const Wrapper = ({ children }) => {
  return (
    <Grid container spacing={2}>
      {children}
    </Grid>
  );
};

export default Wrapper;
