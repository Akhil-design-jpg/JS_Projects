const form = document.querySelector('form');

// this use case will give you an empty value
//const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit',function(e){
    e.preventDefault();
    
// parseInt give the string value into an integer value
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `Please give a valid height ${height}`
    }
    else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please give a valid weight ${weight}`
    }

    else{
       const bmi = (weight / ((height*height)/10000)).toFixed(2)
    // tofixed(2) - 2 decimal value takk dikhana bas 
    //show the result
    results.innerHTML = `<span>${bmi}</span>`
   
    }

});