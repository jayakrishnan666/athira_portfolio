const filters = document.querySelector('.filters');
const cards = [...document.querySelectorAll('.case')];
const results = document.querySelector('#filter-status');

filters.hidden = false;
filters.addEventListener('click', (event) => {
  const selected = event.target.closest('button[data-filter]');
  if (!selected) return;

  for (const button of filters.querySelectorAll('button')) {
    button.setAttribute('aria-pressed', String(button === selected));
  }

  const filter = selected.dataset.filter;
  let visibleCount = 0;
  for (const card of cards) {
    card.hidden = filter !== 'all' && !card.dataset.category.split(' ').includes(filter);
    visibleCount += Number(!card.hidden);
  }
  results.textContent = `${visibleCount} client case ${visibleCount === 1 ? 'study' : 'studies'} shown.`;
});
