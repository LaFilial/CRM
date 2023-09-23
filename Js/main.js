const menuCuenta = document.querySelector(`.navbar-miCuenta`);
const fotoMenu = document.querySelector(`.fotoIconoCuenta`);
const desktopMenu = document.querySelector(`.desktop-menu`);

const IconoMenuMobil = document.querySelector(`.IconoMenuMobil`);
const desktopMobil = document.querySelector(`.desktop-mobil`);

const NotificacionesIconoMenu = document.querySelector(`.NotificacionesIcono`);
const ContentNotificaciones = document.querySelector(`.mis-notificaciones`);



menuCuenta.addEventListener(`click`, toggleDesktopMenu);
fotoMenu.addEventListener(`click`, toggleDesktopMenu);
IconoMenuMobil.addEventListener(`click`, toggleDesktopMobil);
NotificacionesIconoMenu.addEventListener(`click`, toggleNotificacionesIconoMenu);


function toggleDesktopMenu() {
    desktopMenu.classList.toggle(`inactive`);  
}

function toggleDesktopMobil() {
    desktopMobil.classList.toggle(`inactive`);  
}

function toggleNotificacionesIconoMenu() {
    ContentNotificaciones.classList.toggle(`inactive`); 
}