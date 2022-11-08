import { Card, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import theme from "../../theme";

const InfoItem = ({
  label,
  info = "لا يوجد",
  info2,
  info3,
  info4,
  x4,
  x3,
  x2,
}) => {
  const err = ["", " ", "  ", "   "];

  return (
    <Grid
      item
      xl={x4 ? 12 : x3 ? 9 : x2 ? 6 : 3}
      md={x4 ? 12 : x2 ? 12 : 6}
      xs={12}
      zeroMinWidth
    >
      <Card variant="outlined" sx={{ padding: 2 }}>
        <Stack direction="column">
          <Typography
            noWrap
            variant="subtitle2"
            color={theme.palette.primary.main}
          >
            {label}
          </Typography>
          <Typography noWrap variant="subtitle1">
            {info === null || err.indexOf(info) > -1 ? "لا يوجد" : info}
          </Typography>
          <Typography noWrap variant="subtitle1">
            {info2 && info2}
          </Typography>
          <Typography noWrap variant="subtitle1">
            {info3 && info3}
          </Typography>
          <Typography noWrap variant="subtitle1">
            {info4 && info4}
          </Typography>
        </Stack>
      </Card>
    </Grid>
  );
};

export default InfoItem;
