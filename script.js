function toggleDescription(sectionNumber) {
  const toggles = document.querySelectorAll('.toggle');
  const descriptions = document.querySelectorAll('.description');

  toggles.forEach((toggle, index) => {
    if (index + 1 === sectionNumber) {
      toggle.textContent = toggle.textContent === '+' ? '-' : '+';
      descriptions[index].classList.toggle('open');
    } else {
      toggle.textContent = '+';
      descriptions[index].classList.remove('open');
    }
  });
}