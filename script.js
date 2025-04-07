let teste1 = 0;
let teste2 = 0;
let somaNum2 = 0;
let somaNum1 = 0;

    
    
document.getElementById("time2win").style.display = "none";
document.querySelector("#ganhador > h1").style.display = "none";
document.getElementById("time1win").style.display = "none";

    document.querySelectorAll(".marcar").forEach((element) => {
            let num2 = document.getElementById("num2");
            let num1 = document.getElementById("num1");
            console.log(num2);
            
            
            
    element.addEventListener('click', function(){
        let dife = document.querySelector("#diferenca > h1").innerHTML;
        

       
        if(somaNum2 < 26 && somaNum1 < 26){
        if(element.parentElement.id == 'time2'){
           if(somaNum2 > 24){
            document.querySelector("#ganhador > h1").style.display = "flex";
            document.getElementById("time2win").style.display = "flex";
            
            let end2 = teste2 - teste1;
            let dife2 = document.querySelector("#diferenca > h1");
            console.log(dife);
            dife2.innerHTML = "Diferença de pontos: "+ end2;
            
        }else{
            somaNum2++;
            teste2++;
            num2.innerHTML = teste2;
            
            console.log(teste2)
        }
            
                
                
                
                
            }else if(element.parentElement.id == 'time1'){
               
                
             if(somaNum1 > 24){
                document.querySelector("#ganhador > h1").style.display = "flex";
                document.getElementById("time1win").style.display = "flex";
                
            let end1 = teste1 - teste2;
            let dife1 = document.querySelector("#diferenca > h1");
            console.log(dife1);
            
            dife1.innerHTML = "Diferença de pontos: "+ end1; 
            
        }else{
            somaNum1++;
                teste1++
                num1.innerHTML = teste1;
                console.log(num1)
                console.log(teste1)
        }  
                
        
                
        } 
    
        }else{
            somaNum1 = somaNum1 + 0;
            somaNum2 = somaNum2 + 0;
            
          

        }
       

    

})
    });
let ontime = true;
    document.querySelector("#finalizarJogo > button").addEventListener("click", function(){        
        
        if(ontime === true){
        document.querySelector("#ganhador > h1").style.display = "flex";
        let ende1 = teste1 - teste2;
        let ende2 = teste2 - teste1;
        if(teste1 > teste2){
            somaNum1 = somaNum1 + 0;
            somaNum2 = somaNum2 + 0;
            teste1 = teste1 + 0;
            teste2 = teste2 + 0;
            document.getElementById("time1win").style.display = "flex";
        
        
        let dife1 = document.querySelector("#diferenca > h1");
        console.log(dife1);
      
        dife1.innerHTML = "Diferença de pontos: "+ ende1; 
        
    }else if(teste2 > teste1){
        somaNum1 = somaNum1 + 0;
        somaNum2 = somaNum2 + 0;
        teste1 = teste1 + 0;
        teste2 = teste2 + 0;
        document.getElementById("time2win").style.display = "flex";
        
        
        let dife2 = document.querySelector("#diferenca > h1");
      
        dife2.innerHTML = "Diferença de pontos: "+ ende2;

    }
    teste1 = teste1 + 0;
    teste2 = teste2 + 0;
    ontime = false;
}

         });
        