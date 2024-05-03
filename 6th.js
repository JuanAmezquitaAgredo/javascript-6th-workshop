// // Global Scope
// var globalVariable = "Soy una variable global.";

// function testScope() {
//   // Function Scope
//   var functionVariable = "Soy una variable local.";

//   if (true) {
//     // Block Scope
//     let blockVariable = "Soy una variable de bloque.";
//     console.log("Dentro del bloque:", blockVariable);
//   }

//   console.log("Dentro de la función:", functionVariable);
// }

// console.log("Fuera de la función:", globalVariable);

// testScope();


// var globalVariable = prompt(`PRIMERO

// Segun el codigo del "Ejercicio 1:" en el fondo de la pantalla:

// crees que la variable (var = globalVariable) se va a poder llamar donde dice (console.log("Fuera de la función:", globalVariable); testScope();)?

// Ingresa si crees que es o no, posible y ¿por que?

// Comienza tu respuesta asi: Si es posible por que, 
//                                                      No es posible por que,`).toLowerCase();

// if (globalVariable.includes("si es posible por que")){
//     alert(`Correcto, si es posible acceder a la variable ya que "var = globalVariable" es una variable global y puede ser llamada despues de ser declarada, en cualquier parte del codigo. `);
// }
// else{
//     alert(`Incorrecto, a la variable si es posible acceder ya que "var = globalVariable" es una variable global y puede ser llamada despues de ser declarada, en cualquier parte del codigo. `);
// }


// var functionVariable = prompt(`SEGUNDO

// Segun el codigo del "Ejercicio 1:" en el fondo de la pantalla:

// crees que la variable (var = functionVariable) se va a poder llamar donde dice (console.log("Dentro de la función:", functionVariable);)?

// Ingresa si crees que es o no, posible y ¿por que?

// Comienza tu respuesta asi: Si es posible por que, 
//                                                      No es posible por que,`).toLowerCase();     

// if (functionVariable.includes("si es posible por que")){
//     alert(`Correcto, si es posible acceder a la variable ya que "var = functionVariable" es una variable global que esta dentro de una función y mientras esa variable se acceda en cualquier parte dentro de la función no habra problema.`);
// }
// else{
//     alert(`Incorrecto, a la variable si es posible acceder ya que "var = functionVariable" es una variable global que esta dentro de una función y mientras esa variable se acceda en cualquier parte dentro de la función no habra problema.`);
// }

// var blockVariable = prompt(`TERCERO

// Segun el codigo del "Ejercicio 1:" en el fondo de la pantalla:

// crees que la variable (let = blockVariable) se va a poder llamar donde dice (console.log("Dentro del bloque:", blockVariable);)?

// Ingresa si crees que es o no, posible y ¿por que?

// Comienza tu respuesta asi: Si es posible por que, 
//                                                      No es posible por que,`).toLowerCase(); 

// if (blockVariable.includes("si es posible por que")){
//     alert(`Correcto, si es posible acceder a la variable ya que "let = blockVariable" es una variable local, la cual se encuentra dentro de un "if" y solo se podra llamar en su interior, por que es una variable propia del bloque.`);
// }
// else{
//     alert(`Incorrecto, ya que si es posible acceder a la variable por que "let = blockVariable" es una variable local, la cual se encuentra dentro de un "if" y solo se podra llamar en su interior, por que es una variable propia del bloque.`);
// }


/////////////////////////////////////////////////////////////////////// ////////////////////////////////////////////////////////////////////// 
// vars call
// console.log("Valor de a:", a);
// console.log("Valor de b:", b);
// console.log("Valor de c:", c);

// // functions call
// console.log("Resultado de funcionDeclarada:", funcionDeclarada());
// console.log("Resultado de funcionExpresada:", funcionExpresada());

// // vars declaration
// var a = 1;
// let b = 2;
// const c = 3;

// // functions declarations
// function funcionDeclarada() {
//   return "Función declarada ha sido llamada.";
// }

// const funcionExpresada = function () {
//   return "Función expresada ha sido llamada.";
// };
/////////////////////////////////////////////////////////////////////////////

// let variabledeclaradaVAR = prompt(`Lee el siguiente codigo y reponde lo que crees que pasara

//         console.log("Valor de a = ", a);
//         var a = 1;

//         ¿Que crees que pasará?
//         1. En la consola se verá "Valor de a = 1"
//         2. Saldra un error por que "var" debe ser declarada 
//             antes
//         3. Saldra en la consola "undefined"`);

// switch (variabledeclaradaVAR) {
//     case "1":
//         alert(`Respuesta incorrecta,

//     Las variables deben ser declaradas antes de ser llamadas

//     La respuesta correcta era "undefined" ya que las variables declaradas con "var" son inicializadas con undefined si no estan declaradas antes.`);
//     break;
//     case "2":
//         alert(`Respuesta incorrecta,

//     Las variables si deben ser declaradas antes pero, cuando no se declara "var" antes de acceder a ella aparece "undefined".`);
//     break;
//     case "3":
//         alert(`Correcto,
//     Saldra en la consola "undefind" ya que la variable "var" no fue declarada antes de ser llamada`);
//     break;
//     default:
//         alert("Ingresaste un valor no valido");
//         break;
// }


// let variabledeclaradaLET = prompt(`Lee el siguiente codigo y reponde lo que crees que pasara

//         console.log("Valor de b = ", b);
//         let a = 2;

//         ¿Que crees que pasará?
//         1. En la consola se verá "Valor de b = 2"
//         2. Saldra un error por que "var" debe ser declarada 
//             antes
//         3. Saldra en la consola "undefined"`);

// switch(variabledeclaradaLET){
//     case "1":
//         alert(`Respuesta incorrecta,

// Las variables deben ser declaradas antes de ser llamadas

// La respuesta correcta era Saldra un error por que "let" debe ser declarada antes`);
//         break;
//     case "2":
//         alert(`Correcto,

// Al llamar una variable "let" antes de ser declarada. En la consola saldra un error diciendo que la variable no esta declarada`);
//         break;
//     case "3":
//         alert(`Respuesta incorrecta,

// Las variables deben ser declaradas antes de ser llamadas y solo las "var" aparecen con el "undefind"

// La respuesta correcta era Saldra un error por que "let" debe ser declarada antes`);
//         break;
//     default:
//         alert("Ingresaste un valor no valido");
//         break;
// }

// let variabledeclaradaCONST = prompt(`Lee el siguiente codigo y reponde lo que crees que pasara

//         console.log("Valor de c = ", c);
//         const c = 3;

//         ¿Que crees que pasará?
//         1. En la consola se verá "Valor de c = 3"
//         2. Saldra un error por que "var" debe ser declarada 
//             antes
//         3. Saldra en la consola "undefined"`);

// switch (variabledeclaradaCONST) {
//     case "1":
//         alert(`Respuesta incorrecta,

// Las variables deben ser declaradas antes de ser llamadas

// La respuesta correcta era Saldra un error por que "const" debe ser declarada antes`);
//     break;
//     case "2":
//         alert(`Correcto,

// Al llamar una variable "const" antes de ser declarada. En la consola saldra un error diciendo que la variable no esta declarada`);
//     break;
//     case "3":
//         alert(`Respuesta incorrecta,

// Las variables deben ser declaradas antes de ser llamadas y solo las "var" aparecen con el "undefind"

// La respuesta correcta era Saldra un error por que "const" debe ser declarada antes`);
//     break;
//     default:
//         alert("Ingresaste un valor no valido");
//         break;
// }

// let funcionDeclarada = prompt(`Lee el siguiente codigo y reponde lo que crees que pasara

//         console.log("Resultado:", funcionDeclarada());

//           //functions declarations

//         function funcionDeclarada() {
//             return "Función declarada ha sido llamada.";
//         }

//         ¿Que crees que pasará?
//         1. En la consola se verá "Función declarada ha sido llamada."
//         2. Saldra un error por que la función debe ser declarada 
//             antes
//         3. Saldra en la consola "undefined"`);

// switch (funcionDeclarada) {
//     case "1":
//         alert(`Respuesta correcta,

// las funciones declaradas pueden ser llamadas antes de ser declaradas, por que el hoisting  les permite moverse al inicio del codigo`);
//         break;
//     case "2":
//         alert(`Respuesta incorrecta,

// las funciones declaradas pueden ser llamadas antes de ser declaradas, por que el hoisting  les permite moverse al inicio del codigo `);
//         break;
//     case "3":
//         alert(`Respuesta incorrecta,

// las funciones declaradas pueden ser llamadas antes de ser declaradas, por que el hoisting  les permite moverse al inicio del codigo`);
//         break;
//     default:
//         alert("Ingresaste un valor no valido");
//         break;
// }

// let funcionExpresada = prompt(`Lee el siguiente codigo y reponde lo que crees que pasara

//         console.log("Resultado", funcionExpresada());

//         const funcionExpresada = function () {
//             return "Función expresada ha sido llamada.";
//         };

//         ¿Que crees que pasará?
//         1. En la consola se verá "Función expresada ha sido llamada."
//         2. Saldra un error por que la función debe ser declarada 
//             antes
//         3. Saldra en la consola "undefined"`);

// switch (funcionExpresada) {
//     case "1":
//         alert(`Respuesta incorrecta,

// Las funciones expresadas deben ser declaradas antes de ser llamadas por que se guardan en una variable y el hoisting debe poder encontrarlo`);
//         break;
//     case "2":
//         alert(`Respuesta correcta,

// Las funciones expresadas deben ser declaradas antes de ser llamadas por que se guardan en una variable y el hoisting debe poder encontrarlo`);
//         break;
//     case "3":
//         alert(`Respuesta incorrecta,

// Las funciones expresadas deben ser declaradas antes de ser llamadas por que se guardan en una variable y el hoisting debe poder encontrarlo`);
//         break;
//     default:
//         alert("Ingresaste un valor no valido");
//         break;
// }

/////////////////////////////////////////////////////////////////////// ////////////////////////////////////////////////////////////////////// 

//Ejercicio 3

// function crearSumador(numero) {
//     let numunico = 5;
//     function sumar(num) {
//         return numero + num;
//     }
//     return sumar(numunico);
// };

// let sumarcinco = crearSumador(3);
// console.log(sumarcinco);

//¿Cómo mantienen las funciones su acceso a variables externas después de que la función externa ha terminado de ejecutarse?
// Respuesta: por que las funciones hijas tienen acceso a los datos privados de sus padres pero no pueden modificarlos directamente

/**¿Cuáles son las implicaciones de memoria de mantener estos closures, especialmente si se crean muchas instancias de funciones con closures?

Respuesta : Que la memoria se veria afectada ya que  los datos almacenados en ella serian muy grandes por que la ultima funcion del closures
tendra acceso a todos los datos de las funciones anteriores, por lo tanto guardara mucha informacion si se hacen demasiadas, al igual
que sus antyeriores.
 */


/////////////////////////////////////////////////////////////////////// ////////////////////////////////////////////////////////////////////// 

//Ejercicio 4

// console.log(
//     "Intentando llamar a 'funcionDeclarada' antes de su declaración:"
// );
// try {
//     console.log(funcionDeclarada());
// } catch (error) {
//     console.log("Error:", error.message);
// }

// console.log(
//     "Intentando llamar a 'funcionExpresada' antes de su declaración:"
// );
// try {
//     console.log(funcionExpresada());
// } catch (error) {
//     console.log("Error:", error.message);
// }

// // Declaración de una función declarada
// function funcionDeclarada() {
//     return "Función declarada ha sido llamada.";
// }

// // Declaración de una función expresada
// const funcionExpresada = function () {
//     return "Función expresada ha sido llamada.";
// };

// console.log("Llamando a 'funcionDeclarada' después de su declaración:");
// console.log(funcionDeclarada());

// console.log("Llamando a 'funcionExpresada' después de su declaración:");
// console.log(funcionExpresada());

/**¿Qué sucedió cuando intentaste llamar a las funciones antes de su declaración?

Solo salio un error cuando se intenta llamar a la funcion expresada antes de su declaración, las demas si funcionaron bien
 */

/**¿Cómo difieren los resultados entre la función declarada y la función expresada?

Solo funcionan las funciones declaradas, ya que estas son las que se pueden llamar antes de ser declaradas,
mientras que las funciones expresadas no pueden ser llamadas  antes de su declaración, dado que  no existen hasta que son definidas.
 */

/**¿Qué indica esto sobre cómo el JavaScript maneja estas dos diferentes declaraciones de funciones?

Indica que como las funciones expresadas son variables y JavaScript funciona en cascada por lo tanto una variable no puede ser utilizada si no
es declarada antes, ademas las funciones declaradas serian mas versatiles, ya que las puedo utilizar sin importar donde esten en mi codigo,
y las expresadas las utilizo en un segmento definido. 
 */

/////////////////////////////////////////////////////////////////////// ////////////////////////////////////////////////////////////////////// 

//Ejercicio 5
// function callback(){
//     console.log("¡Promesa cumplida y callback ejecutado!");
// };

// function manejarAsincronia(callback){
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             if(true){
//                 resolve(callback);
//             }else{
//                 reject("error")
//             }
//         },3000);
//     });
// }

// manejarAsincronia(callback).then(element => element()).catch(error => console.error(error));

/**
 * ¿Qué sucede si cambias el tiempo de resolución de la promesa a 5 segundos o a 1 segundo? 
 * R/ El tiempo tanto de la promesa como del callback, será el tiempo establecido, por que no se ejecuta el callback sin antes la promesa
 * ¿Cómo se comporta la función si la promesa es rechazada en lugar de resuelta?
 * R/ Si es rechazada y tengo el catch con el error determinado, se va a presnetar en la consola el error
 * ¿Puedes modificar la función para que el callback maneje diferentes tipos de información dependiendo del resultado de la promesa?
 * R/Si se le pasa un parametro diferente al callback se puede mostrar
 */

/////////////////////////////////////////////////////////////////////// ////////////////////////////////////////////////////////////////////// 

//Ejercicio 6

// setTimeout(()=>{
//     console.log("Mensaje 2: Con timeout de 0 segundos");
// },0);

// setTimeout(()=>{
//     console.log("Mensaje 3: Con timeout de 1 segundo");
// },1000);

// console.log("Mensaje 1: Inmediatamente");

/**
¿Por qué "Mensaje 2: Con timeout de 0 segundos" no se muestra inmediatamente después de "Mensaje 1: Inmediatamente", 
a pesar de tener un retardo de 0 segundos? - ¿Que nos dicen este comportamiento sobre el event loop, las macro y micro tareas, 
y la forma en que JavaScript maneja las operaciones asíncronas?

R/ Por que setTimeout es una API por lo cual debe guardarse pŕimero en macrotareas y JavaScript presenta todas las call Stack primero
y luego ya pasa a funcionar las macrotareas. JavaScript si lee el codigo en cascada, pero no lo interpreta en cascada.
Primero ejecuta los mensajes directos, luego busca en microtareas si tiene y despues ya pasa las macrotareas.
 */

/////////////////////////////////////////////////////////////////////// ////////////////////////////////////////////////////////////////////// 

//Ejercicio 7

// console.log("Inicio del script");

// setTimeout(() => {
//   console.log("Primer setTimeout");
// }, 0);

// setTimeout(() => {
//   console.log("Segundo setTimeout");
// }, 0);

// Promise.resolve("Promesa resuelta").then(console.log);

// console.log("Fin del script");

// let opcion = prompt(`
// 1.console.log("Inicio del script");

// 2.setTimeout(() => {
//   console.log("Primer setTimeout");
//   }, 0);

// 3.setTimeout(() => {
//   console.log("Segundo setTimeout");
//   }, 0);

// 4.Promise.resolve("Promesa resuelta").then(console.log);

// 5.console.log("Fin del script");

// Teniendo en cuenta el resultado anterior: escribe seguido de una ","(coma)
// el orden en que crees que se proyectaran los mensajes en la consola.`);

// let arrayopciones = opcion.split(",");
// let ordencorrecto = ["1","5","4","2","3"];
// let mensajeerror;

// arrayopciones.forEach((Element,index1)=>{
//     ordencorrecto.forEach((correc,index2)=>{
//         if (Element != correc && index1 == index2 && index1==0){
//             mensajeerror += "Los console.log() se realizan de primero y en el orden que se pusieron, por lo tanto el console.log(`Inicio del script`) se presentara de 1.\n\n"
//         }
//         else if (Element != correc && index1 == index2 && index1==1){
//             mensajeerror += "Los console.log() se realizan de primero y en el orden que se pusieron, por lo tanto el console.log(`Fin del script`) se presentara de 2.\n\n"
//         }
//         else if (Element != correc && index1 == index2 && index1==2){
//             mensajeerror += "Las promesas son microtareas por lo cual se debe resolver primero las tareas sincronicar, luego las asincronicas, comenzando con las microtareas y luego las macro, por esta razon Promise.resolve(`Promesa resuelta`).then(console.log) se presenta de 3.\n\n"
//         }
//         else if (Element != correc && index1 == index2 && index1==3){
//             mensajeerror += "Los setTimeout(() son macrotareas por lo caul se realizan de ultimo y tambien en el orden de que los pongan, por lo tanto el setTimeout(`Primer setTimeout`)se presentara 4.\n\n"
//         }
//         else if (Element != correc && index1 == index2 && index1==4){
//             mensajeerror += "Los setTimeout(() son macrotareas por lo caul se realizan de ultimo y tambien en el orden de que los pongan, por lo tanto el setTimeout(`Segundo setTimeout`)se presentara 5.\n\n"
//         }
//     })
// })
// if (!mensajeerror){
//     mensajeerror = "Felicitaciones!!!"
// }

// console.log(mensajeerror);

/////////////////////////////////////////////////////////////////////// ////////////////////////////////////////////////////////////////////// 

//Ejercicio 8

// let cont = 0;

// function primero(){
//     let var1 = 1;
//     function segundo(){
//         return cont += var1;
//     } 
//     return segundo()
// }


// while(true){
//     let op = confirm(`Desea:
//                 Ok. Sumar al contador
//                 Cancel. Salir`);
//     if (op){
//         primero();
//     }
//     else if (!op){
//         break;
//     }
// }

// console.log(cont);


/////////////////////////////////////////////////////////////////////// ////////////////////////////////////////////////////////////////////// 

//Ejercicio 9

// let timepousuario = Number(prompt("Ingrese el tiempo que desea esperar"));
// let array10;


// setTimeout(() =>{
//     console.log("El tiempo a pasado correctarmente")
// },timepousuario*1000);
// fetch('https://jsonplaceholder.typicode.com/posts')
// .then(bien => {
//     return bien.json();
// })
// .then(array => {
//     return array.filter((Element)=> Element.userId == 1);
// })
// .then(ahora =>{
//     console.log(ahora);
// })

/////////////////////////////////////////////////////////////////////// ////////////////////////////////////////////////////////////////////// 

//Ejercicio 10

/**
¿Qué tareas se consideran macrotareas y cuáles son microtareas?
R/ Los setTimeout() se consideran macrotareas y las promesas se consideran microtareas
¿Cómo se relacionan las macrotareas y microtareas con el event loop?
R/ El event loop indica cual es el orden con el que se deben resolver las tareas, primero corre todas las microtareas y despues las macrotareas,
pero si despues de realizar una macrotarea salen microtareas, se relaizan primero y despues sigue con las macro.
¿Qué sucede cuando una microtarea genera una nueva macrotarea dentro de ella?
R/La pasa a las macrotareas y las empieza a desarrollar en el orden de llegada despues de desarrollar todas las microtareas
¿Cómo se manejan las promesas y los setTimeout en relación con el event loop?
R/Primero se realizan las microtareas que son las promesas y despues realiza las macrotareas que son los setTimeout.
 */

/////////////////////////////////////////////////////////////////////// ////////////////////////////////////////////////////////////////////// 

//Ejercicio 11

// Ruta del archivo data.json
const url = "data.json"; // Cambiar por la ruta correcta

// Función para cargar y mostrar el contenido de data.json
function cargarYMostrarData() {
  // Retorna una nueva promesa que se resuelve después del setTimeout
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Realiza la solicitud fetch dentro del setTimeout
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Error al cargar los datos.");
          }
          return response.json();
        })
        .then((data) => {
          console.log("Habitaciones:", data.rooms);
          console.log("Tipos de Habitaciones:", data.roomTypes);
          resolve(data); // Resuelve la promesa con los datos cargados
        })
        .catch((error) => {
          console.error(error);
          reject(error); // Rechaza la promesa si hay un error
        });
    }, 0);
  });
}

// Llamar a la función para cargar y mostrar el contenido de data.json
cargarYMostrarData()
  .then(({ rooms, roomTypes }) => {
    let reservas = [{ fechaini:new Date(2024,1,5),
                      fechafin:new Date(2024,1,10),
                      number:101,
                      nom : "juan",
                      ID : 1},
                    { fechaini:new Date(2024,1,1),
                      fechafin:new Date(2024,1,10),
                      number:105,
                      nom : "pedro",
                      ID : 2}];
    let ID = 1;
    let i = true;
    while(i == true){
      let op = prompt(`Ingrese:
            1. Reservar habitaciones
            2. Ver reservas actuales
            3. Cancelar reservas
            4. Editar reservas
            5. Salir`);
     switch(op){
      case "1":{
        ////Ingresar el numero de personas y verificar cuales habitaciones cumplen con el requisito
        const numeordepersonas = prompt("Ingrese numero de personas");
        const roomTypeIdsMatchingCapacity = 
          roomTypes
            .filter((type) => type.capacity >= Number(numeordepersonas))
            .map(roomType => roomType.id)//me devuelve un array de los id de las habitaciones que cumplen la condicion
        //Ingresar las fechas
        const dateini = new Date(prompt("Ingrese la fecha de su llegada asi:(Año-Mes-Dia)"));
        const datefin = new Date(prompt("Ingrese la fecha de su salida asi:(Año-Mes-Dia)"));
         //Verificar que las fechas ingresadas tengan sentido la final mayor que la inicial
        if (datefin<dateini){
          alert("Las fechas estan mal ingresadas");
          continue
        }
         //Validar cuales habitaciones cumplen con las fechas y capacidad de huespedes
        const availableRooms = rooms.filter(function(room){
          let reservasEnRango = reservas.filter((Element)=> dateini>=Element.fechaini && dateini<=Element.fechafin || datefin>=Element.fechaini && datefin<=Element.fechafin || dateini<Element.fechaini && datefin>Element.fechafin ).map(hab => hab.number);
          return roomTypeIdsMatchingCapacity.includes(room.roomTypeId) && !reservasEnRango.includes(room.number); 
        })
         // Validar si hay habitaciones disponibles con las condiciones dadas
        if (!availableRooms){
          alert("No tenemos habitaciones, intenta con otras fechas");
          continue
        }
         //Si todo sale bien, se muestran las habitaciones disponibles y que escojan en que cual quedarse
        const chosenRoom = Number(prompt(
          "Ingrese el numero de habitacion a reservar: " +
            availableRooms
              .map((room) => {
                return `\n. Habitación disponible: ${room.number} (${
                  roomTypes.find((type) => type.id === room.roomTypeId).name
                })`;
              })
              .join(", ")
        ));
        // Validar que el huesped si escoja la habitacion adecuada
        let veri = availableRooms.map((Element) => {
          return Element.number
        })
        if (!veri.includes(Number(chosenRoom))){
          alert("El numero de habitacion ingresado no es valido")
          continue  
        }
        //ingresa el nombre del cliente
        const nombrecliente = prompt("Ingrese su nombre completo").toLocaleLowerCase();
        const reservainicial = {
          ID : ID++,
          nom : nombrecliente,
          fechaini : dateini,
          fechafin : datefin,
          number : chosenRoom,
        }
        reservas.push(reservainicial);
        alert("La reserva ha sido exitosa");
        console.log(`Reservas ${reservas}`);
        break;
      }
      case "2":
        function verReservas(){
          let nombreaverificar = prompt("Ingrese el nombre del huesped a verificar").toLocaleLowerCase();
          let reservafiltrada = reservas.filter((Element)=> Element.nom === nombreaverificar);
          return reservafiltrada
        };
        alert(
          verReservas()
              .map((datos) => {
                return `\n\nNombre de quien la reservo:  ${datos.nom.toLocaleUpperCase()}
                Numero de reserva: ${datos.ID}
                Numero de habitación:  ${datos.number}
                Tipo de habitación: ${roomTypes.find((tipo)=> tipo.id == rooms.find((dato)=> dato.number == datos.number).roomTypeId).name}
                Fecha de ingreso: .${datos.fechaini.toDateString()}
                Fecha de salida:  ${datos.fechafin.toDateString()}`;
              })
              .join(", ")
        );
        break;
      case "3":
        let reservacancelar = prompt("Mire las reservas y escoja el numero de la reserva que desea cancelar"+
          reservas
              .map((datos) => {
                return `\n\nNombre de quien la reservo:  ${datos.nom.toLocaleUpperCase()}
                Numero de reserva: ${datos.ID}
                Numero de habitación:  ${datos.number}
                Tipo de habitación: ${roomTypes.find((tipo)=> tipo.id == rooms.find((dato)=> dato.number == datos.number).roomTypeId).name}
                Fecha de ingreso: .${datos.fechaini.toDateString()}
                Fecha de salida:  ${datos.fechafin.toDateString()}`;
              })
              .join(", ")
        );
        let segurocancelar = reservas.find((Element) => Element.ID == reservacancelar);
        if (!segurocancelar){
          alert("No seleccionaste ningun ID valido");
          continue
        }
        reservas.splice(reservas.findIndex((reserva)=>reserva.ID == reservacancelar),1);

        alert("Reserva eliminada exitosamente, estas son las reservas actuales: "+
          reservas
              .map((datos) => {
                return `\n\nNombre de quien la reservo:  ${datos.nom.toLocaleUpperCase()}
                Numero de reserva: ${datos.ID}
                Numero de habitación:  ${datos.number}
                Tipo de habitación: ${roomTypes.find((tipo)=> tipo.id == rooms.find((dato)=> dato.number == datos.number).roomTypeId).name}
                Fecha de ingreso: .${datos.fechaini.toDateString()}
                Fecha de salida:  ${datos.fechafin.toDateString()}`;
              })
              .join(", ")
         );
         break;
      case "4":
        let editarreserva = prompt("Mire las reservas y escoja el numero de la reserva que desea editar"+
          reservas
              .map((datos) => {
                return `\n\nNombre de quien la reservo:  ${datos.nom.toLocaleUpperCase()}
                Numero de reserva: ${datos.ID}
                Numero de habitación:  ${datos.number}
                Tipo de habitación: ${roomTypes.find((tipo)=> tipo.id == rooms.find((dato)=> dato.number == datos.number).roomTypeId).name}
                Fecha de ingreso: .${datos.fechaini.toDateString()}
                Fecha de salida:  ${datos.fechafin.toDateString()}`;
              })
              .join(", ")
        );
        let seguroeditar = reservas.find((Element) => Element.ID == editarreserva);
        if (!seguroeditar){
          alert("No seleccionaste ningun ID valido");
          continue
        }
        const nuevonombre = prompt("Ingrese el nuevo nombre");
        const nuevonumeroper = prompt("Ingrese el numero de personas");
        const nuevadateini = new Date(prompt("Ingrese la fecha de su llegada asi:(Año-Mes-Dia)"));
        const nuevadatefin = new Date(prompt("Ingrese la fecha de su salida asi:(Año-Mes-Dia)"));

        if (nuevonombre){
          let nuevonombre1 = reservas.find((Element)=>Element.ID == editarreserva);
          nuevonombre1.nom = nuevonombre;
        }

        const roomTypeIdsMatchingCapacityedit = 
          roomTypes
            .filter((type) => type.capacity >= Number(nuevonumeroper))
            .map(roomType => roomType.id)
        
        if (nuevadatefin<nuevadateini){
          alert("Las fechas estan mal ingresadas");
          continue
        }

        const availableRoomsedit = rooms.filter(function(room){
          let reservasedit = reservas.filter(Element=>Element.ID != editarreserva);
          let reservasEnRangoedit = reservasedit.filter((Element)=> nuevadateini>=Element.fechaini && nuevadatefin<=Element.fechafin || nuevadatefin>=Element.fechaini && nuevadatefin<=Element.fechafin || nuevadateini<Element.fechaini && nuevadatefin>Element.fechafin ).map(hab => hab.number);
          return roomTypeIdsMatchingCapacityedit.includes(room.roomTypeId) && !reservasEnRangoedit.includes(room.number); 
        })

        if (!availableRoomsedit){
          alert("No tenemos habitaciones, intenta con otras fechas");
          continue
        }
        const chosenRoomedit = Number(prompt(
          "Ingrese el numero de habitacion a reservar: " +
            availableRoomsedit
              .map((room) => {
                return `\n. Habitación disponible: ${room.number} (${
                  roomTypes.find((type) => type.id === room.roomTypeId).name
                })`;
              })
              .join(", ")
        ));
        
        if (chosenRoomedit){
          let cambios = reservas.find((Element)=>Element.ID == editarreserva);
          cambios.fechaini = nuevadateini;
          cambios.fechafin = nuevadatefin;
          cambios.number = chosenRoomedit;
        }
        break;

      case "5":
        i = false;
        break;
     }
    }

    
        
  })
  .catch((error) => {
    console.error("Error al manejar la promesa:", error);
  });

//////////Estos solo son ejemplos para validar////////////
// function validarDisponibilidad (numeroPersonas,habitaciones){
//   if (numeroPersonas==1 && habitaciones.roomTypeId==1){

//   }
// }


// /////////Funcion para generar reservas//////////
// function crearReserva(numeroHabitacion, fechaInicio, fechaFin, huesped) {
//   function generarGeneradorId() {
//     let id = 1; // Variable id se inicializa fuera de la función interna

//     return function () {
//       return id++; // Cada vez que se llama a la función, se incrementa id y se devuelve
//     };
//   }
//   const generarId = generarGeneradorId(); // Se obtiene la función interna generarId()

// }



// let reservas = [{ fechaini:new Date(2024,1,1),
//                   fechafin:new Date(2024,1,10)}];
// let dateini = new Date(2024,0,20);
// let datefin = new Date(2024,1,1);
// if (dateini>datefin){
//   alert("Ingresa")
// }
// let dispo = reservas.filter((Element)=> (dateini>=Element.fechaini && dateini<=Element.fechafin)||(datefin>=Element.fechaini&&datefin<=Element.fechafin));
// console.log(dateini<datefin);
// console.log(datefin.toDateString());
// console.log(dispo);