const song = "let it be";
let cancion = [];

function sing(){
    for(let i = 0; i < 12; i++){
        if (i == 4){
            cancion.push("whisper words of wisdom");
        }else if (i == 10){
            cancion.push("there will be an answer");
        }else{
            cancion.push(song);
        }
    }

    return cancion.join(", ");
}

//Your code above ^^^

console.log(sing());