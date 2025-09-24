export const home = {
  loadHome() {
    const heading = document.createElement('h1');
    heading.classList.add('heading');
    heading.textContent = 'Welcome to Coral & Co.';

    const div = document.createElement('div');
    const para = document.createElement('p');
    para.classList.add('hero');
    para.textContent = '“Where every dish tells a story from the ocean”';

    div.append(para);
    return [heading, div];
  },
};
