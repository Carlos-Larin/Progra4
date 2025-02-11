// 1. Evento de clic
document.querySelector('.grid-item:nth-child(2)').addEventListener('click', function() {
    alert('¡Gracias por admirar a tu mamá!');
});

// 2. Evento de ratón encima
document.querySelector('.grid-item:nth-child(4)').addEventListener('mouseover', function() {
    this.style.backgroundColor = '#90EE90';
});

// 3. Evento de ratón fuera
document.querySelector('.grid-item:nth-child(4)').addEventListener('mouseout', function() {
    this.style.backgroundColor = 'lavender';
});

// 4. Evento de doble clic
document.querySelector('.grid-item:nth-child(6)').addEventListener('dblclick', function() {
    if (!this.querySelector('iframe')) {
        this.innerHTML += '<br><iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/2EUIC7qEQoW3W4vKXEPm0j?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>';
    }
});


// 5. Evento de tecla presionada
document.addEventListener('keypress', function(event) {
    if (event.key === 'f' || event.key === 'F') {
        alert('¡La familia es lo más importante!');
    }
});

// 6. Evento de carga
window.addEventListener('load', function() {
    console.log('La página se ha cargado completamente');
    this.alert('¡La página se ha cargado completamente!');
});

// 7. Evento para revelar la respuestas
document.getElementById('verRespuestas').addEventListener('click', function() {
    const answers = document.querySelectorAll('.grid-item:nth-child(even)');
    answers.forEach(answer => {
        if (answer.style.visibility === 'hidden') {
            answer.style.visibility = 'visible';
        } else {
            answer.style.visibility = 'hidden';
        }
    });
});