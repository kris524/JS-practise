function smash (words) {
    let final_word = ""
    for (var i =0; i<words.length; i++) {
        

        final_word = final_word.concat(" ", words[i])
    }

    final_word = final_word.trim()
    console.log(final_word)
 }

//  smash(['hello', 'world'])

function smash2(words) {
    console.log(words.join(" "))
    return words.join(" ")

}
