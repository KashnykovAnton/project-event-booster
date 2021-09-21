import { refs } from './getRefs';

  refs.openModalBtn.addEventListener('click',openModalTeam);
  refs.closeModalBtn.addEventListener('click', closeModalTeam);
  refs.modalTeamBackdrop.addEventListener('click', closeModalTeamOverlay);
  window.addEventListener('keydown', closeModalTeamESC);

  function openModalTeam() {
    document.body.classList.toggle("modal-open");
    refs.modalTeamBackdrop.classList.remove('is-close');
  }


function closeModalTeamESC(event) {
    if (event.key === 'Escape') {
        closeModalTeam(event);
    }
}

function closeModalTeamOverlay(event) {
    if (event.target === event.currentTarget) {
        closeModalTeam();
    }
}

function closeModalTeam(event) {
  document.body.classList.toggle('modal-open');
  refs.modalTeamBackdrop.classList.add('is-close');
}