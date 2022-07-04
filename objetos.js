datos = {
    nombre: "francisco",
    apellido: "vasquez",
    edad: 31,
    altura: 1.67,
    eresDesarrollador: true
}
miEdad = datos.edad;
console.log(miEdad);

lista =[ 
    {...datos}, 
    {
        nombre: "Juan",
        apellido: "Mendez",
        edad: 32,
        altura: 1.70,
        eresDesarrollador: true
    },
    {
        nombre: "Luis",
        apellido: "Gonzales",
        edad: 30,
        altura: 1.68,
        eresDesarrollador: false
    }
]
console.log(lista);

lista.sort((a, b) => b.edad - a.edad)

console.log(lista)