let array=[10, 20, 30, 40, 50];
function reduceArray(){
    const suma = array.reduce((sumando, valor) => sumando + valor, 0);
    const producto = array.reduce((multiplicando, valor) => multiplicando * valor, 1);

    console.log("La suma del array es: " + suma + " y el producto: " + producto);
}
reduceArray();