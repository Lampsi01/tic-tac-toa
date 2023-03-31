

 

 let player= "X" ; 

 let gameState = []; 
 
 let text = document.getElementById("info"); 

 function disable() {
    for (let j=0; j<9 ;j++){
        let button = document.getElementsByTagName("button")[j]; 
        button.disabled =true; 
    }
 }
 
 function TakeData() {
    let winner = false; 
   

    for(let i=1; i<10 ; i++) {
        gameState[i] = document.getElementById('b'+i).innerHTML; 

    }
    if (gameState[1] == gameState[2] && gameState[2] == gameState[3] && gameState[1] !=''){
       document.getElementById("b"+1).style.backgroundColor="green"; 
       document.getElementById("b"+2).style.backgroundColor="green"; 
       document.getElementById("b"+3).style.backgroundColor="green"; 
       text.innerHTML=gameState[1] +" is the winner"
       winner = true; 
       disable(); 
    }else if(gameState[1] == gameState[4] && gameState[4] == gameState[7] && gameState[1] !=''){
       document.getElementById("b"+1).style.backgroundColor="green"; 
       document.getElementById("b"+4).style.backgroundColor="green"; 
       document.getElementById("b"+7).style.backgroundColor="green";
       text.innerHTML=gameState[1] +" is the winner"
       winner = true; 
       disable(); 
    }
    else if(gameState[1] == gameState[5] && gameState[5] == gameState[9] && gameState[1] !=''){
        document.getElementById("b"+1).style.backgroundColor="green"; 
       document.getElementById("b"+5).style.backgroundColor="green"; 
       document.getElementById("b"+9).style.backgroundColor="green";
        text.innerHTML=gameState[1] +" is the winner"
        winner = true; 
        disable(); 
     }
     else if(gameState[3] == gameState[5] && gameState[5] == gameState[7] && gameState[3] !=''){
        document.getElementById("b"+3).style.backgroundColor="green"; 
       document.getElementById("b"+5).style.backgroundColor="green"; 
       document.getElementById("b"+7).style.backgroundColor="green";
        text.innerHTML=gameState[3] +" is the winner"
        winner = true; 
        disable(); 
     }
     else if(gameState[3] == gameState[6] && gameState[6] == gameState[9] && gameState[3] !=''){
        document.getElementById("b"+3).style.backgroundColor="green"; 
       document.getElementById("b"+6).style.backgroundColor="green"; 
       document.getElementById("b"+9).style.backgroundColor="green";
        text.innerHTML=gameState[3] +" is the winner"
        winner = true; 
        disable(); 
     }
     else if(gameState[7] == gameState[8] && gameState[8] == gameState[9] && gameState[7] !=''){
        document.getElementById("b"+7).style.backgroundColor="green"; 
       document.getElementById("b"+8).style.backgroundColor="green"; 
       document.getElementById("b"+9).style.backgroundColor="green";
        text.innerHTML=gameState[7] +" is the winner"
        winner = true; 
        disable(); 
     }
     else if(gameState[2] == gameState[5] && gameState[5] == gameState[8] && gameState[2] !=''){
        document.getElementById("b"+2).style.backgroundColor="green"; 
       document.getElementById("b"+5).style.backgroundColor="green"; 
       document.getElementById("b"+8).style.backgroundColor="green";
        text.innerHTML=gameState[2] +" is the winner"
        winner = true; 
        disable(); 
     }
     else if(gameState[4] == gameState[5] && gameState[5] == gameState[6] && gameState[4] !=''){
        document.getElementById("b"+4).style.backgroundColor="green"; 
       document.getElementById("b"+5).style.backgroundColor="green"; 
       document.getElementById("b"+6).style.backgroundColor="green";
        text.innerHTML=gameState[7] +" is the winner"
        winner = true; 
        disable(); 
     } else if(gameState[1] !="" && gameState[1] !="" && gameState[3] != "" && gameState[4] !="" && gameState[5] !="" && gameState[6] != "" && gameState[6] != "" && gameState[7] !="" && gameState[8] != "" && gameState[9] !="" && winner==false){
        disable()
        text.innerHTML= "it A draw"; 

     }
         
     
     
         
     
     

 }

 function rest() {
         
     location.reload(); 
 }
 


 function fill(id) {
    let Mybox= document.getElementById(id); 
    

    if(player ==="X" && Mybox.innerHTML ==="") {
        Mybox.innerHTML="X"; 
        player ="O"; 
        text.innerHTML="O";

    }else if(player ==="O" && Mybox.innerHTML==="") {
        Mybox.innerHTML="O"; 
        player ="X"; 
        text.innerHTML="X";
    }
    TakeData()

 }
  
 