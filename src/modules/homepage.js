const homepage = () => {
  const main = document.getElementById('main');

  main.innerHTML = `      
    <img src='img/home.jpg' alt='Picture of Brock' class='home-img'>
    <div id="home-text">
      <h1>Brock's Bakery</h1>
      <p>
        The capacity of Brock's bag is endless. It's capable of containing
        full tea-sets, tables, and cooking utensils. Anything you could
        need!
      </p>
    </div>`;
};

export default homepage;
