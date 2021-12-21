// Programa una función que cuente el numero de caracteres de una cadena de texto
const contarCadena = cadena => {
    (!cadena) ? console.warn('No haz ingresado una cadena de texto')
    : ( typeof cadena !== 'string') ? console.log('El tipo de dato ingresado no es una cadena de texto')
    : console.log(`la cadena '${cadena}' tiene ${cadena.length} digitos`)
}
contarCadena() // Espera por parametro la cadena

//Programa una función que devuleva el texto recortado segun el numero carecteres indicados
const cortarCadena = (cadena,numCart) => {
    (!cadena || !numCart) ? console.log('No has ingresado uno de los campo')
    : ( typeof cadena !== 'string' || typeof numCart !== 'number') ? console.log('Haz ingresado mal uno de los campos')
    : console.log(`La oracion '${cadena}' es recortada: ${cadena.slice(numCart)}`)
}
cortarCadena() // Espera 2 parametros es obligatorio poner en orden los valores y tenga el tipo de datos correspondiente

//Programa una función que dado un string devuelva un array de texto separados por cierto caracter
const devolverArray = cadena => {
    (!cadena) ? console.log('No haz ingresado ningun texto')
    : (typeof cadena !== 'string') ? console.log('Haz ingresado otro tipo de dato')
    : console.log( cadena.split(' '))
}
devolverArray()

//Programa una función que repita un texto x veces
const repetirTexto = (cadena, x) => {
    (!cadena) ? console.error('Haz ingresado un dato incorrecto')
    : ( typeof cadena !== 'string' || typeof x !== 'number') ? console.error('Haz ingresado mal alguno de los datos')
    : console.log(cadena.repeat(x))
}
repetirTexto('Hola mundo\n',5)

//Programe una función que invierta las palabras de una cadena de texto
const revertirTexto = texto => {
    (!texto) ? console.warn('No has ingresado el texto')
    :( typeof texto !== 'string') ? console.warn('El tipo de dato no es correcto')
    : console.log(texto.split('').reverse().join(''))
}
revertirTexto()

//Programa una función que cuente el numero de veces que se repite un texto
const encontrarTexto = ( cadena,texto ) => {

    if (!cadena) return console.warn('No ingresaste la cadena de texto')
    if (!texto) return console.warn('No ingresastes el texto a buscar')
    if (typeof cadena !== 'string'|| typeof texto !== 'string') return console.warn('El tipo de dato no es un texto')
    
    let i = 0, numVeces = 0   
    while ( i !== -1) {
        i = cadena.indexOf( texto,i )
        if(i !== -1){
            i++
            numVeces++
        }
    }
    return console.info(`La palabra ${texto} se repite: ${numVeces}`)
}
encontrarTexto('Hola hola hola hola','hola') // El programa no disingue de mayusculas ni minusculas

//Programa una función que verifique si una cadena de texto es un palindromo
const verificarPalindromo = texto =>{
    (!texto) ? console.warn('No haz ingresado un texto')
    :(typeof texto !== 'string') ? console.warn('Haz ingresado mal el tipo de dato')
    :(texto === texto.split('').reverse().join('')) ? console.log(true)
    :console.log(false)
}
verificarPalindromo()
//Programa una funcion que indique si es numero primo o no y si es primo devolvera true y si no lo es devolvera false

const numeroPrimo = numero => {
    (!numero) ? console.warn('No ingresastes un número,\n Porfavor ingrese un número')
    :(typeof numero !== 'number') ? console.warn('Debe ingresar un número')
    :(numero %2 === 0) ? console.log(false)
    :console.log(true)
}
numeroPrimo(3)
//Programa una funcion que indique si un numero es capicua 

const capicua = numero => {
    (!numero || typeof numero !== 'number') ? console.warn('No haz ingresado un número, o el tipo de dato es incorrecto') 
    :(numero.toString() === numero.toString().split('').reverse().join('')) ? console.log(true)
    :console.log(false)
}
capicua(202)

//Clase número 38 para ejercicios de javascript y formar parte del mundo del desarrollo web

const convertirBinarioDecimal = (numero,base) => {
    if (!numero) return console.warn('No haz ingresado un número')
    if (!base) return  console.log('la base a convertir esta vacia por ingrese una base')
    if (typeof numero !== 'number' || typeof base !== 'number') return console.log('El tipo de dato del numero o base no es un Número')
    if (base !== 2 || base !== 10 ) return console.warn('El tipo de base que indicastes no es valida')


    if(base === 2){
        return console.log(`${numero}, base ${base} = ${numero.toString(base)}`)
    }
    if(base === 10){
        return console.log(`${numero}, base ${base} = ${parseInt(numero,base)}`) // convierte a decimal a binario
    }
}

// toString recibe como parametro un numero decimal para convercion de Binario

//Base 10 Transforma a Decimal
//Base 2 Transforma a binario
convertirBinarioDecimal(10101,2)


//Contruye una función que aplique x descuento a x cantidad y te devuelva el descuento aplicado
const aplicarDescuento = (cantidad,descuento = 0) => {
    if (!cantidad) return  console.warn('No ingresastes el monto')
    if (typeof cantidad !== 'number' || typeof descuento !== 'number') return console.warn('El monto ingresado no es una cantidad O el descuento no es una cantidad')
    if (cantidad === 0 ) return console.warn('EL monto no puede estar vacío')
    if (Math.sign(cantidad) === -1) return console.warn('El monto no puede ir expresado en números Negativos')
    if (Math.sign(descuento) === -1) return console.warn('El descuento no puede ser expresado en número negativos')

    return console.log(`${cantidad} - ${descuento}% = ${cantidad - ((cantidad * descuento) / 100)}`)
    // cantidad - ((cantidad * descuento) / 100) ==> Formula de aplicar descuento
}
aplicarDescuento(100,100)

//Validación de números de fechas
//Programa una función que dada una fecha valide cuantos años han pasado hasta el dia de hoy Ejemplo Date(1984,4,23) devolvera 36 años (2021)

const calcularFechas = (fecha) =>{
    if(!fecha) return console.warn('No ingresastes una fecha')
    if(!(fecha instanceof Date)) return console.warn('El tipo de fecha ingresada no es valida')
    //Como comprobar si no es una fecha valida ===> !fecha instanceof Date

    let fechaActual = new Date().getTime() - fecha.getTime()
    let aniosMilliSegundo = 1000 * 60 * 60 * 24 * 365
    let resultado = Math.floor(fechaActual / aniosMilliSegundo)

    return(Math.sign(resultado) === -1) ? console.warn(`Faltan ${Math.abs(resultado)} años para el ${fecha.getFullYear()}`)
    :(Math.sign(resultado) === 1) ? console.log(`Han pasado ${resultado} años desde ${fecha.getFullYear()}`)
    : console.log('Estamos en el año presente')
}
calcularFechas(new Date())
//Formula para recibir cuanto tiempo ha pasado desde una fecha predeterminada a la actualidad
// Millis segundo * segundos * minutos * horas * dias


// Programa una funcion que cuente el número de vocales de una cadena de texto
const contarVocales = cadena => {
    if(!cadena) return console.warn('No ingresastes una cadena de texto')
    if(typeof cadena !== 'string') return console.warn('El tipo de dato no es una cadena de texto')
    return console.log(`Hay ${cadena.match(/[aeiou]/ig).length} vocales y ${cadena.match(/[BCDFGHJKLMNPQRSTVXZWY]/ig).length} consonantes`)
}

contarVocales('Hola Mundo')

//Programa una funcion que diga si un nombre es valido

const validarNombre = nombre => {
    if(!nombre) return console.warn('No ingresastes un nombre')
    if(typeof nombre !== 'string') return console.warn('El tipo de dato no es admitido')
    if(nombre.match(/[-%@_#1234567890(?)]/ig)) return console.warn('El nombre no admite caracteres especiales')
    if(nombre.match(/[aeiouBCDFGHJKLMNPQRSTVXZWY]/ig)) return console.log('El nombre es admitido')
}

validarNombre('lariosangel062@gmail.com')

// Crea una función que indique si un email es valido

const validarEmail = email => {
    if(!email) return console.warn('No ingresastes un email')
    if(typeof email !== 'string') console.warn('No es una cadena de texto valida')
    if(email.match(/[/^\w+(\.-?\w+)*@\w+([\.-?\w+)*(\.\w)+1234567890@]/ig)) return console.info('El email es valido') 
    return console.warn('El email no es valido')  
}
validarEmail('lariosangel062gmail.com')


// Programa una función que dado un array te devuelva un array pero al cuadrado
const arrayCuadrado = array => {
    if (!array) return console.warn("Debes Ingresar un array de numeros")
    if (array.length === 0) return console.warn("El array ingresado está Vacio")
    if (!(array instanceof Array)) return console.warn(`El valor ${array} no es un Array de Numeros`)

    // Esta funcion permitira que un array no tome en cuenta string u otro tipo de datos solo numeros
    array = array.filter((array) => typeof array === "number")
    let cuadrados = []

    for (let i = 0; i < array.length; i++) {
        cuadrados.push(Math.pow(array[i], 2))
    }
    return console.log(cuadrados);
}
arrayCuadrado([1,2,3,4,5])


//Construye una función que te devuelva el valor minimo y maximo de un array
const valorMaxMin = array =>{
    if(!array) return console.warn('No ingresastes el array de número')
    if(!(array instanceof Array)) return console.warn('El dato ingresado no es un Array')
    array = array.filter((array) => typeof array === 'number')

    console.log(`El valor minimo es: ${Math.min(...array)} y el valor maximo es: ${Math.max(...array)}`)
}
valorMaxMin([1,2,3,4,5,6,-60,6,7])


//Programa una función que dado un array te devuelva un objeto con 2 array en donde uno almacene los pares y los otros impares
const almacenarDatos = array => {
    if(!array) return console.warn('No ingresastes el array')
    if(!(array instanceof Array)) return console.warn('El dato ingresado no es un array')
    array = array.filter((array) => typeof array === 'number')

    let pares = []
    let impares = []

    for (let i = 0; i < array.length; i++) {
        if( i % 2 === 0){
            pares.push(array[i])
        }
        else{
            impares.push(array[i])    
        }
    }
    let numero = {
        pares,
        impares
    }
    return console.log(numero)

}
almacenarDatos([1,2,3,4,5,6,7,8,9])

// Programa un función que dado un array imprima un objeto con los numeros de forma asc y des
const ordenarArray = array => {
    if(!array) return console.warn('No haz ingresado un array')
    if(!(array instanceof Array)) return console.warn('El dato ingresado no es un array')

    array = array.filter((array) => typeof array === 'number')
    
    const asc = array.sort(function(a,b){
        return a - b 
    })

    const dec = array.sort(function(x,y) {
        return y - x
    })

    // Construyamos un objeto literario que almacene los datos 
    const ordenar = {
        asc,
        dec
    }

    return console.log(ordenar)
}
ordenarArray([1,22,45,2203,34,45,77,44,'Hola Mundo'])


// Herencia prototipica de una funcion consttructora

function persona (nombre,apellido,edad) {
    this.nombre = nombre,
    this.apellido = apellido,
    this.edad = edad 
}
const carlos = new persona('Carlos','Aguirre',23)
console.log(carlos)

function Maestros (nombre,apellido,edad,materia) {
    this.data = persona
    this.data(nombre,apellido,edad),
    this.materia = materia
}
const francisco = new Maestros('Francisco','Cruz',23,'Sociología')
console.log(francisco)


// Herencia de una clase que mandan¡¡¡ a llamar el constructor de parametro del padre
class Persona {
    constructor(nombre,apellido,edad){
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
    }
}
const dayhania = new Persona('Dayhania','Obando',20)
console.log(dayhania)

class Alumnos extends Persona{
    constructor(nombre,apellido,edad,aula){
        super(nombre,apellido,edad)
        this.aula = aula
    }    
}
const luis = new Alumnos('Luis','Delgado',23,'A - III - 5')
console.log(luis)