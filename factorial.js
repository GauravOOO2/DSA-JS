var fact1 = 5;

var output = 1;

function factorial(){
    for(var i = 1; i<fact1; i++){
        output = output*i
    }
    console.log(output);
}

factorial()