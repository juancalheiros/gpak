const createGroup = require("./createGroup").main
const createClassRoom = require("./createClassRoom").main
const listGroups = require("./listGroups").main

const main = (
    classNumber, 
    qntdStudents,
    hardskill,
    hardSkillWeight,
    numberMembersInGroup
    ) => {
        
        const classRoom = JSON.parse(createClassRoom(classNumber, qntdStudents, hardskill, hardSkillWeight))       
        
        const createdGroups = JSON.parse(createGroup(classRoom, numberMembersInGroup))
        
        return listGroups(createdGroups)
    }


module.exports = {
    main,
}

//Valores de exemplo para teste 
// const classNumber = 150
// const qntdStudents = 9
// const numberMembersInGroup = 3
// const hardskill = ["node", "golang", "ruby"] 
// const hardSkillWeight = [20,40,40]


// console.log("====>>> gpask", main(classNumber, qntdStudents, hardskill, hardSkillWeight, numberMembersInGroup))