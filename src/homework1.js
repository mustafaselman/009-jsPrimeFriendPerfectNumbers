function primeNumberControl(...numbers) {
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] < 3 || isNaN(numbers[i])) 
            console.log(numbers[i]+" is not a valid number");  
        for (var j = 2; j < numbers[i]; j++) {
            
            if (numbers[i]%j==0) {
                console.log(numbers[i]+" is not a prime number");
                break;
            }
            
            }
            if (numbers[i]==j) {
                console.log(numbers[i]+" is a prime number");
               
            
           
        }
    }
}
let product2 = {productName:"Elma", unitPrice:10, quantity:5}

primeNumberControl(1,12, 25, 46, 37, 11, "sasas", ["aaa","ss"], product2.productName, product2.unitPrice, product2.quantity)
