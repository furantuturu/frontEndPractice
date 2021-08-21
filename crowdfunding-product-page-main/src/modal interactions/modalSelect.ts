const radios = document.querySelectorAll(
  'input[name=pledge]',
) as NodeListOf<HTMLInputElement>;
const modalPledges = document.querySelectorAll(
  '.modal_pledge',
) as NodeListOf<HTMLDivElement>;

// function for selected state
radios.forEach((rad: HTMLInputElement, i: number) => {
  rad.addEventListener('click', () => {
    modalPledges.forEach((modalPledge) =>
      modalPledge.classList.remove('checked'),
    );

    switch (rad.checked) {
      case true:
        modalPledges[i].classList.add('checked');
        break;
    }
  });
});
