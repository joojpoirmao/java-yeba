// console.log(imc(peso, altura))
 



let pacientes= document.querySelectorAll(".paciente")
    for(var i = 0; i < paciente.lenght; i++){
        let paciente = paciente[i];
    }
let Ppeso = paciente.querySelector(".info-peso")
var peso = Ppeso.textContent;

let Paltura = paciente.querySelector(".info-altura")
var altura = paciente.textContent;
 
let peso = Ppeso.textContent
let altura = Paltura.textContent

var Iimc = paciente.querySelector(".info-imc") 

Iimc.textContent = imc(peso, altura)


if(peso >= 1000){
     Iimc.textContent = "para de ser falso" 
} 


function imc(a, b){
    return a / (b * b);
}

//function cu(a, b, c){
//     let a = document.querySelector(".tabela-pacientes")
//     let b = Ppaciente.querySelector(".info-peso")
//     let c = Ppaciente.querySelector(".info-altura")
// }

