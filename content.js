(() => {
  if (window.__commentRemover_ran__) return;
  window.__commentRemover_ran__ = true;

  const el =
    document.querySelector('#comments') ||
    document.querySelector('.comments-area') ||
    document.querySelector('.comment-list');

  if (el) {
    el.remove();
    console.log('Comments removed');
  } else {
    console.log('No comments element found');
  }
})();
