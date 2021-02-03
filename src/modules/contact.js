const contact = () => {
  const main = document.getElementById('main');

  main.innerHTML = `
  <img src='img/contact.jpg' alt='Picture of Brock' class='home-img'>
  <div id='contact'>
    <h1>Contact</h1>
    <p>Each message can be replied by email or hand delivered by our friendly Dragonite.</p>
    <form id='contact-form'>
      <label for='name'>Name:</label>
      <input type='text' id='name' name='name' placeholder='Name'>

      <label for='reply'>Email OR Address:</label>
      <input type='text' id='reply' name='reply' placeholder='Email/Address'>

      <label for='message'>Message:</label>
      <textarea id='message' name='message' rows='5' cols='35' placeholder='Enter Message'></textarea>

      <input type='submit' value='Submit' id='submit'>
    </form>
  </div>
  `;
};

export default contact;
