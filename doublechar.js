function doubleChar(str) {
    // Your code here
    let new_str = ""
    for (let i=0; i< str.length; i++){
        new_str = new_str.concat(str[i]+str[i])
        // console.log(str[i])

    }
    console.log(new_str)
    return new_str
  }


doubleChar("String")