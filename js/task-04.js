let counterValue = 0;
const valueSpan = document.getElementById('value');
  valueSpan.textContent = counterValue;

  // Agregar escuchadores de eventos a los botones
  const incrementButton = document.querySelector('[data-action="increment"]');
  const decrementButton = document.querySelector('[data-action="decrement"]');
incrementButton.addEventListener('click', incremento);
decrementButton.addEventListener('click', decremento);

  function incremento(){
    counterValue+=1;
    valueSpan.textContent = counterValue;
  }
  function decremento(){
    counterValue-=1;
    valueSpan.textContent = counterValue;
  };
