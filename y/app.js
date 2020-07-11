var min=0;
var sec=0
var mSec=0;
var minh=document.getElementById('min');
var sech=document.getElementById('sec');
var msech=document.getElementById('mSec');
var interval;
function timer(){
    mSec++
msech.innerHTML=mSec;
if(mSec >=100){
    sec++
    sech.innerHTML=sec;
    mSec=0;
}else if(sec>=60){
    min++
    minh.innerHTML=min;
    min=0;
}
    }
    function start(){
interval=setInterval(timer,10)
document.getElementById('start').disabled=true;
    }
    function stop(){
        clearInterval(interval)
        document.getElementById('start').disabled=false;
    }
    function reset(){
        min=0;
        sec=0;
        mSec=0;
        minh.innerHTML=min;
        sech.innerHTML=sec;
        msech.innerHTML=mSec;

        clearInterval(interval)
        document.getElementById('start').disabled=false;
    }
