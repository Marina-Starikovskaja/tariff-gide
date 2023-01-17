/*
 * 1. Открыть и закрыть по кнопке
 * 2. Закрыть по клику в бекдроп: onBackDropClick
 * 3. Закрыть по ESC: onEscapeKeypress
 *
 * В CSS есть класс show-modal, который необходимо добавить на body при открытии модалки
 */

const refs = {
  openStepBtn: document.querySelector('[data-action="open-step"]'),
  closeModalBtn: document.querySelector('[data-action="close-modal"]'),
  // backdrop: document.querySelector('.js-backdrop'),
};

refs.openStepBtn.addEventListener('click', onOpenStep);
refs.closeModalBtn.addEventListener('click', onCloseModal);
// refs.backdrop.addEventListener('click', onBackdropClick);

function onOpenStep() {
  // window.addEventListener('keydown', onEscKeyPress);
  document.body.classList.add('show-step');
  document.body.classList.add('hide-box')
}



function onCloseModal() {
  // window.removeEventListener('keydown', onEscKeyPress);
  document.body.classList.remove('show-step');
  document.body.classList.remove('hide-box');
}

// function onBackdropClick(event) {
//   if (event.currentTarget === event.target) {
//     console.log('Кликнули именно в бекдроп!!!!');
//     onCloseModal();
//   }
// }

// function onEscKeyPress(event) {
//   const ESC_KEY_CODE = 'Escape';
//   const isEscKey = event.code === ESC_KEY_CODE;

//   if (isEscKey) {
//     onCloseModal();
//   }
// }