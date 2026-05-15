// ── Receipt toggle ──────────────────────────────────────────────
function toggleReceipt(toggle) {
  const body = toggle.nextElementSibling;
  const isOpen = body.classList.contains('open');
  body.classList.toggle('open', !isOpen);
  toggle.classList.toggle('open', !isOpen);
  positionMarginNotes();
}

// ── TOC smooth scroll ────────────────────────────────────────────
function tocScrollTo(anchorId) {
  const el = document.getElementById(anchorId);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - 24;
  window.scrollTo({ top, behavior: 'smooth' });
}

// ── Dynamic margin note positioning ─────────────────────────────
function positionMarginNotes() {
  const wrap = document.getElementById('art-wrap');
  const margin = document.getElementById('art-margin');
  if (!wrap || !margin) return;

  const wrapTop = wrap.getBoundingClientRect().top + window.scrollY;
  const notes = margin.querySelectorAll('.mn');
  let minTop = 0;

  notes.forEach(note => {
    const refEl = document.getElementById(note.dataset.ref);
    const refTop = refEl
      ? refEl.getBoundingClientRect().top + window.scrollY - wrapTop
      : minTop;
    const actualTop = Math.max(refTop, minTop);
    note.style.top = actualTop + 'px';
    minTop = actualTop + note.offsetHeight + 14;
  });

  const lastNote = margin.querySelector('.mn:last-child');
  if (lastNote) {
    margin.style.height = (parseFloat(lastNote.style.top) + lastNote.offsetHeight + 20) + 'px';
  }
}

// ── Citation hover highlight ─────────────────────────────────────
function initCitationHover() {
  document.querySelectorAll('.cn').forEach(cn => {
    const note = document.getElementById('mn-' + cn.dataset.note);
    cn.addEventListener('mouseenter', () => {
      cn.classList.add('active');
      if (note) note.classList.add('highlight');
    });
    cn.addEventListener('mouseleave', () => {
      cn.classList.remove('active');
      if (note) note.classList.remove('highlight');
    });
  });
}

// ── Read time from word count (238 wpm) ──────────────────────────
function calcReadTime(wordCount) {
  return Math.max(1, Math.round(wordCount / 238));
}

// ── Init ─────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initCitationHover();
  if (document.fonts) {
    document.fonts.ready.then(positionMarginNotes);
  } else {
    setTimeout(positionMarginNotes, 400);
  }
});

window.addEventListener('resize', positionMarginNotes);
