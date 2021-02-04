const menu = () => {
  const main = document.getElementById('main');

  main.innerHTML = `
  <img src='img/menu.jpg' alt='Picture of Brock' class='home-img'>
  <div id='menu'>
    <h1>Menu</h1>
    <p>Each item comes with your choice of tea, coffee, or water.</p>
      <ul>
        <li>
          <div class='menu-item'>
            <h3>Cream Stew</h3>
            <div class='description'>
              <img src='img/cream-stew.png' alt='Cream Stew'>
              <p>Brock's Cream Stew includes carrots, broccoli, potato chunks, some chicken, and a little bit of yellow onion. Made fresh outdoors on a wood fire.</p>
            </div>
          </div>
        </li>

        <li>
          <div class='menu-item'>
            <h3>Onigiri/Rice Balls</h3>
              <div class='description'>
                <img src='img/rice_balls.png' alt='Onigiri/Rice Balls'>
                <p>Brock's Onigiri is made using rice rolled into a triangle shape. Filled with your choice of salmon, chicken, tuna shrimp, or pickled plums.</p>
            </div>
          </div>
        </li>

        <li>
          <div class='menu-item'>
            <h3>Jelly Donuts</h3>
            <div class='description'>
              <img src='img/jelly-donut.jpg' alt='Jelly Donuts'>
              <p>Brock's Jelly Donuts may look identical to the Onigiri, but they are nothing a like. These are real donuts filled with jelly then topped with powdered sugar and coconut.</p>
            </div>
          </div>
        </li>

        <li>
          <div class='menu-item'>
            <h3>Pet Treats</h3>
            <div class='description'>
              <img src='img/pet-food.jpg' alt='Pet Food'>
              <p>Feel free to bring your furry friends, Brock makes a great homemade pet treat. Guaranteed to be a favorite!</p>
            </div>
          </div>
        </li>
      </ul>
    </div>`;
};

export default menu;
