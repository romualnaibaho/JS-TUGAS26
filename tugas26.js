function cekInfinity(){
    var array = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16];

    for(let i = 0; i < array.length; i++){
        let finite = Number.isFinite(array[i]);
        if(finite){
            console.log("Angka", array[i], "IS FINITE.");
        }else{
            console.log("Angka", array[i], "IS NOT FINITE.");
        }
    }
}

cekInfinity();