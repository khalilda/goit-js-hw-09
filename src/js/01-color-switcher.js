
const refs = {
    body: document.querySelector('body'),
    start: document.querySelector('[data-start]'),
    stop: document.querySelector('[data-stop]'),
  };
  
 
  const INTERVAL = 1000;
  let colorInterval = null;
  refs.stop.setAttribute('disabled', true);
  
 
  function getRandomHexColor() {
    return (refs.body.style.backgroundColor = `#${Math.floor(
      Math.random() * 16777215
    )
      .toString(16)
      .padStart(6, 0)}`);
  }
  
  refs.start.addEventListener('click', onClickStart);
  refs.stop.addEventListener('click', onClickStop);
  
 
  function onClickStart() {
    refs.start.setAttribute('disabled', true);
    refs.stop.removeAttribute('disabled');
    colorInterval = setInterval(() => {
      getRandomHexColor();
    }, INTERVAL);
  }
  
 
  function onClickStop() {
    clearInterval(colorInterval);
    refs.start.removeAttribute('disabled');
    refs.stop.setAttribute('disabled', true);
  }
  

  