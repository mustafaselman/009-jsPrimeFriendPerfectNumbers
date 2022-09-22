function primeNumbers() {
        console.log("2 is a primeNumber");
    for (var i = 3; i < 1001; i++) {
        
        for (var j = 2; j < i; j++) {
            if (i%j==0) {
                break;
            }
            if (i==j+1){
                console.log(i + " is primeNumber");
            }
        }
    }            

}
primeNumbers();