let cadena = [];

while(true)
{
    let array = prompt('INTRODUCE UNA CADENA O PON CANCELAR');

    if(array === null)
    {
        break;
    }
    cadena.push(array);
}

let resultado = cadena.join('-');
console.log(resultado);