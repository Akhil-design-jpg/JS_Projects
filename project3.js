const clock  = document.getElementById('clock');
const clock2 = document.getElementById('clock2');

// let date = new Date()
// console.log(date.toLocaleTimeString());


// jab takk program chalega tab takk clock chalti rahegi
setInterval(function(){
    let date = new Date()
    // console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString();
  
},1000)


setInterval(function(){
    let date = new Date()
    // console.log(date.toLocaleTimeString());
    clock2.innerHTML = date.toDateString();
  
},1000)




// like setTimeout for having 1000ms - 1 sec
