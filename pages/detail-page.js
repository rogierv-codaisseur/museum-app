function doesNotPassAllValidations(name, msg) {
  if (!name && !msg) {
    alert('You forgot to fill in your name and message!');
    return true;
  } else if (!name) {
    alert('You forgot to fill in your name!');
    return true;
  } else if (!msg) {
    alert('You forgot to fill in your message!');
    return true;
  } else if (msg.length > 280) {
    alert(`The message is longer than 280 characters! The message is currently ${msg.length} characters.`);
    return true;
  }
  return false;
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function submitComment() {
  // gather data
  const inputField = document.getElementById('name');
  let name = inputField.value;
  const textArea = document.getElementById('msg');
  const msg = textArea.value;

  // check if user input passes validations
  if (doesNotPassAllValidations(name, msg)) {
    return null;
  }

  name = capitalizeFirstLetter(name);

  // create the elements you need
  const comment = document.createElement('section');
  const h3 = document.createElement('h3');
  const p = document.createElement('p');

  // adjust the elements we created
  h3.innerHTML = `${name} said:`;
  p.innerHTML = msg;
  comment.classList.add('comment');
  comment.appendChild(h3);
  comment.appendChild(p);

  // display the elements on the page
  const commentSection = document.getElementById('comments');
  commentSection.appendChild(comment);

  // reset form values
  inputField.value = null;
  textArea.value = null;

}