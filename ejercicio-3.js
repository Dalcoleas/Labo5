function fib(n){
    var a=0;
    var b=1;
    var c = a + ',';
    console.log(a+" ");
    for(i=0; i<n-1;i++){
        var auxiliar = a;
        a = b;
        b = auxiliar + b;
        c = c + a + ',';
    }
    return c;
 }
