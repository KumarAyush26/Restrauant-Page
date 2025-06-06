export default function loadMenuPage() {
  const content = document.getElementById('content');
  content.innerHTML = '';

  const menuDiv = document.createElement('div');
  menuDiv.className = 'menu-page';

  const headline = document.createElement('h2');
  headline.textContent = 'Our Menu';

  const menuList = document.createElement('ul');
  const items = [
    { name: 'Classic Burger', desc: 'Juicy beef patty, cheddar, lettuce, tomato, and our special sauce.' },
    { name: 'Caesar Salad', desc: 'Crisp romaine, parmesan, croutons, and creamy Caesar dressing.' },
    { name: 'Grilled Salmon', desc: 'Fresh salmon fillet with lemon butter sauce and seasonal veggies.' },
    { name: 'Chocolate Lava Cake', desc: 'Warm chocolate cake with a gooey center, served with vanilla ice cream.' }
  ];
  items.forEach(item => {
    const li = document.createElement('li');
    li.innerHTML = `<strong>${item.name}</strong>: ${item.desc}`;
    menuList.appendChild(li);
  });

  menuDiv.appendChild(headline);
  menuDiv.appendChild(menuList);
  content.appendChild(menuDiv);
}
