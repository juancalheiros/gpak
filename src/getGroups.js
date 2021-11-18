import React, { useState, useEffect } from "react";
import { Button } from '@material-ui/core';


const LISTGROUPS = [
    [
        { name: 'Clarence Leach', grauHardSkill: '49.94' },
        { name: 'James Borselli', grauHardSkill: '28.39' },
        { name: "Bess O'connor", grauHardSkill: '48' }
    ],
    [
        { name: 'Georgia Meijer', grauHardSkill: '45.93' },
        { name: 'Florence Norris', grauHardSkill: '31.37' },
        { name: 'Tommy Hirano', grauHardSkill: '42.32' }
    ],
    [
        { name: 'Amanda Watts', grauHardSkill: '42.09' },
        { name: 'Leila Peruzzi', grauHardSkill: '35.74' },
        { name: 'Randy Clark', grauHardSkill: '37.44' }
    ]
] 

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
    const [response, setResponse] = useState(LISTGROUPS)


    useEffect(() => {
        const handleFetch = async () => {
            const headers = new Headers({"content-type":"application/json"})
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

    const displayGroups = numberClass => {

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

    const displayStudents = () => {
        
        return response.map((group, index) => {
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

            { display &&  displayGroups(numberClass) }
        </div>
    )
}


export default GetGroups