//PRIMERA ENTREGA PROYECTO FINAL
let option;
const excursiones = [
    {
        id: 1,
        dia: 1,
        excursion: "Paseo de playas",
        estado: "Pendiente",
    },
    {
        id: 2,
        dia: 2,
        excursion: "Excursion y buceo",
        estado: "Pendiente",   
    }
];

const dia = [
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sabado',
    'Domingo',
];

const estado = [
    'En proceso',
    'Pendiente',
    'Finalizado',
];


while(option !== 0) {
    option = Number(prompt('Ingrese una opcion:\n1. Agregar Excursion\n2. Ver Excursiones\n0. Salir'));
    switch (option) {
        case 1:
                const dia = Number(prompt('Ingrese el dia de la semana, de la excursion que desea crear:\n 1. Lunes\n 2. Martes\n 3. Miercoles\n 4. Jueves\n 5. Viernes\n 6. Sabado\n 7. Domingo'));
                const excursion = prompt('Ingrese la excursion:');
                const estado = Number(prompt('Ingrese el estado inicial de la excursion:\n 1. En proceso\n 2. Pendiente\n 3.Finalizada'));
                const id = getLastID() + 1;
                crearExcursion(id, dia, excursion, estado);
            break;
        case 2:
                getExcursionesTodas();
            break;

        case 0:
                alert('Gracias, vuelva pronto'); 
                break;
    
        default:
            alert('La opcion ingresada no es correcta, intente nuevamente');
            break;
    }
}

function crearExcursion(id, dia, excursion, estado) {
    excursiones.push({
        id,
        dia,
        excursion,
        estado: estado[estado - 1],
    });

    // return 'Tarea agregada correctamente con el id ' + id;
}

function getExcursionesTodas(){
    excursiones.forEach((excursion) => console.log(excursion.id + " - " + dia[excursion.dia - 1] + " - " + excursion.excursion + " - " + excursion.estado));
}

function getLastID(){
    return excursiones.length;
}




/*
let option;
const tareas = [
    {
        id: 1,
        dia: 1,
        tarea: "Ir a comer",
        estado: "Pendiente",
    },
    {
        id: 2,
        dia: 2,
        tarea: "Ir a comer",
        estado: "Pendiente",   
    }
];

const dia = [
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sabado',
    'Domingo',
];

const estado = [
    'En proceso',
    'Pendiente',
    'Finalizado',
];


while(option !== 0) {
    option = Number(prompt('Ingrese una opcion:\n1. Agregar Tarea\n2. Ver Tareas\n0. Salir'));
    switch (option) {
        case 1:
                const dia = Number(prompt('Ingrese el dia de la semana, de la tarea que desea crear:\n 1. Lunes\n 2. Martes\n 3. Miercoles\n 4. Jueves\n 5. Viernes\n 6. Sabado\n 7. Domingo'));
                const tarea = prompt('Ingrese la tarea:');
                const estado = Number(prompt('Ingrese el estado inicial de la tarea:\n 1. En proceso\n 2. Pendiente\n 3.Finalizada'));
                const id = getLastID() + 1;
                crearTarea(id, dia, tarea, estado);
            break;
        case 2:
                getTareasTodas();
            break;

        case 0:
                alert('Gracias, vuelva pronto'); 
                break;
    
        default:
            alert('La opcion ingresada no es correcta, intente nuevamente');
            break;
    }
}

function crearTarea(id, dia, tarea, estado) {
    tareas.push({
        id,
        dia,
        tarea,
        estado: estado[estado - 1]
    });

    // return 'Tarea agregada correctamente con el id ' + id;
}

function getTareasTodas(){
    tareas.forEach((tarea) => console.log(tarea.id + " - " + dia [tarea.dia - 1] + " - " + tarea.tarea + " - " + tarea.estado));
}

function getLastID(){
    return tareas.length;
}

*/

