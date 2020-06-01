import React, { useContext } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { blue, red } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import LocalStorageContext from "../../context/LocalStorageContext";

const CustomSwitch = withStyles({
  switchBase: {
    color: red[500],
    '&$checked': {
      color: blue[500],
    },
    '&$checked + $track': {
      backgroundColor: blue[500],
    },
  },
  checked: {},
  track: {
    backgroundColor: red[500],
  },
})(Switch);

export const HemisphereSwitch = () => {
  const { isNorth, setIsNorth } = useContext(LocalStorageContext);

  const handleChange = (event) => setIsNorth(event.target.checked);

  return (
    <FormGroup>
      <Typography component="div">
        <Grid component="label" container alignItems="center" spacing={1}>
          <Grid item>Southern Hemisphere</Grid>
          <Grid item>
            <FormControlLabel
              control={<CustomSwitch checked={isNorth} onChange={handleChange} name="Hemisphere Switch" />}
              label="Northern Hemisphere"
            />
          </Grid>
        </Grid>
      </Typography>
    </FormGroup>
  );
};
