const root = document.documentElement;
let cursorX = 50;
let cursorY = 50;

function updateBackground() {
  root.style.setProperty('--bg-x', `${cursorX}%`);
  root.style.setProperty('--bg-y', `${cursorY}%`);
  requestAnimationFrame(updateBackground);
}

document.addEventListener('pointermove', (event) => {
  cursorX = (event.clientX / window.innerWidth) * 100;
  cursorY = (event.clientY / window.innerHeight) * 100;
});

requestAnimationFrame(updateBackground);
