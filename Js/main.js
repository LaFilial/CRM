const menuCuenta = document.querySelector(`.navbar-miCuenta`);
const fotoMenu = document.querySelector(`.fotoIconoCuenta`);
const desktopMenu = document.querySelector(`.desktop-menu`);

const OptionProyect = document.querySelector(`.icono-option`);
const ProyectMenu = document.querySelector(`.Proyect-menu`);

const IconoMenuMobil = document.querySelector(`.IconoMenuMobil`);
const desktopMobil = document.querySelector(`.desktop-mobil`);

const NotificacionesIconoMenu = document.querySelector(`.NotificacionesIcono`);
const ContentNotificaciones = document.querySelector(`.mis-notificaciones`);

//Contenedor de Notificaciones
const contentNotification = document.querySelector(`.mis-notificaciones-content`);

// Fecha
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
const dias_semana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

const fecha = new Date();
const hoy = (dias_semana[fecha.getDay()] + ', ' + fecha.getDate() + ' de ' + meses[fecha.getMonth()]);

const FechaHoyProyectos = document.querySelector(`.FechaHoyProyectos`);
FechaHoyProyectos.innerText = hoy;

menuCuenta.addEventListener(`click`, toggleDesktopMenu);
fotoMenu.addEventListener(`click`, toggleDesktopMenu);
IconoMenuMobil.addEventListener(`click`, toggleDesktopMobil);
NotificacionesIconoMenu.addEventListener(`click`, toggleNotificacionesIconoMenu);
OptionProyect.addEventListener(`click`, toggleProyectMenu);




//Cerramos notificaciones  si menu de mi cuenta  esta abierto

function toggleDesktopMenu() {
    const IsdesktopMobilClosed = desktopMobil.classList.contains(`inactive`);
    const IsContentNotificacionesClosed = ContentNotificaciones.classList.contains(`inactive`);
    const IsProyectMenuClosed = ProyectMenu.classList.contains(`inactive`);

    if (!IsContentNotificacionesClosed){
        ContentNotificaciones.classList.add(`inactive`); 
    }

    if (!IsdesktopMobilClosed){
        desktopMobil.classList.add(`inactive`); 
    }

    if (!IsProyectMenuClosed){
        ProyectMenu.classList.add(`inactive`);
    } 

   

    desktopMenu.classList.toggle(`inactive`);  
}


//Cerramos el menu de mi cuenta si notificaciones esta abierto

function toggleNotificacionesIconoMenu() {
    const IsdesktopMenuClosed = desktopMenu.classList.contains(`inactive`);
    const IsdesktopMobilClosed = desktopMobil.classList.contains(`inactive`);
    const IsProyectMenuClosed = ProyectMenu.classList.contains(`inactive`);

    if (!IsdesktopMenuClosed){

        desktopMenu.classList.add(`inactive`); 
    }

    if (!IsdesktopMobilClosed){

        desktopMobil.classList.add(`inactive`); 
    }

    if (!IsProyectMenuClosed){
        ProyectMenu.classList.add(`inactive`);
    }  

    ContentNotificaciones.classList.toggle(`inactive`); 
}

// Abrimos y cerramos menu mobil lateral

function toggleDesktopMobil() {
    const IsdesktopMenuClosed = desktopMenu.classList.contains(`inactive`);
    const IsContentNotificacionesClosed = ContentNotificaciones.classList.contains(`inactive`);
    const IsProyectMenuClosed = ProyectMenu.classList.contains(`inactive`);

    if (!IsdesktopMenuClosed){

        desktopMenu.classList.add(`inactive`); 
    }

    if (!IsContentNotificacionesClosed){
        ContentNotificaciones.classList.add(`inactive`); 
    }

    if (!IsProyectMenuClosed){
        ProyectMenu.classList.add(`inactive`);
    } 

    desktopMobil.classList.toggle(`inactive`);  
}

function toggleProyectMenu() {
    const IsdesktopMenuClosed = desktopMenu.classList.contains(`inactive`);
    const IsContentNotificacionesClosed = ContentNotificaciones.classList.contains(`inactive`);

    if (!IsdesktopMenuClosed){

        desktopMenu.classList.add(`inactive`); 
    }

    if (!IsContentNotificacionesClosed){
        ContentNotificaciones.classList.add(`inactive`); 
    }

    
    ProyectMenu.classList.toggle(`inactive`);  
}





//Notificaciones

const notificationList = [];

notificationList.push({

    perfilPhoto: `./Media/Johnny-Paz_Instructor.jpg`,
    NameUser: `Johnny Paz`,
    Mensage: `te ha agregado al proyecto`,
    nameProyect: `Pagina Tecnoplay`,
    UrlProyect: `/`,

});

notificationList.push({

    perfilPhoto: `./Media/Julie_Desarrolladora.jpg`,
    NameUser: `Julie Roa`,
    Mensage: `te ha agregado al proyecto`,
    nameProyect: `Tienda Virtual Licores JR`,
    UrlProyect: `/`,

});

notificationList.push({

    perfilPhoto: `./Media/Johana_Trafficker.jpg`,
    NameUser: `Johana Pena`,
    Mensage: `te ha agregado al proyecto`,
    nameProyect: `Landinpage Akuasafe`,
    UrlProyect: `/`,

});

notificationList.push({

    perfilPhoto: `./Media/Valentina_Programadora.jpg`,
    NameUser: `Valentina Loaiza`,
    Mensage: `te ha agregado al proyecto`,
    nameProyect: `Tienda Virtual Mejores Sobrecolchones`,
    UrlProyect: `/`,

});

//Capturamos la cantidad de notificaciones
const NumeroNotification = notificationList.length;

//Agregamos las cantidades a la campanita
const CantidadNotificaciones = document.querySelector(`.CantidadNotificaciones`);
CantidadNotificaciones.innerText = NumeroNotification;



/*

<div class="card-notificaciones">
        <figure>
            <img src="./Media/Johnny-Paz_Instructor.jpg" alt="Foto Perfil">
        </figure>
        <p>
            <span class="Text-Resaltado">Johana</span>
            <span> te ha agregado a un proyecto </span>
            <span class="Text-Resaltado">Nombre Proyecto</span>
        </p>
        <p>
            <a href="/">Ver</a>
        </p>                     
</div>

*/

function MostrarNotificaciones(Not){

    for (notification of Not) {

        //Creamos el div contenedor de la notificacion
       const notificationCard = document.createElement(`div`);
       notificationCard.classList.add(`card-notificaciones`);
    
       //Creamos el figure que contiene la imagen
       const figureCard = document.createElement(`figure`);
    
        //Creamos la imagen
       const PhotoCard = document.createElement(`img`);
       PhotoCard.setAttribute(`src`, notification.perfilPhoto);
    
       //Agregamos la imagen al figure
       figureCard.appendChild(PhotoCard);
    
       //Creamos el parrafo de la info de la notificacion
       const InfoCard = document.createElement(`p`);
    
        // Creamos los span de la info
       const NamePerfilCard = document.createElement(`span`);
       NamePerfilCard.classList.add(`Text-Resaltado`);
       NamePerfilCard.innerText = notification.NameUser + ` `;
    
       const MensageNotification = document.createElement(`span`);
       MensageNotification.innerText = notification.Mensage + ` `;
    
       const TitleProyect = document.createElement(`span`);
       TitleProyect.classList.add(`Text-Resaltado`);
       TitleProyect.innerText = notification.nameProyect;
    
        //Agreamos los span al parrafo de info
        InfoCard.appendChild(NamePerfilCard);
        InfoCard.appendChild(MensageNotification);
        InfoCard.appendChild(TitleProyect);
       
        //Creamos el parrafo donde se puede ver el proyecto
       const SeeMoreNotification = document.createElement(`p`);
    
       //Creamos el enlace para ver el proyecto
       const VerNotification = document.createElement(`a`);
       VerNotification.innerText = `Ver`;
       VerNotification.setAttribute(`href`, notification.UrlProyect);
    
        //Agreamos ese enlace al parrafo
       SeeMoreNotification.appendChild(VerNotification);
    
        //Agregamos los elementos al div contenedor de las notificaciones
       notificationCard.appendChild(figureCard);
       notificationCard.appendChild(InfoCard);
       notificationCard.appendChild(SeeMoreNotification);
    
       //Agregamos todo al contenedor de las notificaciones
       contentNotification.appendChild(notificationCard);
    }
}

MostrarNotificaciones(notificationList);

//Feche Agregada a las natificaciones

const FechaHoy = document.querySelector(`.FechaHoy`);
FechaHoy.innerText = hoy;




