const nombres = [
    "Alberto", "Valeria", "Fernando", "Gloria", "Enrique", "Natalia", "Santiago", 
    "Patricia", "Raúl", "Verónica", "Ricardo", "Adriana", "Eduardo", 
    "Marina", "Esteban", "Gabriela", "Hugo", "Olga", "Daniel", "Rosa"
];

const apellidos = [
    "García", "Martínez", "Rodríguez", "López", "Hernández", 
    "González", "Pérez", "Sánchez", "Ramírez", "Cruz", 
    "Flores", "Rivera", "Torres", "Vargas", "Romero", 
    "Gómez", "Fernández", "Castillo", "Ortiz", "Ramos"
];


function generarNombre() {
    const indiceAleatorio = Math.floor(Math.random() * nombres.length);
    const nombreAleatorio = `${nombres[indiceAleatorio]} ${apellidos[indiceAleatorio]}`;
    document.getElementById("nombre").value = nombreAleatorio;
}
