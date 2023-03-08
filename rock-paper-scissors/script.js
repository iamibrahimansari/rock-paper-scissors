setTimeout(() =>{
    const options = ['rock', 'paper', 'scissors'];

    const initGame = () =>{
        const startGame = confirm('Shall we play rock, paper or scissors?');
        startGame ? playGame() : alert('Ok, maybe next time');
    }

    const playGame = () =>{
        while(true){
            let playerChoice = getPlayerChoice();
            playerChoice = formatPlayerChoice(playerChoice);
            if(!playerChoice){
                decideNotToPlay();
                break;
            }
            if(playerChoice === ''){
                invalidChoice();
                continue;
            }
            
            playerChoice = evaluatePlayerChoice(playerChoice);
            if(!playerChoice){
                invalidChoice();
                continue;
            }

            const computerChoice = getComputerChoice();
            const result = determineWinner(playerChoice, computerChoice);
            displayResult(result);
            if(askToPlayAgain()){
                continue;
            }else{
                thanksForPlaying();
                break;
            }
        }   
    }

    const getPlayerChoice = () => prompt('Please enter rock, paper or scissors.');   

    const formatPlayerChoice = playerChoice =>{
        if(playerChoice){
            return playerChoice.trim().toLowerCase();
        }
        return '';
    }

    const invalidChoice = () => alert("You didn't enter rock, paper or scissors.");

    const getComputerChoice = () => options[parseInt(Math.random() * options.length)];   

    const determineWinner = (player, computer) =>{
        let winner = `Player: ${player}\nComputer: ${computer}\nComputer wins!`;
        switch(true){
            case player === computer:
                winner = 'Tie game!';
                break;
            case player === 'rock' && computer === 'paper':
            case player === 'paper' && computer === 'scissors':
            case player === 'scissors' && computer === 'rock':
                break;
            default:
                winner = `Player: ${player}\nComputer: ${computer}\nPlayer wins!`;
        }
        return winner;
    }

    const decideNotToPlay = () => alert('I guess you changed your mind. Maybe next time.');

    const evaluatePlayerChoice = playerChoice => options.includes(playerChoice) ? playerChoice : false;


    const displayResult = result => alert(result);

    const askToPlayAgain = () => confirm('Play again?');

    const thanksForPlaying = () => alert('Ok, thanks for playing.');

    initGame();
}, 1000);

const h1 = document.querySelector('h1');
h1.textContent = 'Rock Paper Scissors';