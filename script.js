function showScreen(n) {
  document.querySelectorAll('.screen').forEach((s, i) => {
    s.classList.toggle('active', i === n - 1);
  });
}

showScreen(1);
