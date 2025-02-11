var Perrera = [
    {raza: "Pastor Aleman", edad: 5, nombre: "Rex", perroID:1},
    {rajson: "Pitbull", edad: 3, nombre: "Toby", perroID:2},
    {raza: "Labrador", edad: 7, nombre: "Firulais", perroID:3},
    {raza: "San Bernardo", edad: 2, nombre: "Boby", perroID:4},
    {raza: "Chihuahua", edad: 1, nombre: "Chispa", perroID:5},
    {raza: "Dalmata", edad: 4, nombre: "Bongo", perroID:6}
];
//segun la edad del perro se ordena de menor a mayor, si se quiere de mayor a menor se cambia el signo de la comparacion
//ademas se busca que se adopte los perros mas mayores del resinto ya que son los que mas se encuentran
function compare_edad(a, b) {

    if (a.edad < b.edad) {
        return -1;
    }
    if (a.edad > b.edad) {
        return 1;
    }
    return 0;
}

console.log(Perrera.sort(compare_edad));