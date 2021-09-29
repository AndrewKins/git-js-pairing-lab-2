function OneHundredToFive (){
    for (let i = 100; i > 4; i--){
        console.log(i);
    }
}
// OneHundredToFive ();

function absoluteValue(num){
    if(a===parseInt((num))
         console.log(Math.abs(num));
    else 
        console.log("null") ;
}
// // absoluteValue(-4)

function multiplesOfFourOrSeven (){
    for (let i = 0; i <= 100; i++){
        if( i % 4 === 0 || i % 7 === 0){
            console.log(i);
        }
    }
}
// multiplesOfFourOrSeven()

function square(int){
    let int = 5;
    let num = Math.sqrt(int);
    if (num % 1 == 0)
        console.log(Math.sqrt(int));
    else 
        console.log(int**2);
}

square(5)