// password-service.js
require('dotenv').config();

const validatePassword = async (password) => {
    const VALID_PASSWORD = process.env.SNAKE_GAME_PASSWORD;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (password === VALID_PASSWORD) {
                resolve({ success: true, message: 'Password validated successfully!' });
            } else {
                reject({ success: false, message: 'Invalid password.' });
            }
        }, 500); 
    });
};

module.exports = { validatePassword };
