let body=document.querySelector("body");
let boxes=document.querySelectorAll(".box");
let winnercon=document.querySelector(".winnercon");
let h2=document.createElement("h2");
let h3=document.createElement("h3");
let reset=document.querySelector(".reset");
let newgame=document.querySelector(".new");
let chanceplayer=document.querySelector(".chanceplayer");
let player=true;
function winner(){
    if(boxes[0].innerText=='X' && boxes[1].innerText=='X' && boxes[2].innerText=='X'){
        return "X";
    }
    else if(boxes[3].innerText=='X' && boxes[4].innerText=='X' && boxes[5].innerText=='X'){
        return "X";
    }
    else if(boxes[6].innerText=='X' && boxes[7].innerText=='X' && boxes[8].innerText=='X'){
        return "X";
    }
    else if(boxes[0].innerText=='X' && boxes[3].innerText=='X' && boxes[6].innerText=='X'){
        return "X";
    }
    else if(boxes[1].innerText=='X' && boxes[4].innerText=='X' && boxes[7].innerText=='X'){
        return "X";
    }
    else if(boxes[2].innerText=='X' && boxes[5].innerText=='X' && boxes[8].innerText=='X'){
        return "X";
    }
    else if(boxes[0].innerText=='X' && boxes[4].innerText=='X' && boxes[8].innerText=='X'){
        return "X";
    }
    else if(boxes[2].innerText=='X' && boxes[4].innerText=='X' && boxes[6].innerText=='X'){
        return "X";
    }
    else if(boxes[0].innerText=='O' && boxes[1].innerText=='O' && boxes[2].innerText=='O'){
        return "O";
    }
    else if(boxes[3].innerText=='O' && boxes[4].innerText=='O' && boxes[5].innerText=='O'){
        return "O";
    }
    else if(boxes[6].innerText=='O' && boxes[7].innerText=='O' && boxes[8].innerText=='O'){
        return "O";
    }
    else if(boxes[0].innerText=='O' && boxes[3].innerText=='O' && boxes[6].innerText=='O'){
        return "O";
    }
    else if(boxes[1].innerText=='O' && boxes[4].innerText=='O' && boxes[7].innerText=='O'){
        return "O";
    }
    else if(boxes[2].innerText=='O' && boxes[5].innerText=='O' && boxes[8].innerText=='O'){
        return "O";
    }
    else if(boxes[0].innerText=='O' && boxes[4].innerText=='O' && boxes[8].innerText=='O'){
        return "O";
    }
    else if(boxes[2].innerText=='O' && boxes[4].innerText=='O' && boxes[6].innerText=='O'){
        return "O";
    }
    else {
        return " ";
    }
}
function tief(){
    let check=0;
    for(box of boxes){
        if(box.innerText!="X" && box.innerText!="O"){
            check=1;
        }
    }
    return check;
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(player){
            box.innerText="X";
            
            player=false;
            chanceplayer.innerText="CHANCE OF PLAYER O";
        }
        else{
            box.innerText="O";
            player=true;   
            chanceplayer.innerText="CHANCE OF PLAYER X"; 
        }
        box.style.pointerEvents="none";
        let win=winner();
        if(win=="X" || win=="O"){
            console.log("winner ");
            h2.innerText=`Congratutation!! Winner is ${win}`;
            winnercon.append(h2);
            newgame.classList.remove("hide");
            chanceplayer.innerText=" ";
            for(let i=0;i<boxes.length;i++){
                boxes[i].style.pointerEvents="none";
            }
        }
        let tie=tief();
        if(tie==0){
            console.log("tie");
            h2.innerText=`TIE`;
            winnercon.append(h2);
            newgame.classList.remove("hide");
            chanceplayer.innerText=" ";
            for(let i=0;i<boxes.length;i++){
                boxes[i].style.pointerEvents="none";
            }
        }
    });
});
reset.addEventListener("click",function(){
    console.log("RESET THE GAME");
    for(let i=0;i<boxes.length;i++){
        boxes[i].innerText=" ";
        boxes[i].style.pointerEvents="fill";
    }
    player=true;
    h2.innerText=" ";
    newgame.classList.add("hide");
    chanceplayer.innerText="CHANCE OF PLAYER X";
    
})
newgame.addEventListener("click",function(){
    console.log("RESET THE GAME");
    for(let i=0;i<boxes.length;i++){
        boxes[i].innerText=" ";
        boxes[i].style.pointerEvents="fill";
    }
    player=true;
    h2.innerText=" ";
    newgame.classList.add("hide");
    chanceplayer.innerText="CHANCE OF PLAYER X";
   
})


