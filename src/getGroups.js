import React, { useState, useEffect } from "react";
import { Button } from '@material-ui/core';


const GetGroups = props => {
    const { 
        numberClass, 
        numberMaxStudent,
        numberStudentToGroups,
        hardskill1,
        hardskill2,
        hardskill3,
        weightHardskill1,
        weightHardskill2,
        weightHardskill3,
    } = props

    const [display, setDisplay] = useState(false)
    const [response, setResponse] = useState(false)

    useEffect(() => {
        const handleFetch = async () => {
            const headers = new Headers({"Content-Type": "application/json"})
            const cloudFunctions = "http://localhost:5001/projeto-gpask/us-central1/gpaskMethodology"
            const query = {
                headers,
                method: 'POST',
                body:JSON.stringify({
                    numberClass, 
                    numberMaxStudent, 
                    numberStudentToGroups,
                    hardskill: [hardskill1, hardskill2,hardskill3],
                    hardSkillWeight: [weightHardskill1, weightHardskill2, weightHardskill3],   
                })
            }

            const resp = await fetch(cloudFunctions, query)
            
            setResponse(await resp.json())
        }

        handleFetch()

    }, [])

    const displayGroups = () => {
        if (response){
            return response.map((group, index) => {
                return (
                    <>
                        <h3>  Grupo {index+1} </h3>
                        {
                            group.map(student => {
                                return <p> nome: {student.name}, média Hardskill: {student.grauHardSkill} </p>
                            })
                        }
                        <br/>
                    </>
                )
            })
        } 

        return
    }

    const displayStudents = () => {

        if (response){
            return response.map( group => {
                return (
                    <>
                        {
                            group.map(student => {
                                return <p> nome: {student.name} </p>
                            })
                        }
                    </>
                )
            }) 
        }
        
        return
    }

    const handleClick = () => {
        setDisplay(true)
    }


    return (
        <div>
            <h2> Turma {numberClass} </h2>

            <h3> Alunos </h3>
            { displayStudents() }

            <Button 
                variant="outlined"
                onClick={handleClick}
            >
                Ver grupos
            </Button>

            { display &&  displayGroups() }
        </div>
    )
}


export default GetGroups