/*scriot.js*/

$(document).ready(function() {
    // Reproducir la música al cargar la página
    var musica = document.getElementById('musica');
    musica.play();
});

$(window).scroll(function () {
    var scr = $(window).scrollTop(),
        C = $('#contenedor'),
        A = $('#abrir'),
        E = $('#carta'),
        F = $('#carta hgroup h2'),
        P = $('#perspectiva');

    // Rotación y apertura
    if (scr >= 100) {
        C.css({
            'transition': 'all 1s',
            'transform': 'rotateY(180deg)'
        });
        A.css({
            'transition': 'all 1s .5s',
            'transform': 'rotateX(180deg)',
            'z-index': '0'
        });
    }
    // Cierre y rotación
    else if (scr <= 100) {
        C.css({
            'transition': 'all 1s .5s',
            'transform': 'rotateY(0deg)'
        });
        A.css({
            'transition': 'all 1s',
            'transform': 'rotateX(0deg)',
            'z-index': '10'
        });
    }
    // Traslación y expansión de la carta
    if (scr >= 500) {
        E.css({
            'transition': 'all .5s 1s',
            'top': '-550px',
            'height': '500px'
        });
        P.css({
            'transition': 'all 1s',
            'transform': 'translateY(450px)'
        });
        F.css({
            'transition': 'all 1s',
            'transform': 'rotateZ(180deg)'
        });
    }
    // Reversión a la posición original
    else if (scr <= 500) {
        E.css({
            'transition': 'all .5s',
            'top': '3px',
            'height': '200px'
        });
        P.css({
            'transform': 'translateY(0px)'
        });
        F.css({
            'transform': 'rotateZ(0deg)'
        });
    }
});
