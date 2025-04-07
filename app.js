//Function for sending messages
function sendMessage() {
  var messageInput = document.getElementById('message-input');
  var message = messageInput.value.trim();

  if (message !== '') {
    var applicationMessages = document.querySelector('.application-messages');
    var messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.textContent = message;
    applicationMessages.appendChild(messageElement);

    messageInput.value = ''; //Clear the input field
    applicationMessages.scrollTop = applicationMessages.scrollHeight;
  }
}

// Event listener for the send button
document.getElementById('send-button').addEventListener('click', sendMessage);

//Event listener for "Enter"
document.getElementById('message-input').addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    sendMessage();
  }
});

