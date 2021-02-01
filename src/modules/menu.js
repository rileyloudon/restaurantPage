const menu = () => {
  const main = document.getElementById('main');

  main.innerHTML = `
  <img src='img/menu.jpg' alt='Picture of Brock' class='home-img'>
  <div id='menu-items'>
  <h1>Menu</h1>
    <p>Each item comes with your choice of tea, coffee, or water.</p>
      <ul>
        <li>
          <h3>Cream Stew</h3>
          <img src='/dist/img/cream-stew.png' alt='Cream Stew'>
          <p>Brock's Cream Stew includes carrots, broccoli, potato chunks, some chicken, and a little bit of yellow onion. Made fresh outdoors on a wood fire.</p>
        </li>

        <li>
          <h3>Onigiri/Rice Balls</h3>
          <img src='/dist/img/rice_balls.png' alt='Cream Stew'>
          <p>Brock's Onigiri is made using rice rolled into a triangle shape. Filled with your choice of salmon, chicken, tuna, shrimp, or pickled plums.</p>
        </li>

        <li>
          <h3>Jelly Donuts</h3>
          <img src='/dist/img/jelly-donut.jpg' alt='Cream Stew'>
          <p>Brock's Jelly Donuts may look identical to the Onigiri, but they are nothing a like. These are real donuts filled with jelly then topped with powdered sugar and coconut.</p>
        </li>
      </ul>
    </div>`;
};

export default menu;
