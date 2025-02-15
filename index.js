<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<style>
    /* ---- reset ---- */
    body {
        margin: 0;
        font: normal 75% Arial, Helvetica, sans-serif;
    }

    canvas {
        display: block;
        vertical-align: bottom;
    }

    /* ---- particles.js container ---- */
    #particles-js {
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: #000000;
        background-image: url("");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: 50% 50%;
    }

    /* ---- stats.js ---- */
    .count-particles {
        background: #000022;
        position: absolute;
        top: 48px;
        left: 0;
        width: 80px;
        color: #13E8E9;
        font-size: .8em;
        text-align: left;
        text-indent: 4px;
        line-height: 14px;
        padding-bottom: 2px;
        font-family: Helvetica, Arial, sans-serif;
        font-weight: bold;
    }

    .js-count-particles {
        font-size: 1.1em;
    }

    #stats, .count-particles {
        -webkit-user-select: none;
        margin-top: 5px;
        margin-left: 5px;
    }

    #stats {
        border-radius: 3px 3px 0 0;
        overflow: hidden;
    }

    .count-particles {
        border-radius: 0 0 3px 3px;
    }


    .card {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 80vw; /* 80% of viewport width */
        height: 50vh; /* 50% of viewport height */
        background-color: rgba(128, 128, 128, 0.6); /* Transparent grey */
        color: #ffffff;
        text-align: center;
        padding: 40px;
        border-radius: 15px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .card h1 {
        font-size: 5rem; /* Large size */
        margin: 0;
    }

    @media (max-width: 768px) {
        .card {
            width: 90vw; /* Increase width on smaller screens */
            height: 40vh; /* Adjust height for smaller screens */
            padding: 30px;
        }

        .card h1 {
            font-size: 4rem;
        }
    }

    @media (max-width: 480px) {
        .card {
            width: 95vw; /* Increase width on very small screens */
            height: 30vh; /* Adjust height for very small screens */
            padding: 20px;
        }

        .card h1 {
            font-size: 3rem;
        }
    }


</style>
<body>
<!-- particles.js container -->
<div id="particles-js"></div> <!-- stats - count particles -->
<div class="count-particles">
</div> <!-- particles.js lib - https://github.com/VincentGarreau/particles.js -->
<div class="card">
    <h1>Welcome to the SpaceParticleJS Foundation</h1>
</div>
<script src="http://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script> <!-- stats.js lib -->
<script src="http://threejs.org/examples/js/libs/stats.min.js"></script>

</body>
<script>
    particlesJS("particles-js", {
        "particles": {
            "number": {"value": 80, "density": {"enable": true, "value_area": 800}},
            "color": {"value": "#ffffff"},
            "shape": {
                "type": "circle",
                "stroke": {"width": 0, "color": "#000000"},
                "polygon": {"nb_sides": 5},
                "image": {"src": "img/github.svg", "width": 100, "height": 100}
            },
            "opacity": {
                "value": 1,
                "random": true,
                "anim": {"enable": false, "speed": 1, "opacity_min": 0.1, "sync": false}
            },
            "size": {
                "value": 1.5,
                "random": true,
                "anim": {"enable": false, "speed": 31.67101127975246, "size_min": 0.1, "sync": false}
            },
            "line_linked": {"enable": false, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1},
            "move": {
                "enable": true,
                "speed": 0.5,
                "direction": "top",
                "random": true,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {"enable": false, "rotateX": 600, "rotateY": 1200}
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {"enable": false, "mode": "repulse"},
                "onclick": {"enable": true, "mode": "push"},
                "resize": true
            },
            "modes": {
                "grab": {"distance": 400, "line_linked": {"opacity": 1}},
                "bubble": {"distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3},
                "repulse": {"distance": 200, "duration": 0.4},
                "push": {"particles_nb": 4},
                "remove": {"particles_nb": 2}
            }
        },
        "retina_detect": true
    });
    var count_particles, stats, update;
    stats = new Stats;
    stats.setMode(0);
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = '0px';
    stats.domElement.style.top = '0px';
    document.body.appendChild(stats.domElement);
    count_particles = document.querySelector('.js-count-particles');
    update = function () {
        stats.begin();
        stats.end();
        if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
            count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
        }
        requestAnimationFrame(update);
    };
    requestAnimationFrame(update);
    ;
</script>
</html>

