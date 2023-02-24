const time = document.querySelectorAll(".time")
setInterval(()=>{
    let new_time = new Date();
    time[0].innerHTML = new_time.getHours()+" : "+new_time.getMinutes()+" : "+new_time.getSeconds()
},1000);
