function countNumber(x){
    var positiveNum = 0;
    for(var i = 0; i<x.length; i++){
        // console.log(x[i]);
        if(x[i] > 0 ){
            positiveNum +=1;
        }else 
        if(x[i]){

        }
    }
    console.log(positiveNum)
}



countNumber([1,5,3,2,8])