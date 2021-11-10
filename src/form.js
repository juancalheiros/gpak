import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {TextField, Button, Divider} from '@material-ui/core';


const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 100,
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
});

const Form = props => {
  const { classes } = props;

  const handleChangeClass = event => {
    const {value} = event.target   
  }

  const handleChangeStudent = event => {
    const {value} = event.target
  }

  const handleChangeGroups = event => {
    const {value} = event.target  
  }

  const handleChangeHardskill1 = event => {
    const {value} = event.target
  }

  const handleChangeHardskill2 = event => {
    const {value} = event.target  
  }

  const handleChangeHardskill3 = event => {
    const {value} = event.target 
  }

  const handleChangeWeightHardskill1 = event => {
    const {value} = event.target
  }

  const handleChangeWeightHardskill2 = event => {
    const {value} = event.target
  }

  const handleChangeWeightHardskill3 = event => {
    const {value} = event.target
  }

  const handleChangeSend = event => {
    const {value} = event.target
  }
  

  return (
    <>
      <div className={classes.container}>
        <TextField
          label="Turma"
          helperText="Numero da turma"
          id="number-classroom"
          className={classes.textField}
          margin="normal"
          type="number"
          variant="outlined"
          onChange={handleChangeClass}
        />
        <TextField
          label="Alunos"
          helperText="Numero da max de alunos"
          id="number-max-turma"
          className={classes.textField}
          margin="normal"
          type="number"
          variant="outlined"
          onChange={handleChangeStudent}
        />

        <TextField
          label="Grupos"
          helperText="Numero de alunos por grupo"
          id="number-groups-for-students"
          className={classes.textField}
          margin="normal"
          type="number"
          variant="outlined"
          onChange={handleChangeGroups}
        />
        
      </div>
      <Divider className={classes.divider} />
      <div>
        <div className={classes.container}>
          <TextField
            label="Hardskill 1"
            id="hardskill_1"
            className={classes.textField}
            margin="normal"
            type="text"
            variant="outlined"
            onChange={handleChangeHardskill1}
          />
          <TextField
            label="Peso"
            helperText="0-100"
            id="number-max-turma"
            className={classes.textField}
            margin="normal"
            type="number"
            variant="outlined"
            onChange={handleChangeWeightHardskill1}
          />
        </div>
        <div className={classes.container}>
          <TextField
            label="Hardskill 2"
            id="hardskill_2"
            className={classes.textField}
            margin="normal"
            type="text"
            variant="outlined"
            onChange={handleChangeHardskill2}
          />
          <TextField
            label="Peso"
            helperText="0-100"
            id="number-max-turma"
            className={classes.textField}
            margin="normal"
            type="number"
            variant="outlined"
            onChange={handleChangeWeightHardskill2}
          />
        </div>
        <div className={classes.container}>
          <TextField
            label="Hardskill 3"
            id="hardskill_3"
            className={classes.textField}
            margin="normal"
            type="text"
            variant="outlined"
            onChange={handleChangeHardskill3}
          />
          <TextField
            label="Peso"
            helperText="0-100"
            id="number-max-turma"
            className={classes.textField}
            margin="normal"
            type="number"
            variant="outlined"
            onChange={handleChangeWeightHardskill3}
          />
        </div>
      </div>
      <Divider className={classes.divider} />
      <div >
        <Button 
          variant="outlined"
          onClick={handleChangeSend}
        >
          Send
        </Button>
      </div>
    </>
  );
};

Form.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Form);