$('#cardTestimonios').hide()

function comprobarIdiomaStorage(){
    if(localStorage.getItem('idiomadefecto')){
        idiomaDefecto = localStorage.getItem('idiomadefecto')
    } else {
        idiomaDefecto = 'Idioma'
    }
}

function comprobarMonedaStorage(){
    if(localStorage.getItem('monedadefecto')){
        monedaDefecto = localStorage.getItem('monedadefecto')
    } else {
        monedaDefecto = 'Moneda'
    }
}

comprobarIdiomaStorage()
$('#res-language').html(idiomaDefecto)

comprobarMonedaStorage()
$('#res-money').html(monedaDefecto)


$('#select-language').change(function(){
    localStorage.setItem('idiomadefecto', $(this).val())
    idiomaDefecto = localStorage.getItem('idiomadefecto')
    $('#res-language').html(idiomaDefecto)
})

$('#select-money').change(function(){
    localStorage.setItem('monedadefecto', $(this).val())
    monedaDefecto = localStorage.getItem('monedadefecto')
    $('#res-money').html(monedaDefecto)
})

var dataUser = {}

function comprobarUserStorage(){
    if(localStorage.getItem('usernombre')){
        dataUser = {
            nombre: localStorage.getItem('usernombre'),
            apellido: localStorage.getItem('userapellido'),
            edad: localStorage.getItem('useredad'),
            email: localStorage.getItem('useremail')
        }
        $('#user-name').html(dataUser.nombre)
    } else {
        dataUser = {
            nombre: '',
            apellido: '',
            edad: 0,
            email: ''
        }
    }
}
comprobarUserStorage()


function cargarDatos(){
    dataUser.nombre = $('#nombre').val()
    localStorage.setItem('usernombre', dataUser.nombre)
    dataUser.apellido = $('#apellido').val()
    localStorage.setItem('userapellido', dataUser.apellido)
    dataUser.edad = $('#edad').val()
    localStorage.setItem('useredad', dataUser.edad)
    dataUser.email = $('#email').val()
    localStorage.setItem('useremail', dataUser.email)

    $('#user-name').html(localStorage.getItem('usernombre'))
}


const inglesJSON = '{"inscriptos": 8975, "profesores": ["Abbie", "Cooper", "Ferdinand", "Sophie", "Janet", "Jordan", "Harry", "Alice", "Victor", "Veronica"], "cantidadProfesores": 1795}'
const espaniolJSON = '{"inscriptos": 8025, "profesores": ["Anahi", "Walter", "Ignacio", "Sofia", "Romina", "Guillermo", "Valeria", "Sabrina", "Telma", "Camilo"], "cantidadProfesores": 1605}'
const italianoJSON = '{"inscriptos": 7615, "profesores": ["Pia", "Carlo", "Dante", "Giovanni", "Flavio", "Fiorella", "Carmina", "Stella", "Romeo", "Lula"], "cantidadProfesores": 1523}'
const japonesJSON = '{"inscriptos": 2255, "profesores": ["Aneko", "Chihiro", "Dai", "Jin", "Gen", "Hoshi", "Kaori", "Naomi", "Shimura", "Tsushima"], "cantidadProfesores": 451}'
const portuguesJSON = '{"inscriptos": 7915, "profesores": ["Manuela", "Sabina", "Timoteo", "Estela", "Victor", "Veronica", "Telma", "Camilo", "Walter", "Ignacio"], "cantidadProfesores": 1583}'
const francesJSON = '{"inscriptos": 2055, "profesores": ["Manuela", "Sabina", "Timoteo", "Estela", "Victor", "Veronica", "Telma", "Camilo", "Flavio", "Fiorella"], "cantidadProfesores": 411}'

const ingles = JSON.parse(inglesJSON)
const espaniol = JSON.parse(espaniolJSON)
const italiano = JSON.parse(italianoJSON)
const japones = JSON.parse(japonesJSON)
const portugues = JSON.parse(portuguesJSON)
const frances = JSON.parse(francesJSON)

$('#usa-flag').attr({'title': `Hay ${ingles.inscriptos} alumnos inscriptos y ${ingles.cantidadProfesores} profesores enseñando`})
$('#esp-flag').attr({'title': `Hay ${espaniol.inscriptos} alumnos inscriptos y ${espaniol.cantidadProfesores} profesores enseñando`})
$('#ita-flag').attr({'title': `Hay ${italiano.inscriptos} alumnos inscriptos y ${italiano.cantidadProfesores} profesores enseñando`})
$('#port-flag').attr({'title': `Hay ${portugues.inscriptos} alumnos inscriptos y ${portugues.cantidadProfesores} profesores enseñando`})
$('#jap-flag').attr({'title': `Hay ${japones.inscriptos} alumnos inscriptos y ${japones.cantidadProfesores} profesores enseñando`})
$('#fra-flag').attr({'title': `Hay ${frances.inscriptos} alumnos inscriptos y ${frances.cantidadProfesores} profesores enseñando`})



$('#gracias_valoracion').fadeOut()

function mostrarGracias(){
    $('#gracias_valoracion').fadeIn('slow')
}

$('#coments-button').click(function(e){
    e.preventDefault()
});

$('#sendMessage-button').click(function(e){
    e.preventDefault()
});

$('#instagram').click(function(e){
    e.preventDefault()
});

$('#facebook').click(function(e){
    e.preventDefault()
});

$('#twitter').click(function(e){
    e.preventDefault()
});

$('#whatsapp').click(function(e){
    e.preventDefault()
});

$('#telegram').click(function(e){
    e.preventDefault()
});


//Iniciar Scrollspy
$('body').scrollspy({target: '#navbar'});


//Scroll suavizado
$('#navbar a').on('click', function(event){
    if(this.hash != ""){
        event.preventDefault();
        const hash = this.hash;

        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function(){
            window.location.hash = hash;
        })
    }
})

$('#buscarProfes').click(function(){
    const selected = $('#quiero-aprender').val()
    $.ajax({
        url: "data/data.json",
        dataType: "json",
        success: function(data){
            const profesores = data[selected].profesores

            $('#lista-profesores').html(
                profesores.map(profesor =>
                    `<div class="row">
                        <div class="col-lg-9 ml-auto">
                            <div class="card mb-2 card-width">
                                <div id="" class="row no-gutters teacher-lang">
                                    <div class="col-md-3 d-flex align-items-center justify-content-center">
                                        <img id="teacher-img" src=${profesor.foto} class="img-fluid teacher-img" width="" data-html="true" data-container="body" data-toggle="popover" data-trigger="hover" data-placement="left" title="Horarios disponibles de ${profesor.nombre}" data-content='<strong><i class="far fa-calendar-alt fa-lg"></i></strong> - ${profesor.dias.map(dia => ` ${dia}`)} <hr> <strong><i class="far fa-clock fa-lg"></i></strong> - ${profesor.horario.map(hora => ` ${hora}`)}'>
                                    </div>
                                    <div class="col-md-6">
                                        <div id="" class="card-body p-0 pl-2 pt-2">
                                            <a id="teacher-name" class="text-dark teacher-name" href="#cardTestimonios">
                                                <h5 class="card-title d-inline" data-toggle="tooltip" data-placement="top" title="Ver opiniones">${profesor.nombre}</h5>
                                            </a><br>
                                            <small class="text-muted">Otros idiomas: </small>
                                            <p id="teacher-languages" class="card-text card-description d-inline">${profesor.idiomas.map(lang => `<p class="card-text card-description d-inline">${lang} </p><img src="./assets/img/languages/${lang}.png" width="18"> `)}</p>
                                            <p class="card-text card-description">Breve descripcion: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo quisquam sit quia assumenda ratione, quasi labore totam cum!</p>
                                            <small class="text-muted">Alumnos a cargo: </small>${Math.floor(Math.random() * 99) + 100}
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="card-body p-2">
                                            <div class="d-flex justify-content-between align-items-center">
                                                <div class="d-flex">
                                                    <h4 id="teacher-price" class="mb-0">${profesor.precioHora}</h4><h5 class="mb-0">US$</h5>
                                                </div>
                                                <div class="d-inline-flex justify-content-center align-items-center">
                                                    <i class="fas fa-star fa-sm px-2 text-warning"></i><h6 id="teacher-rate" class="mb-0">${profesor.calificacion}</h6>
                                                </div>
                                            </div>
                                            <p class="card-text"><small class="text-muted">/ Mes</small></p>
                                            <div id="card-buttons" class="d-flex flex-column justify-content-center align-items-center">
                                                <button class="btn btn-info btn-sm mb-2 matricularme" data-toggle="modal" data-target="#mostrarModal" onclick="matricular(${profesor.precioHora})">Elegir profesor</button>
                                                <button class="btn btn-outline-info btn-sm mb-2" data-toggle="modal" data-target="#contactarProfesor">Quiero contactarme</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>`
                )
            )

            $(function () {
                $('[data-toggle="tooltip"]').tooltip()
            })

            $(function () {
                $('[data-toggle="popover"]').popover({
                    trigger: 'hover'
                })
            })

            $('.teacher-name').on('click', function(event){
                const nombreProfesor = $(this).text()
                $('#opiniones-nombre').text('Opiniones sobre ' + nombreProfesor)
                $('#cardTestimonios').show()

                $.ajax({
                    url: "data/testimonios.json",
                    dataType: "json",
                    success: function(data){
                        const testimony1 = Math.floor(Math.random()*data.length)
                        const testimony2 = Math.floor(Math.random()*data.length)
                        const testimony3 = Math.floor(Math.random()*data.length)
                        const testimony4 = Math.floor(Math.random()*data.length)
                        const testimony5 = Math.floor(Math.random()*data.length)
                        const testimony6 = Math.floor(Math.random()*data.length)
            
                        $('#op-nombre1').text(data[testimony1].nombre + ' - ' + data[testimony1].edad + ' años')
                        $('#op-nombre2').text(data[testimony2].nombre + ' - ' + data[testimony2].edad + ' años')
                        $('#op-nombre3').text(data[testimony3].nombre + ' - ' + data[testimony3].edad + ' años')
                        $('#op-nombre4').text(data[testimony4].nombre + ' - ' + data[testimony4].edad + ' años')
                        $('#op-nombre5').text(data[testimony5].nombre + ' - ' + data[testimony5].edad + ' años')
                        $('#op-nombre6').text(data[testimony6].nombre + ' - ' + data[testimony6].edad + ' años')

                        $('#op-date1').text(data[testimony1].fecha)
                        $('#op-date2').text(data[testimony2].fecha)
                        $('#op-date3').text(data[testimony3].fecha)
                        $('#op-date4').text(data[testimony4].fecha)
                        $('#op-date5').text(data[testimony5].fecha)
                        $('#op-date6').text(data[testimony6].fecha)

                        $('#op-coment1').text(data[testimony1].comentario)
                        $('#op-coment2').text(data[testimony2].comentario)
                        $('#op-coment3').text(data[testimony3].comentario)
                        $('#op-coment4').text(data[testimony4].comentario)
                        $('#op-coment5').text(data[testimony5].comentario)
                        $('#op-coment6').text(data[testimony6].comentario)
                    }
                });

                if(this.hash != ""){
                    event.preventDefault();
                    const hash = this.hash;
            
                    $('html, body').animate({
                        scrollTop: $(hash).offset().top
                    }, 800, function(){
                        window.location.hash = hash;
                    })
                }
            })
        }
    });
})

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

$(function () {
    $('.carousel').carousel({
        interval: 5000
    })
})

$('#estudiantes-online').text('+ ' + (Math.floor(Math.random()*25000) + 8000))

function matricular(precio){
    $('#precioTotal').html(precio)
}

function cambiarPrecio(horas){
    precioActual = parseFloat($('#precioTotal').text())

    $('#cantHoras').html(horas)
    $('#precioTotal').html((precioActual * horas).toFixed(1))
}