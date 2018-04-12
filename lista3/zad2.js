// function* liczby(n) {
//     let index = 0
    
//     while (index < n)
//         yield index++
// }
// for (let x of liczby(10))
//     console.log(x);

function* dzielniki(n) {
    
    let i = n/2
    
    while(i>0){
        if(n%i == 0){
            yield i
        }
        i--
    }
}
// let n = 10
// console.log("Dzielniki dla liczby: ", n)
// for (let x of dzielniki(n))
//     console.log(x)

function* prime(n = 100000) {
    for(let i = 2 ; i <= n; i++){
        for(let j = 2;j<=Math.round(Math.sqrt(i));j++){

            if(i % j != 0){
                if(j+1 >= Math.round(Math.sqrt(i))){
                    yield i
                    break
                }
            }else 
                break
            
        }
    }
}

for (let x of prime())
    console.log(x)

