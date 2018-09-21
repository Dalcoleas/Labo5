function palindromo (cadena){
    if(cadena.split("").reverse().join("") == cadena){
        return true;
    }else{
        return false;
    }
}