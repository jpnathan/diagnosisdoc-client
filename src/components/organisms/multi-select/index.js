import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import ConditionsService from "../../../services/conditions.service";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    width: "100%",
    height: "20vh",
  },
  chips: {
    display: "flex",
    flexWrap: "wrap",
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
}));

export default function MultipleSelect() {
  const classes = useStyles();
  const [personName, setPersonName] = React.useState([]);
  const [conditions, setConditions] = React.useState([]);

  React.useEffect(() => {
    ConditionsService.getAll().then(({ data }) => {
      setConditions(data.result);
    });
  }, []);

  const handleChangeMultiple = (event) => {
    const { options } = event.target;
    const value = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    setPersonName(value);
  };

  return (
    <div>
      <FormControl className={classes.formControl} style={{ width: "100%" }}>
        <InputLabel shrink htmlFor="select-multiple-native">
          Conditions
        </InputLabel>
        <Select
          classes={{
            root: classes.formControl,
            nativeInput: classes.formControl,
          }}
          multiple
          native
          autoWidth
          variant="standard"
          value={personName}
          onChange={handleChangeMultiple}
          inputProps={{
            id: "select-multiple-native",
          }}
        >
          {conditions.map((condition) => (
            <option key={condition.id} id={condition.id} value={condition.name}>
              {condition.name}
            </option>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
