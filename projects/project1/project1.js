const buttons = document.querySelectorAll('.button')

const body = document.querySelector('body')

buttons.forEach(function (button){
  console.log(button);
  button.addEventListener('click', function(onclick){
    console.log(onclick)
    console.log(onclick.target)

    if(onclick.target.id === 'grey'){
      body.style.backgroundColor = onclick.target.id
     }
     if(onclick.target.id === 'white'){
       body.style.backgroundColor = onclick.target.id
    }
    if(onclick.target.id === 'blue'){
      body.style.backgroundColor = onclick.target.id
    }
    if(onclick.target.id === 'yellow'){
      body.style.backgroundColor = onclick.target.id
    }    
  })
})
