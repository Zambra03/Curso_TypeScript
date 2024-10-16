let age = 20; //declaro una variable que se denomina number pero puede ser cambiadaa cualquier otro tipo

let age1: number = 20; //declaro una variable que si o si debe ser de tipo numero

// Types of variables

let num: number = 24; // Tipo de dato numero
let str: string = "Michael"; // Tipo de dato cadena de texto
let bool: boolean = true; // Tipo de dato booleano (True and False)
let obj: Object = {}; // Tipo de dato objeto ({nombre: "Michael"})
let arr: string[] = ["Michael", "Zambrano"] // Tipo de dato array de strings
let response: any = "Holaa"; // Tipo de dato ninguno, puede ser modificado

response = 20; // modificacion del tipo de dato any a number
response = true; // modificacion del tipo de dato any a boolean
response = ["Holaa", "Zambrano"] // modificacion de tipo de dato any a array de strings

function saludar(): void { //Tipo de dato void que no retorna nada de una funcion 
    console.log("Hola");
}

let response2: unknown; // Tipo de dato desconocido
response2 = true;

let response3 = null; // Tipo de dato nulo (vacio)
let response4 = undefined; // Tipo de dato indefinido (para cuando una variable no ha sido inicializada)

// Combination of types

type ResponseTypeService = string | undefined; // tipo de dato string o indefinido (| simbolo que significa "o") -> tambien es un tipo que estoy definiendo manualmente
let response5: ResponseTypeService;

let response6: string | undefined; // tipo de dato string o indefinido
response6?.toString(); // puedo usar los metodos que vengan de la variable, el ? significa que no venga nulo el valor del dato

// Type assertion (castear to string)

let message: any = "";
(message as string).toUpperCase(); // primera forma de hacer que message me o tome como un string par ahacer usos de sus metodos
let messageUpperCase = <string>message; // segunda forma, cambiando las sintaxis de "message as string" a "<string> message"
messageUpperCase.toUpperCase(); 

const canvas = <HTMLCanvasElement>document.getElementById("canvas");
