import React, { useState } from "react";
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

    const displayGroups = (numberClass) => {
        // const resp = listGroups(156)
        // console.log("resp===>>", resp)
        return LISTGROUPS.map((group, index) => {
            return (
                <>
                    <h3>  Grupo {index+1} </h3>
                    {
                        group.map(student => {
                            return <p> name: {student.name}, média Hardskill: {student.grauHardSkill} </p>
                        })
                    }
                    <br/>
                </>
            )
        }) 
    }

    const displayStudents = () => {
        
        return LISTGROUPS.map((group, index) => {
            return (
                <>
                    {
                        group.map(student => {
                            return <p> name: {student.name} </p>
                        })
                    }
                </>
            )
        }) 
    }

    const handleClick = () => {
        setDisplay(true)
    }

    //gpask(numberClass, numberMaxStudent, numberStudentToGroups, [hardskill1, hardskill2, hardskill3],[weightHardskill1, weightHardskill2, weightHardskill3])
    
    return (
        <div>
            <h2> Turma {numberClass} </h2>

            <h3> Alunos </h3>
            {   displayStudents()   }
            
            <Button 
                variant="outlined"
                onClick={handleClick}
            >
                Ver grupos
            </Button>

            { display && displayGroups(numberClass)}
        </div>
    )
}


export default GetGroups