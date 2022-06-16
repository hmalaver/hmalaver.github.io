//Escribe un programa que pueda calcular el área de figuras geométricas, triángulo, rectángulo y círculo. En primer lugar pregunta de qué figura se quiere calcular el área, después solicita los datos que necesites para calcularlo.
//área del rectangulo =base*altura
//área del triangulo b*a/2
//área del circulo radio al cuadrado por 3.14

let figure = prompt("Escribe el nombre de la figura que desea calcular el area:").toLocaleLowerCase()
let base;
let heigth;
let radius;
let lado;
let diagonal1;
let diagonal2;
let base1;
let base2;
let perimetro;
let apotema;

//creamos el switch para la eleccion dee la variable

switch(figure){
    case "rectangulo":
        //debemos pedir 2 cosas
        base = prompt("cuanto tiene de base")
        heigth = prompt("cuanto tiene de altura")
        //imprimiremos en la consola
        document.write(`El area del rectangulo es ${base*heigth}`)
        break

    case "triangulo":
        base = prompt("cuanto tiene de base")
        heigth = prompt("cuanto tiene de altura")
        document.write(`El area del triangulo es ${(base*heigth)/2}`)
        break

    case "circulo":
        radius = prompt("cuanto tiene de radio")
        document.write(`El area del círculo es ${Math.PI* Math.pow(radius,2)}`)
        break
    default: console.log("la palabra que escribiste no es correcto")

    case "cuadrado":
        lado = prompt("cuanto tiene de lado")
        document.write(`El area del cuadrado es ${lado*lado}`)
        break

    case "rombo":
        diagonal1 = prompt("cuanto tiene la diagonal 1")
        diagonal2 = prompt("cuanto tiene la diagonal 2")
        document.write(`El area del rombo es ${diagonal1*diagonal2}`)
        break

    case "romboide":
        base = prompt("cuanto tiene de base")
        heigth = prompt("cuanto tiene de altura")
        document.write(`El area del romboide es ${base*heigth}`)
        break

    case "trapecio":
        heigth = prompt("cuanto tiene de altura")
        base1 = prompt("cuanto tiene la base 1")
        base2 = prompt("cuanti tiene la base 2")
        lado = prompt("cuanto tiene de lado")
        document.write(`El area del trapecio es ${heigth*(base1*base2/2)}`)
        break

    case "poligono":
        perimetro = prompt("cuanto tiene de perimetro")
        apotema = prompt("cuanto tiende de apoptema")
        document.write(`El area del poligono es ${(perimetro*apotema)/2}`)

}


