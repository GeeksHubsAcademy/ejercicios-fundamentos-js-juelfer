
// ej 9
// Rellena la matriz como la siguiente utilizando bucles for anidados
// let matriz = [
//   ['00','01','02'],
//   ['10','11','12'],
//   ['20','21','22']
// ];

let matriz = [
    [],
    [],
    []
]

for (x = 0; x < 3; x++) {
    for (y = 0; y < 3; y++) {
        matriz[x][y] = x.toString() + y.toString();
    }
}

console.log(matriz);