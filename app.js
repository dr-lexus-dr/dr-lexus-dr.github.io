const root = document.documentElement;
const toggle = document.getElementById('theme-toggle');
function syncTheme() {
  const light = root.dataset.theme === 'light';
  toggle.setAttribute('aria-label', light ? 'Switch to dark theme' : 'Switch to light theme');
  toggle.setAttribute('aria-pressed', String(light));
  document.getElementById('theme-symbol').textContent = light ? '☾' : '☼';
  document.getElementById('theme-color').content = light ? '#f6f6f4' : '#09090b';
}
toggle.addEventListener('click', () => {
  root.dataset.theme = root.dataset.theme === 'light' ? 'dark' : 'light';
  try { localStorage.setItem('lexus-theme', root.dataset.theme); } catch (e) {}
  syncTheme();
});
syncTheme();
document.getElementById('year').textContent = new Date().getFullYear();
