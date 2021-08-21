const modal = document.querySelector('.modal') as HTMLDivElement;
const modalClose = document.querySelector('#modal_close') as HTMLButtonElement;

// CTA BUTTONS
const selectRewardCTA = document.querySelectorAll(
  '.select-reward',
) as NodeListOf<HTMLButtonElement>;

function modalExpand() {
  modal.style.display = 'block';
  modal.setAttribute('aria-expanded', 'true');
}

function modalCollapse() {
  modal.style.display = 'none';
  modal.setAttribute('aria-expanded', 'false');
}

selectRewardCTA.forEach((cta: HTMLButtonElement) =>
  cta.addEventListener('click', modalExpand),
);

modalClose.addEventListener('click', modalCollapse);
