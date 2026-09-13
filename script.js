/* CINEMATIC WEDDING INVITATION — B. Vineeth & S. Aarthi */
const opening = document.getElementById('opening');
const openButton = document.getElementById('openInvitation');

document.body.classList.add('locked');

openButton.addEventListener('click', () => {
  opening.classList.add('is-open');
  document.body.classList.remove('locked');
  setTimeout(() => document.getElementById('home')?.scrollIntoView({behavior:'smooth'}), 500);
});

// Reveal sections as the guest scrolls.
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, {threshold: 0.12});

document.querySelectorAll('.reveal-section').forEach(el => revealObserver.observe(el));

// Wedding countdown: 15 November 2026, 7:35 AM local browser time.
const target = new Date('2026-11-15T07:35:00');
const fields = {
  days: document.getElementById('days'),
  hours: document.getElementById('hours'),
  minutes: document.getElementById('minutes'),
  seconds: document.getElementById('seconds')
};

function updateCountdown(){
  let diff = target.getTime() - Date.now();
  if (diff <= 0) diff = 0;
  const sec = Math.floor(diff / 1000);
  const days = Math.floor(sec / 86400);
  const hours = Math.floor((sec % 86400) / 3600);
  const minutes = Math.floor((sec % 3600) / 60);
  const seconds = sec % 60;
  fields.days.textContent = String(days).padStart(2,'0');
  fields.hours.textContent = String(hours).padStart(2,'0');
  fields.minutes.textContent = String(minutes).padStart(2,'0');
  fields.seconds.textContent = String(seconds).padStart(2,'0');
}
updateCountdown();
setInterval(updateCountdown, 1000);
