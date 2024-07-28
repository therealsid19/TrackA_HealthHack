const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');

function sendMessage() {
    const message = userInput.value.trim();
    if (message === '') return;

    addMessage('user', message);
    userInput.value = '';

    // Show typing indicator
    addTypingIndicator();

    fetch('/api', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: message })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        // Remove typing indicator
        removeTypingIndicator();
        // Add message with typing effect
        addMessage('bot', data.reply, true);
    })
    .catch(error => {
        console.error('Error:', error);
        // Remove typing indicator
        removeTypingIndicator();
        addMessage('bot', 'Sorry, something went wrong. Please try again later.');
    });
}

function sendFeature(feature) {
    addMessage('user', feature);

    // Show typing indicator
    addTypingIndicator();

    fetch('/api', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: feature })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        // Remove typing indicator
        removeTypingIndicator();
        // Add message with typing effect
        addMessage('bot', data.reply, true);
    })
    .catch(error => {
        console.error('Error:', error);
        // Remove typing indicator
        removeTypingIndicator();
        addMessage('bot', 'Sorry, something went wrong. Please try again later.');
    });
}

function addMessage(sender, text, typingEffect = false) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', sender);
    const messageContent = document.createElement('div');
    messageContent.classList.add('message-content');

    if (typingEffect) {
        typeText(messageContent, text);
    } else {
        messageContent.innerText = text;
    }

    messageDiv.appendChild(messageContent);
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function addTypingIndicator() {
    const typingIndicator = document.createElement('div');
    typingIndicator.classList.add('message', 'bot', 'typing-indicator');
    typingIndicator.innerHTML = '<div class="message-content">...</div>';
    chatBox.appendChild(typingIndicator);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function removeTypingIndicator() {
    const typingIndicator = chatBox.querySelector('.typing-indicator');
    if (typingIndicator) {
        typingIndicator.remove();
    }
}

function typeText(element, text, speed = 50) {
    let i = 0;
    function typing() {
        if (i < text.length) {
            if (text.charAt(i) === ' ') {
                element.innerHTML += '&nbsp;';
            } else {
                element.innerText += text.charAt(i);
            }
            i++;
            setTimeout(typing, speed);
        }
    }
    typing();
}

function goBack() {
    window.history.back();
}

document.getElementById('send-button').addEventListener('click', sendMessage);
userInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

document.querySelectorAll('.feature-button').forEach(button => {
    button.addEventListener('click', () => {
        sendFeature(button.innerText);
    });
});

