function toggleDescription(sectionNumber) {
    const toggle = document.querySelector(`.section:nth-of-type(${sectionNumber}) .toggle`);
    const description = document.querySelector(`.section:nth-of-type(${sectionNumber}) .description`);
  
    toggle.textContent = toggle.textContent === '+' ? '-' : '+';
    description.classList.toggle('open');
  }
  