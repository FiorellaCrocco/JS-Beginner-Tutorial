var bulletPosition = 4;

const spinChamber = () => {
	var chamberPosition = Math.floor((Math.random() * 6) + 1);
	return chamberPosition;
};

// Remove the // below and complete the commented lines
const fireGun = (spinnerPosition) => {
    //if (...) return ("You're dead!");
    let retornar;
    if(spinnerPosition==bulletPosition){
        retornar = "You're dead!";
    }else{
        retornar = "Keep playing!";
    }
    return retornar;
};

//console.log(fireGun(...));
console.log(fireGun(spinChamber()));