function getDivisorsCnt(n){
    // todo
    
    let count = 0;
    for (i=1; i<=n; i++) {
        if (n%i == 0) {
            count+=1
        }
    }
    console.log(count)
}

getDivisorsCnt(12)