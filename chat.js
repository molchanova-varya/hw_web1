window.onload = function() {
    const chatMessages = document.getElementById('chat-messages');
    const userInput = document.getElementById('user-input');
    const sendButton = document.getElementById('send-button');

    const responses = [
        { keyword: 'привет', response: ["Привет! Как я могу вам помочь?", "Здравствуйте! Чем могу помочь?"] },
        { keyword: 'помощь', response: ["Конечно, я здесь, чтобы помочь вам.", "Чем могу помочь?"] },
        { keyword: 'спасибо', response: ["Пожалуйста!", "Не за что!"] },
        { keyword: 'погода', response: ["Сейчас погода ясная.", "Погода солнечная."] },
        { keyword: 'по умолчанию', response: ["Простите, я не совсем понял вас. Можете перефразировать?"] } // Ответ по умолчанию
    ];

    // Функция для добавления сообщения в чат
    function addMessage(message, sender) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        if (sender === 'user') {
            messageElement.classList.add('user-message');
        } else {
            messageElement.classList.add('bot-message');
        }
        messageElement.textContent = message;
        chatMessages.appendChild(messageElement);
    }

    // Функция для отправки сообщения
    function sendMessage() {
        const message = userInput.value.trim().toLowerCase();
        if (message !== '') {
            addMessage(message, 'user');
            respondToMessage(message);
            userInput.value = '';
        }
    }

    // Функция для выбора ответа на основе сообщения пользователя
    function respondToMessage(message) {
        let matchedResponse = responses.find(response => message.includes(response.keyword));
        if (!matchedResponse) {
            matchedResponse = responses.find(response => response.keyword === 'по умолчанию');
        }
        const randomIndex = Math.floor(Math.random() * matchedResponse.response.length);
        const randomResponse = matchedResponse.response[randomIndex];
        setTimeout(() => {
            addMessage(randomResponse, 'bot');
        }, 1000); 
    }

    sendButton.addEventListener('click', sendMessage);
    userInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            sendMessage();
        }
    });
};
