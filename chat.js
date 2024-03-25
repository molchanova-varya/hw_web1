window.onload = function() {
    const chatMessages = document.getElementById('chat-messages');
    const userInput = document.getElementById('user-input');
    const sendButton = document.getElementById('send-button');
    const voiceButton = document.getElementById('voice-button');

    const responses = {
        'привет': 'Привет! Как я могу помочь вам?',
        'как дела?': 'Все отлично, спасибо! А у вас?',
        'спасибо': 'Пожалуйста! Если у вас возникнут еще вопросы, не стесняйтесь спрашивать.',
        'пока': 'До свидания! Надеюсь, увидимся скоро.',
        // Добавьте свои ключевые слова и ответы здесь
    };

    function sendMessage(message, sender) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        messageElement.classList.add(sender);

        const messageText = document.createElement('p');
        messageText.textContent = message;

        messageElement.appendChild(messageText);
        chatMessages.appendChild(messageElement);
        chatMessages.scrollTop = chatMessages.scrollHeight; // Прокрутка вниз при добавлении нового сообщения
    }

    function generateResponse(message) {
        const lowerCaseMessage = message.toLowerCase();
        for (const keyword in responses) {
            if (lowerCaseMessage.includes(keyword)) {
                const response = responses[keyword];
                sendMessage(response, 'author');
                return;
            }
        }
        // Если нет ключевых слов, генерируем обычный ответ
        const defaultResponse = 'Извините, я не понимаю. Можете перефразировать?';
        sendMessage(defaultResponse, 'author');
    }

    function handleUserInput() {
        const message = userInput.value.trim();
        if (message !== '') {
            sendMessage(message, 'user');
            userInput.value = '';
            setTimeout(() => generateResponse(message), 1000); // Задержка перед генерацией ответа
        }
    }

    function handleVoiceInput() {
        const recognition = new webkitSpeechRecognition(); // Создаем объект распознавания речи
        recognition.lang = 'ru-RU'; // Устанавливаем язык для распознавания
        recognition.start(); // Начинаем распознавание речи
        recognition.onresult = function(event) {
            const transcript = event.results[0][0].transcript; // Получаем распознанный текст
            sendMessage(transcript, 'user'); // Отправляем распознанный текст в чат как сообщение пользователя
            generateResponse(transcript); // Генерируем ответ
        };
    }

    sendButton.addEventListener('click', handleUserInput);
    userInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault(); // Предотвращаем перенос строки в текстовом поле
            handleUserInput();
        }
    });

    voiceButton.addEventListener('click', handleVoiceInput); // Добавляем обработчик клика для кнопки микрофона
};
