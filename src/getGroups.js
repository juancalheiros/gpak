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

const GetGroups = () => {

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