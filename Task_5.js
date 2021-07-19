// to create our method we need to create a constructor function that accepts a parameter

function ModifySentence(input) {

    this.replaceSpaces = function() {
        return input.split(' ').join('%20')
    }
}

let modifySentence = new ModifySentence('I am going home')

console.log(modifySentence.replaceSpaces())