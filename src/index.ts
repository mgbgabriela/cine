/*Cine
• Diseñar un algoritmo que recorra las
butacas de una sala de cine y determine
cuántas butacas desocupadas hay
• Suponga que para modelar este
problema, se utiliza un arreglo con
valores lógicos
• La presencia de un valor verdadero (true) en
el arreglo indica que la butaca está ocupada
• La presencia de un valor falso (false) en el
arreglo indica que la butaca está desocupada*/

let totalButacas: number = Number(prompt("Ingrese cantidad de butacas"));
let butacas: boolean[] = new Array(totalButacas);
let cantButacasDesocupadas: number = 0;

for (let indice: number = 0; indice < totalButacas; indice++) {
  butacas[indice] = Boolean(
    prompt(" Indique si la butaca  esta ocupada: T para si, F para no")
  );

  if (butacas[indice] === false) {
    cantButacasDesocupadas++;
  }
}
console.log("La cantidad de butacas desocupadas son " + cantButacasDesocupadas);

/* EJEMPLO DADO POR LA PROFESORA

let cine : boolean[] = [false, false,true,true,false, false, false];
let vacias : number = 0;


let calcularButacasVacias = (arreglo: boolean[]): number => {

let indice:number;

       for (indice = 0; indice < 7; indice++) {

  if (arreglo[indice] === false) { 
     vacias++;

  
                     }
  
                    }    

return vacias;
}

console.log (cine)
console.log("La cantidad de butacas vacias es " + calcularButacasVacias(cine)) */
