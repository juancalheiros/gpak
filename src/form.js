import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {TextField, Button} from '@material-ui/core';


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
  const { 
    classes, 
    handleChangeEnableForm,
    handleNumberClass,
    handleNumberMaxStudent,
    handleNumberStudentToGroups,
    handleHardskill1,
    handleHardskill2,
    handleHardskill3,
    handleWeightHardskill1,
    handleWeightHardskill2,
    handleWeightHardskill3,
  } = props;

  const handleChangeClass = event => {
    const {value} = event.target 
    handleNumberClass(value)  
  }

  const handleChangeStudent = event => {
    const {value} = event.target
    handleNumberMaxStudent(value)
  }

  const handleChangeGroups = event => {
    const {value} = event.target  
    handleNumberStudentToGroups(value)
  }

  const handleChangeHardskill1 = event => {
    const {value} = event.target
    handleHardskill1(value)
  }

  const handleChangeHardskill2 = event => {
    const {value} = event.target 
    handleHardskill2(value) 
  }

  const handleChangeHardskill3 = event => {
    const {value} = event.target 
    handleHardskill3(value)
  }

  const handleChangeWeightHardskill1 = event => {
    const {value} = event.target
    handleWeightHardskill1(value)
  }

  const handleChangeWeightHardskill2 = event => {
    const {value} = event.target
    handleWeightHardskill2(value)
  }

  const handleChangeWeightHardskill3 = event => {
    const {value} = event.target
    handleWeightHardskill3(value)
  }

  const handleClickLookGroups = () => {
    handleChangeEnableForm(false)
  }
  

  return (
    <>
      <div className={classes.container}>
        <TextField
          label="Turma"
          helperText="Numero da turma."
          id="number-classroom"
          placeholder="151"
          className={classes.textField}
          margin="normal"
          type="number"
          variant="outlined"
          onChange={handleChangeClass}
        />
        <TextField
          label="Alunos"
          helperText="Numero da max de alunos."
          id="number-max-turma"
          placeholder="30"
          className={classes.textField}
          margin="normal"
          type="number"
          variant="outlined"
          onChange={handleChangeStudent}
        />

        <TextField
          label="Grupos"
          helperText="Numero de alunos por grupo."
          id="number-groups-for-students"
          placeholder="5"
          className={classes.textField}
          margin="normal"
          type="number"
          variant="outlined"
          onChange={handleChangeGroups}
        />
        
      </div>
      <br/>
      <div>
        <div className={classes.container}>
          <TextField
            label="Hardskill 1"
            id="hardskill_1"
            placeholder = "Golang"
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
            placeholder="30"
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
            placeholder = "Python"
            className={classes.textField}
            margin="normal"
            type="text"
            variant="outlined"
            onChange={handleChangeHardskill2}
          />
          <TextField
            label="Peso"
            helperText="0-100"
            placeholder="40"
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
            placeholder="Node"
           
            className={classes.textField}
            margin="normal"
            type="text"
            variant="outlined"
            onChange={handleChangeHardskill3}
          />
          <TextField
            label="Peso"
            placeholder="30"
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
      <br/>
      <div >
        <Button 
          variant="outlined"
          onClick={handleClickLookGroups}
        >
          Gerar turma e grupos
        </Button>
      </div>
    </>
  );
};

Form.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Form);