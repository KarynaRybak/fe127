let currentLight = 0;
const lights = document.querySelectorAll('.light');
const toggleButton =  document.getElementById('toggleButton');

function toggleLight() {
lights[currentLight].classList.remove('active');
currentLight = (currentLight + 1) % lights.length;
lights[currentLight].classList.add('active');
}

toggleButton.addEventListener('click',toggleLight);

const BLOCK = document.getElementById('block');
  let isResizing = false;

  BLOCK.addEventListener('mousedown', (e) => {
    isResizing = true;
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', () => {
      isResizing = false;
      document.removeEventListener('mousemove', handleMouseMove);
    });
  });

  function handleMouseMove(e) {
    if (isResizing) {
      const newWidth = e.pageX - BLOCK.offsetLeft;
      const newHeight = e.pageY - BLOCK.offsetTop;

      BLOCK.style.width = `${newWidth}px`;
      BLOCK.style.height = `${newHeight}px`;
    }
  }