const aboutButton = document.getElementById('viewaboutme');
const aboutSection = document.getElementById('about-me');

aboutButton.addEventListener('click', () => {
  const isExpanded = aboutButton.getAttribute('aria-expanded') === 'true';
  aboutButton.setAttribute('aria-expanded', String(!isExpanded));
  aboutSection.hidden = isExpanded;
  aboutButton.innerHTML = isExpanded
    ? 'More about me <span aria-hidden="true">+</span>'
    : 'Less about me <span aria-hidden="true">−</span>';
});
