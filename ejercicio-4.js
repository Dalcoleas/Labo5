function decimalToBinary (n) {
    var ans = [];
    while(n >= 2) {
        ans.push(n % 2);
        n = Math.floor(n / 2);
    }
    ans.push(n % 2);
    ans.push(Math.floor(n / 2));
    return (ans.reverse().join("")-'0');
}