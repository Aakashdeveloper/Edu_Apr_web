var a = 0
var b = 0;

function main(){
    var i =0;
    var out = setInterval(progress,1000)
    function progress(){
        if(b>80){
            clearInterval(out)
        }else{
            a=a+20
            b = parseInt(i)+parseInt(a)
            if(b==0||b =="undefined"){
                document.getElementsByClassName('progress-bar')[0].style.width="0%";
                document.getElementById('data').innerText="0% Complete"
            }else if(b==20){
                document.getElementsByClassName('progress-bar')[0].style.width="20%";
                document.getElementById('data').innerText="20% Complete"
            } else if(b==40){
                document.getElementsByClassName('progress-bar')[0].style.width="40%";
                document.getElementById('data').innerText="40% Complete"
            } else if(b==60){
                document.getElementsByClassName('progress-bar')[0].style.width="60%";
                document.getElementById('data').innerText="60% Complete"
            }else if(b==80){
                document.getElementsByClassName('progress-bar')[0].style.width="80%";
                document.getElementById('data').innerText="80% Complete"
            }else if(b==100){
                document.getElementsByClassName('progress-bar')[0].style.width="100%";
                document.getElementById('data').innerText="100% Complete"
                document.getElementById("message").innerText="Page Loaded SuccessFully"
            } 
        }
    }
}