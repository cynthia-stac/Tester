// const button = document.getElementById('main')
// const body = document.querySelector('body')
// const changeBackground = button.addEventListener(('click'), function(e){
//     body.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
//     console.log("Background color changed to: " + body.style.backgroundColor);
// }) 

// console.log("new background")
  const pullArea = document.getElementById('pullArea');
  const bulb = document.getElementById('bulb');

  let isDragging = false;
  let startY = 0;

  pullArea.addEventListener('mousedown', (e) => {
    isDragging = true;
    startY = e.clientY;
  });

  document.addEventListener('mouseup', () => {
    if (isDragging) {
      isDragging = false;
      pullArea.style.transform = 'translateY(0)';
    }
  });

  document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    let diff = e.clientY - startY;
    if (diff > 0 && diff < 80) {
      pullArea.style.transform = `translateY(${diff}px)`;
    }
    if (diff >= 50) {
      bulb.style.background = 'var(--light-on)';
      bulb.style.boxShadow = '0 0 60px yellow';
    } else {
      bulb.style.background = 'var(--light-off)';
      bulb.style.boxShadow = '0 0 20px #000';
    }
  });

