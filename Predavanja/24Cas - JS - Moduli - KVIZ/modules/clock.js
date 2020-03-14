let generateScore = (h2, score) => {
    let broj = 0;
    let clock = setInterval(() => {
        h2.textContent = `Vas odgovor je: ${broj}%`;
        if (broj < score) {
            broj++
        }
        else {
            clearInterval(clock);
        }
    }, 20);
};

export default generateScore;
