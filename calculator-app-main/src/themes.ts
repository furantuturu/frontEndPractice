const toggleSlider = document.querySelector('.toggle-slider') as HTMLDivElement;
const sliderBall = document.querySelector('[data-ball]') as HTMLButtonElement;

function themeToggle(e: Event): void {
  const ball = e.target as HTMLElement;

  let xPos: number;

  if (document.body.classList.contains('theme-one')) {
    document.body.classList.replace('theme-one', 'theme-two');
    xPos = toggleSlider.offsetWidth / 2 - ball.offsetLeft * 3;
  } else if (document.body.classList.contains('theme-two')) {
    document.body.classList.replace('theme-two', 'theme-three');
    xPos = toggleSlider.offsetWidth - ball.offsetLeft * 6;
  } else if (document.body.classList.contains('theme-three')) {
    document.body.classList.replace('theme-three', 'theme-one');
    xPos = 0;
  } else {
    return;
  }

  sliderBall.style.transform = `translateX(${xPos}px)`;
}

sliderBall.addEventListener('click', themeToggle);
