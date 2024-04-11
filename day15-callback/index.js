

let count = document.getElementById('container');

let countdown = ()=>{
    let time = 11;
    let clear = setInterval(()=>{
       time = time-1;
       count.innerText = time;
       if(time==0){
        clearInterval(clear)
        count.innerText = ("Happy Independence Day")
       }
    },1000);
}
countdown();
