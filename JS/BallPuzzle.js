const temp=document.getElementsByClassName("ballBasket");
let count=0;
for(let i in temp){
    temp[i].addEventListener("click", function(a) {
        //console.log(temp[i].childNodes);
        if (temp[i].childNodes.length>1 && count < 1) {
            //alert("공 선택");
            console.log(temp[i].firstChild);
            while(1){
                if(temp[i].firstChild.nodeName!="#text"){
                    selectionBall(temp[i].firstChild);
                    break;
                }
                else{
                    temp[i].removeChild(temp[i].firstChild);
                }
            }
        }
        else{
            if(count==1)
            {
                let temp2=document.getElementsByClassName("clickBall")[0];
                temp[i].appendChild(temp2);
                temp2.classList.remove('clickBall');
                count=0;
            }else{
                alert("다시 선택하세요.");
            }
        }
    })
}

function selectionBall(ball) {
    console.log(ball);  
    ball.classList.add('clickBall');
    count=1;
}