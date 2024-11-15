const player1 = document.getElementById('player1');
let playerPosition = 0; 
const maxPosition = window.innerWidth - player1.offsetWidth;

document.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowLeft') {
        player1.src = './assets/player1/start.gif';
        player1.alt = 'Player 1 moving left, animated GIF';

        playerPosition -= 10;
        if (playerPosition < 0) playerPosition = 0;  
        player1.style.left = playerPosition + 'px';

       
        player1.style.height = '300px'; 
        player1.style.width = 'auto'; 
    } else if (event.key === 'ArrowRight') {
      
        player1.src = './assets/player1/walk.gif';
        player1.alt = 'Player 1 moving right, animated GIF';

        playerPosition += 10;
        if (playerPosition > maxPosition) playerPosition = maxPosition; 
        player1.style.left = playerPosition + 'px';

        
        player1.style.height = '300px'; 
        player1.style.width = 'auto';  
    } else if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
        
        player1.src = './assets/player1/fight.gif';
        player1.alt = 'Player 1 fighting, animated GIF';

        
        player1.style.height = '700px'; 
        player1.style.width = 'auto';  
    }
});
