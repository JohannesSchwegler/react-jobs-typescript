import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Search from "./Search"

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(3)
  }
}));



interface Props {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  search: [string, (a: string) => void]

}


const Sidebar: React.FC<Props> = function ({ handleChange, value, search }) {
  const classes = useStyles();


  return (
    <nav className="jp-sidebar">
      <h1>Experience</h1>
      <FormControl component="fieldset" className={classes.formControl}>
        <RadioGroup
          aria-label="Filter"
          name="gender1"
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel value="Junior" control={<Radio />} label="Junior" />

          <FormControlLabel value="Senior" control={<Radio />} label="Senior" />
        </RadioGroup>
      </FormControl>
      <h1>Location</h1>
      <FormControl component="fieldset" className={classes.formControl}>
        <RadioGroup
          aria-label="Filter"
          name="gender1"
          value={value}
          onChange={handleChange}
        >

          <FormControlLabel value="All" control={<Radio />} label="All" />

          <FormControlLabel
            value="International"
            control={<Radio />}
            label="International"
          />
          <FormControlLabel value="Remote" control={<Radio />} label="Remote" />
        </RadioGroup>
      </FormControl>
      <Search search={search} />
    </nav>
  );
}



export default Sidebar