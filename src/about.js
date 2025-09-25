export const about = {
  load() {
    const aboutContainer = document.createElement('div');
    aboutContainer.classList.add('about-container');

    const aboutHeader = document.createElement('h1');
    const aboutHero = document.createElement('h2');

    const texts = [
      'At Coral & Co., the ocean is our muse.',
      'Born from the journey of a wandering captain, Coral & Co. carries the ocean’s soul ashore.',
    ];

    aboutHeader.classList.add('about-header');
    aboutHero.classList.add('about-hero');
    (aboutHeader.textContent = texts[0]), (aboutHero.textContent = texts[1]);

    const headerDiv = document.createElement('div');
    const heroDiv = document.createElement('div');

    headerDiv.append(aboutHeader);
    heroDiv.append(aboutHero);
    aboutContainer.append(headerDiv);
    aboutContainer.append(heroDiv);

    return aboutContainer;
  },
};
