// ========================================
// THEME TOGGLE
// ========================================

function toggleTheme() {
  const html = document.documentElement;
  const currentTheme = html.dataset.theme;
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  html.dataset.theme = newTheme;
  localStorage.setItem('theme', newTheme);
  
  // Changer l'icône du bouton
  const themeIcon = document.querySelector('.theme-icon');
  if (themeIcon) {
    themeIcon.textContent = newTheme === 'dark' ? '🌙' : '☀️';
  }
}

// Charger le thème sauvegardé
function loadTheme() {
  const savedTheme = localStorage.getItem('theme') || 'dark';
  document.documentElement.dataset.theme = savedTheme;
  
  const themeIcon = document.querySelector('.theme-icon');
  if (themeIcon) {
    themeIcon.textContent = savedTheme === 'dark' ? '🌙' : '☀️';
  }
}

// Charger le thème au chargement de la page
document.addEventListener('DOMContentLoaded', loadTheme);

// ========================================
// TERMINAL ANIMATION
// ========================================

function typeTerminal() {
  const terminal = document.getElementById('terminal');
  if (!terminal) return;
  
  const text = "oumar@cyberlab:~$ initializing portfolio... access granted.";
  let i = 0;
  
  terminal.innerHTML = '';
  
  function typeChar() {
    if (i < text.length) {
      terminal.innerHTML += text.charAt(i);
      i++;
      setTimeout(typeChar, 30);
    } else {
      terminal.innerHTML += '<span class="cursor"></span>';
    }
  }
  
  typeChar();
}

// Lancer l'animation au chargement
document.addEventListener('DOMContentLoaded', typeTerminal);

// ========================================
// SMOOTH SCROLL
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ========================================
// ACTIVE LINK HIGHLIGHTING
// ========================================

function highlightActiveLink() {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    const linkPath = link.getAttribute('href');
    if (currentPath === linkPath || 
        (linkPath !== '/' && currentPath.startsWith(linkPath))) {
      link.style.color = 'var(--accent-primary)';
      link.style.background = 'var(--bg-card)';
    }
  });
}

document.addEventListener('DOMContentLoaded', highlightActiveLink);
