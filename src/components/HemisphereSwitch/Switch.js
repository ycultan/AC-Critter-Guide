import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { blue, red } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

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
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => setChecked(event.target.checked);

  return (
    <FormGroup>
      <Typography component="div">
        <Grid component="label" container alignItems="center" spacing={1}>
          <Grid item>Southern</Grid>
          <Grid item>
            <FormControlLabel
              control={<CustomSwitch checked={checked} onChange={handleChange} name="checkedA" />}
              label="Northern"
            />
          </Grid>
        </Grid>
      </Typography>
    </FormGroup>
  );
};
