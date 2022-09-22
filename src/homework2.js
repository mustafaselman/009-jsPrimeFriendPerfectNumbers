function controlFriendNumbers(number1,number2) {
    let toplam1 = 0 ;
    let toplam2 = 0 ;
    for (var i = 1; i < number1; i++){
        if (number1%i==0) {
            toplam1 = toplam1 + i ;
        }
    }
    for (var i = 1; i < number2; i++){
        if (number2%i==0) {   
            toplam2 = toplam2 + i ;
        }
    }
    if (number1 == toplam2 && number2 == toplam1){
        console.log(number1 + " and " + number2 + " are friend numbers");
    }else{
        console.log(number1 + " and " + number2 + " are not friend numbers");
    }  
    
    
}
controlFriendNumbers(1184 , 1210)
//hint: friend numbers = (220, 284),(1184, 1210),(2620,2924),(5020, 5564), (6232, 6368), (10744, 10856), (12285, 14595), (17296, 18416), (63020, 76084) and (66928, 66992)