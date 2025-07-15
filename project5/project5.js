const ranColor = function(){
  const hex = '0123456789ABCDEF'
  let color = "#"
  
  for(let i = 0; i < 6 ; i++){
    color += hex[Math.floor((Math.random()*16))]
  }
  return color;
}


let colorchange
const startChangingColor = function(){
 if(!colorchange){
  colorchange = setInterval(changebg ,1000)
 }
  function changebg(){
    document.body.style.backgroundColor = ranColor();
  }
}

const stopChangingColor = function(){
  clearInterval(colorchange)
  colorchange = null;
}

document.querySelector('#start').addEventListener('click',startChangingColor)

document.querySelector('#stop').addEventListener('click',stopChangingColor)