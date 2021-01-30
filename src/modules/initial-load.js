import homepage from './homepage';

const initialLoad = () => {
  const content = document.querySelector('.content');

  content.innerHTML = `      
  <header>
    <nav>
      <ul>
        <li><a href="#" id='home'>Home</a></li>
        <li><a href="#" id='menu'>Menu</a></li>
        <li><a href="#" id='contact'>Contact Us</a></li>
      </ul>
    </nav>
  </header>
  <main id='main'>
  </main>`;

  homepage();
};

export default initialLoad;
