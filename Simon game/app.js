let gameseq=[];
let userseq=[];
let highestScore=0;
let btns=["yellow","red","purple","green"];

let start=false;
let level=0;

let h2=document.querySelector("h2");
let h3=document.querySelector("h3");
h3.innerHTML=`Highest Score is: ${highestScore}`;

document.addEventListener("keypress",function(){
    if(start==false){
        console.log("game is started");
        start=true;
        levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },200);
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },250);

}

function levelUp(){
    userseq=[];
    level++;
    highestscore();
    h2.innerText=`level ${level}`;

    // random btn choose

    let randIdx=Math.floor(Math.random()*3);
    let randColor=btns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`);
    // console.log(randIdx);
    // console.log(randColor);
    // console.dir(randBtn);
    gameseq.push(randColor);
    console.log(gameseq);
    
    gameFlash(randBtn);
}

function highestscore(){
    
    if(highestScore<level){
        highestScore++;    
    }else{
        h3.innerHTML=`Highest Score is: ${highestScore}`;
    }
}
function checkAns(idx){
    // console.log("current level: " + level);
    if(userseq[idx] === gameseq[idx]){
        if(userseq.length == gameseq.length){
            setTimeout(levelUp,1000);
            
        }
    }else{
        h2.innerHTML=`Game Over! your score was <b>${level}</b> <br> Press any key to start.`; 
        h3.innerHTML=`Highest Score is: ${highestScore}`;
        document.querySelector('body').style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector('body').style.backgroundColor="white";
        },150);
        reset();
    }
}

function btnPress(){
    let btn=this;
    userFlash(btn);
    userColor=btn.getAttribute("id");
    userseq.push(userColor);

    checkAns(userseq.length-1);
    
}

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    start=false;
    gameseq=[];
    userseq=[];
    level=0;
    
}