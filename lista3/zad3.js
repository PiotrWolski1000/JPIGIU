function* zad3(n = 100000) {
    for(let i = 0; i < n; i++){
        let suma = 0
        let str = i.toString()
        
        for(let j = 0;j < str.length;j++){
            if(i % parseInt(str[j]) == 0){
                
                suma += parseInt(str[j])
                if(j == str.length-1 && i % suma == 0)
                    yield i
            }
        }
    }
}

console.log(zad3())


for (let x of zad3())
    console.log(x)