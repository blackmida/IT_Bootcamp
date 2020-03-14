let tacniOdgovori = ['B', 'A', 'B', 'B'];

let calculateScore = (odgovori, nickname) =>{
    let score = 0;
    odgovori.forEach((el, i) => {
        if(el==tacniOdgovori[i]){
            score+=20;
        };
    });
    if(nickname.length>6){
        score+=20;
    };
    return score;
};

export {tacniOdgovori, calculateScore};