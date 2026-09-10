document.addEventListener('click', function playAudio() {
        const audio = document.getElementById('musicaFondo');
        audio.volume = 0.2; // Volumen al 40%
        audio.play();
        
        // Se remueve el evento para que solo se ejecute con el primer clic
        document.removeEventListener('click', playAudio);
    }, { once: true });

document.querySelectorAll('.btn').forEach(boton => {
        boton.addEventListener('click', () => {
            const audioClick = document.getElementById('sonidoClick');
            audioClick.currentTime = 0; // Reinicia el audio para permitir clics rápidos seguidos
            audioClick.volume = 0.3;    // Volumen del clic
            audioClick.play().catch(error => console.log("Reproducción bloqueada temporalmente"));
        });
    });

document.querySelectorAll('.navbar-nav').forEach(boton => {
        boton.addEventListener('click', () => {
            const audioClick = document.getElementById('sonidoClick');
            audioClick.currentTime = 0; // Reinicia el audio para permitir clics rápidos seguidos
            audioClick.volume = 0.3;    // Volumen del clic
            audioClick.play().catch(error => console.log("Reproducción bloqueada temporalmente"));
        });
    });

document.querySelectorAll('.navbar-brand').forEach(boton => {
        boton.addEventListener('click', () => {
            const audioClick = document.getElementById('sonidoClick');
            audioClick.currentTime = 0; // Reinicia el audio para permitir clics rápidos seguidos
            audioClick.volume = 0.3;    // Volumen del clic
            audioClick.play().catch(error => console.log("Reproducción bloqueada temporalmente"));
        });
    });