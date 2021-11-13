import React from "react";

const GROUPS = [
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
    
    console.log("numberClass: ", numberClass)
    console.log("numberMaxStudent: ", numberMaxStudent)
    console.log("numberStudentToGroups: ", numberStudentToGroups)
    console.log("hardskill1: ", hardskill1)
    console.log("hardskill2: ", hardskill2)
    console.log("hardskill3: ", hardskill3)
    console.log("weightHardskill1: ", weightHardskill1)
    console.log("weightHardskill2: ", weightHardskill2)
    console.log("weightHardskill3: ", weightHardskill3)

    const handleChange = () => {
        
        return GROUPS.map((group, index) => {
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

    return (
        <div>
            {handleChange()}
        </div>
    )
}


export default GetGroups