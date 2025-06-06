export default function loadContactPage() {
  const content = document.getElementById('content');
  content.innerHTML = '';

  const contactDiv = document.createElement('div');
  contactDiv.className = 'contact-page';

  const headline = document.createElement('h2');
  headline.textContent = 'Contact Us';

  const phone = document.createElement('p');
  phone.textContent = 'Phone: (123) 456-7890';

  const email = document.createElement('p');
  email.textContent = 'Email: info@gourmethaven.com';

  const address = document.createElement('p');
  address.textContent = '123 Main Street, Food City, Country';

  contactDiv.appendChild(headline);
  contactDiv.appendChild(phone);
  contactDiv.appendChild(email);
  contactDiv.appendChild(address);
  content.appendChild(contactDiv);
}
