const Chance = require('chance');
const { configClassRoom } = require('./configClass.js');


const main = (classNumber, qntdStudents, hardskill, hardSkillWeight) => {
  const buildedClassRoom = configClassRoom(classNumber, qntdStudents, hardskill, hardSkillWeight)
  const { turma, hardskills_atividade } = buildedClassRoom;

  const chance = new Chance(turma);
  require('./addAnalyzerInClassroom.js')(chance)

  const { alunos, analise_hardskills_turma } = chance.classroom(buildedClassRoom);
  
  return JSON.stringify({ alunos, analise: analise_hardskills_turma, hardskills_atividade }, null, 2)
}

module.exports = {
  main,
}


// Valores de exemplo para teste 
// const classNumber = 151
// const qntdStudents = 6
// const hardskill = ["API", "REST", "FIREBASE"] 
// const hardSkillWeight = [20,40,40]

// console.log( "===>>>>", main(classNumber, qntdStudents, hardskill, hardSkillWeight))

