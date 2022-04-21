const messages = [
    "Viler",
    "Ana",
    "Roli",
    "Leo",
    "Kino",
    "Tim",
    "Zoe",
    "Jhon",
    "Paul"
]

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
};

module.exports = { randomMsg};