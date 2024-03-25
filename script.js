function toggleDarkMode() {
  const body = document.body;
  const darkModeToggle = document.getElementById('dark-mode-toggle');
  const darkModeIcon = document.getElementById('dark-mode-icon');
  const stylesheet = document.getElementById('stylesheet');
  const darkModeStylesheet = document.getElementById('dark-mode-stylesheet');
  
  body.classList.toggle('dark-mode');
  const isDarkMode = body.classList.contains('dark-mode');
  
  if (isDarkMode) {
    darkModeIcon.textContent = '☀️';
    darkModeToggle.setAttribute('aria-label', 'Alternar Modo Claro');
    darkModeStylesheet.disabled = false;
    stylesheet.disabled = true;
  } else {
    darkModeIcon.textContent = '🌙';
    darkModeToggle.setAttribute('aria-label', 'Alternar Modo Noturno');
    darkModeStylesheet.disabled = true;
    stylesheet.disabled = false;
  }
}

document.getElementById('dark-mode-toggle').addEventListener('click', toggleDarkMode);




function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

 
