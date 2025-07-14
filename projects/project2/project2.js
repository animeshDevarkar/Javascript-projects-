const form = document.querySelector('form')

form.addEventListener('submit', function(e){
  e.preventDefault();
  
  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const results = document.querySelector('#results')

  if(height ==='' || height === NaN ||height<0)
  {
    results.innerHTML = `Enter Correct Height Value`;
  }else if(weight ==='' || weight === NaN ||weight<0)
  {
     results.innerHTML = `Enter Correct Weight Value`;
  }else{
    const bmi = (weight / ( height * height / 10000)).toFixed(2);

    results.innerHTML =   `<span>${bmi}</span>`;
    
    if(bmi < 18.6){
      alert('Underweight')
    }
    if(bmi > 18 && bmi < 24.9){
      alert('Maintained weight')
    }
    if(bmi > 24.9){
      alert('Overweight')
    }
  }
})