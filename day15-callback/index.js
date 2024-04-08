let head = document.createElement('h1');
head.innerHTML ="Countdown";
document.body.append(head);

let count = document.createElement('h1');
count.setAttribute('class','container');

let clear = 11;
let time = setInterval(num,1000)
let num = ()=>{
    clear = clear-1;
    count.innerHTML = clear;
    if (clear == 0){
        clearInterval(time)
        count.innerText = ("Happy Independence Day");
    }
}


document.body.append(count);