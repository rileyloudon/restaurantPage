const contact = () => {
  const main = document.getElementById('main');

  main.innerHTML = `
  <img src='img/contact.jpg' alt='Picture of Brock' class='home-img'>
  <div id='contact'>
  <h1>Contact</h1>
    <p>Each message can be replied by email or hand delivered by our Dragonite.</p>
    <form>
      <label for='name'>Name:</label>
      <input type='text' id='name' name='name'>

      <label for='reply'>Email OR Address:</label>
      <input type='text' id='reply' name='reply'>

      <label for='message'>Message:</label>
      <textarea id='message' name='message' rows='4' cols='25'></textarea>

      <input type='submit' value='Submit'>
    </form>
  </div>
  `;
};

export default contact;
