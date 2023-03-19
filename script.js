var i=0;
var flag=0;
var audio;
var boxes = document.querySelectorAll(".square");
var content=new Array(boxes.length);
var result=document.querySelector(".result");
boxes.forEach((box,index) => {
    box.addEventListener('click', () => {
        if(flag===1) return;
        box.classList.add("res");
        setTimeout(function()
        {
            box.classList.remove("res");
        },100);
        if(box.innerHTML==='') 
        {
            box.innerHTML= (i%2===0) ? 'X' : 'O' ;
            content[index]=box.innerHTML;
            check();
            tie();
            i++;
        }
    });
});
function tie()
{
    var count=0;
    content.forEach(cont => {
        if(cont!=="") count++;
    });
    if(count===9 && flag===0)
    {
        const result=document.querySelector(".result");
        audio=new Audio("sounds/lose.wav");
        audio.play();
        result.innerHTML= ` Tie ` ;
    }
}
function check()
{
    var list=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    for(var j=0;j<8;j++)
    {
        if( (content[list[j][0]]==='X' || content[list[j][0]]==='O') && content[list[j][0]]===content[list[j][1]] && content[list[j][1]]===content[list[j][2]])
        {
            flag = 1;
            audio=new Audio("sounds/win.wav");
            audio.play();
            const result=document.querySelector(".result");
            result.innerHTML= ` ${content[list[j][0]]} Won!! ` ;
            boxes[list[j][0]].classList.add("final");
            boxes[list[j][1]].classList.add("final");
            boxes[list[j][2]].classList.add("final");
            break;
        }
    }
}

function clearAll()
{
    flag=0;
    i=0;
    boxes.forEach((box) => {
        box.classList.remove("final");
        box.innerHTML= '' ;
    });
    content=new Array(boxes.length);
    result=document.querySelector(".result");
    result.innerHTML= `` ;
}


