let grad=function (score='0',totalScore='0') {
    let gradeParcent=(score/totalScore)*100
    let grade =''
    console.log(gradeParcent)
    if ( gradeParcent<40){
        grade='F'
        
    }else if(gradeParcent<=41 ||gradeParcent<=50 ){
        grade='E'
        
    }else if(gradeParcent<=51 ||gradeParcent<=60 ){
        grade='D'
        
    }else if(gradeParcent<=61 ||gradeParcent<=70 ){
        grade='C'
        
    }
    else if(gradeParcent<=71 ||gradeParcent<80 ){
        grade='B'
        
    }
    else if(gradeParcent<=81 ||gradeParcent<=100 ){
        grade='A'
        
    }
    console.log(`you got ${grade} ${gradeParcent}%`)
}
grad(18,20)