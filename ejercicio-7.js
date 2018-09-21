function bis(año) {
    var año;
    if(año % 4 == 0 && año % 100 != 0 || año % 400 == 0){
        return (año + ' es bisiesto');
    }
    return (año + ' no es bisiesto');
}