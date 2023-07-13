const grade = prompt('POR FAVOR DIME CUAL HA SIDO TU CALIFICACION , PARA PODER ASIGNARTE ALGUN NIVEL')

if(grade >= 0 && grade <3 ){
    alert('NIVEL: MUY DEFICIENTE')
}
else if(grade >= 3 && grade < 5){
alert('NIVEL: INSUFICIENTE')
}
else if(grade >=5 && grade <6){
    alert('NIVEL: SUFICIENTE')

}
else if(grade >=6 && grade <7){
    alert('NIVEL: BIEN')

}
else if(grade >=7 && grade <9)
{
    alert('NIVEL: NOTABLE')
}
else if (grade >=9 && grade <=10)
{
    alert('NIVEL: SOBRESALIENTE')

}
else{
    alert('NO ES UN VALOR DENTRO DEL RANGO')
}
