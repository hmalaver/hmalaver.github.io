//seleccionamos solo una clase
const carruseljs = document.querySelector(".lista")

//utilizamos las siguientes variables(let)
let izquierda = carruseljs.scrollLeft - carruseljs.clientw
let intervalo = null
let paso = 1
//lo que pasara automaticamente

const start = () =>{
    intervalo = setInterval(function(){
        carruseljs.scrollLeft = carruseljs.scrollLeft + paso
        //si la lista es igual a la variable izq --> avanzara de 1 en 1
        if(carruseljs.scrollLeft === izquierda){
            paso = paso *-1
        }
        else if(carruseljs.scrollLeft === 0){
            paso = paso *-1
        }
    },10
    )
}

//que pasara cuando se detenga
const stop = () =>{
    clearInterval(intervalo)
}

//creamos un evento para detener la accion al pasar el mouse
carruseljs.addEventListener("mouseover",() =>{
    stop()
})

carruseljs.addEventListener("mouseout",() =>{
    start()
})
//ya esta funcionando
start();