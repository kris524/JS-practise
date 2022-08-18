function countBy(x, n) {
    let z = [];
    for (let i = 1; i<=n; i++){

        z.push(i*x)
    }

    console.log(z)
}

countBy(1,10)