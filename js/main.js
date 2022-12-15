let boton_abrir = document.querySelector('.menu_boton');
let menu = document.querySelector('.menu');
let fondo = document.querySelector('.bg_black');
let boton_cerar = document.querySelector('.menu_boton_cerrar')

boton_abrir.addEventListener('click', () => {
    menu.style.right = '0px';
    fondo.style.display = 'block';
    boton_cerar.style.display = 'block';
})


boton_cerar.addEventListener('click', () => {
    menu.style.right = '-250px';
    fondo.style.display = 'none';
    boton_cerar.style.display = 'none';
})