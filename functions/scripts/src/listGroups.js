//const fs = require("fs");

const main = (createdGroups) => {
    //const rawdata = fs.readFileSync(`groupResponses/${classNumber}.json`);
    const { grupos } = createdGroups 
    
    let auxGroups = []
    
    for (let index in grupos){
        const group = grupos[index]
        let auxGroup = [] 
        
        group.map( student => {
            let auxStudent = {"name": `${student.nome_completo}`, "grauHardSkill": `${student.grauHardSkill.nota}`}
            return auxGroup.push(auxStudent)
        })

        auxGroups.push(auxGroup)
    }

    return auxGroups
}

module.exports = {
    main
}

// const createdGroups = {
//     "grupos": {
//       "grupo_1": [
//         {
//           "nome_completo": "Sean Benoît",
//           "hardskills": {
//             "API": {
//               "nota": 59.07,
//               "diferenca_absoluta_media": 13.878333333333337,
//               "gap": 0
//             },
//             "REST": {
//               "nota": 51.83,
//               "diferenca_absoluta_media": 12.894999999999996,
//               "gap": 0.06355025970058047
//             },
//             "FIREBASE": {
//               "nota": 47.17,
//               "diferenca_absoluta_media": 3.8133333333333397,
//               "gap": 0.39752513534416084
//             }
//           },
//           "softskills": [
//             "Gestão de Tempo",
//             "Paciência",
//             "Resolução de Problemas",
//             "Calmo",
//             "Questionador"
//           ],
//           "grauHardSkill": {
//             "nota": 51.41
//           }
//         },
//         {
//           "nome_completo": "Bertie Thornton",
//           "hardskills": {
//             "API": {
//               "nota": 23.04,
//               "diferenca_absoluta_media": -22.151666666666664,
//               "gap": 1
//             },
//             "REST": {
//               "nota": 27.26,
//               "diferenca_absoluta_media": -11.675,
//               "gap": 0.8142377024136876
//             },
//             "FIREBASE": {
//               "nota": 44.31,
//               "diferenca_absoluta_media": 0.9533333333333402,
//               "gap": 0.5081206496519721
//             }
//           },
//           "softskills": [
//             "Gestão de Tempo",
//             "Colaboração",
//             "Conversação",
//             "Comunicação Eficaz",
//             "Auto-Controle"
//           ],
//           "grauHardSkill": {
//             "nota": 33.24
//           }
//         },
//         {
//           "nome_completo": "Phillip French",
//           "hardskills": {
//             "API": {
//               "nota": 55.6,
//               "diferenca_absoluta_media": 10.408333333333339,
//               "gap": 0.09630863169580901
//             },
//             "REST": {
//               "nota": 53.91,
//               "diferenca_absoluta_media": 14.974999999999994,
//               "gap": 0
//             },
//             "FIREBASE": {
//               "nota": 31.59,
//               "diferenca_absoluta_media": -11.766666666666662,
//               "gap": 1
//             }
//           },
//           "softskills": [
//             "Colaboração",
//             "Questionador",
//             "Paciência",
//             "Comunicação Eficaz",
//             "Produtividade"
//           ],
//           "grauHardSkill": {
//             "nota": 45.32
//           }
//         }
//       ],
//       "grupo_2": [
//         {
//           "nome_completo": "Jorge Weiß",
//           "hardskills": {
//             "API": {
//               "nota": 44.67,
//               "diferenca_absoluta_media": -0.5216666666666612,
//               "gap": 0.39966694421315563
//             },
//             "REST": {
//               "nota": 52.65,
//               "diferenca_absoluta_media": 13.714999999999996,
//               "gap": 0.038496791934005445
//             },
//             "FIREBASE": {
//               "nota": 37.49,
//               "diferenca_absoluta_media": -5.86666666666666,
//               "gap": 0.7718484145398298
//             }
//           },
//           "softskills": [
//             "Colaboração",
//             "Resolução de Problemas",
//             "Auto-Controle",
//             "Conversação",
//             "Questionador"
//           ],
//           "grauHardSkill": {
//             "nota": 44.99
//           }
//         },
//         {
//           "nome_completo": "Zachary Fani",
//           "hardskills": {
//             "API": {
//               "nota": 57.7,
//               "diferenca_absoluta_media": 12.50833333333334,
//               "gap": 0.038023868998057105
//             },
//             "REST": {
//               "nota": 21.18,
//               "diferenca_absoluta_media": -17.755000000000003,
//               "gap": 1
//             },
//             "FIREBASE": {
//               "nota": 42.13,
//               "diferenca_absoluta_media": -1.2266666666666595,
//               "gap": 0.5924207269914926
//             }
//           },
//           "softskills": [
//             "Resolução de Problemas",
//             "Produtividade",
//             "Gestão de Tempo",
//             "Colaboração",
//             "Auto-Controle"
//           ],
//           "grauHardSkill": {
//             "nota": 36.86
//           }
//         },
//         {
//           "nome_completo": "Lida Cheli",
//           "hardskills": {
//             "API": {
//               "nota": 31.07,
//               "diferenca_absoluta_media": -14.121666666666663,
//               "gap": 0.7771301693033583
//             },
//             "REST": {
//               "nota": 26.78,
//               "diferenca_absoluta_media": -12.155000000000001,
//               "gap": 0.8289031469599755
//             },
//             "FIREBASE": {
//               "nota": 57.45,
//               "diferenca_absoluta_media": 14.09333333333334,
//               "gap": 0
//             }
//           },
//           "softskills": [
//             "Produtividade",
//             "Gestão de Tempo",
//             "Comunicação Eficaz",
//             "Questionador",
//             "Calmo"
//           ],
//           "grauHardSkill": {
//             "nota": 39.91
//           }
//         }
//       ]
//     }
//   }

// console.log("main ===>>>", main(createdGroups))