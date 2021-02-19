function toggleMenu(e) {
    e.preventDefault();
    var el = document.getElementById('mainMenu');
    var isOpen = el.classList.contains('expanded');

    el.setAttribute('class', isOpen ? 'collapsed' : 'expanded');
    el.classList.toggle('expanded');
  }
