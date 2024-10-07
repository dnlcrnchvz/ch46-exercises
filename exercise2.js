    let arrayNumbers=[1, 2, 3, 4, 5];
    function doubleArray(){
        const resultado = arrayNumbers.map(number => number * 2);
        document.getElementById('exercise2').textContent = resultado;
    }
    doubleArray();