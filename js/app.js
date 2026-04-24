var _dr_ready = false, _mew_ready = false;
function openTracker(which) {
  document.getElementById('home').style.display = 'none';
  document.getElementById('dr-screen').classList.remove('active');
  document.getElementById('mew-screen').classList.remove('active');
  document.getElementById(which + '-screen').classList.add('active');
  document.getElementById('back-btn').classList.add('visible');
  window.scrollTo(0, 0);
  if (which === 'dr' && !_dr_ready) { _dr_ready = true; DR_init(); }
  if (which === 'mew' && !_mew_ready) { _mew_ready = true; MEW_init(); }
}
function goHome() {
  document.getElementById('dr-screen').classList.remove('active');
  document.getElementById('mew-screen').classList.remove('active');
  document.getElementById('home').style.display = 'flex';
  document.getElementById('back-btn').classList.remove('visible');
  window.scrollTo(0, 0);
}
// ── DESTINED RIVALS ──
