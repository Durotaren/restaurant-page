export const menu = {
  loadMenu() {
    const container = document.createElement('div');
    container.classList.add('container');

    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container');

    const hr = document.createElement('hr');
    const menuHeader = document.createElement('div');
    const header = document.createElement('h1');
    header.textContent = 'Coral & Co.';
    menuHeader.classList.add('menu-header');
    menuHeader.append(hr);
    menuHeader.append(header);
    menuHeader.append(document.createElement('hr'));
    menuContainer.append(menuHeader);

    const items = [
      {
        name: 'Seaside Oysters',
        desc: 'Fresh oysters served with citrus zest.',
      },
      {
        name: 'Coral Reef Soup',
        desc: 'Creamy seafood broth with coastal herbs.',
      },
      {
        name: 'Golden Tide Shrimp',
        desc: 'Grilled shrimp glazed in honey-chili.',
      },
      {
        name: 'Sailor’s Catch',
        desc: 'Daily fish seared with lemon butter.',
      },
      {
        name: 'Pearl Pasta',
        desc: 'Pasta tossed with clams and garlic.',
      },
      {
        name: 'Ocean Mist Salad',
        desc: 'Crisp greens topped with smoked salmon.',
      },
    ];

    items.forEach((item) => {
      const menuItem = document.createElement('div');
      menuItem.classList.add('menu-item');

      const para = document.createElement('p');
      const br = document.createElement('br');
      const span = document.createElement('span');
      span.textContent = item.name;

      para.append(span);
      para.append(br);
      para.append(item.desc);
      menuItem.append(para);

      menuContainer.append(menuItem);
    });

    container.append(menuContainer);

    const photoContainer = document.createElement('div');
    photoContainer.classList.add('photo-container');

    const photos = [
      'https://images.unsplash.com/photo-1729269490299-a9d4a82e4786?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1448043552756-e747b7a2b2b8?q=80&w=1952&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ];

    photos.forEach((photo) => {
      const image = document.createElement('img');
      image.src = photo;
      image.alt = '';
      photoContainer.append(image);
    });

    container.append(photoContainer);

    return container;
  },
};
