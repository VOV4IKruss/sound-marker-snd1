var randSound;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

document.addEventListener('click',
    function() {
        randSound = getRandomInt(9);
        
        switch (randSound){
            case 0:
                var audio = document.getElementById('clickSound1');
                audio.volume = 1.0;
                audio.play();
                break;
            
            case 1:
                var audio = document.getElementById('clickSound2');
                audio.volume = 1.0;
                audio.play();
                break;
            
            case 2:
                var audio = document.getElementById('clickSound3');
                audio.volume = 1.0;
                audio.play();
                break;

            case 3:
                var audio = document.getElementById('clickSound4');
                audio.volume = 1.0;
                audio.play();
                break;

            case 4:
                var audio = document.getElementById('clickSound5');
                audio.volume = 1.0;
                audio.play();
                break;

            case 5:
                var audio = document.getElementById('clickSound6');
                audio.volume = 1.0;
                audio.play();
                break;

            case 6:
                var audio = document.getElementById('clickSound7');
                audio.volume = 1.0;
                audio.play();
                break;

            case 7:
                var audio = document.getElementById('clickSound8');
                audio.volume = 1.0;
                audio.play();
                break;

            case 8:
                var audio = document.getElementById('clickSound9');
                audio.volume = 1.0;
                audio.play();
                break;
        }
        
        if (sound.paused) {
                sound.play().catch(e => {});
                
                setTimeout(() => {
                    btn.classList.add('visible');
                    btn.style.pointerEvents = 'auto';
                }, 3000);
        }
    }
);