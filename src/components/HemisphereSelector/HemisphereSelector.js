import React, { useContext } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import LocalStorageContext from "../../context/LocalStorageContext";

export const HemisphereSelector = () => {
  const { isNorth, setIsNorth } = useContext(LocalStorageContext);

  const handleChange = (event) => setIsNorth(event.target.value === 'true');

  return (
    <FormControl component="fieldset" style={{ marginTop: "16px" }}>
      <FormLabel component="legend">Hemisphere</FormLabel>
      <RadioGroup row aria-label="hemisphere" name="hemisphere" value={isNorth} onChange={handleChange}>
        <FormControlLabel value={true} control={<Radio color="primary" />} label="Northern" />
        <FormControlLabel value={false} control={<Radio color="primary" />} label="Southern" />
      </RadioGroup>
    </FormControl>
  );
}
