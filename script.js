function toggleTheme() {
  document.body.classList.toggle('light');
  const isLight = document.body.classList.contains('light');
  localStorage.setItem('theme', isLight ? 'light' : 'dark');

  const btn = document.getElementById('theme-btn');
  if (btn) btn.textContent = isLight ? '🌙 tema' : '☀️ tema';
}

function filterCards() {
  const input = document.getElementById('search').value.toLowerCase();
  const cards = document.querySelectorAll('.card');
  let visible = 0;

  cards.forEach(card => {
    const text = card.innerText.toLowerCase();
    const show = text.includes(input);
    card.style.display = show ? 'flex' : 'none';
    if (show) visible++;
  });
}

