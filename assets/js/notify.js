// Function to send a message to Telegram
function sendTelegramMessage(message) {
    const bot_token = '7249573243:AAEmxA_BvuPlrMYLbaFiK46DHxvIiJjq87w';  // Your bot token
    const chat_id = '1200077770';  // Your chat ID
    const url = `https://api.telegram.org/bot${bot_token}/sendMessage`;

    const payload = {
        chat_id: chat_id,
        text: message
    };

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    })
    .then(response => {
        if (response.ok) {
            console.log("Telegram message sent successfully.");
        } else {
            console.error("Failed to send message to Telegram");
        }
    })
    .catch(error => {
        console.error("Error:", error);
    });
}

// Function to get user IP and send the message to Telegram
function notifyTelegram() {
    // Get the user's public IP using ipify API
    fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            const user_ip = data.ip;
            const user_agent = navigator.userAgent; // Get the browser's User-Agent string

            // Construct the message
            const message = `New visitor on the site!\nIP Address: ${user_ip}\nUser Agent: ${user_agent}`;

            // Send the message to Telegram
            sendTelegramMessage(message);
        })
        .catch(error => {
            console.error("Failed to get IP address:", error);
        });
}

// Notify Telegram when the page loads
window.onload = function() {
    notifyTelegram();
};
