import React,{ useState } from "react";

import Form from './form'
import Login from "./login/login";
import GetGroups from "./getGroups";



const App = () => {

  const [enableForm, setEnableForm] = useState(true)
  const [numberClass, setNumberClass] = useState(151)
  const [numberMaxStudent, setNumberMaxStudent] = useState(30)
  const [numberStudentToGroups, setNumberStudentToGroups] = useState(5)
  const [hardskill1, setHardskill1] = useState("Golang")
  const [hardskill2, setHardskill2] = useState("Python")
  const [hardskill3, setHardskill3] = useState("Node")
  const [weightHardskill1, setWeightHardskill1] = useState(30)
  const [weightHardskill2, setWeightHardskill2] = useState(40)
  const [weightHardskill3, setWeightHardskill3] = useState(30)
  const [logged, setLogged] = useState(false)

  
  const handleChangeEnableForm = value => {
    setEnableForm(value)
  }
  const handleNumberClass = value => {
    setNumberClass(value)
  }
  const handleNumberMaxStudent = value => {
    setNumberMaxStudent(value)
  }
  const handleNumberStudentToGroups = value => {
    setNumberStudentToGroups(value)
  }
  const handleHardskill1 = value => {
    setHardskill1(value)
  }
  const handleHardskill2 = value => {
    setHardskill2(value)
  }
  const handleHardskill3 = value => {
    setHardskill3(value)
  }
  const handleWeightHardskill1 = value => {
    setWeightHardskill1(value)
  }
  const handleWeightHardskill2 = value => {
    setWeightHardskill2(value)
  }
  const handleWeightHardskill3 = value => {
    setWeightHardskill3(value)
  }

  const handleLogin = value => {
    setLogged(value)
  }

  return (
    <>
      {!logged && <Login handleLogin={handleLogin}/>}
      
      {logged && enableForm && 
        <Form 
          handleChangeEnableForm={handleChangeEnableForm}
          handleNumberClass={handleNumberClass}
          handleNumberMaxStudent={handleNumberMaxStudent}
          handleNumberStudentToGroups={handleNumberStudentToGroups}
          handleHardskill1={handleHardskill1}
          handleHardskill2={handleHardskill2}
          handleHardskill3={handleHardskill3}
          handleWeightHardskill1={handleWeightHardskill1}
          handleWeightHardskill2={handleWeightHardskill2}
          handleWeightHardskill3={handleWeightHardskill3}
        />
      }
      {logged && !enableForm && 
        <GetGroups 
          numberClass={numberClass}
          numberMaxStudent={numberMaxStudent}
          numberStudentToGroups={numberStudentToGroups}
          hardskill1={hardskill1}
          hardskill2={hardskill2}
          hardskill3={hardskill3}
          weightHardskill1={weightHardskill1}
          weightHardskill2={weightHardskill2}
          weightHardskill3={weightHardskill3}
        />
      }
    </>
  );
}

export default App;
