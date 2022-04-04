// for(let i = 1; i < 30; i++)
// {
//     console.log(i);
// }

// let dineroEnCaja = Number(prompt("Ingrese el monto de dinero"));
// let proyectoAprobados = 0;

// while(dineroEnCaja > 0)
// {
//     alert("Dinero disponible" + dineroCaja);
//     let presupuestoProyecto = Number(prompt("Ingrese el monto del proyecto"));
//     dineroEnCaja -= presupuestoProyecto;
//     alert("Se asignaron recursos para su proyecto")
    
// } if (dineroEnCaja < presupuestoProyecto) {
//     alert("No hay presupuesto");
// }
    
// alert("Se han agotado los recursos")

let candidato1 = 0;
let candidato2 = 0;
let candidato3 = 0;
let candidato4 = 0;

let voto = 0;

for(let i = 1; i < 4; i++)
{
   voto = prompt("Ingrese el numero del candidato de su preferencia: \n1. Candidato 1 \n2. Candidato 2 \n3. Candidato 3 \n4. Candidato 4")

    switch (voto) {
        case "1":
            candidato1++;
            break;
        case "2":
            candidato2++;
            break;
        case "3":
            candidato3++;
            break;
        case "4":
            candidato4++;
            break;
    }
}

if (candidato1 > candidato2 && candidato1 > candidato3 && candidato1 > candidato4)
{
    $mensaje += "Mateo";
}
else if (candidato2 > candidato1 && candidato2 > candidato3 && candidato2 > candidato4)
{
    $mensaje += "Marcos";
}
else if (candidato3 > candidato1 && candidato3 > candidato2 && candidato3 > candidato4)
{
    $mensaje += "Lucas";
}
else if (candidato4 > candidato1 && candidato4 > candidato2 && candidato4 > candidato3)
{
    $mensaje += "Juan";
}
else
{
    $mensaje = "No hay ganador";
}

// console.log("El ganador es: ")
alert($Juan);

// let nota = Math.random() * 5;

// console.log("Nota Obtenida: " + nota);

// if (nota >= 3)
// {
//     console.log("Pierde la materia");
// } else if(nota <= 4) {
//     console.log("Muy bien");
// } else {
//     console.log("Excelente");
// }

// console.log("______________________");

// let fruta = prompt("Ingrese el nombre de la fruta");

// if (fruta == "Manzana")
// {
//     console.log("La manzana vale $10.000");
// } else if(fruta == "Pera") {
//     console.log("La pera vale $15.000");
// } else if(fruta == "Limon") {
//     console.log("El limon vale $6.000");
// } else if(fruta == "Mango") {
//     console.log("El mango vale $8.000");
// } else {
//     console.log("Se nos agotó la fruta");
// }

// switch(fruta) {
//     case "Manzana":
//         alert("La manzana vale $10.000");
//         break;
//     case "Pera":
//         alert("La pera vale $15.000");
//         break;
//     case "Limon":
//         alert("El limon vale $6.000");
//         break;
//     case "Mango":
//         alert("El mango vale $8.000");
//         break;
//     default:
//         alert("Se nos agotó la fruta");
// }