let arr = ["This", "is", "a", "sentence."];
function printOutString() {
    const resultado = arr.join(' ');
    document.getElementById('exercise1').textContent = resultado;
}
printOutString();