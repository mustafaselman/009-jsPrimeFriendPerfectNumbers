function perfectNumber() {
    
    for (var i = 1; i < 1001; i++) {
        var toplam =0;
        for (var j = 1; j < i+1; j++) {
            if (i%j==0) {
                toplam=toplam+j;
                // console.log(toplam,i);
}
        }
        if (toplam/2==i){
            console.log(i + " is a perfectNumber");
        }
        
    }
}
perfectNumber();