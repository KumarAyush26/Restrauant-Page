export default function loadHomePage() {
  const content = document.getElementById('content');
  content.innerHTML = '';

  const headline = document.createElement('h1');
  headline.textContent = 'Welcome to Gourmet Haven!';

  const image = document.createElement('img');
  image.src = 'https://images.unsplash.com/photo-1504674900247-0877df9cc836';
  image.alt = 'Restaurant Interior';
  image.style.maxWidth = '400px';
  image.style.width = '100%';
  image.style.borderRadius = '8px';
  image.style.margin = '20px 0';

  const description = document.createElement('p');
  description.textContent = 'Experience the finest dining with a blend of classic and modern cuisine. Our chefs use only the freshest ingredients to create mouth-watering dishes in a cozy, elegant atmosphere. Whether you\'re here for a family dinner, a romantic evening, or a business lunch, Gourmet Haven is your perfect destination.';

  content.appendChild(headline);
  content.appendChild(image);
  content.appendChild(description);
}
