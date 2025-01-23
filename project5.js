//generate a random color
const randomColor = function(){
    const hex = "0123456789ABCDEF"// hex values 
    let color = '#'
    for (let i = 0; i < 8 ; i++) {
        console.log(i);
        
        color += hex[Math.floor(Math.random() *16)]
       
    }
    return color;

};

let intervalID;// ab ye global scope mei hai ab ye stop function mei bhi use hosakta hai
const startChangingColor = function(){
if(intervalID == null){
    intervalID = setInterval(changeBgcolor, 1000);
}           // change background color at 1 sec gap
function changeBgcolor(){
    document.body.style.backgroundColor = randomColor();
}

};
const stopChangingColor = function(){

clearInterval(intervalID);
intervalID = null;

};
// Math.floor(math.random() *16) to generate random values 
document.querySelector('#start').addEventListener('click', startChangingColor);
document.querySelector('#stop').addEventListener('click', stopChangingColor);